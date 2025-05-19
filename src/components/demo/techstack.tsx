"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Vendas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    example: "Automação de follow-up com leads por WhatsApp"
  },
  {
    title: "Marketing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    example: "Automação de geração de conteúdo com IA"
  },
  {
    title: "Operações",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    example: "Painel de controle com pipeline de operações"
  },
  {
    title: "Atendimento",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    example: "Chatbot inteligente treinado com FAQ do negócio"
  },
  {
    title: "Financeiro",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    example: "Sistema de cobrança com aviso automático por WhatsApp"
  },
  {
    title: "Backoffice",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    example: "Automação de organização de arquivos por cliente/mês"
  },
  {
    title: "Gestão",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    example: "Dashboard com métricas de produtividade da equipe"
  }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white dark:bg-[#0c0812] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background decorations */}
        <div className="absolute -right-20 top-1/4 w-64 h-64 bg-gradient-to-tr from-[#2f0f39]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-1/3 w-64 h-64 bg-gradient-to-bl from-[#6c2a8f]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Nossa <span className="text-[#2f0f39] dark:text-[#b668e9]">Stack</span> e <span className="text-[#2f0f39] dark:text-[#b668e9]">Soluções</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] mx-auto rounded-full mt-4"></div>
          </motion.div>
          
          {/* Two Main Cards Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* About AXIS Card */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-[#2f0f39]/30 bg-white dark:bg-[#16121e] h-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f]"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Sobre a <span className="text-[#2f0f39] dark:text-[#b668e9]">AXIS</span>
                </h3>
                
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>
                    Somos uma plataforma por assinatura que entrega tecnologia de verdade de forma
                    simplificada. Desenvolvemos bots, sistemas de IA, integrações, automações e soluções com IA
                    em tempo recorde, para empresas que precisam de velocidade, sem perder qualidade.
                  </p>
                  <p>
                    É como ter um time de tecnologia e IA à sua disposição 24/7, pronto pra entregar o que você
                    precisa — uma solução de cada vez, com velocidade e qualidade.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="mt-8 bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] rounded-xl p-5 text-white shadow-lg">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-1">+50</h3>
                      <p className="text-sm opacity-80">Soluções entregues</p>
                    </div>
                    <div className="hidden md:block h-12 w-px bg-white/20"></div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-1">7 dias</h3>
                      <p className="text-sm opacity-80">Média de entrega</p>
                    </div>
                  </div>
                </div>
                
                {/* Tech Cards */}
              </div>
            </motion.div>
            
            {/* What AXIS Delivers Card */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-[#2f0f39]/30 bg-white dark:bg-[#16121e] max-h-[90vh]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 bg-gradient-to-r from-[#6c2a8f] to-[#2f0f39]"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  A <span className="text-[#2f0f39] dark:text-[#b668e9]">AXIS</span> entrega isso e muito mais
                </h3>
                
                {/* Category Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categories.slice(0, 6).map((category, index) => (
                    <motion.div
                      key={category.title}
                      className={cn(
                        "p-4 rounded-lg",
                        "transition-all duration-300 transform",
                        "bg-gray-50 dark:bg-[#100a18]",
                        "border border-gray-100 dark:border-[#2f0f39]/30",
                        "shadow-sm hover:shadow-md hover:-translate-y-1"
                      )}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.07 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-md bg-gradient-to-br from-[#2f0f39] to-[#6c2a8f] text-white">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">{category.title}</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{category.example}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* See More Button */}
                <div className="mt-8 text-center">
                  <a href="#todas-solucoes" className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#6c2a8f]/20 transition-all duration-300 transform hover:-translate-y-1">
                    Ver mais soluções
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

