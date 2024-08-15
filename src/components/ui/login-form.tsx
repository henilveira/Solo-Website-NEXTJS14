'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';
import { useState, useContext } from 'react';

const LoginForm = () => {
    const [error, setError] = useState<string | null>(null);

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get("email"), // Atualizado para 'email'
            password: formData.get("senha"),
        };

        try {
            const response = await fetch('http://3.19.188.117:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Enviando os dados corretos
            });

            const result = await response.json();
            
            // Verificando se o token está no formato correto
            if (response.ok) {
                if (result.access) {
                    // Armazenar o token no localStorage
                    localStorage.setItem('token', result.access);
                    console.log('cookie armazenado')
                    
                    // Redirecionar para o dashboard
                    // window.location.href = "/dashboard/";
                } else {
                    setError('O token de acesso não foi encontrado na resposta.');
                }
            } else {
                setError(result.detail || 'Login failed');
            }
        } catch (error) {
            console.error('Erro na solicitação de login', error);
            setError('Ocorreu um erro inesperado.');
        }
        
    }
    return (
        <form onSubmit={login} className="space-y-4">
            <Input className="h-12" placeholder="Insira seu email" required type="text" name="email"/> {/* Atualizado para 'email' */}
            <Input className="h-12" placeholder="Insira sua senha" required type="password" name="senha"/>
            {error && <p className="text-red-600">{error}</p>}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal">Lembrar de mim</Label>
                </div>
                <Link href='/esqueceu-a-senha'>
                    <span className="text-blue-600 font-semibold hover:underline text-sm mt-2">Esqueceu sua senha?</span>
                </Link>
            </div>
            <div className="flex flex-col space-y-4">
                <Button className="w-full text-white" type="submit" variant="solo">
                    Entrar
                </Button>
                
                <span className="text-sm">
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

export default LoginForm;
