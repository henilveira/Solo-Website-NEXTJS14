import React from 'react';
import Imagem from './image-header';

interface BlocoProps {
    src: string;
    alt: string;
    paragrafo: string;
    width: number;
    height: number;
}

const Bloco: React.FC<BlocoProps> = ({ src, width ,height, alt, paragrafo }) => {
  return (
<div className="flex-1 min-w-[200px] p-6 bg-[#1573FE] rounded-3xl dark:bg-zinc-850">
        <div className="flex justify-center items-center my-6">
          <Imagem
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </div>
        <div className="block">
          <h3 className="text-xl text-white font-bold text-center py-2">{paragrafo}</h3>
        </div>
      </div>
  );
};

export default Bloco;
