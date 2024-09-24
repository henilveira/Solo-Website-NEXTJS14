import useSWR, { SWRConfiguration } from 'swr';
import { useRouter } from 'next/navigation';
import { ApiError } from '@/types/types'; // Importe o tipo ApiError do seu arquivo de tipos

const API_URL = 'http://127.0.0.1:8000/api';

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

  const data = await res.json();
  console.log('Fetch succeeded with data:', data);
  return data;
}

export function useApiBase<T = any>(
  endpoint: string,
  options: SWRConfiguration = {}
) {
  const router = useRouter();

  const { data, error, mutate, isValidating } = useSWR<T>(
    `${API_URL}${endpoint}`,
    fetcher,
    {
      ...options,
      onError: async (err: ApiError) => {
        if (err.status === 401) {
          const refreshed = await refreshAccessToken();
          if (refreshed) {
            mutate();
          } else {
            router.push('/login');
          }
        }
      },
    }
  );

  return { data, error, mutate, isLoading: !error && !data, isValidating };
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