"use client"

import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

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
    const { companies } = useCompany();
    function formatId(idStr: string | null | undefined): string {
        if (typeof idStr === 'string' && idStr.length > 5) {
            return idStr.slice(0, 5) + '...';
        }
        // Trata o caso onde idStr é null, undefined ou uma string com 5 caracteres ou menos
        return idStr ?? '';
    }
    

  return (
    <Card className="w-full h-full">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead className="hidden md:table-cell">CNPJ</TableHead>
              <TableHead className="hidden md:table-cell">Endereço</TableHead>
              <TableHead className="hidden md:table-cell">Automações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {companies.map((company) => (

            <TableRow>
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
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  )
}