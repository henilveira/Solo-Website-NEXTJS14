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

type CompanyData = {
  nome: string;
  email: string;
  cnpj: string;
  endereco: string;
  automacoes: string[];
};

const RegistrarCompanyModal = () => {
  const { registrarEmpresas, listarEmpresas } = useCompany();
  const [loading, setLoading] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyData>({
    nome: '',
    email: '',
    cnpj: '',
    endereco: '',
    automacoes: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCompany = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
        await registrarEmpresas(companyData);
        setCompanyData({
            nome: '',
            email: '',
            cnpj: '',
            endereco: '',
            automacoes: [],
        });
        toast({
            title: 'Sucesso',
            description: `A empresa foi adicionada com sucesso!`,
            variant: 'default',
        });
        await listarEmpresas();
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
          Adicionar Empresa
        </Button>
      </DialogTrigger>
      <DialogContent className=''>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Cadastrar Empresa</DialogTitle>
          <DialogDescription>Insira os campos para cadastrar uma nova empresa no sistema.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddCompany} className='space-y-2'>
          <Input
            type="text"
            name="nome"
            value={companyData.nome}
            onChange={handleChange}
            placeholder="Nome da empresa"
            required
          />
          <Input
            type="email"
            name="email"
            value={companyData.email}
            onChange={handleChange}
            placeholder="Email da empresa"
            required
          />
          <Input
            type="text"
            name="cnpj"
            value={companyData.cnpj}
            onChange={handleChange}
            placeholder="CNPJ"
            required
          />
          <Input
            type="text"
            name="endereco"
            value={companyData.endereco}
            onChange={handleChange}
            placeholder="Endereço"
            required
          />
          <Input
            type="text"
            name="automacoes"
            value={companyData.automacoes.join(', ')}
            onChange={(e) =>
              setCompanyData((prevData) => ({
                ...prevData,
                automacoes: e.target.value.split(',').map((item) => item.trim()),
              }))
            }
            placeholder="Automações (separadas por vírgula)"
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

export default RegistrarCompanyModal;
