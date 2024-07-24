// avatar-session.tsx
interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
  
  interface Session {
    user?: User;
    expires?: string;
  }
  
  interface ProfileSessionProps {
    session: Session;
  }
  
  export default function ProfileSession({ session }: ProfileSessionProps) {
    return (
      <div className="items-start ml-2 mt-0 flex flex-col text-left">
        <h4 className="font-medium leading-none">{session.user?.name}</h4>
        <p className="text-sm text-muted-foreground">{session.user?.email}</p>
      </div>
    );
  }
  