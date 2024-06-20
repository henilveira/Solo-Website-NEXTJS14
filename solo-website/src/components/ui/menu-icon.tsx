import { useState } from 'react';
import Link from 'next/link';
import BotIcon from './BotIcon';  // Import your icon component
import MenuIcon from './MenuIcon';  // Import your menu icon component
import Button from './Button';  // Import your button component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-neutral-900">
      <header className="mx-4 lg:mx-36 text-white px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BotIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Solo</span>
        </Link>
        <nav className={`lg:flex items-center gap-8 ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contato
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Iniciar sessão
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-azulsolo px-4 py-2 text-sm font-medium text-white-900 shadow-sm transition-colors hover:bg-azulsolo/90 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Cadastre-se
          </Link>
        </nav>
        <Button variant="solo" size="icon" className="lg:hidden" onClick={toggleMenu}>
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </header>
    </div>
  );
};

export default Header;
