'use client';

import useTheme from '@/components/ui/useTheme'; // Importando o hook do tema
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div>
        <Link href='/'>
            <Image
                src={theme === 'light' ? '/solo-logo-black.svg' : '/solo-logo-white.svg'}
                alt="Logo"
                width={125}
                height={50}
                />
        </Link>
    </div>
  );
};

export default Logo;
