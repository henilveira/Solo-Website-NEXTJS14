import { useState } from 'react';
import { useApiBase } from './useApiBase';

const API_URL = 'http://127.0.0.1:8000/api';

interface User {
  nome: string;
  // Add other user properties here
}

export function useUsername() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { data: user, mutate } = useApiBase<User>('/accounts/token/get-user-session/');

  const changeUsername = async (name: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/accounts/update-user-name/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: name }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to update username');
      }

      await mutate();
    } catch (err) {
      setError('Failed to update username. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    changeUsername,
    username: user?.nome,
    isLoading,
    error
  };
}