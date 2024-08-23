import Link from "next/link";
import { Menu, Package, Users, Settings, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./logo";

export const ToggleMenu = () => {
    return (
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
                <Logo />
                    <Link
                    href="/dashboard/usuarios"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground  hover:text-primary`}
                    >
                    <Users className="h-4 w-4" />
                    Usuários
                    </Link>
                    <Link
                    href="/dashboard/automacoes"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground  hover:text-primary `}
                    >
                    <Package className="h-4 w-4" />
                    Automações
                    </Link>
                    <Link
                    href="/dashboard/configuracoes"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground  hover:text-primary `}
                    >
                    <Settings className="h-4 w-4" />
                    Configurações
                </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
