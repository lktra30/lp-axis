"use client";

import { motion } from "framer-motion";
import { openCalModal } from "./booking";

const solutions = [
  {
    title: "Gestão e Criação de VSL Copy com IA",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    description: "Crie VSLs de alta conversão com scripts gerados por IA"
  },
  {
    title: "CRM Automático com IA",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: "Gestão inteligente de leads e clientes com automações"
  },
  {
    title: "Inbound Sales Agent com IA",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    description: "Agente de vendas que qualifica e converte leads 24/7"
  },
  {
    title: "Customer Support e Ticketing com IA",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description: "Suporte automatizado com gestão inteligente de tickets"
  },
  {
    title: "Soluções Personalizadas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    description: "Desenvolvemos qualquer solução sob medida para seu negócio"
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
          
          {/* Main Cards Stacked Vertically */}
          <div className="grid grid-cols-1 gap-8 mb-20">
            {/* About AXIS Card */}
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Sobre a <span className="text-[#2f0f39] dark:text-[#b668e9]">AXIS</span>
                </h3>
                
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>
                    Somos uma plataforma por assinatura que entrega tecnologia de verdade de forma simplificada. Entregamos soluções e sistemas com IA em tempo recorde, para empresas que precisam de velocidade, sem perder qualidade.
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  A <span className="text-[#2f0f39] dark:text-[#b668e9]">AXIS</span> entrega isso e muito mais
                </h3>
                
                {/* Solutions Cards - Vertical Layout */}
                <div className="space-y-6">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution.title}
                      className="group flex items-start gap-4 py-4 border-b border-gray-100 dark:border-[#2f0f39]/20 last:border-b-0 transition-all duration-300 hover:pl-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.07 }}
                    >
                      <div className="p-2 rounded-lg text-[#6c2a8f] dark:text-[#b668e9] flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-[#6c2a8f] dark:group-hover:text-[#b668e9] transition-colors">{solution.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{solution.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="mt-10 text-center">
                  <button 
                    onClick={openCalModal}
                    className="inline-flex items-center justify-center px-8 py-4 text-[#6c2a8f] dark:text-[#b668e9] font-medium border-2 border-[#6c2a8f] dark:border-[#b668e9] rounded-full hover:bg-[#6c2a8f] dark:hover:bg-[#b668e9] hover:text-white dark:hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Entrar em Contato
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

