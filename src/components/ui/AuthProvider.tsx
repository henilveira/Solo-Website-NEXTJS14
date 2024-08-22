'use client';

import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  userEmail: string | null;
  userName: string | null;
  login: (email: string, password: string) => Promise<void>;
  changeUsername: (name: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => boolean;
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
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    if (storedEmail && storedName) {
      setUserEmail(storedEmail);
      setUserName(storedName);
    }
  }, []);

  const refreshAccessToken = async (): Promise<boolean> => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/refresh/', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
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

  const checkAuth = (): boolean => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    return !!storedEmail && !!storedName;
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserEmail(data.email);
        setUserName(data.nome);
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userName', data.nome);
      } else {
        throw new Error(`Erro ao buscar o token: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
      throw error;
    }
  };

  const changeUsername = async (name: string) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/update-user-name/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ nome: name }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserName(data.nome);
        localStorage.setItem('userName', data.nome);
      } else {
        throw new Error(`Erro ao redefinir nome do usuário: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao redefinir nome do usuário:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/logout/', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setUserEmail(null);
        setUserName(null);
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        router.push('/login');
      } else {
        throw new Error('Erro na resposta da solicitação de logout');
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ userEmail, userName, login, logout, checkAuth, refreshAccessToken, changeUsername }}>
      {children}
    </AuthContext.Provider>
  );
};
