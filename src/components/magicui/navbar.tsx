'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Logo from "../ui/logo";
import ShimmerButton from "./shimmer-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRightIcon, Menu, X } from 'lucide-react';
import { ThemeSwitcher } from '../ui/theme-switcher';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsAnimating(true);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    useEffect(() => {
        if (isMenuOpen) {
            const timer = setTimeout(() => setIsAnimating(false), 800); // Aumentado de 500ms para 800ms
            return () => clearTimeout(timer);
        }
    }, [isMenuOpen]);
    
    return (
        <div className='fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b dark:bg-zinc-950/80 backdrop-blur-md'>
            <nav className="mx-4 lg:mx-36 dark:text-white text-zinc-950 px-4 lg:px-6 py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="lg:hidden">
                        <Button variant="ghost" size="icon" onClick={toggleMenu}>
                            {isMenuOpen ? <X className="transition-transform duration-500 rotate-90" /> : <Menu className="transition-transform duration-500" />}
                        </Button>
                    </div>
                    <div className="hidden lg:flex items-center gap-4">
                        <ThemeSwitcher />
                        <Button variant='outline'>
                            Iniciar sessão
                        </Button>
                        <ShimmerButton background="#1472FF" borderRadius="5px" className="p-3 text-sm">
                            <span className="whitespace-pre-wrap text-center font-medium tracking-tight leading-none text-white">
                                Comece agora
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
                <div className={`lg:hidden mt-4 flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`${isAnimating ? 'animate-fadeDown' : ''} transition-all duration-500`}>
                    </div>
                    <div className={`${isAnimating ? 'animate-fadeDown animation-delay-200' : ''} transition-all duration-500`}>
                        <Button variant='outline' className="w-full" onClick={toggleMenu}>
                            Iniciar sessão
                        </Button>
                    </div>
                    <div className={`${isAnimating ? 'animate-fadeDown animation-delay-400' : ''} transition-all duration-500`}>
                        <ShimmerButton background="#1472FF" borderRadius="5px" className="p-3 text-sm w-full" onClick={toggleMenu}>
                            <span className="whitespace-pre-wrap text-center font-medium tracking-tight leading-none text-white">
                                Comece agora
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;