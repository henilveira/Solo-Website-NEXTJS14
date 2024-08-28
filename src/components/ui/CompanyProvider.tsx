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
    listarEmpresas: (page: number) => Promise<void>;
    companies: CompanyData[];
    currentPage: number;
    totalPages: number;
    deletarEmpresa: (nomeEmpresa: string) => Promise<void>
    setPage: (page: number) => void;
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
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

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

    const deletarEmpresa = async(nomeEmpresa: string): Promise<void> => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/empresas/delete-by-name/?nome=${nomeEmpresa}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            if (!response.ok) {
                throw new Error("Erro ao deletar empresa")
            } 
            }catch (error) {
                console.log('Erro ao deletar empresa: ', error)

        }
    }

    const listarEmpresas = async (page = 1): Promise<void> => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/empresas/list-empresas/?page=${page}`, {
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
            setCompanies(data.results.empresas);
            setTotalPages(Math.ceil(data.count / 8));
        } catch (error) {
            console.error('Erro ao buscar empresas:', error);
        }
    };

    const setPage = (page: number) => {
        setCurrentPage(page);
        listarEmpresas(page);
    };

    useEffect(() => {
        listarEmpresas(currentPage);
    }, [currentPage]);

    return (
        <CompanyContext.Provider value={{ registrarEmpresas, companies, deletarEmpresa, listarEmpresas, currentPage, totalPages, setPage }}>
            {children}
        </CompanyContext.Provider>
    );
};
