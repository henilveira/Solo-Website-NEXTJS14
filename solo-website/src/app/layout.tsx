// app/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head'; // Importe Head do Next.js
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google'; // Certifique-se de importar corretamente o Inter do Google Fonts
import './globals.css'; // Importe estilos globais aqui

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Solo',
  description: 'Solo Solutions licensed',
  icons: {
    icon: ['/favicon/favicon.ico'], // Caminho para o ícone padrão
    apple: ['/apple-touch-icon.png?v=4'], // Caminho para o ícone Apple touch (versão 4)
    shortcut: ['/apple-touch-icon.png'] // Caminho para o ícone de atalho
  }
};

type RootLayoutProps = {
  children: ReactNode; // children é do tipo ReactNode para aceitar qualquer conteúdo React válido
  metadata: {
    title: string;
    description: string;
    // Se houver outros metadados, adicione aqui
  };
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>{metadata.title}</title>
      </Head>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
