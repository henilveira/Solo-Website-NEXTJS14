import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UsersTable from './users-table'; // Importe o componente UsersTable que criamos anteriormente

export default function UsersPage() {
  return (
    <div className='bg-transparent mt-4'>
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Usuários</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant='solo' size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Adicionar usuário
            </span>
          </Button>
        </div>
      </div>

      <UsersTable />
    </div>
  );
}