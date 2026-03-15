"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- HANKO-SIEGEL ---
const SakaiSeal = () => (
  <div className="border-4 border-[#ff0055] text-[#ff0055] w-20 h-20 flex items-center justify-center font-bold text-lg rotate-12 opacity-90 select-none bg-[#fff1e0]/80 backdrop-blur-sm rounded-full mx-auto shadow-lg">
    <span className="text-center leading-none uppercase">酒井<br/>SAKAI</span>
  </div>
);

// --- MENU CARD KOMPONENTE ---
const MenuCard = ({ title, kanji, items, price, accent, description }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="relative bg-[#fff1e0] border-2 border-[#d4c3a1]/20 p-12 overflow-hidden group transition-all duration-700 shadow-xl rounded-2xl"
  >
    <div className="absolute -right-4 -bottom-10 text-[20rem] font-black opacity-[0.03] pointer-events-none select-none italic text-[#ff0055]">
      {kanji}
    </div>
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-12 border-b-2 border-[#d4c3a1]/10 pb-8">
        <div>
          <span className={`text-[10px] tracking-[0.5em] uppercase opacity-50 block mb-2 ${accent}`}>Selection</span>
          <h3 className="text-5xl font-light tracking-tighter text-[#1a0b2e]">{title} <span className={`text-3xl ml-2 font-black ${accent}`}>{kanji}</span></h3>
          <p className="text-[11px] opacity-60 italic mt-2 text-[#1a0b2e]">{description}</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-light text-[#1a0b2e]">{price}</span>
        </div>
      </div>
      <div className="space-y-8">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="group/item">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-[#1a0b2e] uppercase tracking-[0.2em] text-sm font-bold">{item.name}</span>
              <span className="text-[10px] opacity-40 italic text-[#1a0b2e]">{item.origin}</span>
            </div>
            <p className="text-[11px] opacity-60 leading-relaxed text-[#1a0b2e]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function TheSakaiFinal() {
  const menuRed = [
    { name: "Sashimi Moriawase", origin: "Toyosu Market", desc: "Tagesfrische Auswahl vom World-Port Tokyo." },
    { name: "Wagyu A5 Nigiri", origin: "Kagoshima", desc: "A5-Wagyu mit Trüffel-Ponzu." },
    { name: "Miso Black Cod", origin: "Hokkaido", desc: "In Saiko-Miso marinierter Kohlenfisch." }
  ];

  return (
    <div className="bg-[#fffcf0] text-[#1a0b2e] min-h-screen font-serif selection:bg-[#ff0055] selection:text-white">
      
      {/* WOOD TEXTURE */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none bg-[url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070')] bg-cover"></div>

      {/* NAV */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center bg-[#fffcf0]/90 border-b border-[#d4c3a1]/20 backdrop-blur-md">
        <div className="text-2xl font-bold tracking-[0.3em] uppercase">The Sakai</div>
        <a href="tel:06989990330" className="bg-[#ff0055] text-white px-8 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg hover:scale-105 transition">
          Reserve
        </a>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="text-center relative z-10">
          <h1 className="text-[15rem] md:text-[22rem] font-black opacity-5 absolute left-1/2 -translate-x-1/2 -top-32 text-[#ff0055]">酒井</h1>
          <span className="text-xs tracking-[1em] uppercase mb-4 block opacity-60">Fine Japanese Dining</span>
          <h2 className="text-8xl md:text-[12rem] font-bold tracking-tighter uppercase italic drop-shadow-sm">Sakai</h2>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <MenuCard title="Red" kanji="赤" price="185€" accent="text-[#ff0055]" items={menuRed} description="The Signature Experience" />
          <MenuCard title="Green" kanji="緑" price="145€" accent="text-[#a1d4b1]" items={menuRed} description="Pure Plant Precision" />
        </div>
      </section>

      {/* --- NEU: KONTAKT & INFO SEKTION --- */}
      <section id="kontakt" className="py-32 px-6 bg-[#fff9eb] border-y border-[#d4c3a1]/20 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h4 className="text-[#ff0055] text-xs uppercase tracking-[0.4em] font-bold">Standort</h4>
            <p className="text-xl leading-relaxed font-light">
              Hedderichstraße 69<br />
              60596 Frankfurt am Main
            </p>
            <div className="pt-4">
              <a href="https://maps.google.com" target="_blank" className="text-[10px] uppercase tracking-widest border-b border-[#1a0b2e]/20 pb-1 hover:border-[#ff0055] transition">Auf Karte anzeigen</a>
            </div>
          </div>

          <div className="space-y-6 border-x border-[#d4c3a1]/20 px-8">
            <h4 className="text-[#ff0055] text-xs uppercase tracking-[0.4em] font-bold">Öffnungszeiten</h4>
            <div className="space-y-2 text-xl font-light">
              <div className="flex justify-between">
                <span>Mo — Sa</span>
                <span>18:00 — 23:00</span>
              </div>
              <div className="flex justify-between opacity-40">
                <span>Sonntag</span>
                <span>Geschlossen</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-right md:text-left">
            <h4 className="text-[#ff0055] text-xs uppercase tracking-[0.4em] font-bold">Direkt</h4>
            <p className="text-xl font-light">
              069 89990330<br />
              contact@the-sakai.com
            </p>
            <div className="flex gap-4 pt-4 justify-end md:justify-start">
               <span className="text-[10px] uppercase tracking-widest cursor-pointer hover:text-[#ff0055]">Instagram</span>
               <span className="text-[10px] uppercase tracking-widest cursor-pointer hover:text-[#ff0055]">Facebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEU: FOOTER MIT IMPRESSUM & DATENSCHUTZ --- */}
      <footer className="py-20 px-6 bg-[#fffcf0] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold tracking-[0.2em] mb-2">THE SAKAI</div>
            <p className="text-[9px] uppercase tracking-[0.5em] opacity-40">&copy; 2026 Webit-AI Studio. All rights reserved.</p>
          </div>
          
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
            <a href="#" className="hover:text-[#ff0055] transition">Impressum</a>
            <a href="#" className="hover:text-[#ff0055] transition">Datenschutz</a>
            <a href="#" className="hover:text-[#ff0055] transition">AGB</a>
          </div>

          <div className="opacity-20 text-2xl tracking-[0.5em] italic">酒井</div>
        </div>
      </footer>
    </div>
  );
}