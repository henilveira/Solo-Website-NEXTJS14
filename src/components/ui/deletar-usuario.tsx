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

const DeletarUsuario = () => {
  const { deletarEmpresa, listarEmpresas } = useCompany();
  const [loading, setLoading] = useState(false);

  const handleDeleteCompany = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const nomeEmpresa = formData.get("nome")?.toString() || '';

    try {
      await deletarEmpresa(nomeEmpresa);
      toast({
        title: 'Você excluiu uma empresa!',
        description: `A empresa ${nomeEmpresa} foi deletada com sucesso!`,
        variant: "default",
      });
      await listarEmpresas()
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="text-white">
          Excluir usuário
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-2xl'>Excluir empresa</DialogTitle>
          <DialogDescription>
            Esta é uma ação irreversível, por segurança digite o nome do usuário que deseja excluir.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDeleteCompany}>
          <div className="items-center space-y-4">
            <Input
              id="nome"
              name='nome'
              className="col-span-3 w-full"
              placeholder='Digite o nome da empresa'
              required
            />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline' type="button">Cancelar</Button>
            </DialogClose>
            <Button variant='destructive' type="submit" disabled={loading}>
              {loading ? <span className='flex items-center gap-1'><Loader2 className="animate-spin h-4 w-4" />Excluindo...</span> : 'Excluir'}
            </Button>
          </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeletarUsuario;
