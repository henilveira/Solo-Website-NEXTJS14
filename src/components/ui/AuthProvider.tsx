'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  userEmail: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
  refreshAccessToken: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth precisa ser utilizado dentro de um AuthProvider');
  }
  return authContext;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  const refreshAccessToken = async (): Promise<boolean> => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/api/token/refresh/', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        return true;
      } else {
        router.push('/login');
        return false;
      }
    } catch (error) {
      console.error('Erro ao atualizar o token de acesso:', error);
      router.push('/login');
      return false;
    }
  };

  const checkAuth = async (): Promise<boolean> => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/api/token/get-user-session/', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setUserEmail(data.Email || null);
        return true;
      } else {
        const updated = await refreshAccessToken();
        if (updated) {
          return await checkAuth();
        } else {
          setUserEmail(null);
          return false;
        }
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setUserEmail(null);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (!response.ok) throw new Error(`Erro ao buscar o token: ${response.status}`);

      const data = await response.json();
      setUserEmail(data.email);
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/api/token/logout/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Log para verificar o status da resposta
      console.log('Status da resposta do logout:', response.status);
      console.log('Resposta do logout:', await response.text());
  
      if (!response.ok) {
        throw new Error('Erro na resposta da solicitação de logout');
      }
  
      setUserEmail(null);
      router.push('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };
  
  

  return (
    <AuthContext.Provider value={{ userEmail, login, logout, checkAuth, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
