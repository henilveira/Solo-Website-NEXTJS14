import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from 'lucide-react';

export interface ProfileAvatarProps {
  className?: string;
  src?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className, src }) => {

  const PROFILE_URL = 'http://127.0.0.1:8000/'

  return (
    <Avatar className={className}>
      <AvatarImage src={`${PROFILE_URL}${src}`} alt="Profile Picture" />
      <AvatarFallback>
        <User className="h-6 w-6" />
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;