import { ReactNode } from 'react';
import { Toaster } from "@/components/ui/toaster";
import {Metadata} from 'next'
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Solo',
  description: 'Soluções inteligentes para empresas inteligentes',
  icons: {
    icon: ['/favicon/favicon.ico'],
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
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={defaultMetadata.description} />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <title>{defaultMetadata.title}</title>

        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
