// navbar.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo"; // Certifique-se de que o caminho está correto
import { Button } from "./button"; // Certifique-se de que o caminho está correto
import { useAuth } from "./AuthProvider"; // Certifique-se de que o caminho está correto
import Profile from "./profile"; // Certifique-se de que o caminho está correto

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { checkAuth } = useAuth(); // Usa apenas checkAuth para verificar autenticação

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const isAuthenticated = await checkAuth();
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        setIsAuthenticated(false);
      }
    };

    verifyAuth();
  }, [checkAuth]);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="mx-4 lg:mx-36 dark:text-white text-neutral-800 px-4 lg:px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contato
          </Link>
          {isAuthenticated ? (
             <Profile /> // Exibe o menu de perfil se o usuário estiver autenticado
          ) : (
            <Link href="/login">
              <Button variant="solo" className="text-white">
                Iniciar Sessão
              </Button>
            </Link>
          )}
        </nav>
        <Button variant="solo" size="icon" className="lg:hidden" onClick={toggleMenu}>
          <MenuIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </header>

      {/* Mobile Navbar */}
      <div
        className={`lg:hidden fixed inset-0 dark:bg-neutral-900 bg-neutral-100 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <Button variant="solo" size="icon" onClick={toggleMenu}>
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Close navigation menu</span>
          </Button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4 dark:text-white text-neutral-800">
          <Link href="#" className="text-sm font-medium py-2" prefetch={false}>
            Sobre
          </Link>
          <Link href="#" className="text-sm font-medium py-2" prefetch={false}>
            Contato
          </Link>
          {isAuthenticated ? (
            <Profile />
          ) : (
            <Link href="/login">
              <Button variant="solo" className="text-white">
                Iniciar Sessão
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Navbar;
