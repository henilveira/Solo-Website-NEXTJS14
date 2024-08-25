import { AuthProvider } from '@/components/ui/AuthProvider'; // Importar useAuth
import ResetPasswordForm from '@/components/ui/reset-password-form'
import ProtectedRoute from '@/components/ui/protected-route';
import Logo from '@/components/ui/logo';


export default function ResetPassword() {
  return (
      <AuthProvider>
          <div className="flex flex-col md:flex-row items-center min-h-screen justify-center min-w-screen dark:bg-neutral-900">
              <div className="max-w-sm space-y-4">
                <div className="space-y-2 text-left">
                <Logo />
                  <h1 className="text-3xl font-bold">Redefinir senha</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Insira seu email e um link de redefinição será enviado.
                  </p>
                </div>
                <ResetPasswordForm />
            </div>
          </div>
    </AuthProvider>
  );
}
