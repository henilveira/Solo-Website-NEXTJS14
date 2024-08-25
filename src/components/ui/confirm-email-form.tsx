// confirm-email/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/components/ui/AuthProvider';
import { useEffect, useState, Suspense } from 'react';
import Logo from './logo';

const ConfirmEmailContent = () => {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const { confirmEmailChange } = useAuth();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        const verifyEmailChange = async () => {
            if (token) {
                try {
                    await confirmEmailChange(token);
                    setSuccess('Email confirmado com sucesso!');
                    setError(null);
                } catch (error) {
                    setError('Token inválido ou expirado. Tente novamente.');
                    setSuccess(null);
                }
            } else {
                setError('Nenhum token encontrado.');
            }
        };

        verifyEmailChange();
    }, [token, confirmEmailChange]);

    return (
        <div className='h-full flex flex-col justify-center items-center align-center '>
            <Logo />
            {success && <h1 className='text-3xl font-bold text-green-500'>Email confirmado!</h1>}
            {success && <p className='text-green-500'>Seu email foi alterado! Você agora pode fechar essa página.</p>}
            {error && <h1 className='text-3xl font-bold text-red-500'>Ocorreu um erro inesperado!</h1>}
            {error && <p className='text-red-500'>{error}</p>}
        </div>
    );
};

const ConfirmEmail = () => (
    <main className='h-screen w-screen'>
        <Suspense fallback={<div>Carregando...</div>}>
            <ConfirmEmailContent />
        </Suspense>
    </main>
);

export default ConfirmEmail;
