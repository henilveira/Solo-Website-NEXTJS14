import Image from "next/image"; // Importando o Image do Next.js
import Logo from "../ui/logo";
import ShimmerButton from "./shimmer-button";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-zinc-900-950 border-b">
        <nav className="mx-4 lg:mx-36 dark:text-white text-neutral-800 px-4 lg:px-6 py-4 flex items-center justify-between ">
                    <Logo />
            <div className="hidden lg:flex items-center gap-4 ">
                <Link href='/'>
                    <span className="font-medium text-neutral-300 hover:text-neutral-400 transition-all text-sm">
                        Contato
                    </span>
                </Link>
                <Button variant='outline'>
                    Iniciar sessão
                </Button>
                <ShimmerButton background="#1472FF" borderRadius="5px" className="p-3 text-sm">
                    <span className=" text-center font-medium leading-none tracking-tight text-white">
                        Comece agora
                    </span>
                </ShimmerButton>
            </div>
        </nav>
        </div>
        
    );
}

export default Navbar;