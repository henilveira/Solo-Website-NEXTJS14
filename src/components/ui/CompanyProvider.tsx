"use client";

import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

type UserData = {
    id?: string;
    email: string;
    nome: string;
    empresa: string;
    date_joined: string | Date | number;
    profile_pictrure: string;
    // Outros campos de usuários, se necessário
};

type CompanyData = {
    id?: string;
    nome: string;
    cnpj: string;
    endereco: string;
    created_at?: string | Date | number;
    updated_at?: string | Date | number;
    automacoes: string[];
};

interface CompanyContextType {
    registrarEmpresas: (companyData: CompanyData) => Promise<void>;
    listarEmpresas: (page?: number) => Promise<boolean>;
    listarUsuarios: (page?: number) => Promise<boolean>;
    createUser: (email: string, nome?: string) => Promise<void>;
    users: UserData[]; // Adicionar o estado dos usuários aqui
    companies: CompanyData[];
    currentPage: number;
    totalPages: number;
    deletarEmpresa: (nomeEmpresa: string) => Promise<void>;
    setPage: (page?: number) => void;
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
    const [users, setUsers] = useState<UserData[]>([]); // Adicionar estado para os usuários
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
                const errorData = await response.json();
                let errorMessages: string[] = [];
    
                if (response.status === 400) {
                    if (errorData.email) {
                        errorMessages.push(errorData.email[0]);
                    }
                    if (errorData.nome) {
                        errorMessages.push(errorData.nome[0]);
                    }
                    if (errorData.cnpj) {
                        errorMessages.push(errorData.cnpj[0]);
                    }
                }
    
                if (errorMessages.length > 0) {
                    throw new Error(errorMessages.join(' | ')); // Concatenar mensagens de erro
                } else {
                    throw new Error('Erro ao cadastrar empresa.');
                }
            }
    
            // Se chegou aqui, a empresa foi cadastrada com sucesso
            await listarEmpresas(); // Opcional: atualizar a lista de empresas após cadastro
        } catch (error: any) {
            console.error('Erro ao cadastrar empresa:', error.message);
            throw error; // Relança o erro para que o componente que chamou trate do feedback
        }
    };
    

    const deletarEmpresa = async (nomeEmpresa: string): Promise<void> => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/empresas/delete-by-name/?nome=${nomeEmpresa}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error("Erro ao deletar empresa");
            }
        } catch (error) {
            console.log('Erro ao deletar empresa: ', error);
        }
    };

    const listarEmpresas = async (page?: number): Promise<boolean> => {
        const pageNumber = page ?? currentPage; // Usar a página atual se `page` não for fornecido
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/empresas/list-empresas/?page=${pageNumber}`, {
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
            return true
        } catch (error) {
            console.error('Erro ao buscar empresas:', error);
            return false
        }   
    };

    const listarUsuarios = async (page?: number): Promise<boolean> => {
        const pageNumber = page ?? currentPage;
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/accounts/get-users-empresa/?page=${pageNumber}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários');
            }
            const data = await response.json();
            setUsers(data.results.users); // Atualizar o estado dos usuários
            setTotalPages(Math.ceil(data.count / 8)); // Atualizar a paginação
            return true;
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return false;
        }
    };

    const createUser = async (email: string, nome?: string) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/accounts/create-user/',  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, nome }),
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Erro ao cadastrar usuário')
            }
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
        }
    }

    const setPage = (page?: number) => {
        if (page !== undefined) {
            setCurrentPage(page);
            listarEmpresas(page);
            listarUsuarios(page); // Atualizar também os usuários ao mudar de página
        }
    };

    useEffect(() => {
        // listarEmpresas();
        listarUsuarios();
    }, [currentPage]);

    return (
        <CompanyContext.Provider value={{ users, registrarEmpresas, listarUsuarios, companies, deletarEmpresa, createUser, listarEmpresas, currentPage, totalPages, setPage }}>
            {children}
        </CompanyContext.Provider>
    );
};
