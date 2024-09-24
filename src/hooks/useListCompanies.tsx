import { useApiBase } from './useApiBase';
import { CompaniesResponse, UseListCompaniesReturn } from '@/types/types';

export function useListCompanies(page: number = 1): UseListCompaniesReturn {
  const { data, error, mutate, isLoading, isValidating } = useApiBase<CompaniesResponse>(
    `/empresas/list-empresas/?page=${page}`
  );

  return {
    companies: data?.results.empresas || [],
    totalPages: data ? Math.ceil(data.count / 8) : 0,
    isLoading,
    isError: error,
    mutate,
    isValidating
  };
}