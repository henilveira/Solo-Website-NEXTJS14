'use client'
import { useAuth } from "./AuthProvider";
import { AvatarImage, Avatar, AvatarFallback } from "./avatar";

interface ProfileAvatarProps {
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className }) => {
    const { userPicture, userName } = useAuth();

    const getInitial = (name: string | undefined) => {
        if (name) {
          const [firstName] = name.split(' ');
          return firstName.charAt(0).toUpperCase();
        }
        return 'U'; // Retorna 'U' como fallback se o nome não estiver disponível
      };

    return (
        <Avatar className={className}>
            <AvatarImage src={userPicture ?? ''} alt="Avatar" />
            <AvatarFallback>{getInitial(userName ?? '')}</AvatarFallback>
        </Avatar>
    );
}

export default ProfileAvatar;
