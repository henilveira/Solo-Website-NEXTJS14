'use client';

import { useAuth } from '@/components/ui/AuthProvider';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="spinner"></div>
    <style jsx>{`
      .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-top: 4px solid #0070f3; /* Cor do spinner */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

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
        setIsLoading(false); // Atualiza o estado para parar a exibição do GIF
      }
    };

    verifyAuth();
  }, [checkAuth, router, isRedirecting]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
