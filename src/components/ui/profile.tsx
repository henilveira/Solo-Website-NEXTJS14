// profile.tsx
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LogoutButton from '@/components/ui/logout-button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ProfileSession from "./avatar-session";
import { getSession } from "next-auth/react";

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface Session {
  user?: User;
  expires?: string;
}

export default function Profile() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      setSession(sessionData as Session); // Cast para o tipo Session
    }
    fetchSession();
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" />
          <AvatarFallback>HA</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-4 w-50 mr-6 mt-1 bg-neutral-900 text-white shadow-xl">
        <div className="grid gap-4 p-2">
          <div className="space-y-2 flex">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" />
              <AvatarFallback>HA</AvatarFallback>
            </Avatar>
            {session && <ProfileSession session={session} />}
          </div>
          <LogoutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}
