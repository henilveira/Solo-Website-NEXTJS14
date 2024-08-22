'use client';
import { useAuth } from '@/components/ui/AuthProvider';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { checkAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = () => {
      const isAuthenticated = checkAuth();

      if (!isAuthenticated) {
        router.replace('/login');
      } else {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, [checkAuth, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
