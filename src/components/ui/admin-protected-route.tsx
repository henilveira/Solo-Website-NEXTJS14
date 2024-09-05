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

const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { checkAuth, isAdminEmpresa, isAdminSolo } = useAuth(); // Verifica autenticação e status de admin
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyAdminAuth = async () => {
      try {
        const isAuthenticated = await checkAuth();
        console.log(`Admin empresa: ${isAdminEmpresa}`)
        console.log(`Admin empresa: ${isAdminSolo}`)
        
        if (!isAuthenticated) {
          // Redireciona para login se não estiver autenticado
          if (!isRedirecting) {
            setIsRedirecting(true);
            router.replace('/login');
          }
        } else if (!isAdminEmpresa) {
          // Redireciona para acesso negado se não for admin
          if (!isRedirecting) {
            setIsRedirecting(true);
            router.replace('/acesso-negado');
          }
        } else {
          // Usuário autenticado e tem permissão, não redirecionar
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        if (!isRedirecting) {
          setIsRedirecting(true);
          router.replace('/login');
        }
      }
    };

    verifyAdminAuth();
  }, [checkAuth, isAdminEmpresa, isAdminSolo, router, isRedirecting]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;
