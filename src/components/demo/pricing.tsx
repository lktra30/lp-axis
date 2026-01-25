"use client";

import { motion } from "framer-motion";
import { Check, Bot, Users, Brain, TrendingUp } from "lucide-react";

const plans = [
  {
    title: "VSL Intelligence",
    description: "Transforme visitantes em clientes com scripts de alta conversão gerados por IA.",
    price: "R$ 597",
    period: "/mês",
    icon: Brain,
    features: [
      "Roteiros de VSL Persuasivos",
      "Copy para Anúncios (Ads)",
      "Otimização em Tempo Real",
      "Testes A/B Automatizados"
    ],
    highlight: true,
    link: "#"
  },
  {
    title: "Auto CRM",
    description: "Centralize e potencialize seu relacionamento com clientes. Automação completa.",
    price: "R$ 99,90",
    period: "/mês",
    icon: Users,
    features: [
      "Gestão de Leads Centralizada",
      "Automação de Follow-up",
      "Integração Multicanal",
      "Pipeline Visual Personalizável"
    ],
    highlight: false,
    link: "#"
  },
  {
    title: "Closer Intelligence",
    description: "Relatórios das calls dos seus closers instantaneamente. Aumente seu fechamento.",
    price: "R$ 297,99",
    period: "/mês",
    icon: Bot,
    features: [
      "Atendimento 24/7",
      "Qualificação de Leads",
      "Agendamento Automático",
      "Treinamento com Base de Dados"
    ],
    highlight: false,
    link: "#"
  },
  {
    title: "Inbound Sales Agent",
    description: "Atraia e converta leads qualificados automaticamente. Estratégias turbinadas.",
    price: "R$ 497",
    period: "/mês",
    icon: TrendingUp,
    features: [
      "Nutrição de Leads",
      "Conteúdo Personalizado",
      "Scoring Preditivo",
      "Automação de E-mail Marketing"
    ],
    highlight: false,
    link: "#"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#0c0812] relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#6c2a8f]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-sm uppercase tracking-wider text-[#6c2a8f] dark:text-[#b668e9] bg-[#6c2a8f]/10 dark:bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nossas Soluções
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Escolha o plano ideal para <br/>
            <span className="text-[#2f0f39] dark:text-[#b668e9]">escalar sua operação</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tecnologia de ponta e estratégias validados para impulsionar seus resultados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-2xl p-6 flex flex-col hover:shadow-2xl transition-all duration-300 overflow-hidden
                ${plan.highlight
                    ? 'bg-[#6c2a8f]/5 dark:bg-[#0c0812]/50 border border-[#6c2a8f] dark:border-[#6c2a8f]/50'
                    : 'bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-white/10 hover:border-[#6c2a8f]/30 dark:hover:border-white/20'
                }`}
            >
              {/* Top-left Glow Accent */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#6c2a8f] blur-[50px] rounded-full group-hover:bg-[#8e3db8] transition-colors duration-500 opacity-40 dark:opacity-60" />

              {/* Icon */}
              <div className={`relative mb-6 z-10 w-10 h-10 flex items-center justify-center rounded-lg border 
                  ${plan.highlight
                      ? 'bg-[#6c2a8f] text-white border-[#6c2a8f]'
                      : 'bg-gray-50 dark:bg-white/5 text-[#6c2a8f] dark:text-white border-gray-200 dark:border-white/10'
                  }`}>
                <plan.icon size={20} />
              </div>

              {/* Title & Description */}
              <div className="relative z-10 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 whitespace-pre-line leading-tight">{plan.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
               <div className="w-full h-px bg-gray-100 dark:bg-white/5 mb-6" />

               {/* Price */}
              <div className="relative z-10 mb-8">
                 <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">{plan.period}</span>
                </div>
              </div>


              {/* Button */}
              <a 
                href={plan.link}
                className={`w-full py-3 px-4 rounded-lg text-sm font-medium text-center transition-all duration-300 mb-8 z-10 flex items-center justify-center gap-2
                  ${plan.highlight 
                    ? 'bg-[#6c2a8f] text-white hover:bg-[#5a2377]' 
                    : 'bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 border border-transparent dark:border-white/5'}`}
              >
                Começar Agora
              </a>

              {/* Features Label */}
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                Recursos
              </p>

              {/* Features List */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                     <Check size={14} className={`mt-1 shrink-0 ${plan.highlight ? 'text-[#6c2a8f] dark:text-[#b668e9]' : 'text-[#6c2a8f] dark:text-gray-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
