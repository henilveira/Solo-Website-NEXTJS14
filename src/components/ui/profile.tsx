// profile.tsx
'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LogoutButton from '@/components/ui/logout-button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {AuthProvider} from "@/app/login/auth-context";
import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { useAuth } from '@/app/login/auth-context';


interface TokenPayload {
  email: string;
  // outros campos que você pode querer extrair
}


export default function Profile() {
  const [email, setEmail] = useState<string | null>(null);

  const { user, authTokens } = useAuth();

  if (!authTokens) {
      return <p>Usuário não está logado</p>;
  }

  useEffect(() => {
      // Pega o token de onde ele está armazenado (por exemplo, localStorage)
      const token = localStorage.getItem('token');

      if (token) {
          try {
              // Decodifica o token para extrair o payload
              const decoded = jwtDecode<TokenPayload>(token);
              
              // Seta o email no estado
              setEmail(decoded.email);
          } catch (error) {
              console.error('Erro ao decodificar o token', error);
          }
      }
  }, []);

  return (
    <AuthProvider>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-50 mr-6 mt-1 bg-neutral-900 text-white shadow-xl">
          <div className="grid gap-4 p-2">
            <div className="space-y-2 flex">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" />
                <AvatarFallback>HA</AvatarFallback>
              </Avatar>
            </div>
            
            <span>Olá, {user.email}</span>
            <LogoutButton />
          </div>
        </PopoverContent>
      </Popover>
    </AuthProvider>
  );
}
