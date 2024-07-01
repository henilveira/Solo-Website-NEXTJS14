'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Imagem from '@/components/ui/image-header'
import Bloco from "@/components/ui/bloco";
import FormularioContato from "../../contato/pages";
import { useEffect, useRef } from 'react';
import ScrollToTopButton from '@/components/ui/botao-cima';
import Footer from "@/components/ui/footer";
import Team from "@/components/ui/conheca-time";
import WhatsApp from "@/components/ui/wpp-button";


export default function Component() {

  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.slice(1);

      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener("click", handleScroll as EventListener);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener("click", handleScroll as EventListener);
      });
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      window.scrollTo({
        top: sectionRefs.current[index].offsetTop,
        behavior: 'smooth',
      });
    }
  };


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (callback?: () => void) => {
      if (callback) callback();
      toggleMenu();
    }

  return (
    <div className="relative flex flex-col min-h-[100vh] bg-neutral-900">
  	  <header  className="mx-4 lg:mx-36 text-white px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Imagem
            src="/solo-logo.svg"
            alt="Solo"
            width={100}
            height={300}
            className=''
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link onClick={() => scrollToSection(6)} href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre
          </Link>
          <Link onClick={() => scrollToSection(7)} href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contato
          </Link>
          <Link
            onClick={() => scrollToSection(7)}
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-azulsolo px-4 py-2 text-sm font-medium text-white-900 shadow-sm transition-colors hover:bg-azulsolo/90 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Automatizar
          </Link>
        </nav>
        <Button variant="solo" size="icon" className="lg:hidden" onClick={toggleMenu}>
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </header>
      <div
      className={`lg:hidden fixed inset-0 bg-neutral-800 text-white transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
        <div className="flex items-center justify-between p-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Imagem
              src="/solo-logo.svg"
              alt="Solo"
              width={100}
              height={300}
              className=''
            />
          </Link>
          <Button variant="solo" size="icon" onClick={toggleMenu}>
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Close navigation menu</span>
          </Button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          <Link href="#" className="text-sm font-medium py-2" prefetch={false} onClick={() => handleLinkClick(() => scrollToSection(6))}>
            Sobre
          </Link>
          <Link
            href="#"
            className="text-sm font-medium py-2"
            prefetch={false}
            onClick={() => handleLinkClick(() => scrollToSection(7))}
          >
            Contato
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-azulsolo px-4 py-2 text-sm font-medium text-white-900 shadow-sm transition-colors hover:bg-azulsolo/90 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            onClick={() => handleLinkClick(() => scrollToSection(7)) }
          >
            Automatizar
          </Link>
        </nav>
      </div>
          <main className="flex-1">
            <section ref={(el) => {
          if (el) sectionRefs.current[0] = el as HTMLDivElement;
        }} className="text-white py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-8xl">
                      Robôs fazendo suas tarefas!
                    </h1>
                    <p className="max-w-[600px] text-gray-300 md:text-xl">
                      A Solo garante a melhor experiência de automações para a sua empresa, com apenas alguns cliques.
                    </p>
                    <Button onClick={() => scrollToSection(7)} variant="solo" className="inline-flex items-center gap-2">
                      Comece agora
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <Imagem
                      src="/header.svg"
                      alt="Header"
                      width={600}
                      height={300}
                      className=''
                    />
                  </div>
                </div>
              </div>
            </section>
            <section ref={(el) => {
          if (el) sectionRefs.current[1] = el as HTMLDivElement;
        }} className="py-24 md:py-36 lg:py-40 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="order-2 lg:order-1 flex items-center justify-center">
                    <Imagem
                      src="/robo_pagina.svg"
                      alt="Robo"
                      width={600}
                      height={300}
                      className=''
                    />
                  </div>
                  <div className="order-1 lg:order-2 space-y-4">
                    <div className="inline-block rounded-lg bg-azulsolo text-white px-3 py-1 text-sm">Automações</div>
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                      Automatize suas tarefas com facilidade
                    </h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-white">
                      Crie robôs personalizados para automatizar suas tarefas repetitivas e libere seu time para se concentrar no que realmente importa.
                    </p>
                    <ul className="grid gap-4">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
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
            <section ref={(el) => {
          if (el) sectionRefs.current[4] = el as HTMLDivElement;
        }} className="py-20 md:py-36 lg:py-40  w-full flex items-center justify-center">
              <div className="container px-4 md:px-6 ">
                <div className="flex justify-center align-center flex-col mb-12">
                  <h1 className="text-4xl text-bold text-white font-bold text-center sm:text-4xl md:text-5xl">Conheça algumas automações</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
                <div className="flex flex-col p-6 bg-azulsolo rounded-3xl dark:bg-zinc-850 justify-between transform transition-transform duration-300 hover:scale-105">
                  <div className="flex justify-center align-center flex-col">
                      <h3 className="text-4xl text-white font-bold text-center py-2">Planilhas</h3>
                      <p className="text-gray-200 text-center">Gera ou lê arquivo Excel que contém informações para fazer parte de um processo, como enviar por e-mail.</p>
                    </div>
                    <div className="flex justify-center align-center my-12">
                      <Imagem
                        src="/clip.svg"
                        alt="Clipe"
                        width={175}
                        height={300}
                        className=""
                      />
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" variant="secondary" onClick={(() => scrollToSection(0)) }>Ver mais</Button>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 bg-azulsolo rounded-3xl dark:bg-zinc-850 justify-between transform transition-transform duration-300 hover:scale-105">
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
                        className=""
                      />
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" variant="secondary" onClick={(() => scrollToSection(0)) }>Ver mais</Button>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 bg-azulsolo rounded-3xl dark:bg-zinc-850 justify-between transform transition-transform duration-300 hover:scale-105">
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
                        className=""
                      />
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" variant="secondary" onClick={(() => scrollToSection(0)) }>Ver mais</Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section ref={(el) => {
          if (el) sectionRefs.current[3] = el as HTMLDivElement;
        }} className=" text-white py-24 md:py-36 lg:py-40">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-azulsolo text-white px-3 py-1 text-sm">Integrações</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Conecte seus sistemas com facilidade
                    </h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl">
                      Integre seus sistemas e aplicativos corporativos com a Solo e automatize seus fluxos de trabalho.
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
                      src="/erps2_pagina.svg"
                      width="550"
                      height="310"
                      alt="ERPS"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
            
            <section ref={(el) => {
          if (el) sectionRefs.current[5] = el as HTMLDivElement;
        }} className="py-24 md:py-36 lg:py-40 w-full flex items-center justify-center">
              <div className="text-center w-full max-w-6xl">
                <h1 className="text-4xl mb-12 font-bold text-white sm:text-4xl md:text-5xl">Nossas propostas</h1>
                <div className="px-4 md:px-6 flex flex-wrap justify-center gap-5">
                  <Bloco 
                    alt="Timer"
                    src="/timer.svg"
                    paragrafo="Otimização de tempo"
                    width={100}
                    height={100}
                  />
                  <Bloco 
                    alt="Correto"
                    src="/performance.svg"
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
            <section ref={(el) => {
          if (el) sectionRefs.current[6] = el as HTMLDivElement;
        }}>
              <Team />
            </section>

            <section ref={(el) => {
          if (el) sectionRefs.current[7] = el as HTMLDivElement;
        }} className=" py-12 md:py-24 lg:py-32 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
              <div className="text-center flex justify-center items-center flex-col gap-3">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Temos a solução para seu problema
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-white">
                  Já imaginou automatizar sua rotina ao ponto de não se preocupar com processos repetitivos? Entre em contato conosco
                </p>
              </div>
                <div className="mt-24 grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex items-center justify-center">
                  <Imagem
                      src="/contact.svg"
                      alt="Contato"
                      width={600}
                      height={300}
                      className=""
                    />
                  </div>
                  <FormularioContato />
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <ScrollToTopButton />
          <WhatsApp />
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