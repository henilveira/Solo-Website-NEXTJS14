import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { Button } from "./button";
import { Spotlight } from "../ui/spotlight";
import Image from "next/image"; // Importando o Image do Next.js
import { BorderBeam } from "../magicui/border-beam";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

const Header = () => {
    return (
        <section className="relative dark:text-white text-neutral-800 pt-12 md:pt-24 lg:pt-32 overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#1472FF"
            />
            <div className="relative flex h-full w-full items-center flex-col justify-center overflow-hidden bg-background p-20">
                <div className="justify-center flex lg:gap-12 items-center space-y-4 text-center">
                    <div className="space-y-4 text-center">
                        <h1 className="max-w-[1330px] text-3xl font-bold tracking-tighter sm:text-4xl md:text-8xl">
                            Aumente sua produtividade com robôs inteligentes
                        </h1>
                        <p className="dark:text-gray-300 text-gray-600 md:text-xl">
                            Economize dinheiro e tempo com robôs fazendo suas tarefas
                        </p>
                        <GridPattern
                            width={60}
                            height={60}
                            x={-1}
                            y={-1}
                            strokeDasharray={"4 2"}
                            className={cn(
                                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
                            )}
                        />
                        <Button variant="solo" className="inline-flex items-center gap-2 text-white">
                            Comece agora
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="relative flex h-[570px] w-[1000px] flex-col items-center border justify-center align-center overflow-hidden rounded-3xl bg-background md:shadow-xl">
                    <Image 
                        src='/your_robots.svg'
                        alt="Seus Robos"
                        width='1000'
                        height='600'
                    />
                    <BorderBeam size={250} duration={12} delay={9} />
                </div>q
            </div>
        </section>
    );
}

export default Header;
