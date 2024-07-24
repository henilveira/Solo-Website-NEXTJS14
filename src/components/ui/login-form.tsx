'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import {signIn} from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function LoginForm() {
    const searchParams = useSearchParams()

    const error = searchParams.get("error")

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get("usuario"),
            password: formData.get("senha"),
        };
        signIn("credentials", {
            ...data,
            callbackUrl:"/dashboard/empresas"
        })
    };

    return (
        <form onSubmit={login} className="space-y-4">
            <Input className="h-12" placeholder="Insira seu usuário" required type="user" name="usuario"/>
            <Input className="h-12" placeholder="Insira sua senha" required type="password" name="senha"/>
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
    );
}