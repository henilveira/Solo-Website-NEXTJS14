// logout-button.tsx
'use client';
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <Button className="w-full" variant='solo' onClick={() => signOut()}>
      Sair
    </Button>
  );
}
