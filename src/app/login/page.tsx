import { AuthProvider } from '@/components/ui/AuthProvider'; // Importar useAuth
import LoginForm from '@/components/ui/login-form'
import Link from 'next/link';
import ProtectedRoute from '@/components/ui/protected-route';
import Logo from '@/components/ui/logo';
import Image from 'next/image';


export default function Login() {
  return (
      <AuthProvider>
        <ProtectedRoute> 
          <div className="flex flex-col md:flex-row items-center min-h-screen justify-center min-w-screen dark:bg-neutral-900">
              <div className="max-w-sm space-y-4">
                <div className="space-y-2 text-left">
                <Logo />
                  <h1 className="text-3xl font-bold">Iniciar sessão</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Insira seu usuário e senha para iniciar sessão.
                  </p>
                </div>
                <LoginForm />
            </div>
          </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}
