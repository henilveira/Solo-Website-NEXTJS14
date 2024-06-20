// app/layout.tsx
import { ReactNode } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google'; // Certifique-se de importar corretamente o Inter do Google Fonts
import './globals.css'; // Importar estilos globais aqui

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Solo',
  description: 'Solo Solutions licensed',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
