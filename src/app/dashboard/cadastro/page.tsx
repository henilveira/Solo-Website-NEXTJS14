import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Imagem from '@/components/ui/image-header';
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
            <h1 className="text-3xl font-bold">Administrador</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Cadastre a empresa inserindo seus dados aqui.
            </p>
          </div>
          <form className="space-y-4">

            <Input className="h-12" placeholder="Insira o nome da empresa" id="empresa" required type="name" />
            <Input className="h-12" placeholder="Insira o CNPJ da empresa" id="cpnj" required type="cpnj" />
            <Input className="h-12" placeholder="Insira o endereço da empresa" id="endereco" required type="street" />
            <Input className="h-12" placeholder="Insira o e-mail da empresa" id="email" required type="email" />
            <div className="flex flex-col space-y-4 ">
                <Button className="w-full text-white" type="submit" variant="solo">
                  Criar
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
