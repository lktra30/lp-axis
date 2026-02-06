"use client";

import Link from "next/link";
import React from "react";
import { MarqueeDemo } from "./marque-demo";
import Image from "next/image";

export default function Footer() {
  return (
    // Marquee
    <div>
    <MarqueeDemo />
    <footer className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo e Informações da Empresa */}
          <div className="md:col-span-4 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Image src="/logo.png" alt="AXIS Logo" width={100} height={100} />
                AXIS
              </h2>
              <p className="text-gray-400 mt-4 text-sm">
                Soluções técnicas, de forma simples.<br />
                Em 7 dias. Sem freelancers, sem agências, sem enrolação.
              </p>
            </div>
            
            <div className="mt-auto">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} AXIS. Todos os direitos reservados.
              </p>
            </div>
          </div>
          
          {/* Links Úteis */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-medium text-white mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#techstack" className="text-gray-400 hover:text-[#b668e9] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-[#b668e9] transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#b668e9] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contatos e Políticas */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-medium text-white mb-6">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://instagram.com/axissbr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#b668e9] transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:suporte@axis.com.br" className="text-gray-400 hover:text-[#b668e9] transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-mail de suporte
                </a>
              </li>
              <li>
                <div className="pt-4 flex space-x-4">
                  <Link href="/termos" className="text-gray-400 hover:text-[#b668e9] transition-colors text-xs">
                    Termos de Uso
                  </Link>
                  <span className="text-gray-600">|</span>
                  <Link href="/privacidade" className="text-gray-400 hover:text-[#b668e9] transition-colors text-xs">
                    Política de Privacidade
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
