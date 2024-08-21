// protected-route.tsx
'use client';

import { useAuth } from '@/components/ui/AuthProvider';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { checkAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const isAuthenticated = await checkAuth();
        
        if (!isAuthenticated) {
          // Se não estiver autenticado, redireciona para a página de login
          if (!isRedirecting) {
            setIsRedirecting(true);
            router.replace('/login');
          }
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        // Pode ser útil redirecionar para uma página de erro ou login se ocorrer um erro
        if (!isRedirecting) {
          setIsRedirecting(true);
          router.replace('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, [checkAuth, router, isRedirecting]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
