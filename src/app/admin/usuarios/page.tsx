import Link from "next/link";
import {
  Menu,
  Package,
  Search,
  Users,
  Settings,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import Profile from "@/components/ui/profile";
import { AuthProvider } from "@/components/ui/AuthProvider";
import Sidebar from "@/components/ui/asidebar-admin";
import ProtectedRoute from "@/components/ui/protected-route";
import { Toaster } from "@/components/ui/toaster";
import { ToggleMenu } from "@/components/ui/toggle-menu";

export default function Dashboard() {

  const adminMenuItems = [
    { label: "aa", href: "/admin/empresas", Icon: Building2 },
    { label: "Usuários", href: "/admin/usuarios", Icon: Users },
    { label: "Automações", href: "/admin/automacoes", Icon: Package },
    { label: "Configurações", href: "/admin/configuracoes", Icon: Settings },
  ];

  return (
    <AuthProvider>
      <ProtectedRoute>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col w-full">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <ToggleMenu items={adminMenuItems}/>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Procurar por usuários..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                </div>
              </form>
            </div>
            <ThemeSwitcher />
            <Profile />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold md:text-4xl">Usuários</h1>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                  Você não tem usuários ativos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comece a cadastrar novos usuários clicando no botão abaixo
                </p>
                <Button variant='solo' className="mt-4 text-white">Cadastrar usuário</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Toaster />
  </ProtectedRoute>
  </AuthProvider>
  );
}
