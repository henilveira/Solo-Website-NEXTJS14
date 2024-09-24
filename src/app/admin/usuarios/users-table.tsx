"use client"

import React, { useState } from "react";
import { MoreHorizontal, ChevronRight, ChevronLeft, CircleX, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
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
import { useListUsers } from '@/hooks/useListUsers';
import ProfileAvatar from "@/components/ui/avatar-profile";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <div className="spinner"></div>
    <style jsx>{`
      .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-top: 4px solid #0070f3;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default function UsersTable() {
  const [page, setPage] = useState(1);
  const { users, totalPages, isLoading, isError } = useListUsers(page);

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
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Card className="w-full h-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CardContent className="h-full">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-zinc-950">
                  
                  <TableHead>Nome</TableHead>
                  <TableHead className="hidden md:table-cell">E-mail</TableHead>
                  <TableHead className="hidden md:table-cell">Empresa</TableHead>
                  <TableHead className="hidden md:table-cell">Criado em</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.isArray(users) &&
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        <div className="flex gap-4 items-center">
                          <ProfileAvatar src={user.profile_picture}/>
                          <span>{user.nome}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
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
          </CardContent>
          <CardFooter className="flex justify-between items-center mt-2">
            <Button
              variant="outline"
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="p-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <span className="px-4">{page} de {totalPages}</span>
            <Button
              variant="outline"
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="p-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}