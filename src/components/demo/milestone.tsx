"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const milestones = [
  {
    number: 1,
    title: "Envie sua demanda",
    description: "Adicione sua ideia no quadro de tarefas, simples e direto",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    number: 2,
    title: "Alinhe expectativas",
    description: "Converse com o time de especialistas para alinhar pontos importantes do projeto",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Receba em dias",
    description: "Receba sua solução em até 7 dias, mantendo velocidade e qualidade",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: 4,
    title: "Aprove e Ajuste",
    description: "Você aprova e pode requisitar ajustes a solução quantas vezes precisar",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

export default function Milestone() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-[#0c0812] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background decoration */}
        <div className="absolute -left-20 top-1/4 w-64 h-64 bg-gradient-to-tr from-[#2f0f39]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 w-64 h-64 bg-gradient-to-bl from-[#6c2a8f]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="text-center mb-10 md:mb-16 relative z-10">
          <motion.h2 
            className="text-2xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Como Funciona
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-[#2f0f39] to-[#b668e9] mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Um processo unificado e simplificado, 100% via Trello, para transformar suas necessidades em soluções reais
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-[#2f0f39] via-[#6c2a8f] to-[#b668e9] z-0"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={cn(
                "p-4 md:p-6 rounded-xl aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden",
                "transition-all duration-300 transform",
                "bg-gradient-to-b from-white to-neutral-50 dark:from-[#16121e] dark:to-[#100a18]",
                "border border-neutral-100/80 dark:border-[#2f0f39]/30",
                "shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)]",
                "hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]",
                "hover:-translate-y-1"
              )}>
                {/* Grid pattern background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1a29_1px,transparent_1px),linear-gradient(to_bottom,#1f1a29_1px,transparent_1px)] bg-[size:20px_20px] opacity-60 dark:opacity-30"></div>
                
                {/* Milestone number/icon */}
                <div className={cn(
                  "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white mb-3 md:mb-4",
                  "bg-gradient-to-br from-[#2f0f39] to-[#6c2a8f]",
                  "shadow-lg shadow-[#6c2a8f]/10",
                  "relative z-10"
                )}>
                  <span className="text-xl md:text-2xl font-bold">{milestone.number}</span>
                </div>
                
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-neutral-800 dark:text-neutral-200 relative z-10">{milestone.title}</h3>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 relative z-10">{milestone.description}</p>
                
                {/* Icon in the background - subtle */}
                <div className="absolute bottom-2 right-2 opacity-5 text-[#6c2a8f] dark:text-[#b668e9] transform scale-125">
                  {milestone.icon}
                </div>
              </div>
              
              {/* Mobile connector line */}
              {index < milestones.length - 1 && index % 2 === 1 && (
                <div className="h-6 w-0.5 bg-gradient-to-b from-[#2f0f39] to-[#6c2a8f] mx-auto my-1 block sm:hidden"></div>
              )}
              {index < milestones.length - 2 && index % 2 === 0 && (
                <div className="hidden"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-10 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#" className="text-[#6c2a8f] dark:text-[#b668e9] text-sm md:text-base font-medium inline-flex items-center border-b border-[#6c2a8f]/40 dark:border-[#b668e9]/40 pb-1 hover:text-[#8a3ec8] hover:border-[#8a3ec8] transition-colors">
            Ver exemplos de projetos entregues
            <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
