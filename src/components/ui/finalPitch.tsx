import ShimmerButton from "@/components/magicui/shimmer-button";

const FinalPitch = () => {
    return (
        <section className="h-[400px] flex justify-center items-center bg-gradient-to-b from-zinc-100 to-azulsolo/40 dark:from-zinc-950 dark:to-azulsolo/10">
            <div className="flex flex-col items-center space-y-6">
                <h1 className="relative z-10 text-lg md:text-7xl max-w-[800px] bg-clip-text text-zinc-900 dark:text-white text-center font-sans font-bold">
                    Preparado para automatizar sua rotina?
                </h1>
                <ShimmerButton background="#1472FF" borderRadius="5px" className="px-6 py-4 text-lg">
                    <span className="whitespace-pre-wrap text-center font-medium tracking-tight leading-none text-white">
                        Começar agora
                    </span>
                </ShimmerButton>
            </div>
        </section>
    );
};

export default FinalPitch;
