import { useApiBase } from './useApiBase';
import { UsersResponse, UseListUsersReturn } from '@/types/types';

export function useListUsers(page: number = 1): UseListUsersReturn {
  const { data, error, mutate, isLoading, isValidating } = useApiBase<UsersResponse>(
    `/accounts/get-users-empresa/?page=${page}`
  );

  return {
    users: data?.results.users || [],
    totalPages: data ? Math.ceil(data.count / 8) : 0,
    isLoading,
    isError: error,
    mutate,
    isValidating
  };
}