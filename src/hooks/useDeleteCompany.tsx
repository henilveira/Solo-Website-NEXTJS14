import { useState } from 'react';

export function useDeleteCompany() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteCompany = async (nomeEmpresa: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('jwt_token'); // Ajuste conforme necessário
      const response = await fetch(`http://127.0.0.1:8000/api/empresas/delete-by-name/?nome=${nomeEmpresa}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar empresa');
      }

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteCompany, isLoading, error };
}