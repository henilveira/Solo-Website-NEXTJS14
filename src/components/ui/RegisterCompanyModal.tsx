'use client'

import React, { useState } from 'react';
import { useCompany } from './CompanyProvider';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from './dialog'; // Use os componentes de dialog do Shadcn
import { Input } from './input';
import { Button } from './button';
import { Loader2 } from 'lucide-react';

// Definindo um tipo explícito para os dados da empresa
type CompanyData = {
    nome: string;
    email: string;
    cnpj: string;
    endereco: string;
    automacoes: string[];
};

// Definindo tipos para os props do modal
interface RegisterCompanyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function RegisterCompanyModal({ isOpen, onClose }: RegisterCompanyModalProps) {
    const { registrarEmpresas, listarEmpresas } = useCompany();
    
    // Declarando o estado com um tipo explícito
    const [companyData, setCompanyData] = useState<CompanyData>({
        nome: '',
        email: '',
        cnpj: '',
        endereco: '',
        automacoes: [],
    });
    const [loading, setLoading] = useState()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCompanyData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await registrarEmpresas(companyData); // Adiciona a nova empresa ao contexto
        setCompanyData({
            nome: '',
            email: '',
            cnpj: '',
            endereco: '',
            automacoes: [],
        });
        await listarEmpresas()
        onClose(); // Fecha o modal após registrar a empresa
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className=''>
                <DialogHeader>
                    <DialogTitle className='text-2xl'>Cadastrar Empresa</DialogTitle>
                    <DialogDescription>Insira os campos para cadastrar uma nova empresa no sistema.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className='space-y-3'>
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
                    <Button onClick={onClose} variant='destructive'>Cancelar</Button>
                    <Button type="submit" variant='outline'>
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
}

export default RegisterCompanyModal;
