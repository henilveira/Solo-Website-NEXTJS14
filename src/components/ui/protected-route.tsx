'use client'

import { useAuth } from '@/components/ui/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      // router.push('/login'); // Redireciona para a página de login se não estiver autenticado
    }
  }, [token, router]);

  return token ? <>{children}</> : null;
};

export default ProtectedRoute;
