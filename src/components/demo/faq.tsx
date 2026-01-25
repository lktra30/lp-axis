"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { openCalModal } from "./booking";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quem são os especialistas?",
    answer: "A Axis é uma plataforma desenvolvida por três especialistas: um em automação e sistemas de IA, um em gestão e processos, e um em marketing e vendas. Uma equipe pequena, que buscou unir experiência e visão para desenvolver uma solução que garante agilidade e qualidade padronizada nas entregas, com o objetivo de revolucionar o mercado de soluções técnicas."
  },
  {
    question: "Existe um limite de quantos planos posso assinar?",
    answer: "Não há limite no número total de assinaturas dos planos referentes aos produtos, a única regra é que cada novo produto só entra na fila de implementação após o onboarding do anterior, seguindo o fluxo de trabalho da plataforma para garantir qualidade e agilidade."
  },
  {
    question: "Como funciona a opção de pausar a assinatura?",
    answer: "Entendemos que sua empresa pode ter períodos com necessidades diferentes. Por isso, a Axis oferece a opção de pausar sua assinatura por um período determinado caso você precise. Durante a pausa, você não receberá cobranças. Nosso sistema de cobrança é feito em ciclos de 30 dias. Vamos supor que você use somente por 20 dias, e decida pausar a assinatura. Isso significa que o ciclo de cobrança será pausado e você terá 10 dias de acesso sobrando para utilizar a assinatura e depois pode reativar a assinatura."
  },
  {
    question: "Vocês oferecem reembolso?",
    answer: "Oferecemos um período de avaliação inicial de 7 dias. Se dentro desse período você não estiver satisfeito com a plataforma de serviços e ainda não tiver realizado nenhuma implementação completa, podemos processar um reembolso de 80% do valor da assinatura. Após esse período ou após a primeira assinatura, não oferecemos reembolsos, mas garantimos suporte contínuo."
  },
  {
    question: "Posso usar a AXIS apenas um mês?",
    answer: "Sim! Nossos planos são mensais e sem fidelidade, então você pode assinar por apenas um mês se desejar. Muitas empresas começam assim para validar a plataforma e acabam renovando ao perceber o valor agregado que as nossas soluções trazem para suas infraestruturas. Você terá acesso a todas as funcionalidades da plataforma e ao seu plano durante o período de assinatura."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full h-auto flex flex-col py-6 md:py-10 bg-white dark:bg-[#0c0812] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:max-w-6xl h-full">
        <div className="flex flex-col items-start text-left mb-4">
          <h2 className="text-2xl md:text-3xl font-bold italic text-black dark:text-white">
            Perguntas <span className="text-2xl md:text-3xl font-normal not-italic">frequentes</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row h-auto gap-4">
          {/* FAQ à esquerda */}
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <div className="w-full space-y-0">
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-200 dark:border-[#2f0f39]/20 last:border-0"
                >
                  <button
                    className="w-full py-3 text-left group focus:outline-none"
                    onClick={() => toggle(idx)}
                    aria-expanded={openIndex === idx}
                  >
                    <div className="flex items-center">
                      <div className={`relative flex items-center justify-center mr-2 w-5 h-5 shrink-0 rounded-full border border-[#6c2a8f]/30 dark:border-[#b668e9]/30 transition-all duration-300 ${openIndex === idx ? 'bg-[#6c2a8f]/10 dark:bg-[#b668e9]/10' : ''}`}>
                        <ChevronDown
                          className={`w-3 h-3 text-[#6c2a8f] dark:text-[#b668e9] transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                        />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white group-hover:text-[#6c2a8f] dark:group-hover:text-[#b668e9] transition duration-200">
                        {item.question}
                      </span>
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
                        <div className="pb-3 pl-7 pr-4">
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA quadrado */}
          <div className="lg:w-80 lg:h-80 shrink-0 mt-4 lg:mt-0 flex">
            <div className="aspect-square w-full relative p-6 rounded-lg bg-gradient-to-br from-[#2f0f39]/80 to-[#6e2a8f]/50 border border-[#6c2a8f]/40 overflow-hidden">
              <FlickeringGrid
                className="absolute inset-0"
                color="#b668e9"
                squareSize={5}
                gridGap={8}
                flickerChance={0.2}
                maxOpacity={0.15}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="inline-block bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                    Dúvidas?
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    Agende uma call
                  </h3>

                  <p className="text-white/90 text-sm mb-5">
                    Tire suas dúvidas em uma conversa rápida de 15 minutos.
                  </p>

                  <button className="w-full bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] hover:from-[#3a1546] hover:to-[#6b2886] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" onClick={openCalModal}>
                    Agendar agora
                  </button>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#6c2a8f] flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div onClick={openCalModal} className="ml-3">
                    <p className="text-white text-xs font-medium">Call de 15 minutos</p>
                    <p className="text-white/70 text-xs">Sem compromisso</p>
                  </div>
                  <div className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
