'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { AuthProvider } from '@/components/ui/AuthProvider'
import { FormEvent } from 'react'
import ConfirmEmail from '@/components/ui/confirm-email'

export default function Page() {
    return(
        <AuthProvider>
            <ConfirmEmail />
        </AuthProvider>
    );
}