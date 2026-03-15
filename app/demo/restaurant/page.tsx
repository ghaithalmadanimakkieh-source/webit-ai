"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- HANKO-SIEGEL-KOMPONENTE ---
const SakaiSeal = () => (
  <div className="border-4 border-[#ff0055] text-[#ff0055] w-20 h-20 flex items-center justify-center font-bold text-lg rotate-12 opacity-90 select-none font-sans shadow-lg bg-[#fff1e0]/80 backdrop-blur-sm rounded-full mx-auto">
    <span className="text-center leading-none uppercase">酒井<br/>SAKAI</span>
  </div>
);

const MenuCard = ({ title, kanji, items, price, color, accent, description }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="relative bg-[#fff1e0] border-4 border-[#d4c3a1]/20 p-12 overflow-hidden group transition-all duration-700 shadow-2xl rounded-2xl"
  >
    {/* Hintergrund-Kanji als Wasserzeichen */}
    <div className="absolute -right-4 -bottom-10 text-[20rem] font-black opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700 select-none">
      {kanji}
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-16 border-b-2 border-[#d4c3a1]/30 pb-8 gap-4">
        <div>
          <span className={`text-[11px] tracking-[0.6em] uppercase opacity-60 block mb-2 ${accent}`}>Selection</span>
          <h3 className="text-6xl font-light tracking-tighter text-[#1a0b2e] flex items-center gap-4">
            {title} <span className="text-2xl opacity-30 font-serif">/</span> <span className={`text-4xl italic font-black ${accent}`}>{kanji}</span>
          </h3>
          <p className="text-[12px] opacity-70 italic tracking-wider text-[#1a0b2e] mt-4">{description}</p>
        </div>
        <div className="text-right">
          <span className="text-4xl font-light tracking-widest block text-[#1a0b2e]">{price}</span>
          <span className="text-[10px] uppercase tracking-widest opacity-50 text-[#1a0b2e]">pro Person</span>
        </div>
      </div>

      <div className="space-y-12">
        {items.map((item, idx) => (
          <div key={idx} className="relative pl-12 group/item transition-all duration-300">
            <div className={`absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#d4c3a1]/40 to-transparent group-hover/item:via-${accent} transition-all`} />
            <div className="flex justify-between items-baseline mb-2 gap-4">
              <span className="text-[#1a0b2e] uppercase tracking-[0.3em] text-sm font-semibold">{item.name}</span>
              <span className="h-[2px] flex-grow mx-4 bg-[#d4c3a1]/20" />
              <span className="text-[10px] opacity-40 italic text-[#1a0b2e]">{item.origin}</span>
            </div>
            <p className="text-[12px] opacity-60 font-light tracking-wider leading-relaxed max-w-xl text-[#1a0b2e]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function TheSakaiAuthenticJapan() {
  const menuRed = [
    { name: "Sashimi Moriawase", origin: "Toyosu Market", desc: "Drei Variationen vom tagesfrischen Wildfang, serviert mit Shizuoka-Wasabi." },
    { name: "Wagyu A5 Nigiri", origin: "Kagoshima", desc: "A5-Wagyu mit einer Reduktion aus gereifter Sojasauce und Trüffel-Ponzu." },
    { name: "Miso Black Cod", origin: "Hokkaido", desc: "In Saiko-Miso marinierter Kohlenfisch, über Binchotan gegrillt." }
  ];

  const menuGreen = [
    { name: "Yasai Sushi", origin: "Local Farmers", desc: "Fermentiertes Saisongemüse auf Shari-Reis mit rotem Essig (Akazu)." },
    { name: "Nasu Dengaku", origin: "Kamo Eggplant", desc: "Japanische Aubergine mit süßer Miso-Glaze und Sesam." },
    { name: "Matcha Fondant", origin: "Uji Matcha", desc: "Flüssiger Kern aus Matcha, serviert mit Yuzu-Sorbet." }
  ];

  return (
    <div className="bg-[#fffcf0] text-[#1a0b2e] min-h-screen font-serif selection:bg-[#ff0055] selection:text-white overflow-x-hidden">
      
      {/* WOOD TEXTURE OVERLAY - WARM WOOD */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070')] bg-cover bg-center"></div>

      {/* MINIMAL NAV */}
      <nav className="fixed w-full z-50 px-12 py-8 flex justify-between items-center bg-[#fffcf0]/95 border-b-2 border-[#d4c3a1]/10 backdrop-blur-sm">
        <div className="flex items-center gap-10">
          <div className="text-3xl font-bold tracking-[0.4em] uppercase text-[#1a0b2e]">The Sakai</div>
          <span className="hidden lg:block text-[10px] uppercase tracking-[0.5em] opacity-50 italic text-[#1a0b2e]">Inspiration mit Tradition</span>
        </div>
        <div className="flex gap-8 items-center text-[11px] uppercase tracking-[0.3em] font-medium text-[#1a0b2e]">
          <a href="#menu" className="hover:text-white transition">Menü</a>
          <a href="#booking" className="bg-[#ff0055] text-white px-10 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full shadow-lg">
            Reservieren!
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center z-10 overflow-hidden">
        <div className="absolute left-12 top-1/2 -translate-y-1/2 vertical-text text-[11px] uppercase tracking-[1em] opacity-20 hidden xl:block text-[#1a0b2e]">
          Frankfurt am Main // Kyoto Spirit
        </div>
        
        {/* Japanische Laterne (subtil) */}
        <div className="absolute top-1/4 right-20 text-[15rem] opacity-5 animate-pulse hidden lg:block">🏮</div>
        
        <div className="text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <h1 className="text-[18rem] md:text-[28rem] font-black leading-none opacity-10 select-none text-[#ff0055] absolute left-1/2 -translate-x-1/2 -top-40 tracking-tighter">酒井</h1>
            <div className="relative">
                <span className="text-[13px] tracking-[1.5em] uppercase mb-4 block opacity-60 text-[#1a0b2e]">Experience the Art of Omakase</span>
                <h2 className="text-9xl md:text-[15rem] font-bold tracking-tighter uppercase italic text-[#1a0b2e] drop-shadow-2xl">Sakai</h2>
            </div>
          </motion.div>
        </div>

        {/* Reispapier-Schatten-Effekt */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#fffcf0] via-[#fffcf0]/80 to-transparent z-10"></div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="relative z-10 py-48 px-6 max-w-7xl mx-auto border-t border-[#d4c3a1]/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-36 gap-12 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
                <h2 className="text-xs uppercase tracking-[0.8em] text-[#ff0055] mb-6 font-bold">Menu Selection</h2>
                <p className="text-5xl md:text-7xl font-light leading-tight text-[#1a0b2e]">Handgefertigte <span className="italic text-[#ff0055]">Präzision</span>.</p>
            </div>
            <div className="text-right opacity-50 max-w-xs text-[12px] leading-relaxed uppercase tracking-widest text-[#1a0b2e] mx-auto md:mx-0">
                Wir beziehen unseren Fisch direkt vom Toyosu Market in Tokio und kombinieren ihn mit regionalen Schätzen. Omakase ist Vertrauen.
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <MenuCard title="Red" kanji="赤" price="185€" accent="text-[#ff0055]" items={menuRed} description="Das ultimative Omakase-Erlebnis." />
          <MenuCard title="Green" kanji="緑" price="145€" accent="text-[#a1d4b1]" items={menuGreen} description="Die vegetarische Kunst des Omakase." />
        </div>

        <div className="mt-48 text-center pt-24 max-w-3xl mx-auto border-t-2 border-[#d4c3a1]/20 relative">
            <div className="text-[15rem] opacity-[0.03] absolute -top-16 left-1/2 -translate-x-1/2 font-black text-[#ff0055]">信</div>
            <SakaiSeal />
            <p className="max-w-2xl mx-auto text-sm opacity-60 italic leading-loose tracking-widest text-[#1a0b2e] mt-12">
                "Omakase bedeutet 'Ich überlasse es Ihnen'. Vertrauen Sie auf die Hand des Meisters, eine kulinarische Reise durch die Jahreszeiten zu kuratieren."
            </p>
        </div>
      </section>

      <footer className="py-24 text-center border-t border-[#d4c3a1]/10 opacity-30 bg-[#fff9eb]">
        <div className="text-4xl font-light tracking-[1em] italic text-[#ff0055] mb-4 uppercase">酒井</div>
        <div className="text-[10px] uppercase tracking-[1em] text-[#1a0b2e]">The Sakai // Frankfurt am Main // 2026</div>
      </footer>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}