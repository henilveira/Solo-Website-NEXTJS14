'use client'

import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button";

export default function FormularioContato() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast()

    async function handleSubmit(event: any) {
        event.preventDefault();
        setIsSubmitting(true);

        const data = {
            empresa: String(event.target.empresa.value),
            nome: String(event.target.nome.value),
            email: String(event.target.email.value),
            mensagem: String(event.target.mensagem.value),
        }

        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast({
                    title: "Sucesso",
                    description: "Mensagem enviada com sucesso!",
                    variant: "default",
                });
            } else {
                toast({
                    title: "Erro",
                    description: "Erro ao enviar mensagem.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Erro",
                description: "Erro ao enviar mensagem.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <Label className="text-white" htmlFor="empresa">Empresa</Label>
                <Input required className="bg-transparent text-white" id="empresa" placeholder="Digite o nome da sua empresa" />
            </div>
            <div className="space-y-2">
                <Label className="text-white" htmlFor="nome">Nome completo</Label>
                <Input required className="bg-transparent text-white" id="nome" placeholder="Digite seu nome completo" />
            </div>
            <div className="space-y-2">
                <Label className="text-white" htmlFor="email">Email</Label>
                <Input required className="bg-transparent text-gray-200" id="email" type="email" placeholder="Digite seu email" />
            </div>
            <div className="space-y-2">
                <Label className="text-white" htmlFor="mensagem">Mensagem</Label>
                <Textarea required id="mensagem" placeholder="Digite sua mensagem" className="bg-transparent min-h-[100px] text-white" />
            </div>
            <Button
                variant="solo"
                type="submit"
                className="text-white w-full"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Enviando' : 'Enviar'}
            </Button>
        </form>
    );
}
