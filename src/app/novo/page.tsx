'use client'
import { AuthProvider } from "@/components/ui/AuthProvider";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/modernHeader";
import Navbar from "@/components/ui/navbar";

export default function Home() {
    return (
        <AuthProvider>
            <div className="relative flex flex-col min-h-[100vh] dark:bg-zinc-950 bg-neutral-100">
                <Navbar />
                <main className="flex-1">
                <Header />
                </main>
            </div>
        </AuthProvider>

    );
}