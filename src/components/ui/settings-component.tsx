'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useAuth } from "./AuthProvider";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useToast } from "@/components/ui/use-toast"
import { useState } from 'react';

export const SettingsComponent = () => {
    const { userEmail, userName, changeUsername } = useAuth();
    const { toast } = useToast();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const nome = formData.get("nome")?.toString() || '';
    
        try {
            await changeUsername(nome);
            toast({
                title: 'Seu nome foi alterado com sucesso!',
                description: `Você alterou seu nome para ${nome}`,
                variant: "default", // Alterado para "success" conforme o sucesso da operação
            });
        } catch (error) {
            setError("Ocorreu algum erro ao alterar seu nome de usuário");
        }
    }
    

    return (
        <div className="p-4 space-y-6">
            <section id="profile" className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Foto de perfil</CardTitle>
                        <CardDescription>Atualize sua foto de perfil. Tamanho recomendado de 400x400 pixels.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" alt="Avatar" />
                                <AvatarFallback>HA</AvatarFallback>
                            </Avatar>
                            <Button variant="outline">Fazer upload</Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
            <section id="account">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Conta</CardTitle>
                            <CardDescription>Atualize as informações da sua conta.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">Nome</Label>
                                <Input id="nome" name="nome" placeholder={userName ?? ''} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder={userEmail ?? ''} />
                            </div>
                            <div className="space-y-2 space-x-4">
                                <Button type="submit" className="bg-green-600 text-white hover:bg-green-500">Atualizar dados</Button>
                                <Button variant="outline">Redefinir senha</Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </section>
            <section id="notifications" className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Notificações</CardTitle>
                        <CardDescription>Escolha as notificações que você gostaria de receber</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium">Notificações por Email</p>
                                    <p className="text-sm text-muted-foreground">Receber atualizações importantes por email</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium">Atualizações dentro do site</p>
                                    <p className="text-sm text-muted-foreground">Receba notificações de atualizações enquanto usa o site.</p>
                                </div>
                                <Switch />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}
