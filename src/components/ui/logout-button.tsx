// logout-button.tsx
'use client';
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useAuth } from "./AuthProvider";
// import {logout} from '@/components/ui/AuthProvider'

export default function LogoutButton() {
  const {logout} = useAuth()

  const handleLogout = () => {
    logout()
  }
  return (
    <Button className="w-full" variant='solo' onClick={handleLogout}>
      Sair
    </Button>
  );
}
