'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AuthProvider, useAuth } from "./AuthProvider";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const SettingsComponent = () => {
    const { userEmail } = useAuth(); // Pegando o e-mail do contexto de autenticação

    return (
        <AuthProvider>
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
                                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                <AvatarFallback>HA</AvatarFallback>
                            </Avatar>
                            <Button variant="outline">Fazer upload</Button>
                        </div>
                    </CardContent>
                </Card>
                </section>
                <section id="account">
                <Card>
                    <CardHeader>
                    <CardTitle>Conta</CardTitle>
                    <CardDescription>Atualize as informações da sua conta.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Usuário</Label>
                        <Input id="username" defaultValue="johndoe" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue={userEmail ?? ''} disabled />
                    </div>
                    <div className="space-y-2 space-x-4">
                        <Button className="bg-green-600 ">Atualizar dados</Button>
                        <Button variant="outline">Reset Password</Button>
                    </div>
                    </CardContent>
                </Card>
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
                            <p className="text-sm text-muted-foreground">
                            Receber atualizações importantes por email
                            </p>
                        </div>
                        <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium">Atualizações dentro do site</p>
                            <p className="text-sm text-muted-foreground">
                            Receba notificações de atualizações enquanto usa o site.
                            </p>
                        </div>
                        <Switch />
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </section>
            </div>
          </AuthProvider>
    );
}