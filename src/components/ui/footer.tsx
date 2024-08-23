import Link from "next/link"
import Imagem from './image-header';
import Logo from "./logo";

export default function Footer() {

  interface ExternalLinkProps {
    to: string;
    children: React.ReactNode;
  }
  
  const ExternalLink: React.FC<ExternalLinkProps> = ({ to, children }) => (
    <Link href={to} passHref>
      <a target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );

  
  return (
    <footer className="bg-neutral-950 p-6 md:py-12 w-full">
      <div className="container max-w-7xl flex items-center justify-between">
      <Logo />
        <p className="text-white text-center text-lg :text-sm">Preparado para automatizar sua rotina?</p>
        <div className="flex items-center space-x-4">
          <a href="#" target="_blank" >
            <MailOpenIcon className="h-5 w-5 text-white" />
          </a>
          <a href="https://wa.me/+5547996750589?text=Ol%C3%A1!%20quero%20conhecer%20mais%20sobre%20as%20automa%C3%A7%C3%B5es" target="_blank" >
            <PhoneIcon className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
      
    </footer>
  )
}

function MailOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    )
  }