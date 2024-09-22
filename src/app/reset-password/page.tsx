import { AuthProvider } from '@/components/ui/AuthProvider'; // Importar useAuth
import ResetPasswordForm from '@/components/ui/reset-password-form'
import Logo from '@/components/ui/logo';


export default function ResetPassword() {
  return (
      <AuthProvider>
          <div className="flex flex-col md:flex-row items-center min-h-screen justify-center min-w-screen dark:bg-zinc-950">
              <div className="max-w-sm space-y-4">
                <div className="space-y-2 text-left flex flex-col items-center">
                  <div className='border p-12 w-[500px] space-y-3 rounded-xl'>
                    <Logo />
                      <h1 className="text-3xl font-bold">Redefinir senha</h1>
                      <p className="text-gray-500 dark:text-gray-400">
                        Insira seu email e um link de redefinição será enviado.
                      </p>
                    <ResetPasswordForm />
                    </div>
                  </div>
            </div>
          </div>
    </AuthProvider>
  );
}
