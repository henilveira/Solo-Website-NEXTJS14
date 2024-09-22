import useSWR, { SWRConfiguration } from 'swr';
import { useRouter } from 'next/navigation';

const API_URL = 'http://127.0.0.1:8000/api';

interface ApiError extends Error {
  info?: any;
  status?: number;
}

async function fetcher(url: string) {
  const res = await fetch(url, {
    credentials: 'include',
  });

  if (!res.ok) {
    const error: ApiError = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export function useApiBase<T = any>(
  endpoint: string,
  options: SWRConfiguration = {}
) {
  const router = useRouter();

  const { data, error, mutate } = useSWR<T>(
    `${API_URL}${endpoint}`,
    fetcher,
    {
      ...options,
      onError: async (err: ApiError) => {
        if (err.status === 401) {
          // Try to refresh the token
          const refreshed = await refreshAccessToken();
          if (refreshed) {
            // If refreshed successfully, retry the request
            mutate();
          } else {
            // If refresh failed, redirect to login
            router.push('/login');
          }
        }
      },
    }
  );

  return { data, error, mutate };
}

async function refreshAccessToken(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/accounts/token/refresh/`, {
      method: 'POST',
      credentials: 'include',
    });

    return response.ok;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return false;
  }
}