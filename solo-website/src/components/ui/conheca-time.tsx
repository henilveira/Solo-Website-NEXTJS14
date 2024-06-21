import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

export default function Team() {
  return (
    <section className="w-full py-24 md:py-36 lg:py-40">
      <div className="container mx-auto grid gap-8 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl">Conheça nossa equipe</h2>
          <p className="text-muted mt-3">Se você precisa de uma solução urgente e rápida, a Solo é dedicada a oferecer o melhor serviço ao cliente do universo! A nossa equipe é composta por desenvolvedores que fazem de tudo para você ter a melhor experiência com o nosso serviço!</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* Member 1 */}
          <div className="relative overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="p-4 bg-neutral-950 text-center flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center">
                <Avatar className="my-4 w-20 h-20">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1801286211404808194/176w5SZ6_400x400.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-white">Henrique Ataide</h3>
                <p className="text-sm text-azulsolo font-semibold">CO-Founder</p>
                <p className="text-sm text-muted-foreground mt-2">
                  John is the founder and CEO of our company. He has over 15 years of experience in the industry.
                </p>
              </div>
              <div className="pt-8 flex justify-center items-center gap-4">
                <Link href="#">
                  <FaLinkedin className="text-white h-7 w-7" />
                </Link>
                <Link href="#">
                  <FaGithub className="h-8 w-7 text-white" />
                </Link>
              </div>
            </div>
          </div>
          {/* Member 2 */}
          <div className="relative overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="p-4 bg-neutral-950 text-center flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center">
                <Avatar className="my-4 w-20 h-20">
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1799208166984404992/Uh98hFqJ_400x400.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-white">Pedro Olivo</h3>
                <p className="text-sm text-azulsolo font-semibold">CEO</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Jane is the Chief Technology Officer and has over 10 years of experience.
                </p>
              </div>
              <div className="pt-8 flex justify-center items-center gap-4">
                <Link href="#">
                  <FaLinkedin className="text-white h-7 w-7" />
                </Link>
                <Link href="#">
                  <FaGithub className="h-8 w-7 text-white" />
                </Link>
              </div>
            </div>
          </div>
          {/* Member 3 */}
          <div className="relative overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="p-4 bg-neutral-950 text-center flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center">
                <Avatar className="my-4 w-20 h-20">
                  <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQEsfQEkyztKKQ/profile-displayphoto-shrink_200_200/0/1677725536597?e=1724284800&v=beta&t=7xcad6L6NC500u-vaFIu35bk_2DpITQlPUj7U-ju35A" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-bold text-white">Gabriel Carvalho</h3>
                <p className="text-sm text-azulsolo font-semibold">CO-Founder</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Emily is the Chief Operating Officer with 12 years of experience in the field.
                </p>
              </div>
              <div className="pt-8 flex justify-center items-center gap-4">
                <Link href="#">
                
                  <FaLinkedin className="text-white h-7 w-7" />
                </Link>
                <Link href="#">
                  <FaGithub className="h-8 w-7 text-white" />
                </Link>
              </div>
            </div>
          </div>
          {/* Add more members as needed */}
        </div>
      </div>
    </section>
  );
}
