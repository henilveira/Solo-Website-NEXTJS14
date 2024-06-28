import { ReactNode } from 'react';
import Head from 'next/head';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Solo',
  description: 'Solo Solutions licensed',
  icons: {
    icon: ['/favicon/favicon.ico'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

type RootLayoutProps = {
  children: ReactNode;
  metadata?: {
    title: string;
    description: string;
  };
};

const RootLayout: React.FC<RootLayoutProps> = ({ children, metadata = { title: '', description: '' } }) => {
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
};

export default RootLayout;
