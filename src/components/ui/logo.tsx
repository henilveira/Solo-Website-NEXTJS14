'use client';

import useTheme from './useTheme'; // Importando o hook do tema
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div>
        <Link href='/'>
            <Image
                src={theme === 'light' ? '/solo-logo-black.svg' : '/solo-logo-white.svg'}
                alt="Logo"
                width={100}
                height={50}
                />
        </Link>
    </div>
  );
};

export default Logo;
