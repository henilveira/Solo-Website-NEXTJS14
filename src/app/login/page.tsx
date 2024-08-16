import Imagem from '@/components/ui/image-header';

import LoginForm from '@/components/ui/login-form'
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen min-w-screen dark:bg-neutral-900">
      <div className="hidden md:block w-2/3 min-h-screen relative overflow-hidden">
        <Imagem
          src="/gradiente.svg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen">
        <div className="max-w-sm space-y-4">
          <div className="space-y-2 text-left">
            <Link href="/">
              <Imagem 
                  src="/solo-logo-white.svg"
                  
                  width={150}
                  className="text-center"
                  />
            </Link>
            <h1 className="text-3xl font-bold">Iniciar sessão</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Insira seu usuário e senha para iniciar sessão.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
