// CreateTable.tsx
'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Linha from "@/components/ui/row-admin";

interface FormData {
    name: string;
    npj: string;
    endereco: string;
    email: string;
    automacoes: string;
}

export default function CreateTable() {
    const [formData, setFormData] = useState<FormData[]>([]);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [formValues, setFormValues] = useState<FormData>({
        name: "",
        npj: "",
        endereco: "",
        email: "",
        automacoes: "2",
    });

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // Manually map the form data to our FormData type
        const values: FormData = {
            name: data.get('name') as string,
            npj: data.get('npj') as string,
            endereco: data.get('endereco') as string,
            email: data.get('email') as string,
            automacoes: data.get('automacoes') as string,
        };

        // Simple validation
        const errors: Record<string, string> = {};
        if (!values.name) errors.name = "Nome é obrigatório.";
        if (!values.npj) errors.npj = "CPNJ é obrigatório.";
        if (!values.endereco) errors.endereco = "Endereço é obrigatório.";
        if (!values.email) errors.email = "E-mail é obrigatório.";
        if (!values.automacoes) errors.automacoes = "Número de automações é obrigatório.";
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setFormErrors({});
        if (editIndex !== null) {
            // Update existing entry
            setFormData(prevData => prevData.map((item, index) => index === editIndex ? values : item));
            setEditIndex(null);
        } else {
            // Add new entry
            setFormData(prevData => [...prevData, values]);
        }
        setFormValues({ name: "", npj: "", endereco: "", email: "", automacoes: "2" });
    };

    const handleDeleteConfirmation = () => {
        setShowConfirmDelete(true);
    };

    const handleConfirmDelete = () => {
        if (editIndex !== null) {
            setFormData(prevData => prevData.filter((_, index) => index !== editIndex));
            setEditIndex(null);
        }
        setShowConfirmDelete(false);
    };

    const handleEditClick = (index: number) => {
        setEditIndex(index);
        setFormValues(formData[index]);
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
                    </div>
                    <DialogContent className="sm:max-w-[425px] bg-neutral-900 border-none p-8">
                        <DialogHeader>
                            <DialogTitle className="text-2xl text-white">Criar empresa</DialogTitle>
                            <DialogDescription className="text-neutral-200">
                                Insira os dados requisitados para cadastrar a empresa no sistema da Solo.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleFormSubmit}>
                            <div className="grid gap-4 py-2">
                                <div className="flex align-center justify-center flex-col items-start gap-2">
                                    <Label htmlFor="name" className={`text-right text-neutral-100 ${formErrors.name ? 'text-red-500' : ''}`}>
                                        Nome
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Solo Solutions"
                                        value={formValues.name}
                                        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                                        className={`col-span-3 bg-transparent text-neutral-200 ${formErrors.name ? 'border-red-500' : ''}`}
                                    />
                                    {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                                </div>
                                <div className="flex align-center justify-center flex-col items-start gap-2">
                                    <Label htmlFor="npj" className={`text-right text-neutral-100 ${formErrors.npj ? 'text-red-500' : ''}`}>
                                        CPNJ
                                    </Label>
                                    <Input
                                        id="npj"
                                        name="npj"
                                        placeholder="XX.XXX.XXX/0001-00"
                                        value={formValues.npj}
                                        onChange={(e) => setFormValues({ ...formValues, npj: e.target.value })}
                                        className={`col-span-3 bg-transparent text-neutral-200 ${formErrors.npj ? 'border-red-500' : ''}`}
                                    />
                                    {formErrors.npj && <p className="text-red-500 text-sm">{formErrors.npj}</p>}
                                </div>
                                <div className="flex align-center justify-center flex-col items-start gap-2">
                                    <Label htmlFor="endereco" className={`text-right text-neutral-100 ${formErrors.endereco ? 'text-red-500' : ''}`}>
                                        Endereço
                                    </Label>
                                    <Input
                                        id="endereco"
                                        name="endereco"
                                        placeholder="Rua Benjamin Constant 98, América"
                                        value={formValues.endereco}
                                        onChange={(e) => setFormValues({ ...formValues, endereco: e.target.value })}
                                        className={`col-span-3 bg-transparent text-neutral-200 ${formErrors.endereco ? 'border-red-500' : ''}`}
                                    />
                                    {formErrors.endereco && <p className="text-red-500 text-sm">{formErrors.endereco}</p>}
                                </div>
                                <div className="flex align-center justify-center flex-col items-start gap-2">
                                    <Label htmlFor="email" className={`text-right text-neutral-100 ${formErrors.email ? 'text-red-500' : ''}`}>
                                        E-mail
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="contato@solosolutions.com.br"
                                        value={formValues.email}
                                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                                        className={`col-span-3 bg-transparent text-neutral-200 ${formErrors.email ? 'border-red-500' : ''}`}
                                    />
                                    {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                                </div>
                                <div className="flex align-center justify-center flex-col items-start gap-2">
                                    <Label htmlFor="automacoes" className={`text-right text-neutral-100 ${formErrors.automacoes ? 'text-red-500' : ''}`}>
                                        Automations
                                    </Label>
                                    <Input
                                        id="automacoes"
                                        name="automacoes"
                                        placeholder="2"
                                        value={formValues.automacoes}
                                        onChange={(e) => setFormValues({ ...formValues, automacoes: e.target.value })}
                                        className={`col-span-3 bg-transparent text-neutral-200 ${formErrors.automacoes ? 'border-red-500' : ''}`}
                                    />
                                    {formErrors.automacoes && <p className="text-red-500 text-sm">{formErrors.automacoes}</p>}
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="mt-4 w-full text-white" variant='solo'>
                                    {editIndex !== null ? 'Atualizar empresa' : 'Criar empresa'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Confirm Delete Dialog */}
                <Dialog open={showConfirmDelete} onOpenChange={setShowConfirmDelete}>
                    <DialogContent className="bg-neutral-900 border-none p-8">
                        <DialogHeader>
                            <DialogTitle className="text-2xl text-white">Confirmar exclusão</DialogTitle>
                            <DialogDescription className="text-neutral-200">
                                Tem certeza de que deseja excluir esta empresa?
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button type="button" onClick={() => setShowConfirmDelete(false)} variant="outline" className="mr-2">
                                Cancelar
                            </Button>
                            <Button type="button" onClick={handleConfirmDelete} variant="destructive">
                                Confirmar
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>CPNJ</TableHead>
                        <TableHead>Endereço</TableHead>
                        <TableHead>E-mail</TableHead>
                        <TableHead>Automacoes</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {formData.map((data, index) => (
                        <TableRow key={index} onClick={() => handleEditClick(index)} className="cursor-pointer hover:bg-neutral-700">
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.npj}</TableCell>
                            <TableCell>{data.endereco}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.automacoes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    );
}
