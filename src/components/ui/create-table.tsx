'use client'
import Profile from '@/components/ui/profile'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import Linha from "@/components/ui/row-admin";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function CreateTable() {
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
      <main className="flex-grow p-6 bg-neutral-900 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-medium">Empresas</h1>
          <Dialog>
            <div className="flex space-x-4">
              <DialogTrigger asChild>
                <Button variant="solo">Criar empresa</Button>
              </DialogTrigger>
              <Profile />
            </div>
            <DialogContent className="sm:max-w-[425px] bg-neutral-900 border-none p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">Criar empresa</DialogTitle>
                <DialogDescription className="text-neutral-200">
                  Insira os dados requiridos para cadastrar a empresa no sistema da Solo.
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
                      placeholder="Solo Solutions"
                      className="col-span-3 bg-transparent text-neutral-200"
                    />
                  </div>
                  <div className="flex align-center justify-center flex-col items-start gap-2">
                    <Label htmlFor="npj" className="text-right text-neutral-100">
                      CPNJ
                    </Label>
                    <Input
                      id="npj"
                      name="npj"
                      placeholder="XX.XXX.XXX/0001-00"
                      className="col-span-3 bg-transparent text-neutral-200"
                    />
                  </div>
                  <div className="flex align-center justify-center flex-col items-start gap-2">
                    <Label htmlFor="endereco" className="text-right text-neutral-100">
                      Endereço
                    </Label>
                    <Input
                      id="endereco"
                      name="endereco"
                      placeholder="Rua Benjamin Constant 98, América"
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
                      placeholder="contato@solosolutions.com.br"
                      className="col-span-3 bg-transparent text-neutral-200"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="mt-4 w-full text-white" variant='solo'>Criar empresa</Button>
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
              <TableHead className="p-4 text-right  ">Automações</TableHead>
              <TableHead className="p-4" />
            </TableRow>
          </TableHeader>
          <TableBody className="bg-neutral-900 border-y-2">
            {formData.map((data, index) => (
              <Linha 
                key={index} 
                Data={getCurrentDate()} 
                Nome={data.name} 
                Email={data.email} 
                Automacoes="2" 
              />
            ))}
          </TableBody>
        </Table>
      </main>

    );
}