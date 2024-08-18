'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
  token: string | null;
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

interface DecodedToken {
  email: string;
  exp: number;
}

const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const now = Date.now() / 1000;
    if (decoded.exp < now) {
      console.error('Token expirado');
      return null;
    }
    return decoded;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return null;
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log('Token armazenado:', storedToken); // Log para verificar o token no localStorage
    if (storedToken) {
      const decoded = decodeToken(storedToken);
      console.log('Token decodificado:', decoded); // Log para verificar a decodificação do token
      if (decoded) {
        setToken(storedToken);
        setUserEmail(decoded.email);
      } else {
        localStorage.removeItem('token'); // Remove token inválido
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://3.19.188.117:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error(`Erro ao buscar o token: ${response.status}`);

      const data = await response.json();
      console.log('Token recebido após login:', data.access); // Log do token recebido
      setToken(data.access);
      localStorage.setItem('token', data.access);

      const decoded = decodeToken(data.access);
      setUserEmail(decoded?.email || null);
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUserEmail(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
