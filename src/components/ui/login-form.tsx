'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import { useAuth } from '@/components/ui/AuthProvider'; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';
import { useToast } from "@/components/ui/use-toast"

const LoginForm = () => {
    const { toast } = useToast();
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [inputError, setInputError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter(); 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        const email = formData.get("email")?.toString() || '';
        const password = formData.get("senha")?.toString() || '';

        try {
            await login(email, password); 
            toast({
                title: "Login bem-sucedido",
                description: "Você foi autenticado com sucesso!",
                variant: "default", // use "default", "success", "error", etc. conforme sua configuração
            });
            router.push("/dashboard/usuarios"); 
        } catch (error) {
            setError('Credenciais incorretas');
            setInputError(true);
            if (formRef.current) {
                formRef.current.classList.add('shake');
                setTimeout(() => formRef.current?.classList.remove('shake'), 500);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
            <Input 
                className={`h-12 ${inputError ? 'border-red-500 text-red-500' : ''}`} 
                placeholder="Insira seu email" 
                required 
                type="text" 
                name="email"
            />
            <Input 
                className={`h-12 ${inputError ? 'border-red-500 text-red-500' : ''}`} 
                placeholder="Insira sua senha" 
                required 
                type="password" 
                name="senha"
            />
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
                <Button 
                    className="w-full text-white" 
                    type="submit" 
                    variant="solo"
                    disabled={loading}
                >
                    {loading ? 'Entrando...' : 'Entrar'}  
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
