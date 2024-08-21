import  ProtectedRoute from '@/components/ui/protected-route'
import {AuthProvider, useAuth} from '@/components/ui/AuthProvider'
import Teste from '@/components/ui/teste';

export default function home() {

    return (
        <AuthProvider>
            <Teste />
        </AuthProvider>

    );
}