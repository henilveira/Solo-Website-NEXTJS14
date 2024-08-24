import { ToggleMenu } from "@/components/ui/toggle-menu";
import { Building2, Users, Package, Settings } from "lucide-react";

const adminMenuItems = [
  { label: "aa", href: "/admin/empresas", Icon: Building2 },
  { label: "Usuários", href: "/admin/usuarios", Icon: Users },
  { label: "Automações", href: "/admin/automacoes", Icon: Package },
  { label: "Configurações", href: "/admin/configuracoes", Icon: Settings },
];

export default function AdminPage() {
  return <ToggleMenu items={adminMenuItems} />;
}
