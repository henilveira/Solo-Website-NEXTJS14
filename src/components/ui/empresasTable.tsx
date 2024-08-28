"use client"

import Image from "next/image"
import { MoreHorizontal, ChevronRight, ChevronLeft, CircleX, Pencil } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useCompany } from "./CompanyProvider"

export default function Tables() {
    const { companies, currentPage, totalPages, setPage, deletarEmpresa } = useCompany();

    function formatId(idStr: string | null | undefined): string {
        if (typeof idStr === 'string' && idStr.length > 5) {
            return idStr.slice(0, 5) + '...';
        }
        // Trata o caso onde idStr é null, undefined ou uma string com 5 caracteres ou menos
        return idStr ?? '';
    }
    
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setPage(currentPage + 1);
        }
    };

    const handleDeleteCompany = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const nomeEmpresa = formData.get("nome")?.toString() || ''

      try {
        await deletarEmpresa(nomeEmpresa)
        
      }
    }

    return (
        <Card className="w-full h-full">
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-zinc-950">
                            <TableHead>ID</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead className="hidden md:table-cell">CNPJ</TableHead>
                            <TableHead className="hidden md:table-cell">Endereço</TableHead>
                            <TableHead className="hidden md:table-cell">Automações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.isArray(companies) && companies.map((company) => (
                            <TableRow key={company.id}> 
                                <TableCell className="font-medium">{formatId(company.id)}</TableCell>
                                <TableCell>{company.nome}</TableCell>
                                <TableCell className="hidden md:table-cell">{company.cnpj}</TableCell>
                                <TableCell className="hidden md:table-cell">{company.endereco}</TableCell>
                                <TableCell className="hidden md:table-cell">{company.automacoes.join(', ')}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                            <DropdownMenuItem>
                                              <Pencil className="w-4 h-4 mr-2" />
                                               Editar
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                              <CircleX className="w-4 h-4 mr-2" />
                                               Excluir
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button
                    variant='outline'
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="p-2"
                >
                    <ChevronLeft className="w-5 h-5"/>
                </Button>
                <span className="px-4">{currentPage} de {totalPages}</span>
                <Button
                    variant='outline'
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="p-2"
                >
                    <ChevronRight className="w-5 h-5"/>
                </Button>
            </CardFooter>
        </Card>
    );
}
