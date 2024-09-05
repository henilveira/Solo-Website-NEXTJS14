import Link from "next/link";
import { Menu, Package, Search, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import Profile from "@/components/ui/profile";
import { AuthProvider } from "@/components/ui/AuthProvider";
import Sidebar from "@/components/ui/asidebar";
import { ToggleMenu } from "@/components/ui/toggle-menu";
import Tables from "@/components/ui/users-table";
import { CompanyProvider } from "@/components/ui/CompanyProvider";
import DeletarUsuario from "@/components/ui/deletar-usuario";
import RegistrarUsuario from "@/components/ui/registrar-usuario";
import ProtectedRoute from "@/components/ui/admin-protected-route";
import AdminProtectedRoute from "@/components/ui/admin-protected-route";

export default function Dashboard() {
  const companyMenuItems = [
    { label: "Usuários", href: "/dashboard/usuarios", Icon: Users },
    { label: "Automações", href: "/dashboard/automacoes", Icon: Package },
    { label: "Configurações", href: "/dashboard/configuracoes", Icon: Settings },
  ];
  return (
    <AuthProvider>
      <AdminProtectedRoute>
        <CompanyProvider>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <div className="flex flex-col w-full">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <ToggleMenu items={companyMenuItems}/>
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
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-semibold md:text-4xl">Usuários</h1>
                  <div className="space-x-2">
                    <DeletarUsuario />
                    <RegistrarUsuario />
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                  <Tables />
                </div>
              </main>
          </div>
        </div>
        </CompanyProvider>
      </AdminProtectedRoute>
    </AuthProvider>
  );
}
