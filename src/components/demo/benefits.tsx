"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Quadro de controle",
    description: "Gerencie facilmente sua fila de projetos com um quadro Trello.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    gradient: "from-[#2f0f39] to-[#3d1a4b]",
    textColor: "text-[#b668e9]"
  },
  {
    title: "Taxa mensal fixa",
    description: "Sem preocupações! Pague o mesmo preço fixo todo mês.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: "from-[#3d1a4b] to-[#4c2366]",
    textColor: "text-[#b668e9]"
  },
  {
    title: "Entrega rápida",
    description: "Receba sua solução, uma de cada vez, em poucos dias.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-[#4c2366] to-[#5c2c81]",
    textColor: "text-[#b668e9]"
  },
  {
    title: "Sem complicação",
    description: "Sem freelancers não confiáveis e agências caras. Na palma da sua mão sempre que precisar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    gradient: "from-[#5c2c81] to-[#6c2a8f]",
    textColor: "text-[#b668e9]"
  },
  {
    title: "Soluções ilimitadas",
    description: "Uma única mensalidade e receba quantos projetos você precisar, um por um.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-[#6c2a8f] to-[#8a42ad]",
    textColor: "text-[#b668e9]"
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-[#0c0812] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background decoration */}
        <div className="absolute -left-20 top-1/4 w-64 h-64 bg-gradient-to-tr from-[#2f0f39]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 w-64 h-64 bg-gradient-to-bl from-[#6c2a8f]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <motion.span 
            className="text-sm uppercase tracking-wider text-[#6c2a8f] dark:text-[#b668e9] "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BENEFÍCIOS DA ASSINATURA
          </motion.span>
          
          <motion.div 
            className="mt-4 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl  text-neutral-900 dark:text-neutral-100">
              <span className="italic ">Velocidade e qualidade</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A Axis substitui freelancers não confiáveis e agências caras por uma taxa mensal fixa, 
            com soluções entregues tão rápido que você não vai querer ir a outro lugar.
          </motion.p>
        </div>

        {/* Container para scroll horizontal no mobile */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          {/* Indicador de scroll para mobile */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-neutral-50 dark:from-[#0c0812] via-neutral-50/80 dark:via-[#0c0812]/80 to-transparent z-20 flex items-center justify-start pointer-events-none md:hidden">
            <svg className="w-5 h-5 text-[#6c2a8f] dark:text-[#b668e9] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          <div className="overflow-x-auto overflow-y-hidden pb-4 md:pb-0 scrollbar-hide md:overflow-visible">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative md:gap-6 md:grid">
              {/* No mobile: flex row com largura fixa */}
              <div className="flex md:hidden space-x-4 pl-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="relative z-10 min-w-[60vw] max-w-[60vw] flex-shrink-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={cn(
                      "h-full rounded-xl overflow-hidden flex flex-col",
                      "transition-all duration-300 transform",
                      "hover:shadow-xl hover:-translate-y-1",
                    )}>
                      {/* Gradient card with grid pattern */}
                      <div className={cn(
                        "aspect-square relative overflow-hidden bg-gradient-to-br",
                        benefit.gradient
                      )}>
                        {/* Grid pattern overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                        
                        {/* Icon with glitter effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white relative overflow-hidden">
                            {/* Glitter/texture effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_80%)] opacity-70"></div>
                            {benefit.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 bg-white dark:bg-[#16121e] border border-neutral-100 dark:border-[#2f0f39]/30 flex-1 flex flex-col">
                        <h3 className="text-lg mb-2 text-neutral-900 dark:text-neutral-100">{benefit.title}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* No desktop: grid normal */}
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 hidden md:block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={cn(
                    "h-full rounded-xl overflow-hidden flex flex-col",
                    "transition-all duration-300 transform",
                    "hover:shadow-xl hover:-translate-y-1",
                  )}>
                    {/* Gradient card with grid pattern */}
                    <div className={cn(
                      "aspect-square relative overflow-hidden bg-gradient-to-br",
                      benefit.gradient
                    )}>
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                      
                      {/* Icon with glitter effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white relative overflow-hidden">
                          {/* Glitter/texture effect */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_80%)] opacity-70"></div>
                          {benefit.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 bg-white dark:bg-[#16121e] border border-neutral-100 dark:border-[#2f0f39]/30 flex-1 flex flex-col">
                      <h3 className="text-lg mb-2 text-neutral-900 dark:text-neutral-100">{benefit.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] text-white  hover:shadow-lg hover:shadow-[#6c2a8f]/30 transition-all duration-300 transform hover:-translate-y-1">
            Ver planos disponíveis
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
