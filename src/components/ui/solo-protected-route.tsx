'use client';

import { useAuth } from '@/components/ui/AuthProvider';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCompany } from './CompanyProvider';

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

const SoloProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { listarEmpresas } = useCompany();  // Verifica autenticação e status de admin
  const { checkAuth } = useAuth();  // Verifica autenticação e status de admin
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifySoloAuth = async () => {
      try {
        const isAuthorized = await listarEmpresas();
        const isAuthenticated = await checkAuth();
        if (!isAuthenticated) {
          if (!isRedirecting) {
            setIsRedirecting(true);
            router.replace('/login');
          }
        }
        if (!isAuthorized) {
          // Redireciona para acesso negado se não for admin
          if (!isRedirecting) {
            setIsRedirecting(true);
            router.replace('/acesso-negado');
          }
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        if (!isRedirecting) {
          setIsRedirecting(true);
          router.replace('/login');
        }
      } finally {
        setIsLoading(false);  // Para de mostrar o loading quando terminar
      }
    };

    verifySoloAuth();
  }, [checkAuth, listarEmpresas, router, isRedirecting]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default SoloProtectedRoute;
