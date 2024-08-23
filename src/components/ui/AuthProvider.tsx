'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

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
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/refresh/', {
        method: 'POST',
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

  const checkAuth = async (): Promise<boolean> => {
    try {
      // Faz uma requisição GET para verificar a sessão do usuário
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/get-user-session/', {
        method: 'GET',
        credentials: 'include', // Inclui cookies na requisição
      });
  
      // Verifica se a resposta é bem-sucedida
      if (response.ok) {
        const data = await response.json();
        // Atualiza o estado do usuário com os dados retornados
        setUserEmail(data.Email || null);
        setUserName(data.Nome || null);
        return true;
      } else if (response.status === 401) { // Verifica especificamente se o status é 401
        // Tenta atualizar o token
        const updated = await refreshAccessToken();
        if (updated) {
          // Se o token foi atualizado, repete a verificação da autenticação
          return await checkAuth();
        } else {
          // Se não foi possível atualizar o token, reseta o estado de autenticação
          setUserEmail(null);
          setUserName(null);
          return false;
        }
      } else {
        // Maneja outros possíveis erros de resposta
        console.error('Erro inesperado ao verificar autenticação:', response.statusText);
        setUserEmail(null);
        setUserName(null);
        return false;
      }
    } catch (error) {
      // Lida com erros de rede ou outros problemas na requisição
      console.error('Erro ao verificar autenticação:', error);
      setUserEmail(null);
      setUserName(null);
      return false;
    }
  };
  

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (!response.ok) throw new Error(`Erro ao buscar o token: ${response.status}`);

      const data = await response.json();
      setUserEmail(data.email);
      setUserName(data.nome);
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
      throw error;
    }
  };

  const changeUsername = async (name: string) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/accounts/update-user-name/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: name }), // Enviando como 'nome'
            credentials: 'include',
        });

        if (!response.ok) throw new Error(`Erro redefinir nome do usuário: ${response.status}`);

        const data = await response.json();
        setUserName(data.nome);
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
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Erro na resposta da solicitação de logout');
      }

      setUserEmail(null);
      setUserName(null);
      router.push('/login');
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