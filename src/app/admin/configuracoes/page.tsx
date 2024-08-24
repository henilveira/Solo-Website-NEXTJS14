import {
  Package,
  Search,
  Users,
  Settings,
  Building2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import Profile from "@/components/ui/profile";
import { AuthProvider } from "@/components/ui/AuthProvider";
import Sidebar from "@/components/ui/asidebar-admin";
import { SettingsComponent } from "@/components/ui/settings-component";
import ProtectedRoute from "@/components/ui/protected-route";
import { ToggleMenu } from "@/components/ui/toggle-menu";
import { ScrollArea } from "@/components/ui/scroll-area";  // Importando ScrollArea do ShadCN UI


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
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] overflow-hidden">
          <Sidebar />
          <div className="flex flex-col w-full h-screen overflow-hidden">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 overflow-hidden">
            <ToggleMenu items={adminMenuItems}/>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Procurar por configurações..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                  </div>
                </form>
              </div>
              <ThemeSwitcher />
              <Profile />
            </header>

            {/* Adicionando ScrollArea na área de configurações */}
            <ScrollArea className="flex-1 h-full rounded-md border">
              <SettingsComponent />
            </ScrollArea>
          </div>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}
