"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  XCircle,
  Check,
  ChevronDown,
  Download,
  Database,
  BarChart3,
  Search,
  FileText,
  RefreshCw,
  LayoutDashboard,
  Building2,
  TrendingUp,
  Users,
  Shield,
  Gift,
  Phone
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Link from "next/link";
import Image from "next/image";
import { openCalModal } from "@/components/demo/booking";

// ==================== HERO SECTION ====================
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0812] min-h-[90vh] flex items-center py-16 md:py-24">
      {/* Decorative gradient circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-[#aa4cff]/20 to-[#6e2a9d]/10 blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-[10%] bottom-[10%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-[#ff6476]/20 to-[#2f0f39]/10 blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-8 dark:text-white leading-tight max-w-5xl mx-auto">
            <span className="block mb-2">Pare de Perder Horas em Relatórios</span>
            <span className="block mb-4">e Ideação de Criativos.</span>
            <span className="bg-gradient-to-r from-[#2f0f39] via-[#6c2a8f] to-[#b668e9] bg-clip-text text-transparent block mt-4">
              Tenha um Sistema Inteligente que Analisa, Organiza e Gera Novos Anúncios Automaticamente.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Sistema completo implementado em até 7 dias: integra com seu Meta Ads, analisa performance dos criativos, identifica vencedores e gera roteiros prontos baseados no que já funcionou. Sem dependência de &quot;inspiração&quot; ou planilhas desconectadas.
          </p>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-3xl mx-auto aspect-video mb-10 rounded-xl overflow-hidden border border-[#6c2a8f]/40 bg-gradient-to-br from-[#2f0f39]/50 to-[#0c0812]"
          >
            <FlickeringGrid
              className="absolute inset-0"
              color="#b668e9"
              squareSize={4}
              gridGap={6}
              flickerChance={0.1}
              maxOpacity={0.1}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              Vídeo de Vendas
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              onClick={openCalModal}
              className="bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] hover:from-[#3a1546] hover:to-[#6b2886] text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6c2a8f]/30"
            >
              ASSINAR O PRODUTO
              <span className="block text-sm font-normal mt-1 text-white/80">
                (Assinatura Mensal)
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== PAIN POINTS SECTION ====================
const painPoints = [
  {
    icon: XCircle,
    title: "Você Perde Horas Abrindo Gerenciador de Anúncios",
    description: "Abrir conta por conta, checar ROAS, CPC, CTR, montar relatório… No fim, você trabalha mais como estagiário de relatório do que como estrategista."
  },
  {
    icon: XCircle,
    title: "Chegou a Hora de Subir Criativo e Ninguém Sabe o Que Testar",
    description: "O cliente cobrando, CAC subindo, ROAS caindo… E o time repetindo as mesmas ideias porque ninguém tem tempo de pesquisar, analisar e transformar dados em novos anúncios."
  },
  {
    icon: XCircle,
    title: "Sua Operação Depende de 1 ou 2 Cabeças",
    description: "Se o seu criativo principal sumir hoje, tudo trava. Todo o processo de análise, ideação e criação está na cabeça de poucas pessoas."
  },
  {
    icon: XCircle,
    title: "Seu ROAS Sobe um Mês e Despenca no Outro",
    description: "Você até tem anúncios que explodiram, mas não tem uma biblioteca do que funcionou. Cada campanha nova é quase recomeçar do zero."
  },
  {
    icon: XCircle,
    title: "Cliente Cobra \"Criativos Novos\" Mas Ninguém Sabe Qual é o Plano",
    description: "O cliente só vê prints de campanha, mas não entende: quantos vídeos foram testados, quais deram certo, quais morreram e qual é a próxima rodada."
  }
];

function PainPointsSection() {
  return (
    <section className="py-20 bg-[#0c0812] relative overflow-hidden">
      <div className="absolute -left-20 top-1/4 w-64 h-64 bg-gradient-to-tr from-[#2f0f39]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-wider text-[#b668e9] bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6">
            Como isso me ajuda
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Se Você se Identifica com Alguma Dessas Situações,{" "}
            <span className="text-[#b668e9]">Continue Lendo:</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-red-500/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <point.icon className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-lg text-[#b668e9] mt-10 font-medium"
        >
          Se você reconheceu pelo menos 2 dessas dores, você precisa do nosso sistema — não de mais pessoas.
        </motion.p>
      </div>
    </section>
  );
}

// ==================== SOLUTION SECTION ====================
const solutionFeatures = [
  "Coletar e organizar métricas de performance",
  "Identificar anúncios vencedores",
  "Analisar padrões de copy, criativo e público",
  "Gerar novos roteiros baseados no que já performou",
  "Organizar tudo em um painel centralizado"
];

function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0c0812] to-[#100a18] relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-bl from-[#6c2a8f]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-wider text-[#b668e9] bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6">
            A Solução
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Apresentando: <span className="text-[#b668e9]">O Sistema Axis</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A Agência Inteligente que Trabalha 24/7 Analisando, Organizando e Criando Criativos Para Você
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#2f0f39]/30 to-[#6c2a8f]/10 border border-[#6c2a8f]/30">
            <p className="text-gray-300 text-lg mb-8 text-center">
              Não é só automação. É um sistema de inteligência operacional que substitui o trabalho braçal de:
            </p>

            <div className="space-y-4">
              {solutionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-[#b668e9] flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#6c2a8f]/30 text-center">
              <p className="text-[#b668e9] font-semibold text-lg">
                E o melhor: implementado em até 7 dias.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== HOW IT WORKS SECTION ====================
const phases = [
  {
    icon: Download,
    phase: "Fase 1",
    title: "Integração com Meta Ads",
    description: "O sistema puxa automaticamente os dados das suas campanhas: ROAS, CPC, CTR, conversões, gastos — tudo organizado por campanha e criativo.",
    result: "Você nunca mais abre 10 abas do Gerenciador de Anúncios."
  },
  {
    icon: BarChart3,
    phase: "Fase 2",
    title: "Análise Inteligente de Performance",
    description: "O sistema identifica quais criativos estão performando melhor, analisa estrutura de copy, ângulo de venda, gancho e formato.",
    result: "Você sabe exatamente o que está funcionando e por quê."
  },
  {
    icon: Search,
    phase: "Fase 3",
    title: "Pesquisa Automatizada de Mercado",
    description: "Baseado no seu produto/nicho, o sistema faz pesquisa profunda: ICP, dores, desejos, objeções, concorrência, tendências.",
    result: "Seus criativos param de ser \"achismo\" e viram estratégia baseada em dados."
  },
  {
    icon: FileText,
    phase: "Fase 4",
    title: "Geração de Roteiros e Ideias",
    description: "Com base nos anúncios vencedores + pesquisa de mercado, o sistema gera roteiros completos para os próximos vídeos.",
    result: "Você nunca mais fica travado sem ideia de criativo."
  },
  {
    icon: RefreshCw,
    phase: "Fase 5",
    title: "O Efeito Flywheel (Melhoria Contínua)",
    description: "Quanto mais você roda campanhas, mais inteligente o sistema fica. Ele aprende com seus próprios vencedores e gera variações cada vez melhores.",
    result: "ROAS estável, CAC previsível, processo escalável."
  },
  {
    icon: LayoutDashboard,
    phase: "Fase 6",
    title: "Painel Centralizado de Controle",
    description: "Tudo em um só lugar: campanhas ativas, performance por criativo, próximos roteiros sugeridos, histórico de vencedores.",
    result: "Você mostra método e previsibilidade para clientes e diretoria."
  }
];

function HowItWorksSection() {
  return (
    <section className="py-20 bg-[#0c0812] relative overflow-hidden">
      <div className="absolute -left-32 bottom-0 w-96 h-96 bg-gradient-to-tr from-[#6c2a8f]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-wider text-[#b668e9] bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6">
            Passo a Passo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Sistema Axis <span className="text-[#b668e9]">na Prática</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-[#6c2a8f]/40 transition-all duration-300 h-full">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-[#6c2a8f] blur-[60px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#2f0f39] to-[#6c2a8f] flex items-center justify-center">
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <span className="text-xs text-[#b668e9] font-semibold uppercase tracking-wider">{phase.phase}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{phase.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{phase.description}</p>
                    <div className="pt-3 border-t border-[#6c2a8f]/20">
                      <p className="text-sm">
                        <span className="text-[#b668e9] font-medium">Resultado:</span>{" "}
                        <span className="text-gray-300">{phase.result}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== WHAT YOU GET SECTION ====================
const deliverables = [
  "Integração com Meta Ads (via API)",
  "Acesso ao Sistema próprio da Axis",
  "Automação completa de workflows",
  "Prompts de IA otimizados para análise e geração de copy",
  "Biblioteca de criativos vencedores com estrutura documentada",
  "Tutorial de implementação (passo a passo)",
  "Suporte técnico durante a implementação"
];

const bonuses = [
  { title: "Framework de Análise de Criativos", description: "planilha + checklist" },
  { title: "50 Ângulos de Venda Testados", description: "por nicho" },
  { title: "Acesso ao grupo VIP de implementadores", description: "" }
];

function WhatYouGetSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#100a18] to-[#0c0812] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-wider text-[#b668e9] bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6">
            Entregáveis
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            O Que Você Recebe ao <span className="text-[#b668e9]">Implementar o Sistema Axis</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Deliverables */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#2f0f39]/40 to-[#6c2a8f]/10 border border-[#6c2a8f]/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-[#b668e9]" />
              <h3 className="text-2xl font-bold text-white">Sistema Completo</h3>
            </div>
            <p className="text-[#b668e9] font-medium mb-6">Implementado em Até 7 Dias</p>

            <div className="space-y-3">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#b668e9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bonuses - Hidden based on user request */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-bold text-white">Bônus Exclusivos</h3>
            </div>

            <div className="space-y-6">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[#6c2a8f]/10 border border-[#6c2a8f]/20">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold">{bonus.title}</h4>
                    {bonus.description && (
                      <p className="text-gray-400 text-sm">{bonus.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

// ==================== TARGET AUDIENCE SECTION ====================
const audiences = [
  {
    icon: Building2,
    title: "Donos de Agência",
    description: "Que querem atender mais clientes sem contratar mais analistas e copywriters."
  },
  {
    icon: TrendingUp,
    title: "Gestores de Tráfego",
    description: "Que querem entregar resultados mais consistentes e cobrar mais caro por isso."
  },
  {
    icon: Users,
    title: "Equipes In-House",
    description: "Que precisam escalar operação com uma equipe enxuta"
  }
];

function TargetAudienceSection() {
  return (
    <section className="py-20 bg-[#0c0812] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-wider text-[#b668e9] bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6">
            Público-Alvo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Para Quem é o <span className="text-[#b668e9]">Sistema Axis</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-white/5 hover:border-[#6c2a8f]/40 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#2f0f39] to-[#6c2a8f] flex items-center justify-center">
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-gray-400">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== PRICING SECTION ====================
function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0c0812] to-[#100a18] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#6c2a8f]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-wider text-[#b668e9] bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6">
            Investimento
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Quanto Custaria Montar Essa <span className="text-[#b668e9]">Estrutura do Zero?</span>
          </h2>
        </motion.div>

        {/* Cost Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center text-gray-400">
                <span>1 Analista de Dados</span>
                <span className="line-through">R$ 4.500/mês</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>1 Copywriter Sênior</span>
                <span className="line-through">R$ 5.000/mês</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>1 Desenvolvedor para Automação</span>
                <span className="line-through">R$ 8.000/mês</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-white font-semibold">Total</span>
              <span className="text-red-400 font-bold line-through">R$ 17.500/mês (R$ 210.000/ano)</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#2f0f39]/80 to-[#6e2a8f]/50 border border-[#6c2a8f]/60 overflow-hidden">
            <FlickeringGrid
              className="absolute inset-0"
              color="#b668e9"
              squareSize={5}
              gridGap={8}
              flickerChance={0.2}
              maxOpacity={0.15}
            />

            <div className="relative z-10 text-center">
              <p className="text-white/60 mb-2">Você Vai Ter o Sistema Completo Por:</p>
              <p className="text-2xl text-white/60 line-through mb-2">De R$ 4.997,00</p>

              <div className="my-6">
                <p className="text-5xl md:text-6xl font-bold text-white">
                  <span className="text-[#b668e9]">R$ 597</span>/mês
                </p>
              </div>

              <button
                onClick={openCalModal}
                className="w-full bg-white text-[#2f0f39] hover:bg-gray-100 font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 mb-4"
              >
                ASSINAR O PRODUTO AGORA
              </button>

              <div className="flex flex-col items-center gap-2 text-white/80 text-sm">
                <span>Sistema implementado em até 7 dias + Suporte Completo</span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  Garantia incondicional de 7 dias
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== FAQ SECTION ====================
const faqData = [
  {
    question: "Funciona para qualquer nicho?",
    answer: "Sim. O sistema adapta a pesquisa e análise para qualquer produto: e-commerce, infoprodutos, agências locais, SaaS, etc."
  },
  {
    question: "Quanto tempo leva a implementação?",
    answer: "Até 7 dias com nosso suporte. Em casos simples, pode estar rodando em 48-72h."
  },
  {
    question: "E se eu não tiver conhecimento técnico?",
    answer: "Oferecemos suporte técnico durante toda a implementação. Além disso, você terá acesso ao grupo VIP onde outros implementadores ajudam."
  },
  {
    question: "O sistema substitui completamente minha equipe?",
    answer: "Não. Ele substitui o trabalho operacional, repetitivo e manual. Sua equipe (ou você) continuará tomando as decisões estratégicas finais, mas com um sistema robusto trabalhando 24/7."
  },
  {
    question: "Tem garantia?",
    answer: "Sim. Garantia incondicional de 7 dias. Se você implementar o sistema e não gostar do resultado, devolvemos 100% do seu dinheiro."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-20 bg-[#0c0812] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-wider text-[#b668e9] bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6">
            Dúvidas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Perguntas <span className="text-[#b668e9]">Frequentes</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border-b border-[#2f0f39]/30 last:border-0"
            >
              <button
                className="w-full py-5 text-left group focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-white group-hover:text-[#b668e9] transition duration-200">
                    {item.question}
                  </span>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border border-[#6c2a8f]/30 transition-all duration-300 ${openIndex === idx ? 'bg-[#6c2a8f]/20 rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-[#b668e9]" />
                  </div>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pr-12">
                      <p className="text-gray-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== WARNING SECTION ====================
function WarningSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0c0812] to-[#100a18] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Aviso Importante:</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Este não é um curso para assistir passivamente. É um sistema para implementar ativamente na sua operação.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Se você busca teoria, esse não é o produto certo.{" "}
                  <span className="text-yellow-400 font-medium">
                    Se você quer resultados práticos em 7 dias, esse é o seu sistema.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== FINAL CTA SECTION ====================
function FinalCTASection() {
  return (
    <section className="py-20 bg-[#0c0812] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#2f0f39]/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Pronto para transformar sua operação de anúncios?
          </h2>

          <button
            onClick={openCalModal}
            className="bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] hover:from-[#3a1546] hover:to-[#6b2886] text-white font-bold text-xl px-12 py-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6c2a8f]/30"
          >
            SIM, QUERO O SISTEMA AXIS AGORA
          </button>

          <p className="mt-6 text-gray-400">
            Implementação em 7 dias + Garantia Total
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== FOOTER SECTION ====================
function VSLFooter() {
  return (
    <footer className="py-12 bg-[#0c0812] border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AXIS Logo" width={50} height={50} />
            <div>
              <h3 className="text-xl font-bold text-white">AXIS</h3>
              <p className="text-gray-500 text-sm">Sistema Inteligente de Criação de Anúncios</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">Todos os direitos reservados.</p>
            <a href="mailto:suporte@axis.com.br" className="text-[#b668e9] hover:underline text-sm">
              suporte@axis.com.br
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} AXIS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ==================== FLOATING CTA ====================
function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <button
        onClick={openCalModal}
        className="flex items-center gap-3 bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] hover:from-[#3a1546] hover:to-[#6b2886] text-white font-medium px-6 py-4 rounded-full shadow-lg shadow-[#6c2a8f]/30 transition-all duration-300 hover:-translate-y-1"
      >
        <Phone className="w-5 h-5" />
        <span>Falar com especialista</span>
      </button>
    </motion.div>
  );
}

// ==================== MAIN PAGE COMPONENT ====================
export default function VSLLandingPage() {
  return (
    <div className="bg-[#0c0812] max-w-7xl mx-auto border-r border-l border-neutral-800">
      {/* Simple Header */}
      <header className="py-4 px-6 border-b border-neutral-800">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="AXIS Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white">AXIS</span>
          </Link>
          <button
            onClick={openCalModal}
            className="bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] text-white font-medium px-4 py-2 rounded-lg text-sm hover:from-[#3a1546] hover:to-[#6b2886] transition-all"
          >
            Falar com especialista
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="border-b border-neutral-800">
          <HeroSection />
        </section>

        <section id="pain-points" className="border-b border-neutral-800">
          <PainPointsSection />
        </section>

        <section id="solution" className="border-b border-neutral-800">
          <SolutionSection />
        </section>

        <section id="how-it-works" className="border-b border-neutral-800">
          <HowItWorksSection />
        </section>

        <section id="what-you-get" className="border-b border-neutral-800">
          <WhatYouGetSection />
        </section>

        <section id="target-audience" className="border-b border-neutral-800">
          <TargetAudienceSection />
        </section>

        <section id="pricing" className="border-b border-neutral-800">
          <PricingSection />
        </section>

        <section id="faq" className="border-b border-neutral-800">
          <FAQSection />
        </section>

        <section id="warning" className="border-b border-neutral-800">
          <WarningSection />
        </section>

        <section id="final-cta" className="border-b border-neutral-800">
          <FinalCTASection />
        </section>
      </main>

      <VSLFooter />
      <FloatingCTA />
    </div>
  );
}
