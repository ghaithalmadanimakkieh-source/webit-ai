"use client";

import React from 'react';

export default function TheSakaiDemo() {
  return (
    <div className="bg-[#0a0a0a] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#d4c3a1] selection:text-black">
      
      {/* NAVIGATION - Puristisch & Elegant */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-[#d4c3a1]/10">
        <div className="text-2xl font-bold tracking-[0.4em] uppercase text-[#d4c3a1]">The Sakai</div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-light">
          <a href="#menu" className="hover:text-white transition">Menü</a>
          <a href="#omakase" className="hover:text-white transition">Omakase</a>
          <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
        </div>
        <a href="tel:06989990330" className="border border-[#d4c3a1] px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-[#d4c3a1] hover:text-black transition duration-500">
          Reservieren
        </a>
      </nav>

      {/* HERO SECTION - Fokus auf das Produkt */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a] z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/d/1XvI9oH89uG9XN4y3YV6wFvJ2Y4F5G6H7" 
            alt="Japanische Kochkunst" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="relative z-20 text-center space-y-8 px-4">
          <div className="flex justify-center mb-4">
            <span className="h-[1px] w-16 bg-[#d4c3a1] self-center opacity-30"></span>
            <span className="mx-6 text-[10px] tracking-[0.6em] uppercase opacity-70">Frankfurt am Main</span>
            <span className="h-[1px] w-16 bg-[#d4c3a1] self-center opacity-30"></span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-light tracking-[0.05em] leading-none">
            酒井 <span className="uppercase font-bold italic text-white">Sakai</span>
          </h1>
          <p className="text-sm md:text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-[0.1em] italic opacity-60">
            "Inspiration mit Tradition. Qualität mit Ambiente."
          </p>
          <div className="pt-12">
            <a href="#omakase" className="inline-block border border-[#d4c3a1]/40 px-16 py-5 uppercase tracking-[0.4em] text-[11px] hover:bg-[#d4c3a1] hover:text-black transition-all duration-700 font-bold">
              Entdecken
            </a>
          </div>
        </div>
      </section>

      {/* MICHELIN SECTION */}
      <section id="omakase" className="py-40 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-40">Michelin Guide 2023</h2>
          <p className="text-3xl md:text-5xl leading-[1.5] font-light text-white/90">
            Erleben Sie unser einzigartiges <span className="italic text-[#d4c3a1]">Sushi-Omakase-Menü</span>. 
            Meisterhafte Präzision bei jedem Handgriff.
          </p>
          <div className="w-20 h-[1px] bg-[#d4c3a1] mx-auto opacity-30"></div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">
          <div className="space-y-10 group">
            <h3 className="text-5xl font-light italic text-white group-hover:text-[#d4c3a1] transition-colors">Menü Red</h3>
            <p className="opacity-60 leading-relaxed font-light text-lg">Signature Menü mit erlesenem Fisch und japanischem Wagyu-Fleisch.</p>
            <div className="space-y-8 border-l border-[#d4c3a1]/20 pl-8">
              <div>
                <span className="block text-white uppercase tracking-widest text-sm mb-1">Sashimi Moriawase</span>
                <span className="text-[10px] opacity-40 uppercase tracking-widest">Die Essenz des Meeres</span>
              </div>
              <div>
                <span className="block text-white uppercase tracking-widest text-sm mb-1">Wagyu A5 Nigiri</span>
                <span className="text-[10px] opacity-40 uppercase tracking-widest">Zartschmelzende Perfektion</span>
              </div>
            </div>
          </div>

          <div className="space-y-10 group">
            <h3 className="text-5xl font-light italic text-white group-hover:text-[#d4c3a1] transition-colors">Menü Green</h3>
            <p className="opacity-60 leading-relaxed font-light text-lg">Pflanzliche Gourmet-Küche. Die Reinheit der japanischen Natur.</p>
            <div className="space-y-8 border-l border-[#d4c3a1]/20 pl-8">
              <div>
                <span className="block text-white uppercase tracking-widest text-sm mb-1">Yasai Sushi Selection</span>
                <span className="text-[10px] opacity-40 uppercase tracking-widest">Saisonale Kostbarkeiten</span>
              </div>
              <div>
                <span className="block text-white uppercase tracking-widest text-sm mb-1">Matcha Kokos Mochi</span>
                <span className="text-[10px] opacity-40 uppercase tracking-widest">Hausgemacht & Frisch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center border-t border-[#d4c3a1]/10 pt-20">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-[#d4c3a1]">Location</h4>
            <p className="opacity-70 font-light leading-relaxed">Hedderichstraße 69<br />60596 Frankfurt</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-[#d4c3a1]">Öffnungszeiten</h4>
            <p className="opacity-70 font-light leading-relaxed">Mo. - Sa. 18:00 - 23:00<br />Sonntag Ruhetag</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-[#d4c3a1]">Kontakt</h4>
            <p className="opacity-70 font-light leading-relaxed">069 89990330<br />contact@the-sakai.com</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-[9px] uppercase tracking-[0.5em] opacity-20">
        &copy; 2026 Webit-AI // Ghaith Almadani // Frankfurt Edition
      </footer>

    </div>
  );
}