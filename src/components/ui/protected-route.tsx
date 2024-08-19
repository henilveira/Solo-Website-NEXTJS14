'use client';

import { useAuth } from '@/components/ui/AuthProvider';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { userEmail } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://3.19.188.117:8000/api/token/refresh/', {
          method: 'GET',
          credentials: 'include', // Inclui cookies na requisição
        });

        if (response.ok) {
          const data = await response.json();
          if (data.Access_token) {
            setIsLoading(false);
          } else {
            window.location.href = '/login'; // Redireciona para a página de login
          }
        } else {
          window.location.href = '/login'; // Redireciona para a página de login
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        window.location.href = '/login'; // Redireciona para a página de login
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
