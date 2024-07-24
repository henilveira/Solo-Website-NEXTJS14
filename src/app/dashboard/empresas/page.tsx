
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import CreateTable from '@/components/ui/create-table'

import Link from 'next/link'

export default async function Admin() {
    const session = await getServerSession();
    if (!session) {
        redirect("/login")
    }

  return (
    
    <div className="flex">
      <aside className="sticky top-0 h-screen w-32 bg-neutral-900 text-gray-200 border-r-2 border-neutral-700 p-8">
        <nav className="space-y-4 items-center flex flex-col">
          <Link href="/">
            <div className="flex items-center space-x-1 mb-6">
              <img src="/dashboard/logo.svg" width="" height="" alt="Solo Logo" />
            </div>
          </Link>
          <Link href='/admin/empresas'> 
            <Button className=" mb-4 space-x-2 text-white h-12 w-14 rounded-lg" variant='solo'>
              <img src="/dashboard/dashboard.svg" width="" height="" alt="dashboard" />
            </Button>
          </Link>
          <Link href='/dashboard/configuracoes'> 
            <Button className="w-full flex space-x-2 hover:bg-neutral-600 active:bg-azulsolo active:text-white p-3 rounded-lg text-neutral-400">
              <img src="/dashboard/settings.svg" width="20" height="" alt="dashboard" />
            </Button>
          </Link>
        </nav>
      </aside>
      <aside className="sticky top-0 h-screen w-40 bg-neutral-900 text-gray-200 border-r-2 border-neutral-700">
        <nav className="space-y-4 items-start flex flex-col">

        <Link href='/dashboard/empresas' className="w-full"> 
          <div className=" mb-4 mt-20 space-x-2 text-azulsolo border-l-2 w-full rounded-xs flex justify-center border-azulsolo" >
            <span className="font-semibold text-left">Empresas</span>
          </div>
        </Link>
        <Link href='/dashboard/automacoes' className="w-full"> 
          <div className=" mb-4 space-x-2 text-neutral-400 hover:text-neutral-500  w-full rounded-xs flex justify-center border-azulsolo" >
            <span>Automações</span>
          </div>
        </Link>
        <Link href='/dashboard/contas' className="w-full"> 
          <div className=" mb-4 space-x-2 text-neutral-400 hover:text-neutral-500  w-full rounded-xs flex justify-center border-azulsolo" >
            <span>Contas</span>
          </div>
        </Link>
        </nav>
      </aside>
      <CreateTable />
    </div>
  );
}

