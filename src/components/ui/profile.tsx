'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LogoutButton from '@/components/ui/logout-button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useAuth } from '@/components/ui/AuthProvider'; // Ajuste o caminho conforme necessário


export default function Profile() {
  const { userEmail } = useAuth(); // Obtenha o e-mail do contexto de autenticação

  return (
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
          
          <span>Olá, {userEmail || 'Usuário'}</span> {/* Exibe o e-mail ou uma mensagem padrão */}
          <LogoutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}
