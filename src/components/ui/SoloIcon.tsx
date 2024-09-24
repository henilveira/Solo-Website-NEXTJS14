'use client';

import { useState, useEffect } from 'react';
import useTheme from './useTheme'; // Importando o hook do tema
import Link from 'next/link';
import Image from 'next/image';

const SoloIcon = () => {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Isso garante que o componente só renderize a lógica após o hydration no cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Renderiza um placeholder enquanto espera o componente ser carregado no cliente
    return <div style={{ width: 100, height: 50 }} />;
  }

  return (
    <div>
      <Link href='/'>
        <Image
          src={theme === 'light' ? '/solo.svg' : '/solo-icon-white.svg'}
          alt="Logo"
          width={100}
          height={50}
        />
      </Link>
    </div>
  );
};

export default SoloIcon;
