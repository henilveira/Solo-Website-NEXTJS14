import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Imagem from '@/components/ui/image-header';
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen min-w-screen">
      <div className="hidden md:block w-2/3 min-h-screen relative overflow-hidden">
        <Imagem
          src="/gradiente.svg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen">
        <div className="max-w-sm space-y-4">
          <div className="space-y-2 text-left">
            <Imagem 
                src="/solo-logo-black.svg"
                width={150}
                className="text-center"
                />
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Insira seu usuário e senha para iniciar sessão.
            </p>
          </div>
          <form className="space-y-4">

            <Input className="h-12" placeholder="Insira seu usuário" required type="user" />
            <Input className="h-12" placeholder="Insira sua senha" required type="password" />
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal">Lembrar de mim</Label>
                </div>
                <Link href='/esqueceu-a-senha'>
                    <span className="text-blue-600 font-semibold hover:underline text-sm mt-2">Esqueceu sua senha?</span>
                </Link>
            </div>
            <div className="flex flex-col space-y-4 ">
                <Button className="w-full text-white" type="submit" variant="solo">
                Entrar
                </Button>
                
                <span className="text-sm ">
                    Não possui uma conta?
                    <Link href='/'>
                        <span className="text-blue-600 font-semibold hover:underline px-1">
                            Entre em contato.
                        </span>
                    </Link>
                </span>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
