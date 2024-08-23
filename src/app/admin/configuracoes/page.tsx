import Link from "next/link";
import { Menu, Package, Search, Users, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import Profile from "@/components/ui/profile";
import { AuthProvider, useAuth } from "@/components/ui/AuthProvider";
import Sidebar from "@/components/ui/asidebar-admin";
import { SettingsComponent } from "@/components/ui/settings-component";
import ProtectedRoute from "@/components/ui/protected-route";
import { ToggleMenuAdmin } from "@/components/ui/toggle-dashboard-menu-admin";
import { ScrollArea } from "@/components/ui/scroll-area";  // Importando ScrollArea do ShadCN UI
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] overflow-hidden">
          <Sidebar />
          <div className="flex flex-col w-full h-screen overflow-hidden">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <ToggleMenuAdmin />
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
