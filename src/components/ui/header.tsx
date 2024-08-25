import React from "react";
import Image from "next/image";
import {Button} from "./button";

const Header: React.FC = () => {
  return (
    <section className="dark:text-white text-neutral-800 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-8xl">
              Robôs fazendo suas tarefas!
            </h1>
            <p className="max-w-[600px] dark:text-gray-300 text-gray-600 md:text-xl">
              A Solo garante a melhor experiência de automações para a sua empresa, com apenas alguns cliques.
            </p>
            <Button variant="solo" className="inline-flex items-center gap-2 text-white">
              Comece agora
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/header.svg"
              alt="Header"
              width={600}
              height={600}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
