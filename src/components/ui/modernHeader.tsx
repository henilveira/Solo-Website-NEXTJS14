import Ripple from "../magicui/ripple";
import { Button } from "./button";

const Header = () => {
    return (
        <div className="relative flex h-[600px w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <section className="dark:text-white text-neutral-800 py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="justify-center flex lg:gap-12 items-center">
                    <div className="space-y-4 text-center">
                        <h1 className="max-w-[1330px] text-3xl font-bold tracking-tighter sm:text-4xl md:text-8xl">
                        Aumente sua produtividade com nossos robôs!
                        </h1>
                        <p className=" dark:text-gray-300 text-gray-600 md:text-xl">
                        Economize dinheiro e tempo com robôs fazendo suas tarefas
                        </p>
                        <Button variant="solo" className="inline-flex items-center gap-2 text-white">
                        Comece agora
                        </Button>
                    </div>
                </div>
            </div>
            </section>
            <Ripple />
        </div>
    );
}

export default Header;