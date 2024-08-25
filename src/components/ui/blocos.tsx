import React from 'react';
import Bloco from './bloco'; // Certifique-se de importar seu componente Bloco

// Lista de dados para os blocos
const blocos = [
  {
    alt: "Timer",
    src: "/timer.svg",
    paragrafo: "Otimização de tempo",
    width: 100,
    height: 100,
  },
  {
    alt: "Correto",
    src: "/performance.svg",
    paragrafo: "Melhora de performance",
    width: 100,
    height: 100,
  },
  {
    alt: "Dinheiro",
    src: "/money.svg",
    paragrafo: "Redução de custos",
    width: 100,
    height: 100,
  },
  {
    alt: "Error",
    src: "/Error.svg",
    paragrafo: "Diminuição de erros",
    width: 100,
    height: 100,
  },
];

const Blocos: React.FC = () => {
  return (
    <section className="py-24 md:py-36 lg:py-40 w-full flex items-center justify-center">
      <div className="text-center w-full max-w-6xl">
        <h1 className="text-4xl mb-12 font-bold dark:text-white text-neutral-800 sm:text-4xl md:text-5xl">
          Nossas propostas
        </h1>
        <div className="px-4 md:px-6 flex flex-wrap justify-center gap-5">
          {blocos.map((bloco, index) => (
            <Bloco
              key={index}
              alt={bloco.alt}
              src={bloco.src}
              paragrafo={bloco.paragrafo}
              width={bloco.width}
              height={bloco.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blocos;
