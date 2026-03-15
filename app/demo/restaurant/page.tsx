"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- JAPANESE SEAL / STAMP COMPONENT (HANKO) ---
const SakaiSeal = () => (
  <div className="border-2 border-[#bc204b] text-[#bc204b] w-14 h-14 flex items-center justify-center font-bold text-xs rotate-12 opacity-90 select-none font-sans mx-auto shadow-lg bg-[#1a1a1a]/50 backdrop-blur-sm">
    <span className="text-center leading-none uppercase">酒井<br/>SAKAI</span>
  </div>
);

const MenuCard = ({ title, kanji, items, price, color, accent }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative bg-[#111] border border-[#222] p-12 overflow-hidden group transition-all duration-700 shadow-2xl"
  >
    {/* Hintergrund-Kanji als Wasserzeichen */}
    <div className="absolute -right-4 -bottom-10 text-[18rem] font-black opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700 select-none">
      {kanji}
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-16 border-b border-[#333] pb-8">
        <div>
          <span className={`text-[10px] tracking-[0.5em] uppercase opacity-50 block mb-2 ${accent}`}>Selection</span>
          <h3 className="text-5xl font-light tracking-tighter text-white flex items-center gap-4">
            {title} <span className="text-xl opacity-20">/</span> <span className={`text-4xl italic font-black ${accent}`}>{kanji}</span>
          </h3>
        </div>
        <div className="text-right">
          <span className="text-3xl font-light tracking-widest block text-white">{price}</span>
          <span className="text-[9px] uppercase tracking-widest opacity-40">pro Person</span>
        </div>
      </div>

      <div className="space-y-12">
        {items.map((item, idx) => (
          <div key={idx} className="relative pl-10 group/item transition-all duration-300">
            <div className={`absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#d4c3a1]/20 to-transparent group-hover/item:via-${accent} transition-all`} />
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-white uppercase tracking-[0.25em] text-sm font-medium">{item.name}</span>
              <span className="h-[1px] flex-grow mx-4 bg-[#222]" />
              <span className="text-[10px] opacity-30 italic">{item.origin}</span>
            </div>
            <p className="text-[11px] opacity-50 font-light tracking-wider leading-relaxed max-w-xl text-[#d4c3a1]">
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
    { name: "Wagyu A5 Nigiri", origin: "Kagoshima", desc: "A5-Wagyu mit einer Reduktion aus gereifter Sojasauce und Trüffel." },
    { name: "Miso Black Cod", origin: "Hokkaido", desc: "In Saiko-Miso marinierter Kohlenfisch, über Binchotan gegrillt." }
  ];

  const menuGreen = [
    { name: "Yasai Sushi", origin: "Local Farmers", desc: "Fermentiertes Saisongemüse auf Shari-Reis mit rotem Essig." },
    { name: "Nasu Dengaku", origin: "Kamo Eggplant", desc: "Japanische Aubergine mit süßer Miso-Glaze." },
    { name: "Matcha Fondant", origin: "Uji Matcha", desc: "Flüssiger Kern aus Matcha, serviert mit Yuzu-Sorbet." }
  ];

  return (
    <div className="bg-[#080808] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#bc204b] selection:text-white overflow-x-hidden">
      
      {/* WOOD TEXTURE OVERLAY */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://images.unsplash.com/photo-1578119054763-7e6d013f9f4d?q=80&w=2070')] bg-repeat"></div>

      {/* NAV */}
      <nav className="fixed w-full z-50 px-12 py-8 flex justify-between items-center bg-[#080808]/95 border-b border-[#222]">
        <div className="flex items-center gap-10">
          <div className="text-2xl font-bold tracking-[0.4em] uppercase text-white">The Sakai</div>
          <span className="hidden lg:block text-[10px] uppercase tracking-[0.5em] opacity-40 italic">Inspiration mit Tradition</span>
        </div>
        <button className="bg-[#bc204b] text-white px-10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Reservieren
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center z-10">
        <div className="absolute left-12 top-1/2 -translate-y-1/2 vertical-text text-[10px] uppercase tracking-[1em] opacity-20 hidden xl:block">
          Frankfurt am Main // Kyoto Spirit
        </div>
        
        <div className="text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <h1 className="text-[15rem] md:text-[25rem] font-black leading-none opacity-5 select-none text-white absolute left-1/2 -translate-x-1/2 -top-40">酒井</h1>
            <div className="relative">
                <span className="text-[12px] tracking-[1.5em] uppercase mb-4 block opacity-60">Experience</span>
                <h2 className="text-9xl md:text-[14rem] font-bold tracking-tighter uppercase italic text-white drop-shadow-2xl">Sakai</h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="relative z-10 py-48 px-6 max-w-7xl mx-auto border-t border-[#222]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-36 gap-12">
            <div className="max-w-2xl">
                <h2 className="text-xs uppercase tracking-[0.8em] text-[#bc204b] mb-6 font-bold">Menu Selection</h2>
                <p className="text-5xl md:text-7xl font-light leading-tight text-white">Handgefertigte <span className="italic text-[#d4c3a1]">Präzision</span>.</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <MenuCard title="Red" kanji="赤" price="185€" accent="text-[#bc204b]" items={menuRed} />
          <MenuCard title="Green" kanji="緑" price="145€" accent="text-[#a1d4b1]" items={menuGreen} />
        </div>

        <div className="mt-48 text-center pt-24 max-w-3xl mx-auto">
            <SakaiSeal />
            <p className="max-w-2xl mx-auto text-sm opacity-50 italic leading-loose tracking-widest text-[#d4c3a1] mt-12">
                "Omakase bedeutet 'Ich überlasse es Ihnen'. Vertrauen Sie auf die Hand des Meisters."
            </p>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-[#222] opacity-30">
        <div className="text-3xl font-light tracking-[1em] italic text-white mb-4 uppercase">酒井</div>
        <div className="text-[9px] uppercase tracking-[1em]">The Sakai // 2026</div>
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