'use client';

import { useAuth } from '@/components/ui/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token !== null) {
      setIsLoading(false);
    } else {
      // router.push('/login');
    }
  }, [token, router]);

  if (isLoading) {
    return <div>Carregando...</div>; // Placeholder para indicar que o carregamento está ocorrendo
  }

  return <>{children}</>;
};

export default ProtectedRoute;
