import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex items-center min-h-screen min-w-screen">
                <div className="w-2/3 min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div> {/* Aplicando a cor de fundo somente a esta div */}
                <div className="w-1/2 flex items-center justify-center min-h-screen">
                    <div className="max-w-sm space-y-4">
                        <div className="space-y-2 text-left">
                            <h1 className="text-3xl font-bold">Login</h1>
                                <p className="text-gray-500 dark:text-gray-400">Insira seu e-mail para iniciar seu cadastro.</p>
                        </div>
                        <form className="space-y-4">
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
