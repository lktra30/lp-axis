import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import NextImage from "next/image";

const reviews = [
  {
    "name": "Carlos Mendes",
    "username": "@carlos_mendes",
    "body": "A Axis revolucionou nossa implementação de IA com resposta de 7 dias. A qualidade é extraordinária e automatizamos processos que antes demoravam semanas.",
    "img": "https://avatar.vercel.sh/jill"
  },
  {
    "name": "Fernanda Lima",
    "username": "@fer_marketeira",
    "body": "Precisava de soluções ágeis para análise de dados e automação de campanhas. A Axis entregou tudo em dias. O plano Business vale cada centavo!",
    "img": "https://avatar.vercel.sh/jane"
  },
  {
    "name": "Ricardo Oliveira",
    "username": "@ricardo_ops",
    "body": "Em 3 meses, a Axis trouxe ROI de 300%. A automação economiza 30h semanais da equipe. Plataforma intuitiva e suporte excepcional.",
    "img": "https://avatar.vercel.sh/jill"
  },
  {
    "name": "Amanda Santos",
    "username": "@amandatech",
    "body": "Sem orçamento para especialistas em IA, a Axis nos deu acesso a tecnologia avançada a preço acessível. Nosso chatbot aumentou conversões em 45%.",
    "img": "https://avatar.vercel.sh/jane"
  },
  {
    "name": "Paulo Rodrigues",
    "username": "@paulo_finance",
    "body": "Otimizamos faturamento e previsão de fluxo de caixa com a Axis. O que exigia consultores caros agora fazemos com um simples pedido. Impressionante!",
    "img": "https://avatar.vercel.sh/jill"
  },
  {
    "name": "Luiza Campos",
    "username": "@lu_vendas",
    "body": "Produtividade de vendas aumentou 60% com a Axis. A qualificação de leads e automação de follow-ups revolucionou nosso pipeline. Recomendo!",
    "img": "https://avatar.vercel.sh/jane"
  },
  {
    "name": "Marcelo Costa",
    "username": "@marcelo_ecom",
    "body": "E-commerce cresceu 80% em 6 meses com a Axis. Personalização da jornada e recomendações automatizadas foram game-changers. Melhor investimento do ano!",
    "img": "https://avatar.vercel.sh/jill"
  },
  {
    "name": "Juliana Martins",
    "username": "@ju_customercare",
    "body": "A Axis transformou nosso suporte com automação que escalou o atendimento sem mais contratações. NPS subiu de 67 para 89 em dois meses. Fenomenal!",
    "img": "https://avatar.vercel.sh/jane"
  },
  {
    "name": "Thiago Almeida",
    "username": "@thiago_tech",
    "body": "Sou extremamente exigente com tecnologia e a Axis superou minhas expectativas em segurança, performance e qualidade. Integrações perfeitas e soluções prontas!",
    "img": "https://avatar.vercel.sh/jill"
  },
  {
    "name": "Beatriz Gomes",
    "username": "@bia_marketing",
    "body": "A Axis supera qualquer serviço de IA em velocidade e qualidade. Nossas soluções de marketing aumentaram o ROAS em 127%. É como ter um departamento inteiro de IA por uma fração do custo.",
    "img": "https://avatar.vercel.sh/jane"
  }
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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-[#2f0f39]/20 bg-[#0f0a14]/80 hover:bg-[#16121e]",
        // dark styles
        "dark:border-[#2f0f39]/30 dark:bg-[#16121e] dark:hover:bg-[#1a1324]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <NextImage className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-[#b668e9]/70">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#0f0a14]">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0f0a14]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0f0a14]"></div>
    </div>
  );
}
