'use client'

import React from 'react';
import { useCompany } from './CompanyProvider';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './table';

export default function CompanyTable() {
    const { companies } = useCompany();

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>CNPJ</TableHead>
                    <TableHead>Endereço</TableHead>
                    <TableHead>Automações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {companies.map((company) => (
                    <TableRow key={company.id}>
                        <TableCell>{company.nome}</TableCell>
                        <TableCell>{company.cnpj}</TableCell>
                        <TableCell>{company.endereco}</TableCell>
                        <TableCell>{company.automacoes.join(', ')}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
