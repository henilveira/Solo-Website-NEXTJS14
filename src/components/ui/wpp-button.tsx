import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsApp() {

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
        <div className='fixed z-50 bottom-5 right-5 transition-transform duration-300 cursor-pointer hover:scale-105'>
            <a target="_blank" href="https://wa.me/+5547996750589?text=Ol%C3%A1!%20quero%20conhecer%20mais%20sobre%20as%20automa%C3%A7%C3%B5es">            
            <FaWhatsapp className='text-white h-10 w-10'/>
            </a>
        </div>
    );
}
