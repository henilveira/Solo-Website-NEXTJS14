import Link from "next/link";
import {  Menu,  Package,  Search,  Users,  Settings,} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import Profile from "@/components/ui/profile";
import { AuthProvider } from "@/components/ui/AuthProvider";
import Sidebar from "@/components/ui/asidebar";
import ProtectedRoute from "@/components/ui/protected-route";

export default function Dashboard() {

  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <div className="flex flex-col w-full">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                    >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                      <img src="/solo-logo-white.svg" width="125" alt="Logo" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                      >
                      <Users className="h-4 w-4" />
                      Empresas
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                      >
                      <Package className="h-4 w-4" />
                      Automações
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                      >
                      <Settings className="h-4 w-4" />
                      Configurações
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
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
                  <Button variant='solo' className="mt-4">Cadastrar usuário</Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}
