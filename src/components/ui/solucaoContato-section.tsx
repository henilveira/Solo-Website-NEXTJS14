import React from "react";
import Image from "next/image";
import PaginaContato from "@/api/contato/pages";

const SolucaoContatoSection = () => {
  return (
    <section className=" py-12 md:py-24 lg:py-32 dark:bg-neutral-900">
      <div className="container px-4 md:px-6">
        <div className="text-center flex justify-center items-center flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tighter dark:text-white text-neutral-800 sm:text-4xl md:text-5xl">
            Temos a solução para seu problema
          </h1>
          <p className="max-w-[600px] text-neutral-800 md:text-xl dark:text-white">
            Já imaginou automatizar sua rotina ao ponto de não se preocupar com
            processos repetitivos? Entre em contato conosco
          </p>
        </div>
        <div className="mt-24 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="/contact.svg"
              alt="Contato"
              width={600}
              height={300}
              className=""
            />
          </div>
          <PaginaContato />
        </div>
      </div>
    </section>
  );
};

export default SolucaoContatoSection;
