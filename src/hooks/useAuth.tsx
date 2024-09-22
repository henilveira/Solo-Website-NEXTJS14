import useSWR from 'swr';

// Função para buscar dados da API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useUser = () => {
  const { data, error } = useSWR('http://127.0.0.1:8000/api/accounts/token/get-user-session/', fetcher); // Ajuste o endpoint conforme necessário

  return {
    userEmail: data?.email,
    userName: data?.name,
    isAdminSolo: data?.isAdminSolo,
    isAdminEmpresa: data?.isAdminEmpresa,
    userPicture: data?.picture,
    isAuthenticated: !!data, // Autenticado se houver dados
    isLoading: !error && !data, // Está carregando se não houver erro nem dados
    isLoggedOut: error, // Considera deslogado se houver erro
  };
};
