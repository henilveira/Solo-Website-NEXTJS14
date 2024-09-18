'use client';

import { useState, useEffect } from 'react'; // Importa useState e useEffect
import Link from 'next/link';
import Image from 'next/image';

import { Building2, Package, Users, Settings } from 'lucide-react';
import Logo from './logo';
import { useAuth } from './AuthProvider';

const Sidebar = () => {
  const [activePath, setActivePath] = useState<string>('/');
  const {isAdminSolo, isAdminEmpresa} = useAuth()

  useEffect(() => {
    // Atualiza o estado com o pathname atual quando o componente é montado
    const handlePathChange = () => {
      setActivePath(window.location.pathname);
    };

    // Define o pathname inicial
    handlePathChange();

    // Adiciona um listener para mudanças de navegação
    window.addEventListener('popstate', handlePathChange);
    window.addEventListener('pushState', handlePathChange);
    window.addEventListener('replaceState', handlePathChange);

    // Limpeza dos event listeners
    return () => {
      window.removeEventListener('popstate', handlePathChange);
      window.removeEventListener('pushState', handlePathChange);
      window.removeEventListener('replaceState', handlePathChange);
    };
  }, []);

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Logo/>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {isAdminSolo && (

              <Link
              href="/dashboard/empresas"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activePath === '/dashboard/empresas' ? 'bg-azulsolo/80 text-primary' : 'text-muted-foreground'}`}
              >
              <Building2 className="h-4 w-4" />
              Empresas
            </Link>
            )}
            {(isAdminEmpresa || isAdminSolo) && (
              <Link
                href="/dashboard/usuarios"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activePath === '/dashboard/usuarios' ? 'bg-azulsolo/80  text-white hover:text-neutral-200 ' : 'text-muted-foreground'}`}
              >
                <Users className="h-4 w-4" />
                Usuários
              </Link>
            )}
            <Link
              href="/dashboard/automacoes"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activePath === '/dashboard/automacoes' ? 'bg-azulsolo/80 text-primary' : 'text-muted-foreground'}`}
            >
              <Package className="h-4 w-4" />
              Automações
            </Link>
            <Link
              href="/dashboard/configuracoes"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activePath === '/dashboard/configuracoes' ? 'bg-azulsolo/80 text-primary' : 'text-muted-foreground'}`}
            >
              <Settings className="h-4 w-4" />
              Configurações
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
