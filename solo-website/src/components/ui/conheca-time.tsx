import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { MdOutlineWeb } from 'react-icons/md';

export default function Team() {
  const [activeTab, setActiveTab] = useState('team');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  

  const renderTeamTab = () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <div className="border relative overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="p-4 bg-neutral-950 text-center flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center">
                <Avatar className="my-4 w-20 h-20">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1801286211404808194/176w5SZ6_400x400.jpg" />
                  <AvatarFallback>HA</AvatarFallback>
                </Avatar>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">
                      <h3 className="text-xl font-bold text-white">Henrique Ataide</h3>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 relative z-50 bg-neutral-950 text-white sm:w-96">
                    <div className="flex flex-col sm:flex-row sm:justify-between space-x-0 sm:space-x-4">
                      <Avatar>
                        <AvatarImage src="https://pbs.twimg.com/profile_images/1801286211404808194/176w5SZ6_400x400.jpg" />
                        <AvatarFallback>HA</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 text-left mt-2 sm:mt-0">
                        <h4 className="text-sm font-semibold">@henilveira</h4>
                        <p className="text-sm text-neutral-300">
                        Através do meu trabalho, não há um problema que com auxilio da tecnologia, eu não resolva.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-sm text-azulsolo font-semibold">CO-Founder</p>
                <p className="text-sm text-muted-foreground mt-2">
                Especialista em UX, responsável pela imagem da empresa e desenvolvimento nos processos RPA.
              </p>
              </div>
              <div className="pt-8 flex justify-center items-center gap-4">
                <a target="_blank" href="https://www.linkedin.com/in/henrique-ataide/">
                  <FaLinkedin className="text-white h-7 w-7" />
                </a>
                <a target="_blank" href="https://www.github.com/imrickss">
                  <FaGithub className="h-8 w-7 text-white" />
                </a>
              </div>
            </div>
          </div>
          {/* Member 2 */}
          <div className="border relative overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="p-4 bg-neutral-950 text-center flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center">
                <Avatar className="my-4 w-20 h-20">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1799208166984404992/Uh98hFqJ_400x400.jpg" />
                  <AvatarFallback>PO</AvatarFallback>
                </Avatar>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">
                      <h3 className="text-xl font-bold text-white">Pedro Olivo</h3>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 relative z-50 bg-neutral-950 text-white sm:w-96">
                    <div className="flex flex-col sm:flex-row sm:justify-between space-x-0 sm:space-x-4">
                      <Avatar>
                        <AvatarImage src="https://pbs.twimg.com/profile_images/1799208166984404992/Uh98hFqJ_400x400.jpg" />
                        <AvatarFallback>HA</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 text-left mt-2 sm:mt-0">
                        <h4 className="text-sm font-semibold">@pedrolivo</h4>
                        <p className="text-sm text-neutral-300">
                        Liderando a Solo, sou capaz de realizar meu sonho de fazer a diferença na vida das pessoas por meio do meu trabalho.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-sm text-azulsolo font-semibold">CEO</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Visionário em desenvolvimento de automações, liderando a empresa com inovação e estratégia.
                  </p>
              </div>
              <div className="pt-8 flex justify-center items-center gap-4">
                <a target="_blank" href="https://www.linkedin.com/in/pedro-olivo-1589a7229/">
                  <FaLinkedin className="text-white h-7 w-7" />
                </a>
                <a target="_blank" href="https://github.com/devpedroolivo">
                  <FaGithub className="h-8 w-7 text-white" />
                </a>
              </div>
            </div>
          </div>
          {/* Member 3 */}
          <div className="border relative overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="p-4 bg-neutral-950 text-center flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center">
                <Avatar className="my-4 w-20 h-20">
                  <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQEsfQEkyztKKQ/profile-displayphoto-shrink_200_200/0/1677725536597?e=1724284800&v=beta&t=7xcad6L6NC500u-vaFIu35bk_2DpITQlPUj7U-ju35A" />
                  <AvatarFallback>GC</AvatarFallback>
                </Avatar>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">
                      <h3 className="text-xl font-bold text-white">Gabriel Carvalho</h3>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 relative z-50 bg-neutral-950 text-white sm:w-96">
                    <div className="flex flex-col sm:flex-row sm:justify-between space-x-0 sm:space-x-4">
                      <Avatar>
                        <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQEsfQEkyztKKQ/profile-displayphoto-shrink_200_200/0/1677725536597?e=1724284800&v=beta&t=7xcad6L6NC500u-vaFIu35bk_2DpITQlPUj7U-ju35A" />
                        <AvatarFallback>GC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 text-left mt-2 sm:mt-0">
                        <h4 className="text-sm font-semibold">@_ccarvalllho</h4>
                        <p className="text-sm text-neutral-300">
                        Sou grato pela oportunidade de impactar o mundo corporativo através da tecnologia.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-sm text-azulsolo font-semibold">CO-Founder</p>
                <p className="text-sm text-muted-foreground mt-2">
                Líder técnico em RPA, focado no desenvolvimento de soluções eficientes.
                </p>
              </div>
              <div className="pt-8 flex justify-center items-center gap-4">
                <a target="_blank" href="https://www.linkedin.com/in/gabriel-da-silva-carvalho-8802a1232/">
              
                  <FaLinkedin className="text-white h-7 w-7" />
                </a>
                <a target="_blank" href="https://www.github.com/gabrielCarvalhoGit">
                  <FaGithub className="h-8 w-7 text-white" />
                </a>
              </div>
            </div>
          </div>
    </div>
  );

  const renderAboutTab = () => (
    <div className="border relative overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
    <div className="p-4 bg-neutral-950 text-center flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center">
        <Avatar className="my-4 w-20 h-20"> 
          <AvatarImage src="https://media.licdn.com/dms/image/C4E03AQGJsbS9WIz8Pg/profile-displayphoto-shrink_200_200/0/1568750614214?e=1724284800&v=beta&t=_2lr6Y9ej57N0tTVzGn6RmqVe7ag0qB6jiKYQStrp4k" />
          <AvatarFallback>GC</AvatarFallback>
        </Avatar>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">
              <h3 className="text-xl font-bold text-white">Luz Oliveira</h3>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 relative z-50 bg-neutral-950 text-white sm:w-96">
            <div className="flex flex-col sm:flex-row sm:justify-between space-x-0 sm:space-x-4">
              <Avatar>
                <AvatarImage src="https://media.licdn.com/dms/image/C4E03AQGJsbS9WIz8Pg/profile-displayphoto-shrink_200_200/0/1568750614214?e=1724284800&v=beta&t=_2lr6Y9ej57N0tTVzGn6RmqVe7ag0qB6jiKYQStrp4k" />
                <AvatarFallback>LO</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-left mt-2 sm:mt-0">
                <h4 className="text-sm font-semibold">@luzoliveira</h4>
                <p className="text-sm text-neutral-300">
                  Nunca tive um serviço ao cliente tão eficiente quanto da Solo!
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <p className="text-sm text-azulsolo font-semibold">Cliente</p>
        <p className="text-sm text-muted-foreground mt-2">
          Somos uma empresa de contabilidade, em parceria com a Solo.
        </p>
      </div>
      <div className="pt-8 flex justify-center items-center gap-4">
        <a target="_blank" href="https://www.linkedin.com/in/luz-e-oliveira-contadores-6325bb192/">
      
          <FaLinkedin className="text-white h-7 w-7" />
        </a>
        <a target="_blank" href="https://luzcontadores.com.br/">
          <MdOutlineWeb className="h-8 w-7 text-white" />
        </a>
      </div>
    </div>
  </div>
  
  );

  return (
    <section className="w-full py-24 md:py-36 lg:py-40">
      <div className="container mx-auto grid gap-8 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl">Sobre nós</h2>
          <div className="mx-auto mt-6 max-w-md md:max-w-5xl">
            <p className="text-muted">
              Fundada com o objetivo de transformar a maneira como as empresas gerenciam suas operações, a Solo Solutions
              se destaca pela sua especialização em automação contábil, fornecendo soluções eficientes e personalizadas
              que simplificam e otimizam as rotinas empresariais.
            </p>
          </div>
        </div>

        {/* Abas */}
        <div className="">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleTabChange('team')}
              className={`text-sm md:text-base px-4 py-2 rounded-md focus:outline-none ${
                activeTab === 'team'
                  ? 'text-white bg-azulsolo hover:bg-azulsolo/90'
                  : 'text-white bg-neutral-900 hover:bg-neutral-800'
              }`}
            >
              Equipe
            </button>
            <button
              onClick={() => handleTabChange('about')}
              className={`text-sm md:text-base px-4 py-2 rounded-md focus:outline-none ${
                activeTab === 'about'
                ? 'text-white bg-azulsolo hover:bg-azulsolo/90'
                : 'text-white bg-neutral-900 hover:bg-neutral-800'
              }`}
            >
              Clientes
            </button>
          </div>

          {/* Renderização condicional do conteúdo da aba */}
          <div className="mt-6">
            {activeTab === 'team' && renderTeamTab()}
            {activeTab === 'about' && renderAboutTab()}
          </div>
        </div>
      </div>
    </section>
  );
}
