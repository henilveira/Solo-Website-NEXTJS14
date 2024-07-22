'use client'
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SVGProps } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Linha from "@/components/ui/row-admin";
import Link from 'next/link'

export default function Admin() {
  const [formData, setFormData] = useState<Record<string, string>[]>([]); // Alterado para um array de objetos

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries()) as Record<string, string>;
    setFormData(prevData => [...prevData, values]); // Adiciona os dados ao array existente
  };

  // Função para obter a data atual formatada
  const getCurrentDate = (): string => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-64 bg-neutral-900 text-gray-200 border-r-2 border-neutral-700 p-8">
        <div className="flex items-center space-x-1 mb-6">
          <img src="/solo-logo.svg" width="100" height="30" alt="Solo Logo" />
        </div>
        <div className="border-b-2 mb-6 border-neutral-700"></div>
        <nav className="space-y-4">
        <Link href='/admin/empresas'> 
            <Button className="w-full flex space-x-2 hover:bg-neutral-600 active:bg-azulsolo active:text-white p-3 rounded-lg text-neutral-400">
            <WalletIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Empresas</span>
            </Button>
        </Link>
            <Button className="w-full space-x-2 p-3 text-white" variant='solo'>
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Contas</span>
            </Button>
        </nav>
      </aside>
      <main className="flex-grow p-6 bg-neutral-900 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-medium">Contas</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="solo">Criar usuário</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-neutral-900 border-none p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">Criar usuário</DialogTitle>
                <DialogDescription className="text-neutral-200">
                  Insira os dados requiridos para cadastrar um usuário admin no sistema da Solo.
                </DialogDescription>
              </DialogHeader >
              <form onSubmit={handleFormSubmit}>
                <div className="grid gap-4 py-2">
                  <div className="flex align-center justify-center flex-col items-start gap-2">
                    <Label htmlFor="name" className="text-right text-neutral-100">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Henrique"
                      className="col-span-3 bg-transparent text-neutral-200"
                    />
                  </div>

                  <div className="flex align-center justify-center flex-col items-start gap-2">
                    <Label htmlFor="email" className="text-right text-neutral-100">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="henrique@solosolutions.com.br"
                      className="col-span-3 bg-transparent text-neutral-200"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="mt-4 w-full text-white" variant='solo'>Criar usuário</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Table className="w-full border-separate border-spacing-0 border border-neutral-700 rounded-md overflow-hidden">
          <TableHeader className="bg-neutral-800 text-neutral-300">
            <TableRow className="hover:bg-transparent">
              <TableHead className="p-4  ">Data</TableHead>
              <TableHead className="p-4  ">Nome</TableHead>
              <TableHead className="p-4  ">Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-neutral-900 border-y-2">
            {formData.map((data, index) => (
              <Linha 
                key={index} 
                Data={getCurrentDate()} 
                Nome={data.name} 
                Email={data.email} 
                Automacoes="" 
              />
            ))}
          </TableBody>
        </Table>




      </main>
    </div>
  );
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
