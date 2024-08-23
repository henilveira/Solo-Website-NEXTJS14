'use client';

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Gauge, Shield } from 'lucide-react';
import { useAuth } from '@/components/ui/AuthProvider'; // Ajuste o caminho conforme necessário
import Link from 'next/link';
import { Button } from './button';
import ProfileAvatar from './avatar-profile';
import LogoutButton from '@/components/ui/logout-button';

export default function Profile() {
  const { userEmail, userName, userPicture } = useAuth(); // Obtenha o e-mail e nome do contexto de autenticação

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <ProfileAvatar className='cursor-pointer' />
        </div>
      </PopoverTrigger>
      <PopoverContent className='p-4 w-80 mr-6 mt-1 dark:bg-neutral-900 bg-neutral-50 text-dark dark:text-white shadow-xl'>
        <div className="grid gap-4 p-2">
          <div className="space-x-3 flex justify-start items-center">
            <ProfileAvatar className="flex justify-center items-center align-center" />
            <div className='flex flex-col justify-center align-center'>
              <span>Olá, <span className='font-semibold'>{userName || 'Usuário'}</span></span>
              <span className='text-muted-foreground'>{userEmail || 'Usuário'}</span>
            </div>
          </div>
          <hr />
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <span className='text-base'>{userName || 'Usuário'}</span>
              <span className='text-sm text-muted-foreground'>Solo Solutions</span>
            </div>
            <div className='flex items-center'>
              <Badge className='h-6 text-white bg-neutral-900 dark:text-black dark:bg-neutral-100'>Administrador</Badge>
            </div>
          </div>
          <hr />
          <div className='flex flex-row space-x-2 w-full'>
            <Link href='/admin/empresas' className='w-full flex items-center space-x-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition'>
              <Button className='w-full gap-2'>
                <Shield className='w-5 h-5' />
                Admin
              </Button>
            </Link>
          </div>
          <div className='flex flex-row space-x-2 w-full'>
            <Link href='/dashboard/usuarios' className='w-full flex items-center space-x-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition'>
              <Button variant='solo' className='w-full gap-2 text-white'>
                <Gauge className='w-5 h-5' />
                Dashboard
              </Button>
            </Link>
          </div>
          <LogoutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}
