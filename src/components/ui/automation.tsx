import React from "react";
import Image from "next/image";
import { Button } from "./button"; // Certifique-se de que o caminho para o Button esteja correto

const CardAuto: React.FC = () => {
  return (
    <section className="py-20 md:py-36 lg:py-40 w-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center align-center flex-col mb-12">
          <h1 className="text-4xl text-bold dark:text-white text-neutral-800 font-bold text-center sm:text-4xl md:text-5xl">
            Conheça algumas automações
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <Card
            title="Planilhas"
            description="Gera ou lê arquivo Excel que contém informações para fazer parte de um processo, como enviar por e-mail."
            imageSrc="/clip.svg"
            imageAlt="Clipe"
            imageWidth={175}
            imageHeight={300}
          />
          <Card
            title="Web"
            description="Realiza automaticamente tarefas repetitivas em sites da internet, como inserção e busca de dados."
            imageSrc="/wifi.svg"
            imageAlt="Wifi"
            imageWidth={175}
            imageHeight={300}
          />
          <Card
            title="XML"
            description="Extrai informações de arquivos XML, facilitando a organização e análise de dados."
            imageSrc="/file.svg"
            imageAlt="Arquivo"
            imageWidth={100}
            imageHeight={300}
          />
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt, imageWidth, imageHeight }) => {
  return (
    <div className="flex flex-col p-6 bg-azulsolo rounded-3xl justify-between transform transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center align-center flex-col">
        <h3 className="text-4xl text-white font-bold text-center py-2">{title}</h3>
        <p className="text-gray-200 text-center">{description}</p>
      </div>
      <div className="flex justify-center align-center my-12">
        <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
      </div>
      <div className="mt-6">
        <Button className="w-full dark:bg-white dark:text-neutral-900" variant="secondary">
          Ver mais
        </Button>
      </div>
    </div>
  );
};

export default CardAuto;
