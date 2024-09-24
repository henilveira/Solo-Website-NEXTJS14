'use client';
import { Settings, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Gauge, Shield, LogOut } from 'lucide-react';
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
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { useLogout } from "@/hooks/useLogout";
import { useUser } from "@/hooks/useUser";

export default function Profile() {
  const { userName, userEmpresa, userEmail, isAdminEmpresa, isAdminSolo, userPicture } = useUser()
  const { user, isLoading, isError } = useAuthCheck();
  const { logout, isLoading: isLoggingOut } = useLogout();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const handleDashboardRedirect = () => {
    if (isAdminSolo) {
      router.push('/dashboard/empresas');
    } else if (isAdminEmpresa) {
      router.push('/dashboard/usuarios');
    } else {
      router.push('/dashboard/automacoes');
    }
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <ProfileAvatar className="cursor-pointer" src={userPicture || undefined} />
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
              <ProfileAvatar className="flex justify-center items-center align-center" src={userPicture || undefined} />
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
                  <span className="text-sm text-muted-foreground">{userEmpresa || 'Convidado'}</span>
                </div>
                <div className="items-center flex">
                  <Badge className="h-6">
                    {isAdminEmpresa || isAdminSolo ? <span>Administrador</span> : <span>Membro</span>}
                  </Badge>
                </div>
              </div>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href='/' className="flex items-center">
                <DropdownMenuItem className="w-full cursor-pointer">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Página inicial</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleDashboardRedirect} className="cursor-pointer w-full">
                <Gauge className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
              <Link href='/dashboard/configuracoes' className="flex items-center">
                <DropdownMenuItem className="cursor-pointer w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configurações</span>
                </DropdownMenuItem>
              </Link>
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