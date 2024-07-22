import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { SVGProps } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";


// Define a interface para as propriedades do componente Linha
interface LinhaProps {
    Data: string;
    Nome: string;
    Automacoes: string; // Mantém como string, ajuste se necessário
    Email: string;
}

// Componente Linha
const Linha: React.FC<LinhaProps> = ({ Data, Nome, Automacoes, Email }) => {
    return (
        <TableRow className="hover:bg-neutral-800">
            <TableCell>{Data}</TableCell>
            <TableCell>{Nome}</TableCell>
            <TableCell>{Email}</TableCell>
            <TableCell className="text-right">{Automacoes}</TableCell>
            <TableCell className='text-right'>
                <Popover>
                    <PopoverTrigger>
                    <div className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded cursor-pointer transition-colors duration-80 ease-in-out">
                            <HiOutlineDotsVertical className="w-4 h-4" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 bg-neutral-900">
                        <div className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300 cursor-pointer">
                            <FilePenIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">Editar</span>
                        </div>
                        <div className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300 cursor-pointer">
                            <DeleteIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">Deletar</span>
                        </div>
                    </PopoverContent>
                </Popover>
            </TableCell>
        </TableRow>
    );
};

// Componentes dos Ícones
function DeleteIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
            <line x1="18" x2="12" y1="9" y2="15" />
            <line x1="12" x2="18" y1="9" y2="15" />
        </svg>
    );
}

function FilePenIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    );
}

function MoveVerticalIcon(props: SVGProps<SVGSVGElement>) {
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
            <polyline points="8 18 12 22 16 18" />
            <polyline points="8 6 12 2 16 6" />
            <line x1="12" x2="12" y1="2" y2="22" />
        </svg>
    );
}

export default Linha;
