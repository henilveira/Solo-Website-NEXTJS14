'use client'
import { AuthProvider } from '@/components/ui/AuthProvider'
import ConfirmEmail from '@/components/ui/confirm-email-form'

export default function Page() {
    return(
        <AuthProvider>
            <ConfirmEmail />
        </AuthProvider>
    );
}