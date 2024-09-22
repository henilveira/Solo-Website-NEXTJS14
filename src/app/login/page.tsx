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
          <div className="flex flex-col md:flex-row items-center min-h-screen justify-center min-w-screen dark:bg-zinc-950">
              <div className="max-w-sm space-y-4">
                <div className="space-y-2 text-left items-center flex flex-col">
                  <div className='border p-12 rounded-xl space-y-3 w-[500px]'>
                    <Logo />
                      <h1 className="text-3xl font-bold">Iniciar sessão</h1>
                      <p className="text-gray-500 dark:text-gray-400">
                        Insira seu usuário e senha para iniciar sessão.
                      </p>
                    <LoginForm />
                    </div>
                </div>
            </div>
          </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}
