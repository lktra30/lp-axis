// import Image from "next/image";

import { NavbarDemo } from "@/components/demo/nav-demo";
import Hero from "@/components/demo/hero";
import Milestone from "@/components/demo/milestone";
import Benefits from "@/components/demo/benefits";
import TechStack from "@/components/demo/techstack";
import Pricing from "@/components/demo/pricing";
import Footer from "@/components/demo/footer";
import FAQ from "@/components/demo/faq";
export default function Home() {
  return (
    <div className="bg-[#0c0812] max-w-7xl mx-auto border-r border-l border-neutral-800">
      <header className="top-0 z-40 sticky">
        <NavbarDemo />
      </header>
      
      <section id="hero" className="border-b border-neutral-800">
        <Hero />
      </section>
      
      <section id="milestone" className="border-b border-neutral-800">
        <Milestone />
      </section>
      
      <section id="benefits" className="border-b border-neutral-800">
        <Benefits />
      </section>
      
      <section id="techstack" className="border-b border-neutral-800">
        <TechStack />
      </section>
      
      <section id="pricing" className="border-b border-neutral-800">
        <Pricing />
      </section>

      <section id="faq" className="border-b border-neutral-800">
        <FAQ />
      </section>

      <div id="footer">
        <Footer />  
      </div>

    </div>
  );
}


