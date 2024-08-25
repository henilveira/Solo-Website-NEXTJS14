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
import { Loader2 } from "lucide-react";

export const SettingsComponent = () => {
  const [novoEmail, setNovoEmail] = useState<string>('');
  const { userEmail, userName, changeUsername, updateProfilePicture, deleteProfilePicture, requestEmailChange, resetPasswordRequest } = useAuth();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [loadingUsername, setLoadingUsername] = useState<boolean>(false);
  const [loadingEmail, setLoadingEmail] = useState<boolean>(false);
  const [loadingPassword, setLoadingPassword] = useState<boolean>(false);
  const [loadingUpload, setLoadingUpload] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Aciona o clique no input de arquivo
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setLoadingUpload(true);
      setFile(selectedFile); // Atualiza o estado do arquivo selecionado
      console.log('Arquivo selecionado:', selectedFile);

      try {
        await updateProfilePicture(selectedFile);
        toast({
          title: 'Sua foto foi atualizada com sucesso!',
          description: `Caso ela não apareça, tente atualizar a página.`,
          variant: "default",
        });
      } catch (error) {
        toast({
          title: 'Houve um erro ao atualizar sua foto de perfil.',
          description: `Verifique o tipo de arquivo que você enviou ou tente outra imagem.`,
          variant: "destructive",
        });
      } finally {
        setLoadingUpload(false);
      }
    }
  };

  const handleDeleteProfilePicture = async () => {
    try {
      await deleteProfilePicture();
      toast({
        title: 'Sua foto foi deletada com sucesso!',
        description: `Caso ela ainda apareça, tente atualizar a página.`,
        variant: "default",
      });
    } catch (error) {
      console.log(`Houve algum erro ao remover sua foto de perfil ${error}`);
    }
  };

  const handleChangeUsername = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingUsername(true);

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
    } finally {
      setLoadingUsername(false);
    }
  };

  const handleRequestEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingEmail(true);

    const formData = new FormData(e.currentTarget);
    const email_antigo = formData.get("emailAtual")?.toString() || '';
    const email_novo = formData.get("emailNovo")?.toString() || '';
    setNovoEmail(email_novo);

    try {
      await requestEmailChange(email_antigo, email_novo);
      toast({
        title: 'Um email de confirmação foi enviado para você!',
        description: `Entre no link encaminhado para o email: ${novoEmail}`,
        variant: "default",
      });
    } catch (error) {
      toast({
        title: 'Ocorreu um erro ao alterar seu email.',
        description: `Verifique se o email atual corresponde ao seu email.`,
        variant: "destructive",
      });
    } finally {
      setLoadingEmail(false);
    }
  };

  const handlePasswordEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingPassword(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString() || '';

    try {
      await resetPasswordRequest(email);
      toast({
        title: 'Verifique sua caixa de email!',
        description: 'Um link para redefinir sua senha foi enviado. Verifique também a pasta de spam.',
        variant: 'default',
      });
    } catch (error) {
      setError('Erro ao enviar o e-mail de redefinição de senha.');
      setInputError(true);
      if (formRef.current) {
        formRef.current.classList.add('shake');
        setTimeout(() => formRef.current?.classList.remove('shake'), 500);
      }
    } finally {
      setLoadingPassword(false);
    }
  };

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
              <ProfileAvatar className="h-20 w-20" />
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Button variant="outline" onClick={handleButtonClick}>
                    {loadingUpload ? (
                      <span className='flex space-x-2 items-center'>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                      </span>
                    ) : (
                      'Fazer upload'
                    )}
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
            <form onSubmit={handleChangeUsername} className="space-y-4">
              <div className="space-y-2">
                <div className="flex flex-col ">
                  <Label className="text-lg" htmlFor="username">Nome</Label>
                  <span className="text-muted-foreground text-sm">Insira o nome que deseja, e será atualizado no mesmo momento.</span>
                </div>
                <Input id="nome" name="nome" required placeholder={userName ?? ''} />
              </div>
              <Button variant='outline' type="submit" disabled={loadingUsername}>
                {loadingUsername ? (
                  <span className='flex space-x-2 items-center'>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Redefinindo...
                  </span>
                ) : (
                  'Redefinir nome'
                )}
              </Button>
            </form>
            <hr />
            <form onSubmit={handleRequestEmail}>
              <div className="space-y-4">
                <div className="flex flex-col ">
                  <Label className="text-lg" htmlFor="emailAtual">E-mail atual</Label>
                  <span className="text-muted-foreground text-sm">Insira seu email e um link será enviado para redefinir seu email.</span>
                </div>
                <Input id="emailAtual" name="emailAtual" type='email' required placeholder={userEmail ?? ''} />
                <div className="space-y-2">
                  <Label className="text-lg" htmlFor="emailNovo">E-mail novo</Label>
                  <Input id="emailNovo" name="emailNovo" type='email' required placeholder='novoemail@exemplo.com' />
                </div>
                <div className="space-y-2 space-x-4">
                  <Button variant='outline' type="submit" disabled={loadingEmail}>
                    {loadingEmail ? (
                      <span className='flex space-x-2 items-center'>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando e-mail...
                      </span>
                    ) : (
                      'Redefinir e-mail'
                    )}
                  </Button>
                </div>
              </div>
            </form>
            <hr />
            <form ref={formRef} onSubmit={handlePasswordEmailSubmit}>
              <div className="space-y-4">
                <div className="flex flex-col ">
                  <Label className="text-lg" htmlFor="email">E-mail</Label>
                  <span className="text-muted-foreground text-sm">Informe seu e-mail para que um link de redefinição de senha seja enviado.</span>
                </div>
                <Input id="email" name="email" required type='email' placeholder={userEmail ?? ''} />
                <Button type="submit" variant="outline" disabled={loadingPassword}>
                  {loadingPassword ? (
                    <span className='flex space-x-2 items-center'>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando e-mail...
                    </span>
                  ) : (
                    'Redefinir senha'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
