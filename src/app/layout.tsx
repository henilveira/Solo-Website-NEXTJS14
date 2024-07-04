import { ReactNode } from 'react';
import Head from 'next/head';
import { Toaster } from "@/components/ui/toaster";
import {Metadata} from 'next'
import './globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Solo',
  description: 'Soluções inteligentes para empresas inteligentes',
  icons: {
    icon: ['/favicon/favicon.ico'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const defaultMetadata = {
    title: 'Solo Solutions',
    description: 'Soluções inteligentes para empresas inteligentes'
    
  };

  return (
    <>
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={defaultMetadata.description} />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=4" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <title>{defaultMetadata.title}</title>
        </Head>
        <body>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
