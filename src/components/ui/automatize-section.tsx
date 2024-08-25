import React from "react";
import Image from "next/image";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon"; // Certifique-se de que o caminho está correto

const AutomatizeSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 lg:py-40 dark:bg-neutral-900 white:bg-neutral-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <Image
              src="/robo_pagina.svg"
              alt="Robo"
              width={600}
              height={300}
            />
          </div>
          <div className="order-1 lg:order-2 space-y-4">
            <div className="inline-block rounded-lg bg-azulsolo text-white px-3 py-1 text-sm">
              Automações
            </div>
            <h2 className="text-3xl font-bold tracking-tighter dark:text-white text-neutral-800 sm:text-4xl md:text-5xl white:text-neutral-900">
              Automatize suas tarefas com facilidade
            </h2>
            <p className="max-w-[600px] dark:text-gray-300 text-gray-600 md:text-xl white:text-neutral-800">
              Crie robôs personalizados para automatizar suas tarefas repetitivas e libere seu time para se concentrar no que realmente importa.
            </p>
            <ul className="grid gap-4">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="dark:text-white text-gray-600 white:text-neutral-800">
                  Automação de processos
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="dark:text-white text-gray-600 white:text-neutral-800">
                  Integração com sistemas
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="dark:text-white text-gray-600 white:text-neutral-800">
                  Relatórios e análises
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomatizeSection;
