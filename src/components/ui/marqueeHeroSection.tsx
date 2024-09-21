import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Carlos",
    username: "@carlos",
    body: "Facilitou muito meu dia a dia. Indispensável!",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Mariana",
    username: "@mariana",
    body: "Meus processos estão muito mais rápidos agora.",
    img: "https://avatar.vercel.sh/mariana",
  },
  {
    name: "José",
    username: "@jose",
    body: "Otimização total! A produtividade aumentou muito.",
    img: "https://avatar.vercel.sh/jose",
  },
  {
    name: "Ana",
    username: "@ana",
    body: "Simplicidade e eficiência em um só lugar.",
    img: "https://avatar.vercel.sh/ana",
  },
  {
    name: "Fernanda",
    username: "@fernanda",
    body: "Economizei muito tempo com esse software.",
    img: "https://avatar.vercel.sh/fernanda",
  },
  {
    name: "Pedro",
    username: "@pedro",
    body: "Mudou meu negócio. Super fácil de usar.",
    img: "https://avatar.vercel.sh/pedro",
  },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
        <p className="dark:text-gray-300 text-gray-600 md:text-xl mb-5">O que nossos clientes estão falando?</p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
