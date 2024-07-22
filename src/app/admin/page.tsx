import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-64 bg-neutral-900 text-gray-200 border-r-2 border-neutral-700 p-8">
        <div className="flex items-center space-x-1 mb-6">
          <img src="/solo-logo.svg" width="100" height="30" alt="Solo Logo" />
        </div>
        <div className="border-b-2 mb-6 border-neutral-700"></div>
        <nav className="space-y-4">
          <button className="w-full flex items-center space-x-2 bg-azulsolo active:bg-azulsolo p-3 rounded-lg text-white">
            <WalletIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Empresas</span>
          </button>
          <button className="w-full flex items-center space-x-2 hover:bg-neutral-600 active:bg-azulsolo active:text-white p-3 rounded-lg text-neutral-400">
            <UsersIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Contas</span>
          </button>

        </nav>
      </aside>
      <main className="flex-grow p-6 bg-neutral-900 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-medium">Empresas</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="solo">Criar empresa</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-neutral-900 border-none p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">Criar empresa</DialogTitle>
                <DialogDescription className="text-neutral-200">
                  Insira os dados requiridos para cadastrar a empresa no sistema da Solo.
                </DialogDescription>
              </DialogHeader >
              <div className="grid gap-4 py-2">
                <div className="flex align-center justify-center flex-col items-start gap-2">
                  <Label htmlFor="name" className="text-right text-neutral-100" >
                    Nome
                  </Label>
                  <Input
                    id="name"
                    placeholder="Solo Solutions"
                    className="col-span-3 bg-transparent text-neutral-200"
                  />
                </div>
                <div className="flex align-center justify-center flex-col items-start gap-2">
                <Label htmlFor="name" className="text-right text-neutral-100" >
                    CPNJ
                  </Label>
                  <Input
                    id="npj"
                    placeholder="XX.XXX.XXX/0001-00"
                    className="col-span-3 bg-transparent text-neutral-200"
                  />
                </div>
                <div className="flex align-center justify-center flex-col items-start gap-2">
                <Label htmlFor="name" className="text-right text-neutral-100" >
                    Endereço
                  </Label>
                  <Input
                    id="endereco"
                    placeholder="Rua Benjamin Constant 98, América"
                    className="col-span-3 bg-transparent text-neutral-200"
                  />
                </div>
                <div className="flex align-center justify-center flex-col items-start gap-2">
                <Label htmlFor="name" className="text-right text-neutral-100" >
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    placeholder="contato@solosolutions.com.br"
                    className="col-span-3 bg-transparent text-neutral-200"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full text-white" variant='solo' >Criar empresa</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-neutral-900">
              <TableHead>Data</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>UF</TableHead>
              <TableHead className="text-right">Automações</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow className="hover:bg-neutral-800">
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>Santa Catarina</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      type="button"
                      className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-neutral-900">
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300">
                      <FilePenIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Editar</span>
                    </button>
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300">
                      <DeleteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Deletar</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-neutral-800">
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>Santa Catarina</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      type="button"
                      className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-neutral-900">
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300">
                      <FilePenIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Editar</span>
                    </button>
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300">
                      <DeleteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Deletar</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-neutral-800">
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>Santa Catarina</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      type="button"
                      className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-neutral-900">
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300">
                      <FilePenIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Editar</span>
                    </button>
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300">
                      <DeleteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Deletar</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-neutral-800">
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>Santa Catarina</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      type="button"
                      className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-neutral-900">
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300">
                      <FilePenIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Editar</span>
                    </button>
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300">
                      <DeleteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Deletar</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-neutral-800">
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>Santa Catarina</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      type="button"
                      className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-neutral-900">
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300">
                      <FilePenIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Editar</span>
                    </button>
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300">
                      <DeleteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Deletar</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
                        <TableRow className="hover:bg-neutral-800">
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>Santa Catarina</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      type="button"
                      className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-neutral-900">
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300">
                      <FilePenIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Editar</span>
                    </button>
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300">
                      <DeleteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Deletar</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
                        <TableRow className="hover:bg-neutral-800">
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>Santa Catarina</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      type="button"
                      className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-neutral-900">
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300">
                      <FilePenIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Editar</span>
                    </button>
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300">
                      <DeleteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Deletar</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
              <TableRow className="hover:bg-neutral-800">
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>Santa Catarina</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      type="button"
                      className="px-2 py-1 bg-transparent text-white hover:bg-neutral-500 active:bg-azulsolo rounded"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-neutral-900">
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo p-2 rounded-md text-neutral-300">
                      <FilePenIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Editar</span>
                    </button>
                    <button className="w-full flex items-center space-x-2 hover:bg-neutral-700 active:bg-azulsolo py-2 px-2 rounded-md text-neutral-300">
                      <DeleteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Deletar</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  )
}

function DeleteIcon(props) {
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
  )
}


function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function FilePenIcon(props) {
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
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MoveVerticalIcon(props) {
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
  )
}


function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function TagIcon(props) {
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function TicketIcon(props) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function UsersIcon(props) {
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
  )
}


function WalletIcon(props) {
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
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}