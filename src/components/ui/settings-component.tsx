// settings.tsx

'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useAuth } from "./AuthProvider";
import { useToast } from "@/components/ui/use-toast";
import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import ProfileAvatar from "./avatar-profile";

export const SettingsComponent = () => {
  const { userEmail, userName, changeUsername, updateProfilePicture, deleteProfilePicture } = useAuth();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Aciona o clique no input de arquivo
    }
  };

  
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
          setFile(selectedFile); // Atualiza o estado do arquivo selecionado
          console.log('Arquivo selecionado:', selectedFile);
          
          try {
              // Faz o upload do arquivo imediatamente
              await updateProfilePicture(selectedFile);
              toast({
                  title: 'Sua foto foi atualizada com sucesso!',
                  description: `Caso ela não apareça, tente atualizar a página.`,
                  variant: "default",
              })
            } catch (error) {
                toast({
                    title: 'Houve um erro ao atualizar sua foto de perfil.',
                    description: `Verifique o tipo de arquivo que você enviou ou tente outra imagem.`,
                    variant: "destructive",
                })
            }
        }
    };
    const handleDeleteProfilePicture = async () => {
        try {
            await deleteProfilePicture()
            toast({
                title: 'Sua foto foi deletada com sucesso!',
                description: `Caso ela ainda apareça, tente atualizar a página.`,
                variant: "default",
            })
        
        } catch (error) {
            console.log(`Houve algum erro ao remover sua foto de perfil ${error}`)
        }
            
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const nome = formData.get("nome")?.toString() || '';
        
        try {
            await changeUsername(nome);
            toast({
                title: 'Seu nome foi alterado com sucesso!',
                description: `Você alterou seu nome para ${nome}`,
                variant: "default",
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
            <ProfileAvatar className="h-20 w-20"/>
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Button variant="outline" onClick={handleButtonClick}>
                    Fazer upload
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </div>
                <p>{uploadStatus}</p>
              </form>
              <Button onClick={handleDeleteProfilePicture} variant="destructive">Remover foto</Button>
            </div>
          </CardContent>
        </Card>
      </section>
      <section id="account">

          <Card>
            <CardHeader>
              <CardTitle>Conta</CardTitle>
              <CardDescription>Altere as informações da sua conta para sua preferência.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Nome</Label>
                    <Input id="nome" name="nome" placeholder={userName ?? ''} />
                  </div>
                    <Button type="submit" className="bg-green-600 text-white hover:bg-green-500">Atualizar nome</Button>
                </form>
              <hr />
              <div className="space-y-2">
                <Label htmlFor="email">Seu Email</Label>
                <Input id="email" placeholder={userEmail ?? ''} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Novo Email</Label>
                <Input id="email" placeholder='novoemail@exemplo.com' />
              </div>
              <div className="space-y-2 space-x-4">
                <Button type="submit" className="bg-green-600 text-white hover:bg-green-500">Atualizar email</Button>
                <Button variant="outline">Redefinir senha</Button>
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
  );
};
