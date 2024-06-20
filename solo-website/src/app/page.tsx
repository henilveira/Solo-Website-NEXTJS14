'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Imagem from '@/components/ui/image-header'
import Bloco from "@/components/ui/bloco";
import FormularioContato from "../../contato/pages";
import { toast, useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";



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
                className="inline-flex h-9 items-center justify-center rounded-md bg-azulsolo px-4 py-2 text-sm font-medium text-white-900 shadow-sm transition-colors hover:bg-azulsolo/90 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:pointer-events-none disabled:opacity-50"
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
                    <Button onClick={() => {
                      toast({
                        title: "Scheduled: Catch up ",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                        action: (
                          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                        ),
                      })
            }} variant="solo" className="inline-flex items-center gap-2">
                      Começe agora
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <Imagem
                      src="/Header.svg"
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
                      src="/robo_pagina.svg"
                      alt="Robo"
                      width={600}
                      height={300}
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-azulsolo text-white px-3 py-1 text-sm ">Automações</div>
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                      Automatize suas tarefas com facilidade
                    </h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-white">
                      Crie robôs personalizados para automatizar suas tarefas repetitivas e libere seu time para se
                      concentrar no que realmente importa.
                    </p>
                    <ul className="grid gap-4">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5  text-green-500" />
                        <span className="text-white">Automação de processos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-white">Integração com sistemas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-white">Relatórios e análises</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className=" text-white pt-12 md:pt-24 lg:pt-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-azulsolo text-white px-3 py-1 text-sm">Integrações</div>
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
                      src="/ERPS2_pagina.svg"
                      width="550"
                      height="310"
                      alt="ERPS"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="min-h-screen w-full flex items-center justify-center">
              <div className="container px-4 md:px-6 ">
                <div className="flex justify-center align-center flex-col mb-12">
                  <h1 className="text-5xl text-bold text-white font-bold text-center">Conheça algumas automações</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
                <div className="flex flex-col p-6 bg-azulsolo rounded-3xl dark:bg-zinc-850 justify-between ">
                    <div className="flex justify-center align-center flex-col">
                      <h3 className="text-4xl text-white font-bold text-center py-2">Excel</h3>
                      <p className="text-gray-200 text-center">Gera ou lê arquivo Excel que contém informações para fazer parte de um processo, como enviar por e-mail.</p>
                    </div>
                    <div className="flex justify-center align-center my-12">
                      <Imagem
                        src="/clip.svg"
                        alt="Clipe"
                        width={175}
                        height={300}
                      />
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" variant="secondary">Ver mais</Button>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 bg-azulsolo rounded-3xl dark:bg-zinc-850 justify-between ">
                    <div className="flex justify-center align-center flex-col">
                      <h3 className="text-4xl text-white font-bold text-center py-2">Web</h3>
                      <p className="text-gray-200 text-center">Realiza automaticamente tarefas repetitivas em sites da internet, como inserção e busca de dados.</p>
                    </div>
                    <div className="flex justify-center align-center my-12">
                      <Imagem
                        src="/wifi.svg"
                        alt="Wifi"
                        width={175}
                        height={300}
                      />
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" variant="secondary">Ver mais</Button>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 bg-azulsolo rounded-3xl dark:bg-zinc-850 justify-between ">
                    <div className="flex justify-center align-center flex-col">
                      <h3 className="text-4xl text-white font-bold text-center py-2">XML</h3>
                      <p className="text-gray-200 text-center">Extrai informações de arquivos XML, facilitando a organização e análise de dados.</p>
                    </div>
                    <div className="flex justify-center align-center my-12">
                      <Imagem
                        src="/file.svg"
                        alt="Arquivo"
                        width={100}
                        height={300}
                      />
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" variant="secondary">Ver mais</Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="min-h-fit w-full flex items-center justify-center">
              <div className="text-center w-full max-w-6xl">
                <h1 className="text-5xl mb-12 font-bold text-white">Nossas propostas</h1>
                <div className="px-4 md:px-6 flex flex-wrap justify-center space-x-4 gap-5">
                  <Bloco 

                    alt="Timer"
                    src="/timer.svg"
                    paragrafo="Otimização de tempo"
                    width={100}
                    height={100}
                  />
                  <Bloco 
                    alt="Correto"
                    src="/correct.svg"
                    paragrafo="Melhora de performance"
                    width={100}
                    height={100}
                  />
                  <Bloco 
                    alt="Dinheiro"
                    src="/money.svg"
                    paragrafo="Redução de custos"
                    width={100}
                    height={100}
                  />
                  <Bloco 
                    alt="Error"
                    src="/Error.svg"
                    paragrafo="Diminuição de erros"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </section>
            <section className="mt-20 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
              <div className="text-center flex justify-center items-center flex-col gap-3">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Viajamos galáxias para ter você conosco
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-white">
                  Envie uma mensagem caso tenha qualquer dúvida do nosso produto, que a nossa
                  ágil equipe vai te responder em instantes!
                </p>
              </div>
                <div className="mt-24 grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex items-center justify-center">
                  <Imagem
                      src="/contact.svg"
                      alt="Contato"
                      width={600}
                      height={300}
                    />
                  </div>


                  <FormularioContato />
    
                </div>
              </div>
            </section>

  
          </main>
          <footer className=" text-white px-4 lg:px-6 py-6 flex items-center justify-between">
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

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
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


function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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


function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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