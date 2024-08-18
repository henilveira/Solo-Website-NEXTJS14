import  ProtectedRoute from '@/components/ui/protected-route'
import {AuthProvider} from '@/components/ui/AuthProvider'

export default function home() {
    return (
        <AuthProvider>
            <ProtectedRoute>
                <h1>Sessão privada</h1>
            </ProtectedRoute>
        </AuthProvider>
    );
}