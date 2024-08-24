'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import { useAuth } from '@/components/ui/AuthProvider'; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';
import { useToast } from "@/components/ui/use-toast";

const LoginForm = () => {
    const { userName } = useAuth();
    const { toast } = useToast();
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [inputError, setInputError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false); // Estado para controle de visibilidade da senha
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
                title: `Bom ter você de volta!`,
                description: "Você foi autenticado com sucesso!",
                variant: "default",
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

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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
            <div className="relative">
                <Input 
                    className={`h-12 ${inputError ? 'border-red-500 text-red-500' : ''}`} 
                    placeholder="Insira sua senha" 
                    required 
                    type={passwordVisible ? "text" : "password"} // Alterna entre texto e senha
                    name="senha"
                />
                <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                    {passwordVisible ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                </button>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox  id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal">Lembrar de mim</Label>
                </div>
                <span className='underline-offset-4'>
                    <Link href='/esqueceu-a-senha'>
                        <span className="text-blue-600 font-semibold underline text-sm mt-2">Esqueceu sua senha?</span>
                    </Link>
                </span>
            </div>
            <hr />
            <div className="flex flex-col space-y-4">
                <Button 
                    className="w-full text-white" 
                    type="submit" 
                    variant="solo"
                    disabled={loading}
                >
                    {loading ? <span className='flex space-x-2'><Loader2 className="mr-2 h-4 w-4 animate-spin" />Entrando...</span> : 'Entrar'}  
                </Button>
                <span className="text-sm underline-offset-4">
                    Não possui uma conta?
                    <Link href='/'>
                        <span className="text-blue-600 font-semibold hover:underline px-1 underline">
                            Entre em contato.
                        </span>
                    </Link>
                </span>
            </div>
        </form>
    );
}

export default LoginForm;
