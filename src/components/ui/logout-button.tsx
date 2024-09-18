// logout-button.tsx
'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { useAuth } from "./AuthProvider";

export default function LogoutButton() {
  const {logout} = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }
  return (
    <Button className="w-full text-white" variant='destructive' onClick={handleLogout}>
      Sair
    </Button>
  );
}
