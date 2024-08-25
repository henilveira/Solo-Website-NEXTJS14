'use client';
import {
  Settings, Home
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Gauge, Shield, LogOut } from 'lucide-react';
import { useAuth } from '@/components/ui/AuthProvider'; // Ajuste o caminho conforme necessário
import Link from 'next/link';
import ProfileAvatar from './avatar-profile';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Profile() {
  const { userEmail, userName, logout } = useAuth(); // Obtenha o e-mail e nome do contexto de autenticação
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <ProfileAvatar className="cursor-pointer" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent 
            className="min-w-[20rem] max-w-[24rem] absolute right-0 mt-7"
            side="right" 
            align="center"
            forceMount
          >
            <div className="p-3 space-x-3 flex justify-start items-center">
              <ProfileAvatar className="flex justify-center items-center align-center" />
              <div className='flex flex-col justify-center align-center'>
                <span>Olá, <span className='font-semibold'>{userName || 'Usuário'}</span></span>
                <span className='text-muted-foreground'>{userEmail || 'Usuário'}</span>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <div className="flex justify-between p-2">
                <div className="flex flex-col">
                  <span className="text-base">{userName || 'Usuário'}</span>
                  <span className="text-sm text-muted-foreground">Solo Solutions</span>
                </div>
                <div className="items-center flex">
                  <Badge className="h-6">Administrador</Badge>
                </div>
              </div>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
              <Link href='/' className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Página inicial</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <Link href='/admin/empresas' className="flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Admin</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href='/dashboard/usuarios' className="flex items-center">
                  <Gauge className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href='/dashboard/configuracoes' className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configurações</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
}
