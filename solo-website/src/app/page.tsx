/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2PsADh85TOV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import {headerImage} from '../public/header.svg'
import Imagem from '@/components/ui/image-header'

export default function Component() {
  return (
        <div className="flex flex-col min-h-[100dvh] bg-neutral-900">
          <header className="mx-36 text-white px-4 lg:px-6 py-4 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <BotIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Solo</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Sobre
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Contato
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Inciar sessão
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Cadastre-se
              </Link>
            </nav>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </header>
          <main className="flex-1">
            <section className="text-white py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-8xl">
                      Robôs fazendo suas tarefas!
                    </h1>
                    <p className="max-w-[600px] text-gray-300 md:text-xl">
                      A Solo garante a melhor experiência de automações para a sua empresa, com apenas alguns cliques.
                    </p>
                    <Button variant="secondary" className="inline-flex items-center gap-2">
                      Começe agora
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <Imagem
                      src="/header.svg"
                      alt="Header"
                      width={600}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="py-12 md:py-24 lg:py-32 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex items-center justify-center">
                  <Imagem
                      src="/robos.svg"
                      alt="Descrição da imagem"
                      width={600}
                      height={300}
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Automações</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Automatize suas tarefas com facilidade
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                      Crie robôs personalizados para automatizar suas tarefas repetitivas e libere seu time para se
                      concentrar no que realmente importa.
                    </p>
                    <ul className="grid gap-4">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Automação de processos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Integração com sistemas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Relatórios e análises</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-gray-900 text-white py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Integrações</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Conecte seus sistemas com facilidade
                    </h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl">
                      Integre seus sistemas e aplicativos favoritos com a Solo e automatize seus fluxos de trabalho.
                    </p>
                    <ul className="grid gap-4">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>CRMs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>ERPs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>E-commerce</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="solo-website\public\header.svg"
                      width="550"
                      height="310"
                      alt="Image"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="bg-gray-900 text-white px-4 lg:px-6 py-6 flex items-center justify-between">
            <p className="text-sm">&copy; 2024 Solo. Todos direitos reservados.</p>
            <nav className="hidden lg:flex items-center gap-4">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Termos de serviço
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Politica de Privacidade
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Suporte
              </Link>
            </nav>
          </footer>
        </div>
  )
}

function BotIcon(props) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}