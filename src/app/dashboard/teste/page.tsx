import  ProtectedRoute from '@/components/ui/protected-route'
import {AuthProvider} from '@/components/ui/AuthProvider'
import UploadProfilePicture from '@/components/ui/upload-profile-picture';

export default function home() {
    return (

                    <UploadProfilePicture />

    );
}