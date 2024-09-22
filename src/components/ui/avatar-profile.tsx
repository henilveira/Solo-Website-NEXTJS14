// 'use client'
// import { useAuth } from "./AuthProvider";
// import { AvatarImage, Avatar, AvatarFallback } from "./avatar";

// interface ProfileAvatarProps {
//   className?: string;
//   src?: string;
// }

// const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className, src }) => {
//     const { userPicture, userName } = useAuth();

//     const getInitial = (name: string | undefined) => {
//         if (name) {
//           const [firstName] = name.split(' ');
//           return firstName.charAt(0).toUpperCase();
//         }
//         return 'U'; // Retorna 'U' como fallback se o nome não estiver disponível
//     };

//     // Use a prop 'src' se fornecida, caso contrário, use 'userPicture' do useAuth
//     const avatarSrc = src || userPicture || '';

//     return (
//         <Avatar className={className}>
//             <AvatarImage src={avatarSrc} alt="Avatar" />
//             <AvatarFallback>{getInitial(userName)}</AvatarFallback>
//         </Avatar>
//     );
// }

// export default ProfileAvatar;
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from 'lucide-react';

export interface ProfileAvatarProps {
  className?: string;
  src?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className, src }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt="Profile Picture" />
      <AvatarFallback>
        <User className="h-6 w-6" />
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;