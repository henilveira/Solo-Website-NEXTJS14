import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 p-6 md:py-12 w-full">
      <div className="container max-w-7xl flex items-center justify-between">
        <Link href="#" className="flex text-white items-center" prefetch={false}>
          <BotIcon className="h-6 w-6 mr-2" />
          <span className="text-sm font-medium">Solo</span>
        </Link>
        <p className="text-white text-center text-sm :text-xs">Preparado para automatizar sua rotina?</p>
        <div className="flex items-center space-x-4">
          <Link href="#" prefetch={false}>
            <MailOpenIcon className="h-5 w-5 text-white" />
          </Link>
          <Link href="#" prefetch={false}>
            <PhoneIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-6 pt-6 border-t">
        <div className="flex items-center justify-center space-x-4 text-sm text-muted">
          <Link href="#" prefetch={false}>
            Sobre
          </Link>
          <Link href="#" prefetch={false}>
            Contato
          </Link>
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