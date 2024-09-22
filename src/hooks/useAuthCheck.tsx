import { useApiBase } from './useApiBase';

interface UserSession {
  email: string;
  nome: string;
  is_admin_empresa: boolean;
  is_solo_admin: boolean;
  empresa: string | null;
  profile_picture: string | null;
}

export function useAuthCheck() {
  const { data, error, mutate } = useApiBase<UserSession>('/accounts/token/get-user-session/');

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}