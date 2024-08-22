'use client'
import { useAuth } from '@/components/ui/AuthProvider';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { fetchUserSession } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
        try {
            const userSession = await fetchUserSession();

            if (!userSession) {
                router.replace('/login');
            } 
        } catch (error) {
            console.error('Erro ao verificar autenticação:', error);
            router.replace('/login');
        } finally {
            setIsLoading(false); // Sempre definimos `isLoading` como `false` ao final
        }
    };

    verifyAuth();
}, [fetchUserSession, router]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
