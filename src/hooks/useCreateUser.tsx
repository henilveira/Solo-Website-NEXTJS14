import { useState } from 'react';

export function useCreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (email: string, nome?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('jwt_token'); // Ajuste conforme necessário
      const response = await fetch('http://127.0.0.1:8000/api/accounts/create-user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ email, nome }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { createUser, isLoading, error };
}