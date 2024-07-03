import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from ""
import Imagem from '@/components/ui/image-header';

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen min-w-screen">
      <div className="hidden md:block w-2/3 min-h-screen relative overflow-hidden">
        <Imagem
          src="/Gradient.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen">
        <div className="max-w-sm space-y-4">
          <div className="space-y-2 text-left">
            <Imagem 
                src="/solo-logo-black.png"
                width={150}
                className="text-center"
                />
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Insira seu e-mail para iniciar seu cadastro.
            </p>
          </div>
          <form className="space-y-4" action={async (formData) => {
                "use server"
                await signIn("resend", formData)
            }}>
            <Input className="h-12" placeholder="Insira seu e-mail" required type="email" />
            <Button className="w-full" type="submit">
              Enviar link mágico
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
