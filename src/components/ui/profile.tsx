'use client';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
 import {Button} from './button'

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Profile() {
  const { userEmail, userName, logout } = useAuth(); // Obtenha o e-mail e nome do contexto de autenticação
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <ProfileAvatar className='cursor-pointer' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mr-3">
        <div className="p-3 space-x-3 flex justify-start items-center">
            <ProfileAvatar className="flex justify-center items-center align-center" />
            <div className='flex flex-col justify-center align-center'>
              <span>Olá, <span className='font-semibold'>{userName || 'Usuário'}</span></span>
              <span className='text-muted-foreground'>{userEmail || 'Usuário'}</span>
            </div>
        </div>
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
    </DropdownMenu>
    </div>

  );
}
