'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LogoutButton from '@/components/ui/logout-button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useAuth, AuthProvider } from '@/components/ui/AuthProvider'; // Ajuste o caminho conforme necessário
import { Badge } from "@/components/ui/badge"

export default function Profile() {
  const { userEmail } = useAuth(); // Obtenha o e-mail do contexto de autenticação

  return (
    <AuthProvider>
    <Popover>
      <PopoverTrigger asChild className=''>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" />
          <AvatarFallback>HA</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-4 w-80 mr-6 mt-1 bg-neutral-900 text-white shadow-xl">
        <div className="grid gap-4 p-2">
          <div className="space-x-3 flex justify-start items-center">
            <Avatar className="flex justify-center items-center align-center">
              <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" />
              <AvatarFallback>HA</AvatarFallback>
            </Avatar>
            <div className='flex flex-col justify-center align-center '>
              <span>Olá, <span className='font-semibold'>Henrique</span> </span>
              <span className='text-muted-foreground'>{userEmail || 'Usuário'}</span> 
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <span className='text-base'>Henrique Silveira</span>
              <span className='text-sm text-muted-foreground'>Solo Solutions</span>
            </div>
            <div className='flex items-center'>
              <Badge className='h-6'>Administrador</Badge>
            </div>
          </div>
          <LogoutButton />
        </div>
      </PopoverContent>
    </Popover>
    </AuthProvider>
  );
}
