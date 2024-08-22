'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';

interface AuthContextType {
  userEmail: string | null;
  userName: string | null;
  login: (email: string, password: string) => Promise<void>;
  changeUsername: (name: string) => Promise<void>;
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
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  const refreshAccessToken = async (): Promise<boolean> => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/accounts/token/refresh/', {
        withCredentials: true,
      });

      if (response.status === 200) {
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


const fetchUserSession = async (): Promise<{ Email: string; Nome: string } | null> => {
    try {
        const response = await fetch('/api/get-user-session/', {
            method: 'GET',
            credentials: 'include', // Necessário para enviar cookies com `access_token`
        });

        if (response.ok) {
            // Sessão válida, dados do usuário disponíveis
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            // Se o status for 401 (não autorizado)
            if (response.status === 401) {
                console.log('Usuário não autenticado');
            } else {
                console.log('Erro ao verificar a sessão:', response.statusText);
            }
            return null;
        }
    } catch (error) {
        const fetchError = error as FetchError;
        if (fetchError.response && fetchError.response.status === 401) {
            console.log('Usuário não autenticado');
        } else {
            console.log('Erro ao verificar a sessão:', fetchError.message);
        }
        return null;
    }
};
  

  const checkAuth = async (): Promise<boolean> => {
    const userSession = await fetchUserSession();

    if (userSession) {
      setUserEmail(userSession.Email || null);
      setUserName(userSession.Nome || null);
      return true;
    } else {
      setUserEmail(null);
      setUserName(null);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/token/', {
        email,
        password,
      }, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setUserEmail(response.data.email);
        setUserName(response.data.nome);
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
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/update-user-name/', {
        nome: name,
      }, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setUserName(response.data.nome);
      } else {
        throw new Error(`Erro redefinir nome do usuário: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao redefinir nome do usuário:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/token/logout/', {}, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setUserEmail(null);
        setUserName(null);
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
