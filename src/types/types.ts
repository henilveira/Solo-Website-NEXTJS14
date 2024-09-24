import { SWRResponse } from 'swr';

// User related types
export type UserData = {
    id?: string;
    email: string;
    nome: string;
    empresa: string;
    date_joined: string | Date | number;
    profile_picture: string;
    is_admin_empresa: boolean;
    is_solo_admin: boolean;
};

// Company related types
export type CompanyData = {
    id?: string;
    nome: string;
    cnpj: string;
    endereco: string;
    created_at?: string | Date | number;
    updated_at?: string | Date | number;
    automacoes: string[];
};

// API Response types
export interface CompaniesResponse {
    results: {
        empresas: CompanyData[];
    };
    count: number;
}

export interface UsersResponse {
    results: {
        users: UserData[];
    };
    count: number;
}

// Provider Props types
export interface AuthProviderProps {
    children: React.ReactNode;
}

export interface CompanyProviderProps {
    children: React.ReactNode;
}

// Hook return types
export interface UseListCompaniesReturn {
    companies: CompanyData[];
    totalPages: number;
    isLoading: boolean;
    isError: Error | null;
    mutate: () => Promise<any>;
    isValidating: boolean;
}

export interface UseListUsersReturn {
    users: UserData[];
    totalPages: number;
    isLoading: boolean;
    isError: Error | null;
    mutate: () => Promise<any>;
    isValidating: boolean;
}

export interface UseRegisterCompanyReturn {
    registerCompany: (companyData: CompanyData) => Promise<any>;
    isLoading: boolean;
    error: string | null;
}

export interface UseDeleteCompanyReturn {
    deleteCompany: (nomeEmpresa: string) => Promise<boolean>;
    isLoading: boolean;
    error: string | null;
}

export interface UseCreateUserReturn {
    createUser: (email: string, nome?: string) => Promise<any>;
    isLoading: boolean;
    error: string | null;
}

// New types for useApiBase
export interface ApiError extends Error {
    info?: any;
    status?: number;
}

export type UseApiBaseReturn<T> = SWRResponse<T, Error> & {
    isLoading: boolean;
};

// Update existing or add new types as needed
export interface PaginatedResponse<T> {
    results: T[];
    count: number;
}