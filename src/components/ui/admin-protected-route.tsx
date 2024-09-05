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
        border-top: 4px solid #0070f3;
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
  const { checkAuth, isAdminEmpresa, isAdminSolo } = useAuth(); 
  const [isLoading, setIsLoading] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    const verifyAdminAuth = async () => {
      const isAuthenticated = await checkAuth();

      if (!isAuthenticated || (!isAdminEmpresa && !isAdminSolo)) {
        router.push('/acesso-negado');
      } else {
        setIsLoading(false); // Desbloqueia a renderização
      }
    };

    verifyAdminAuth();
  }, [isAdminEmpresa, isAdminSolo, checkAuth, router]); // Certifica-se de reexecutar se os estados mudarem

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;
