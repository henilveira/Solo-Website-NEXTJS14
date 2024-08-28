'use client'

import React, { useState } from 'react';
import { useCompany } from './CompanyProvider';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from './dialog'; // Use os componentes de dialog do Shadcn

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
    const { registerCompany } = useCompany();
    
    // Declarando o estado com um tipo explícito
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await registerCompany(companyData); // Adiciona a nova empresa ao contexto
        setCompanyData({
            nome: '',
            email: '',
            cnpj: '',
            endereco: '',
            automacoes: [],
        });
        onClose(); // Fecha o modal após registrar a empresa
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cadastrar Empresa</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        value={companyData.nome}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={companyData.email}
                        onChange={handleChange}
                        placeholder="Email da empresa"
                        required
                    />
                    <input
                        type="text"
                        name="cnpj"
                        value={companyData.cnpj}
                        onChange={handleChange}
                        placeholder="CNPJ"
                        required
                    />
                    <input
                        type="text"
                        name="endereco"
                        value={companyData.endereco}
                        onChange={handleChange}
                        placeholder="Endereço"
                        required
                    />
                    <input
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
                    <button type="submit">Cadastrar</button>
                </form>
                <DialogFooter>
                    <button onClick={onClose}>Fechar</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default RegisterCompanyModal;
