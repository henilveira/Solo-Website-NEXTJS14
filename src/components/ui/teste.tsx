'use client'
import  ProtectedRoute from '@/components/ui/protected-route'
import {AuthProvider, useAuth} from '@/components/ui/AuthProvider'

const Teste = () => {
    const { userEmail } = useAuth(); // Obtenha o e-mail do contexto de autenticação

    return (
        <main>
            <h1>Sessão privada</h1>
            <span>Olá, <span className='font-semibold'>{userEmail || 'Usuário'}</span></span>
        </main>


    );
}

export default Teste;