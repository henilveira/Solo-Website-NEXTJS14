'use client';

import React, { useState } from 'react';
import { useCompany } from './CompanyProvider';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose
} from './dialog'; // Use os componentes de dialog do Shadcn
import { Input } from './input';
import { Button } from './button';
import { Loader2 } from 'lucide-react';
import { Label } from './label';
import { toast } from './use-toast';


const RegistrarUsuario = () => {
  const { createUser } = useCompany();
  const [loading, setLoading] = useState(false);


  const handleAddCompany = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget)
    const nome = formData.get('nome')?.toString() || ''
    const email = formData.get('email')?.toString() || ''

    try {
        await createUser(email, nome);
        toast({
            title: 'Sucesso',
            description: `A empresa foi adicionada com sucesso!`,
            variant: 'default',
        });
    } catch (error: any) {
        // Mostrar o erro específico no toast
        toast({
            title: 'Erro',
            description: error.message || 'Erro ao cadastrar empresa. Tente novamente.',
            variant: 'destructive', // Exibir toast com estilo de erro
        });
    } finally {
        setLoading(false);
    }
};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="solo" className="text-white">
          Adicionar Usuário
        </Button>
      </DialogTrigger>
      <DialogContent className=''>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Cadastrar usuário</DialogTitle>
          <DialogDescription>Insira os campos para cadastrar um novo usuário na sua empresa.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddCompany} className='space-y-2'>
          <Input
            type="text"
            name="nome"
            placeholder="Nome do usuário"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email do usuário"
            required
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline'>Cancelar</Button>
            </DialogClose>
            <Button type="submit" variant='solo' disabled={loading}>
              {loading ? (
                <span className='flex space-x-2 items-center'>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Cadastrando...
                </span>
              ) : (
                'Cadastrar'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrarUsuario;
