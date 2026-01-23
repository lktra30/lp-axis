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
    answer: "Axis é uma empresa em dupla, formada por um especialista em automação e IA, e um especialista em gestão e marketing. Uma equipe pequena, garantindo agilidade e qualidade padronizada nas entregas."
  },
  {
    question: "Existe um limite de quantos projetos posso realizar?",
    answer: "Não há limite no número total de projetos que você pode realizar durante sua assinatura. A única regra é que cada novo projeto só entra na fila de implementação após a entrega do anterior, seguindo nosso fluxo de trabalho para garantir qualidade e agilidade."
  },
  {
    question: "Como funciona a opção de pausar a assinatura?",
    answer: "Entendemos que sua empresa pode ter períodos com necessidades diferentes. Por isso, oferecemos a opção de pausar sua assinatura por um período determinado caso você precise. Durante a pausa, não receberá cobranças, mas também não poderá iniciar novos projetos. Nosso sistema de cobrança é feito em ciclos de 30 dias. Vamos supor você use somente por 20 dias, e decida pausar a assinatura. Isso significa que o ciclo de cobrança será pausado e você terá 10 dias de serviço sobrando para quando reativar a assinatura."
  },
  {
    question: "Com quais tecnologias vocês trabalham?",
    answer: "Trabalhamos com uma ampla gama de tecnologias, incluindo diversas plataformas de automação, ferramentas de IA, bancos de dados e sistemas de integração. Nossa equipe é versátil e entrega sistemas que se integram perfeitamente com suas ferramentas existentes, como N8N, Make, Supabase, Airtable, CRMs, ERPs, Notion, Trello, Google Workspace, entre muitos outros."
  },
  {
    question: "Vocês oferecem reembolso?",
    answer: "Oferecemos um período de avaliação inicial de 7 dias. Se dentro desse período você não estiver satisfeito com nosso serviço e ainda não tiver realizado nenhuma implementação completa, podemos processar um reembolso de 80% do valor da assinatura. Após esse período ou após a primeira entrega, não oferecemos reembolsos, mas garantimos suporte contínuo."
  },
  {
    question: "Posso usar a AXIS por apenas um mês?",
    answer: "Sim! Nossos planos são mensais e sem fidelidade, então você pode assinar por apenas um mês se desejar. Muitos clientes começam assim para testar o serviço e acabam renovando ao perceber o valor agregado que as nossas soluções trazem para seus negócios. Você terá acesso a todas as funcionalidades da plataforma durante o período contratado."
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
