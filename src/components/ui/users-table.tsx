"use client"

import { useState, useEffect } from "react";
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
import { toast } from "./use-toast";

const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-full">
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid #0070f3; /* Cor do spinner */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
  
  export default function Tables() {
    const { users, currentPage, totalPages, setPage } = useCompany();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    function formatId(idStr: string | null | undefined): string {
      return typeof idStr === 'string' && idStr.length > 5 ? idStr.slice(0, 5) + '...' : idStr ?? '';
    }
  
    function formatData(dataStr?: string | number | Date): string {
        if (dataStr === undefined || dataStr === null) {
          return '';
        }
        const dataObj = new Date(dataStr);
        const formatador = new Intl.DateTimeFormat('pt-BR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        });
        return formatador.format(dataObj) ?? '';
      }
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setLoading(true); // Ativar o estado de carregamento
        setPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setLoading(true); // Ativar o estado de carregamento
        setPage(currentPage + 1);
      }
    };
  
    useEffect(() => {
      setLoading(false); // Desativar o estado de carregamento quando os dados são carregados
    }, [users]);


  
    return (
      <Card className="w-full h-full">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <CardContent className="h-full">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-zinc-950">
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead className="hidden md:table-cell">Empresa</TableHead>
                    <TableHead className="hidden md:table-cell">Criado em</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.isArray(users) &&
                    users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{formatId(user.id)}</TableCell>
                        <TableCell>{user.nome}</TableCell>
                        <TableCell className="hidden md:table-cell">{user.empresa}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatData(user.date_joined)}</TableCell>
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
            <CardFooter className="flex justify-between items-center mt-2">
              <Button
                variant="outline"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="p-2"
                >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="px-4">{currentPage} de {totalPages}</span>
              <Button
                variant="outline"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2"
                >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </CardFooter>
        </CardContent>
          </>
        )}
      </Card>
    );
  }