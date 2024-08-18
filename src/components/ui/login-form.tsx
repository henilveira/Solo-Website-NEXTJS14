'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useAuth } from '@/components/ui/AuthProvider'; // Importar useAuth

const LoginForm = () => {
    const { login } = useAuth(); // Desestruturar login
    const [error, setError] = useState<string | null>(null);
    const [inputError, setInputError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);  // Estado de carregamento
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);  // Inicia o carregamento
        const formData = new FormData(e.currentTarget);

        const email = formData.get("email")?.toString() || '';
        const password = formData.get("senha")?.toString() || '';

        try {
            await login(email, password); // Chamar função login do AuthProvider
            window.location.href = "/dashboard/empresas"; // Redirecionar após sucesso
        } catch (error) {
            setError('Credenciais incorretas');
            setInputError(true);
            if (formRef.current) {
                formRef.current.classList.add('shake');
                setTimeout(() => formRef.current?.classList.remove('shake'), 500); // Remove a classe após o efeito
            }
        } finally {
            setLoading(false);  // Termina o carregamento
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const form = e.currentTarget.closest('form');
            if (form) {
                form.requestSubmit();
            }
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
                    onKeyDown={handleKeyDown}
                    disabled={loading}  // Desativa o botão quando carregando
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
