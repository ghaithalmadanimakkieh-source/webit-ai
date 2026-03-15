"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- JAPANESE SEAL / STAMP COMPONENT ---
const SakaiSeal = () => (
  <div className="border-2 border-[#ff0055] text-[#ff0055] w-12 h-12 flex items-center justify-center font-bold text-xs rotate-12 opacity-80 select-none">
    <span className="text-center leading-none">酒井<br/>SAKAI</span>
  </div>
);

const MenuCard = ({ title, kanji, items, price, color, accent }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative bg-[#121212] border-l-2 border-[#d4c3a1]/20 p-12 overflow-hidden group transition-all duration-700"
  >
    {/* Hintergrund-Kanji als Wasserzeichen */}
    <div className="absolute -right-4 -bottom-10 text-[15rem] font-black opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-700">
      {kanji}
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-16">
        <div>
          <span className={`text-xs tracking-[0.5em] uppercase opacity-50 block mb-2 ${accent}`}>Selection</span>
          <h3 className="text-6xl font-light tracking-tighter text-white flex items-center gap-4">
            {title} <span className="text-2xl opacity-20 font-serif">/</span> <span className={`text-3xl italic ${accent}`}>{kanji}</span>
          </h3>
        </div>
        <div className="text-right">
          <span className="text-2xl font-light tracking-widest block">{price}</span>
          <span className="text-[10px] uppercase tracking-widest opacity-30">pro Person</span>
        </div>
      </div>

      <div className="space-y-12">
        {items.map((item, idx) => (
          <div key={idx} className="relative pl-8 group/item">
            {/* Vertikaler Strich für japanisches Feeling */}
            <div className={`absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#d4c3a1]/30 to-transparent group-hover/item:via-${accent} transition-all`} />
            
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-white uppercase tracking-[0.25em] text-sm font-medium">{item.name}</span>
              <span className="h-[1px] flex-grow mx-4 bg-[#d4c3a1]/5" />
              <span className="text-[10px] opacity-40 italic">{item.origin}</span>
            </div>
            <p className="text-[11px] opacity-50 font-light tracking-wider leading-relaxed max-w-md">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-between items-center opacity-40">
        <SakaiSeal />
        <span className="text-[9px] uppercase tracking-[0.6em]">Season 2026 // Kyoto Spirit</span>
      </div>
    </div>
  </motion.div>
);

export default function TheSakaiHighEnd() {
  const menuRed = [
    { name: "Sashimi Moriawase", origin: "Toyosu Market", desc: "Drei Variationen vom tagesfrischen Wildfang, serviert mit geriebenem Shizuoka-Wasabi." },
    { name: "Wagyu A5 Nigiri", origin: "Kagoshima Prefecture", desc: "Kurz flambiertes Fettmarmor-Wagyu mit einer Reduktion aus gereifter Sojasauce." },
    { name: "Miso Black Cod", origin: "Hokkaido", desc: "In weißem Saiko-Miso marinierter Kohlenfisch, über Binchotan-Kohle gegrillt." },
    { name: "Toro Temaki", origin: "Bluefin Tuna", desc: "Handrolle mit fettem Thunfischbauch und hausgemachtem Pickled Daikon." }
  ];

  const menuGreen = [
    { name: "Yasai Sushi", origin: "Local Farmers", desc: "Fermentiertes Saisongemüse auf handwarmem Shari-Reis mit rotem Essig." },
    { name: "Nasu Dengaku", origin: "Kamo Eggplant", desc: "Japanische Aubergine mit süßer Miso-Glaze und geröstetem Sesam." },
    { name: "Agedashi Tofu", origin: "Housemade", desc: "Seidentofu in einer klaren Kombu-Dashi mit Shishito-Pfeffer und Ingwer." },
    { name: "Matcha Fondant", origin: "Uji Matcha", desc: "Flüssiger Kern aus zeremoniellem Matcha, serviert mit Yuzu-Sorbet." }
  ];

  return (
    <div className="bg-[#0a0a0a] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#ff0055] selection:text-white">
      
      {/* MINIMAL NAV */}
      <nav className="fixed w-full z-50 px-12 py-8 flex justify-between items-center bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold tracking-[0.4em] uppercase">The Sakai</div>
          <span className="hidden md:block w-px h-8 bg-white/10" />
          <span className="hidden md:block text-[10px] uppercase tracking-[0.5em] opacity-40 italic">Inspiration mit Tradition</span>
        </div>
        <div className="flex gap-12 items-center">
          <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition">Story</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition">Omakase</a>
          <button className="bg-[#d4c3a1] text-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Reserve a Seat
          </button>
        </div>
      </nav>

      {/* HERO SECTION WITH VERTICAL TEXT */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute left-12 top-1/2 -translate-y-1/2 vertical-text text-[10px] uppercase tracking-[1em] opacity-30 hidden lg:block">
          Experience the art of Omakase in Frankfurt
        </div>
        
        <div className="text-center space-y-8 relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <h1 className="text-[12rem] md:text-[18rem] font-light leading-none opacity-10 select-none">酒井</h1>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs uppercase tracking-[1em] mb-4">Welcome to</span>
                <h2 className="text-8xl md:text-[10rem] font-bold tracking-tighter uppercase italic text-white shadow-2xl">Sakai</h2>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-40">Location: Hedderichstraße 69</span>
            <div className="h-px w-32 bg-[#d4c3a1]/40" />
        </div>
      </section>

      {/* DETAILED MENU SECTION */}
      <section className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="max-w-xl">
                <h2 className="text-xs uppercase tracking-[0.6em] text-[#ff0055] mb-6 font-bold">Menu Selection</h2>
                <p className="text-4xl md:text-6xl font-light leading-tight">Handgefertigte <span className="italic">Präzision</span> in jedem Bissen.</p>
            </div>
            <div className="text-right opacity-40 max-w-xs text-[11px] leading-relaxed uppercase tracking-widest">
                Wir beziehen unseren Fisch direkt vom Toyosu Market in Tokio und kombinieren ihn mit regionalen Schätzen.
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <MenuCard 
            title="Red" 
            kanji="赤" 
            price="185" 
            accent="text-[#ff0055]" 
            items={menuRed} 
          />
          <MenuCard 
            title="Green" 
            kanji="緑" 
            price="145" 
            accent="text-[#a1d4b1]" 
            items={menuGreen} 
          />
        </div>
      </section>

      <footer className="py-20 text-center opacity-20">
        <div className="text-[9px] uppercase tracking-[1.5em] mb-4 italic">Webit-AI Artist Series</div>
        <div className="text-2xl">酒井</div>
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