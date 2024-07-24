import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface LinhaProps {
    Data: string;
    Nome: string;
    Email: string;
    Automacoes: string;
    onClick: () => void;
}

export default function Linha({ Data, Nome, Email, Automacoes, onClick }: LinhaProps) {
    return (
        <TableRow onClick={onClick} className="cursor-pointer hover:bg-neutral-700">
            <TableCell className="p-4">{Data}</TableCell>
            <TableCell className="p-4">{Nome}</TableCell>
            <TableCell className="p-4">{Email}</TableCell>
            <TableCell className="p-4 text-right">{Automacoes}</TableCell>
            <TableCell className="p-4 text-right">
                <Button variant="destructive" onClick={(e) => {
                    e.stopPropagation(); // Previne que o clique no botão acione o onClick da linha
                    handleDeleteConfirmation();
                }}>
                    Excluir
                </Button>
            </TableCell>
        </TableRow>
    );
}
