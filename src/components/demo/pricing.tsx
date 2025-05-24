"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { openCalModal } from "./booking";

const plans = [
  {
    name: "Essential",
    price: "R$1990",
    period: "/mês",
    features: [
      "Soluções Ilimitadas",
      "Até 3 Setores Internos",
      "1 Consultoria de Setup"
      
    ], 
    buttonText: "Assinar",
    variant: "solid",
    buttonLink: "https://buy.stripe.com/cNi28r6Mza5c01T0Ji3VC00"
  },
  {
    name: "Growth",
    price: "R$3100",
    period: "/mês",
    features: [
      "Soluções Ilimitadas",
      "Até 5 Setores Internos",
      "1 Consultoria Mensal",
      
    ],
    buttonText: "Assinar",
    variant: "solid",
    buttonLink: "https://buy.stripe.com/dRm8wPfj53GO8ypeA83VC01"
  },
  {
    name: "Scale",
    price: "R$4200",
    period: "/mês",
    features: [
      "Soluções Ilimitadas",
      "Até 8 Setores Internos",
      "1 Consultoria Semanal",
      "1 Workshop Trimestral"
    ],
    buttonText: "Assinar",
    variant: "solid",
    buttonLink: "https://buy.stripe.com/cNidR97QDgtA7ul9fO3VC02"
  },
  {
    name: "Enterprise",
    price: null,
    period: null,
    features: [
      "Soluções Ilimitadas",
      "Todos os Setores Internos",
      "Acompanhamento Semanal",
      "1 Workshop Mensal"
    ],
    buttonText: "Entrar em contato",
    variant: "outline",
    buttonLink: ""
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-[#0c0812]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <motion.span 
            className="text-sm uppercase tracking-wider text-[#6c2a8f] dark:text-[#b668e9] "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Planos de Assinatura
          </motion.span>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Escolha o plano ideal para sua empresa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl overflow-hidden border border-gray-200 dark:border-[#2f0f39]/30 bg-white dark:bg-[#16121e] shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Top stripe */}
              <div
                className={cn(
                  "h-1",
                  plan.variant === "solid"
                    ? "bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f]"
                    : "bg-gray-300 dark:bg-[#2f0f39]/10"
                )}
              />
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {plan.name}
                </h3>
                {plan.price ? (
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                    <span className="text-lg font-normal ml-1 text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Entrar em contato
                  </div>
                )}
                <ul className="mt-6 space-y-2 flex-grow">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button
                    className={cn(
                      "w-full py-3 rounded-lg font-medium transition",
                      plan.variant === "solid"
                        ? "bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] text-white hover:shadow-lg"
                        : "border border-gray-300 dark:border-[#2f0f39]/30 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#1a1324]"
                    )}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] bg-clip-text text-transparent">
            <span className="italic">&ldquo;Você traz a dor. A <span className="text-[#b668e9]">Axis</span> entrega a solução. RÁPIDO!&rdquo;</span><br/>
            <span className="text-md md:text-2xl font-medium">É só isso. Simples assim.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="sm:w-auto w-full bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] text-white py-3 px-8 rounded-full font-medium shadow-lg transform transition hover:scale-105">
              Assinar agora
            </button>
            <button className="sm:w-auto w-full text-[#2f0f39] dark:text-[#b668e9] border-2 border-[#2f0f39] dark:border-[#b668e9] py-3 px-8 rounded-full font-medium transition hover:bg-[#2f0f39] dark:hover:bg-[#b668e9] hover:text-white hover:shadow-lg" onClick={openCalModal}>
              Falar com especialista
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
