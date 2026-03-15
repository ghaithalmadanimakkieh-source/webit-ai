"use client";

import React from 'react';

export default function TheSakaiDemo() {
  return (
    <div className="bg-[#0a0a0c] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#d4c3a1] selection:text-black">
      
      {/* HEADER / NAV */}
      <nav className="fixed w-full z-50 px-10 py-8 flex justify-between items-center bg-black/40 backdrop-blur-md">
        <div className="text-2xl font-light tracking-[0.5em] uppercase">The Sakai</div>
        <a href="tel:06989990330" className="text-[10px] tracking-[0.3em] uppercase border-b border-[#d4c3a1] pb-1 hover:opacity-50 transition">
          Reservierung
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-8">
          <div className="text-[10px] tracking-[0.6em] uppercase opacity-40 mb-4">Frankfurt am Main</div>
          <h1 className="text-7xl md:text-9xl font-extralight tracking-widest text-white leading-none">酒井</h1>
          <h2 className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase italic">The Sakai</h2>
          <div className="h-20 w-[1px] bg-[#d4c3a1] mx-auto mt-12 opacity-30"></div>
        </div>
      </section>

      {/* MENÜ SECTION - JAPANISCHE ART */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h3 className="text-xs tracking-[0.5em] uppercase opacity-50 mb-4">Omakase</h3>
          <p className="text-2xl md:text-4xl font-light italic text-white/90">"Ich überlasse es Ihnen"</p>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          {/* MENÜ RED */}
          <div className="space-y-12">
            <div className="border-b border-[#d4c3a1]/20 pb-4">
              <h4 className="text-3xl font-light tracking-widest uppercase">Red <span className="text-sm opacity-40 font-serif lowercase italic">/ 185€</span></h4>
              <p className="text-[10px] tracking-[0.3em] uppercase mt-2 opacity-50">Fisch & Wagyu</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-white font-light">Zensai Häppchen</span>
                <span className="h-[1px] flex-1 mx-4 bg-[#d4c3a1]/10"></span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-white font-light">Sashimi Selektion</span>
                <span className="h-[1px] flex-1 mx-4 bg-[#d4c3a1]/10"></span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-white font-light">Miso Gintara</span>
                <span className="h-[1px] flex-1 mx-4 bg-[#d4c3a1]/10"></span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-white font-light">Wagyu A5 Nigiri</span>
                <span className="h-[1px] flex-1 mx-4 bg-[#d4c3a1]/10"></span>
              </div>
            </div>
          </div>

          {/* MENÜ GREEN */}
          <div className="space-y-12">
            <div className="border-b border-[#d4c3a1]/20 pb-4">
              <h4 className="text-3xl font-light tracking-widest uppercase">Green <span className="text-sm opacity-40 font-serif lowercase italic">/ 145€</span></h4>
              <p className="text-[10px] tracking-[0.3em] uppercase mt-2 opacity-50">Vegan Art</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-white font-light">Edamame Shio</span>
                <span className="h-[1px] flex-1 mx-4 bg-[#d4c3a1]/10"></span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-white font-light">Yasai Tempura</span>
                <span className="h-[1px] flex-1 mx-4 bg-[#d4c3a1]/10"></span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-white font-light">Tofu Age-Dashi</span>
                <span className="h-[1px] flex-1 mx-4 bg-[#d4c3a1]/10"></span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-white font-light">Vegan Sushi Art</span>
                <span className="h-[1px] flex-1 mx-4 bg-[#d4c3a1]/10"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-32 px-6 border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 text-[10px] tracking-[0.4em] uppercase">
          <div>
            <p className="opacity-40 mb-2">Adresse</p>
            <p className="text-white">Hedderichstraße 69, 60596 Frankfurt</p>
          </div>
          <div>
            <p className="opacity-40 mb-2">Kontakt</p>
            <p className="text-white">069 89990330 / contact@the-sakai.com</p>
          </div>
          <div>
            <p className="opacity-40 mb-2">Zeiten</p>
            <p className="text-white">Mo - Sa: 18:00 — 23:00</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-[8px] tracking-[0.8em] uppercase opacity-20">
        Webit-AI × The Sakai
      </footer>

    </div>
  );
}