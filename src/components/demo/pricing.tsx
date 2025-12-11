"use client";

import { motion } from "framer-motion";
import { openCalModal } from "./booking";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#0c0812]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              {/* Badge */}
              <motion.span 
                className="inline-block text-sm uppercase tracking-wider text-[#6c2a8f] dark:text-[#b668e9] bg-[#6c2a8f]/10 dark:bg-[#b668e9]/10 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Pronto para começar?
              </motion.span>
              
              {/* Main headline */}
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Vamos conversar sobre sua{" "}
                <span className="text-[#2f0f39] dark:text-[#b668e9]">próxima solução</span>
              </motion.h2>
              
              {/* Subheadline */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Agende uma conversa de 15 minutos com nosso time e descubra como a AXIS pode transformar sua operação com IA.
              </motion.p>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button 
                  onClick={openCalModal}
                  className="inline-flex items-center justify-center px-10 py-5 text-[#6c2a8f] dark:text-[#b668e9] text-lg font-medium border-2 border-[#6c2a8f] dark:border-[#b668e9] rounded-full hover:bg-[#6c2a8f] dark:hover:bg-[#b668e9] hover:text-white dark:hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Entrar em Contato
                  <svg className="ml-3 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
              
              {/* Quote */}
              <motion.div
                className="mt-16 pt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] bg-clip-text text-transparent">
                  <span className="italic">&ldquo;Você traz a dor. A <span className="text-[#b668e9]">Axis</span> entrega a solução. RÁPIDO!&rdquo;</span>
                </p>
                <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mt-2">
                  É só isso. Simples assim.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
