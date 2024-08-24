'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  userEmail: string | null;
  userName: string | null;
  userPicture: string | null;
  login: (email: string, password: string) => Promise<void>;
  changeUsername: (name: string) => Promise<void>;
  updateProfilePicture: (file: File) => Promise<void>;
  logout: () => void;
  deleteProfilePicture: () => void;
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
  const [userPicture, setUserPicture] = useState<string | null>(null);
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
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/get-user-session/', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        const profilePictureUrl = data.profile_picture
          ? `http://127.0.0.1:8000${data.profile_picture}` // Ajuste a URL aqui
          : null;

        setUserEmail(data.email || null);
        setUserName(data.nome || null);
        setUserPicture(profilePictureUrl || null);

        return true;
      } else if (response.status === 401) {
        const updated = await refreshAccessToken();
        if (updated) {
          return await checkAuth();
        } else {
          setUserEmail(null);
          setUserName(null);
          setUserPicture(null);
          return false;
        }
      } else {
        console.error('Erro inesperado ao verificar autenticação:', response.statusText);
        setUserEmail(null);
        setUserName(null);
        setUserPicture(null);
        return false;
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setUserEmail(null);
      setUserName(null);
      setUserPicture(null);
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
            method: 'PATCH',
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

const updateProfilePicture = async (file: File): Promise<void> => {
  const formData = new FormData();
  formData.append('profile_picture', file);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/accounts/update-profile-picture/', {
      method: 'PATCH',
      body: formData,
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      const updatedPictureUrl = data.profile_picture
        ? `http://127.0.0.1:8000${data.profile_picture}` // Ajuste a URL conforme necessário
        : null;
      setUserPicture(updatedPictureUrl); // Atualiza o estado com a nova URL da Image
    } else {
      throw new Error('Erro ao atualizar foto de perfil');
    }
  } catch (error) {
    console.error('Erro ao atualizar foto de perfil:', error);
    throw error;
  }
};
const deleteProfilePicture = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/accounts/delete-profile-picture/', {
      method: 'PATCH',
      credentials: 'include',
    });

    if (response.ok) {
      setUserPicture(null); // Atualiza o estado com a nova URL da Image
    } else {
      throw new Error('Erro ao deletar foto de perfil');
    }
  } catch (error) {
    console.error('Erro ao deletar foto de perfil:', error);
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
    <AuthContext.Provider value={{ userEmail, userName, userPicture, login, logout, checkAuth, refreshAccessToken, updateProfilePicture, changeUsername, deleteProfilePicture }}>
      {children}
    </AuthContext.Provider>
  );
};