'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  userEmail: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
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

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://3.19.188.117:8000/api/token/refresh/', {
          method: 'GET',
          credentials: 'include', // Inclui cookies na requisição
        });

        if (response.ok) {
          const data = await response.json();
          setUserEmail(data.email || null);
        } else {
          setUserEmail(null);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setUserEmail(null);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Inclui cookies na requisição
      });

      if (!response.ok) throw new Error(`Erro ao buscar o token: ${response.status}`);

      // Após o login, verifique o status de autenticação
      const data = await response.json();
      setUserEmail(data.email);
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout/', {
        method: 'POST',
        credentials: 'include', // Inclui cookies na requisição
      });
      setUserEmail(null);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
