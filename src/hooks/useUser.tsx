import useSWR from 'swr';

// Função para buscar dados da API
const fetcher = (url: string) => fetch(url, {
  credentials: 'include', // Inclui cookies/credenciais na requisição
}).then((res) => {
  if (!res.ok) {
    // Se o status for 401, lançar um erro para que o SWR o capture
    if (res.status === 401) {
      throw new Error('Unauthorized');
    }
    throw new Error('An error occurred while fetching the data.');
  }
  return res.json();
});

export const useUser = () => {
  const { data, error } = useSWR('http://127.0.0.1:8000/api/accounts/token/get-user-session/', fetcher); // Ajuste o endpoint conforme necessário

  return {
    userEmpresa: data?.user?.empresa || '',
    userEmail: data?.user?.email || '',
    userName: data?.user?.nome || '',
    isAdminSolo: data?.user?.isAdminSolo || false,
    isAdminEmpresa: data?.user?.isAdminEmpresa || false,
    userPicture: data?.user?.picture || '',
    isAuthenticated: !!data && !error, // Autenticado se houver dados e sem erro
    isLoading: !error && !data, // Está carregando se não houver erro nem dados
    isLoggedOut: error?.message === 'Unauthorized', // Considera deslogado se o erro for de autenticação (401)
  };
};
