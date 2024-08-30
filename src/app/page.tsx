'use client'

import ScrollToTopButton from '@/components/ui/botao-cima';
import Footer from "@/components/ui/footer";
import Team from "@/components/ui/conheca-time";
import WhatsApp from "@/components/ui/wpp-button";
import Blocos from '@/components/ui/blocos'
import CardsAuto from '@/components/ui/automation'
import Header from '@/components/ui/header'
import AutomatizeSection from '@/components/ui/automatize-section'
import ConecteSection from '@/components/ui/conecte-section'
import SolucaoContatoSection from '@/components/ui/solucaoContato-section'
import Navbar from '@/components/ui/navbar'
import { AuthProvider } from '@/components/ui/AuthProvider';


export default function Component() {

  return (
      <AuthProvider>
      <div className="relative flex flex-col min-h-[100vh] dark:bg-neutral-900 bg-neutral-100">
  	    <Navbar /> // Contém os ambas navbars, mobile e pc

          <main className="flex-1">

            <Header /> // header do site
            
            <AutomatizeSection /> // seção de propaganda automatize

            <CardsAuto /> // cards de automação

            <ConecteSection /> // sessão de propagando apra session
            
            <Blocos />

            <Team />

            <SolucaoContatoSection />
          </main>
          <Footer />
          <ScrollToTopButton />
          <WhatsApp />
        </div>
        </AuthProvider>
  )
}
