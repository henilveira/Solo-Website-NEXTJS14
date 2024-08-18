'use client';
import { useAuth } from '@/components/ui/AuthProvider'; // Ajuste o caminho conforme necessário
import { useEffect, useState } from 'react';

const SomeComponent = () => {
  const { token, userEmail } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      console.log('Token disponível:', token);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      {token ? (
        <div>
          <p>Autenticado</p>
          <p>Email: {userEmail}</p>
        </div>
      ) : (
        <p>Não autenticado</p>
      )}
    </div>
  );
};

export default SomeComponent;
