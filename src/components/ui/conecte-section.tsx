import React from "react";
import Image from "next/image";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon"; // Certifique-se de que o caminho está correto

const ConecteSection: React.FC = () => {
  return (
    <section className=" text-white py-24 md:py-36 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-azulsolo text-white px-3 py-1 text-sm">
              Integrações
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white text-neutral-800">
              Conecte seus sistemas com facilidade
            </h2>
            <p className="max-w-[600px] dark:text-gray-300 text-gray-600 md:text-xl">
              Integre seus sistemas e aplicativos corporativos com a Solo e
              automatize seus fluxos de trabalho.
            </p>
            <ul className="grid gap-4">
              <li className="flex items-center gap-2 dark:text-gray-300 text-gray-600">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>CRMs</span>
              </li>
              <li className="flex items-center gap-2 dark:text-gray-300 text-gray-600">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>ERPs</span>
              </li>
              <li className="flex items-center gap-2 dark:text-gray-300 text-gray-600">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>E-commerce</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
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
  );
};

export default ConecteSection;
