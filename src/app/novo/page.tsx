'use client'
import {CardDemo} from "@/components/ui/cardHeroSection";
import { AnimatedBeamDemo } from "@/components/ui/allConectedHeroSection";
import { AuthProvider } from "@/components/ui/AuthProvider";
import { BentoDemo } from "@/components/ui/bentoGridHeroSection";
import { MarqueeDemo } from "@/components/ui/marqueeHeroSection";
import Header from "@/components/ui/modernHeader";
import Navbar from "@/components/magicui/navbar";
import {NumberSection} from "@/components/ui/numberSection";
import FinalPitch from "@/components/ui/finalPitch";
import Footer from "@/components/ui/footer";

export default function Home() {
    return (
        <AuthProvider>
            <div className="relative flex flex-col min-h-[100vh] dark:bg-zinc-950">
                <Navbar />
                <main className="flex-1">
                    <Header />
                    <MarqueeDemo />
                    <BentoDemo />
                    <AnimatedBeamDemo />
                    <CardDemo />
                    <NumberSection />
                    <FinalPitch />
                    <Footer />
                </main>
            </div>
        </AuthProvider>

    );
}