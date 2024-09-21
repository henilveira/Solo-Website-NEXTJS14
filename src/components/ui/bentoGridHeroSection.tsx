import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, TvMinimal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {AnimatedBeamMultipleOutputDemo} from "@/components/ui/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import {AnimatedListDemo} from "@/components/ui/animated-list-demo";

const files = [
  {
    name: "relatorio_financeiro.pdf",
    body: "Relatório detalhado com todas as movimentações financeiras do mês, incluindo receitas, despesas e balanço final.",
  },
  {
    name: "balanco_patrimonial.xlsx",
    body: "Planilha com o balanço patrimonial da empresa, organizada em ativos, passivos e patrimônio líquido.",
  },
  {
    name: "nota_fiscal_entrada.xml",
    body: "Arquivo XML com os detalhes de notas fiscais eletrônicas referentes a compras e entradas de produtos.",
  },
  {
    name: "declaracao_imposto.gpg",
    body: "Arquivo criptografado contendo as declarações de impostos da empresa, pronto para envio à Receita Federal.",
  },
  {
    name: "contrato_social.pdf",
    body: "Documento em PDF com o contrato social atualizado da empresa, contendo todas as alterações de sócios e capital.",
  },
];


const features = [
  {
    Icon: FileTextIcon,
    name: "Gerencie seus resultados",
    description: "Seus resultados em arquivos customizados e de fácil acesso",
    href: "#",
    cta: "Ver mais",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="relative min-h-[150px]">
        <Marquee
          pauseOnHover
          className="absolute top-[60px] [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      </div>
    ),
  },
  
  {
    Icon: BellIcon,
    name: "Monitore suas automações",
    description: "Acompanhe todo o processo em tempo real",
    href: "#",
    cta: "Ver mais",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integração",
    description: "Nossos robôs se adaptarão às suas ferramentas de trabalho",
    href: "#",
    cta: "Ver mais",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Agende suas tarefas",
    description: "Agende suas automações para serem executados a qualquer momento",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Ver mais",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2024, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <section className="w-full h-full flex justify-center">
        <div className="items-center flex flex-col space-y-2">
            <div className=" text-center flex-col flex gap-4">
                <h1 className="text-5xl font-bold">O que a Solo oferece?</h1>
                <p className="dark:text-gray-300 text-gray-600 md:text-xl mb-5">Toda solução que você precisa está conosco</p>
            </div>
            <div className="">
                <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
                </BentoGrid>
            </div>
            </div>
        </section>
  );
}
