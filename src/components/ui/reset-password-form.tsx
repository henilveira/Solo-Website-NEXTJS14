// reset-password/page.tsx
'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useAuth } from '@/components/ui/AuthProvider'; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from 'next/link';
import { useToast } from "@/components/ui/use-toast";

const ResetPasswordContent = () => {
    const { toast } = useToast();
    const { resetPasswordRequest, resetPassword, logout } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [inputError, setInputError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [showResetForm, setShowResetForm] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);
    const searchParams = useSearchParams();
    const token = searchParams.get('token') || '';

    useEffect(() => {
        if (token) {
            setShowResetForm(true);
        }
    }, [token]);

    const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email")?.toString() || '';

        try {
            await resetPasswordRequest(email); 
            toast({
                title: `Verifique sua caixa de email!`,
                description: "Um link para redefinir sua senha foi enviado, verifique o spam!",
                variant: "default",
            });
        } catch (error) {
            setError(String(error));
            setInputError(true);
            if (formRef.current) {
                formRef.current.classList.add('shake');
                setTimeout(() => formRef.current?.classList.remove('shake'), 500);
            }
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        
        const senha_nova = formData.get("senha_nova")?.toString() || '';
        const confirm_senha_nova = formData.get("confirm_senha_nova")?.toString() || '';

        if (senha_nova !== confirm_senha_nova) {
            setError("As novas senhas não coincidem.");
            setLoading(false);
            return;
        }

        try {
            await resetPassword(token, senha_atual, senha_nova, confirm_senha_nova); 
            toast({
                title: `Senha redefinida com sucesso!`,
                description: "Sua senha foi atualizada.",
                variant: "default",
            });
            logout()
        } catch (error) {
            setError(String(error));
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
        <main>
            {showResetForm ? (
                <form onSubmit={handlePasswordSubmit} className="space-y-4" ref={formRef}>
                    <Input
                        className={`h-12 ${inputError ? 'border-red-500 text-red-500' : ''}`} 
                        placeholder="Nova senha" 
                        required 
                        type="password" 
                        name="senha_nova"
                    />
                    <Input
                        className={`h-12 ${inputError ? 'border-red-500 text-red-500' : ''}`} 
                        placeholder="Confirme a nova senha" 
                        required 
                        type="password" 
                        name="confirm_senha_nova"
                    />
                    {error && <p className="text-red-600">{error}</p>}
                    <Button 
                        className="w-full text-white" 
                        type="submit" 
                        variant="solo"
                        disabled={loading}
                    >
                        {loading ? <span className='flex space-x-2 items-center'><Loader2 className="mr-2 h-4 w-4 animate-spin" />Redefinindo...</span> : 'Redefinir Senha'}  
                    </Button>
                </form>
            ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-4" ref={formRef}>
                    <Input 
                        className={`h-12 ${inputError ? 'border-red-500 text-red-500' : ''}`} 
                        placeholder="Insira seu email" 
                        required 
                        type="text" 
                        name="email"
                    />
                    {error && <p className="text-red-600">{error}</p>}
                    <Button 
                        className="w-full text-white" 
                        type="submit" 
                        variant="solo"
                        disabled={loading}
                    >
                        {loading ? <span className='flex space-x-2 items-center'><Loader2 className="mr-2 h-4 w-4 animate-spin" />Enviando...</span> : 'Enviar'}  
                    </Button>
                </form>
            )}
            <div className='my-3'>
                <hr />
            </div>
            <span className="text-sm underline-offset-4">
                Entrou aqui por engano?
                <Link href='/login'>
                    <span className="text-blue-600 font-semibold hover:underline px-1 underline">
                        Inicie sessão.
                    </span>
                </Link>
            </span>
        </main>
    );
};

const ResetPasswordForm = () => (
    <Suspense fallback={<div>Carregando...</div>}>
        <ResetPasswordContent />
    </Suspense>
);

export default ResetPasswordForm;
