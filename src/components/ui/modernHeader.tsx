import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { Button } from "./button";
import { Spotlight } from "../ui/spotlight";
import Image from "next/image"; // Importando o Image do Next.js
import { BorderBeam } from "../magicui/border-beam";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import SparklesText from "../magicui/sparkles-text";

const Header = () => {
    return (
        <section className="relative dark:bg-zinc-950 dark:text-white text-neutral-800 pt-12 md:pt-24 lg:pt-32 overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#1472FF"
            />
            <div className="relative flex h-full w-full items-center flex-col justify-center overflow-hidden bg-background p-20">
                <div className="justify-center flex lg:gap-12 items-center space-y-4 text-center">
                    <div className="space-y-4 text-center">
                        <h1 className="max-w-[1100px] text-3xl font-bold tracking-tighter sm:text-4xl md:text-8xl">
                            <div className="">
                                Aumente sua produtividade com
                                <SparklesText text='robôs inteligentes'/>
                            </div>
                        </h1>
                        <p className="dark:text-gray-300 text-gray-600 md:text-xl">
                            Economize capital e tempo com robôs fazendo suas tarefas
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

                        <RainbowButton>
                            <span className="flex items-center justify-between">
                                Comece agora
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-black" />
                            </span>
                        </RainbowButton>
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
                </div>
            </div>
        </section>
    );
}

export default Header;
