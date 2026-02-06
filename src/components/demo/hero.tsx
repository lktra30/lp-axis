"use client";
import { motion } from "framer-motion";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Phone } from "lucide-react";
import Link from "next/link";
import { openCalModal } from "./booking";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-[#0c0812] min-h-[90vh] flex items-center">
            {/* Círculos gradiente decorativos (semelhantes à imagem de referência) */}
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

            <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
                {/* Conteúdo principal (texto e CTAs) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 max-w-3xl"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 dark:text-white">
                        <span className="block">Soluções técnicas</span>
                        <span className="block mt-2">
                            <span className="bg-gradient-to-r from-[#2f0f39] via-[#6c2a8f] to-[#b668e9] bg-clip-text text-transparent">
                                em até 7 dias
                            </span>
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                        A Axis substitui freelancers não confiáveis e agências caras por soluções em sistemas de IA e automações em uma mensalidade fixa
                    </p>
                    
                    <div className="hidden sm:flex flex-col sm:flex-row gap-4 mt-8">
                        <Link href="#pricing" className="bg-gradient-to-r from-[#2f0f39] to-[#6c2a8f] hover:from-[#3a1546] hover:to-[#6b2886] text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 inline-block text-center">
                            Ver Produtos
                        </Link>
                        <Link href="#" onClick={openCalModal} className="border-2 border-[#2f0f39] dark:border-[#6c2a8f] text-[#2f0f39] dark:text-[#b668e9] hover:bg-[#2f0f39]/5 dark:hover:bg-[#6c2a8f]/10 font-medium text-lg px-8 py-4 rounded-lg transition-colors inline-block text-center">
                            Agendar call de 15min
                        </Link>
                    </div>


                </motion.div>

                {/* Card com efeito flickering grid */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 max-w-md"
                >
                    <div className="relative p-8 rounded-md bg-gradient-to-br from-[#2f0f39]/80 to-[#6e2a8f]/50 border border-[#6c2a8f]/40 overflow-hidden">
                        <FlickeringGrid 
                            className="absolute inset-0" 
                            color="#b668e9"
                            squareSize={5}
                            gridGap={8}
                            flickerChance={0.2}
                            maxOpacity={0.15}
                        />
                        
                        <div className="relative z-10">
                            <div className="inline-block bg-black/70 text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
                                Comece hoje
                            </div>
                            
                            <h2 className="text-4xl font-bold text-white mb-6">
                                AXIS
                            </h2>
                            
                            <p className="text-white/90 mb-8">
                                Assinaturas para todas suas necessidades técnicas.
                            </p>
                            
                            <Link href="#pricing" className="w-full bg-white text-[#2f0f39] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors inline-block text-center">
                                Ver Produtos
                            </Link>
                            
                            <div className="mt-8 flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#6c2a8f] flex items-center justify-center text-xl">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <Link href="#" onClick={openCalModal} className="ml-3 flex-1">
                                    <p className="text-white text-sm font-medium">Agende uma call de 15min</p>
                                    <p className="text-white/70 text-xs">Agende agora</p>
                                </Link>
                                <Link href="/agendar" className="ml-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}