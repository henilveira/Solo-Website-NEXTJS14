'use client'

import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

type CompanyData = {
    id?: string;
    nome: string;
    cnpj: string;
    endereco: string;
    automacoes: string[];
};

interface CompanyContextType {
    registrarEmpresas: (companyData: CompanyData) => Promise<void>;
    listarEmpresas: () => Promise<void>;
    companies: CompanyData[];
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const useCompany = () => {
    const companyContext = useContext(CompanyContext);
    if (!companyContext) {
        throw new Error("useCompany precisa ser utilizado dentro de um CompanyProvider");
    }
    return companyContext;
}

interface CompanyContextProps {
    children: ReactNode;
}

export const CompanyProvider = ({ children }: CompanyContextProps) => {
    const [companies, setCompanies] = useState<CompanyData[]>([]);

    const registrarEmpresas = async (companyData: CompanyData): Promise<void> => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/empresas/create-empresa/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(companyData),
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error('Resposta do servidor:', errorData);
                throw new Error('Erro ao cadastrar empresa');
            }
        } catch (error) {
            console.error('Erro ao cadastrar empresa:', error);
        }
    };

    const listarEmpresas = async (): Promise<void> => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/empresas/list-empresas/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                });
            if (!response.ok) {
                throw new Error('Erro ao buscar empresas');
            }
            const data = await response.json();
            setCompanies(data);
        } catch (error) {
            console.error('Erro ao buscar empresas:', error);
        }
    };

    useEffect(() => {
        listarEmpresas();
    }, []);

    return (
        <CompanyContext.Provider value={{ registrarEmpresas, companies, listarEmpresas }}>
            {children}
        </CompanyContext.Provider>
    );
};
