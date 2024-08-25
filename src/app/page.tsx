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


export default function Component() {

  return (
    <div className="relative flex flex-col min-h-[100vh] dark:bg-neutral-900 bg-neutral-100">
  	  <Navbar />
          <main className="flex-1">

            <Header />
            
            <AutomatizeSection />

            <CardsAuto />

            <ConecteSection />
            
            <Blocos />

            <Team />

            <SolucaoContatoSection />
          </main>
          <Footer />
          <ScrollToTopButton />
          <WhatsApp />
        </div>
  )
}
