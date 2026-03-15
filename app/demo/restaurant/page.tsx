"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- KOMPONENTE FÜR EINZELNE MENÜ-CARDS ---
const MenuCard = ({ title, items, price, color, kanji }: { 
  title: string, 
  items: { name: string, desc: string }[], 
  price: string, 
  color: string,
  kanji: string
}) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="relative bg-[#121212] border border-[#d4c3a1]/10 p-12 rounded-sm flex flex-col justify-between group hover:border-[#d4c3a1]/30 transition-all duration-700 overflow-hidden"
  >
    <div className="absolute -right-4 -bottom-8 text-[12rem] font-bold opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700 select-none">
      {kanji}
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-16">
        <div>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 block mb-2">Selection</span>
          <h3 className={`text-6xl font-light italic ${color} leading-none`}>{title}</h3>
        </div>
        <div className="text-right">
          <span className="text-xl font-light tracking-widest block text-white">{price}</span>
          <span className="text-[9px] uppercase tracking-widest opacity-30 italic">per Person</span>
        </div>
      </div>

      <div className="space-y-12">
        {items.map((item, idx) => (
          <div key={idx} className="group-hover:translate-x-1 transition-transform duration-500">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-white uppercase tracking-[0.2em] text-sm font-medium">{item.name}</span>
              <div className="h-[1px] flex-grow mx-4 bg-[#d4c3a1]/5" />
            </div>
            <span className="text-[11px] opacity-40 font-light tracking-widest leading-relaxed block max-w-[90%]">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-20 pt-8 border-t border-[#d4c3a1]/5 flex justify-between items-center">
      <span className="text-[9px] uppercase tracking-[0.5em] opacity-20 group-hover:opacity-60 transition-opacity">The Art of Omakase</span>
      <div className="w-8 h-8 border border-[#d4c3a1]/20 flex items-center justify-center text-[10px] opacity-30">{kanji}</div>
    </div>
  </motion.div>
);

export default function TheSakaiDemo() {
  const menuRed = [
    { name: "Sashimi Moriawase", desc: "Tagesfrische Auswahl vom World-Port Toyosu, Tokyo" },
    { name: "Wagyu A5 Nigiri", desc: "Zartschmelzendes Umami mit Shizuoka-Wasabi & Gold" },
    { name: "Miso Black Cod", desc: "72h mariniert in edler Saiko-Miso, Binchotan gegrillt" },
    { name: "Chef's Signature Roll", desc: "Toro, Kaviar & hausgemachter Pickled Daikon" }
  ];

  const menuGreen = [
    { name: "Yasai Sushi", desc: "Saisonales Gemüse in handwerklicher Perfektion" },
    { name: "Tofu Age-Dashi", desc: "Knuspriger Seidentofu in klarer Kombu-Dashi" },
    { name: "Nasu Dengaku", desc: "Miso-glasierte Kamo-Aubergine mit Sesam" },
    { name: "Matcha Mochi", desc: "Hausgemacht mit zeremoniellem Matcha aus Uji" }
  ];

  return (
    <div className="bg-[#0b0b0b] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#d4c3a1] selection:text-black overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 px-10 py-8 flex justify-between items-center bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#d4c3a1]/5">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold tracking-[0.4em] uppercase text-[#d4c3a1]">The Sakai</div>
          <div className="hidden lg:block h-8 w-[1px] bg-[#d4c3a1]/20"></div>
          <span className="hidden lg:block text-[9px] uppercase tracking-[0.6em] opacity-40 italic">Frankfurt am Main</span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="#menu" className="hover:text-white transition-colors duration-300">Menü</a>
          <a href="#kontakt" className="hover:text-white transition-colors duration-300">Kontakt</a>
        </div>
        <a href="tel:06989990330" className="bg-[#d4c3a1] text-black px-10 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-xl">
          Reserve
        </a>
      </nav>

      {/* HERO SECTION - REIN TEXTLICH */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070')] bg-cover bg-center opacity-20 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b0b]/60 to-[#0b0b0b]"></div>
        
        <div className="relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-6"
            >
              <h1 className="text-7xl md:text-[11rem] font-bold tracking-[0.3em] uppercase text-white mb-4">
                The <span className="text-[#d4c3a1]">Sakai</span>
              </h1>
              <div className="flex justify-center items-center gap-6 opacity-60">
                <div className="h-[1px] w-16 bg-[#d4c3a1]"></div>
                <span className="text-[12px] tracking-[1em] uppercase">Omakase Experience</span>
                <div className="h-[1px] w-16 bg-[#d4c3a1]"></div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-48 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#d4c3a1] opacity-50">Seasonal Omakase</h2>
            <p className="text-5xl md:text-7xl font-light italic text-white leading-tight">Selection of Taste</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <MenuCard 
            title="Red" 
            price="185€" 
            color="text-[#f62e4a]" 
            kanji="赤"
            items={menuRed} 
          />
          <MenuCard 
            title="Green" 
            price="145€" 
            color="text-[#a1d4b1]" 
            kanji="緑"
            items={menuGreen} 
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 text-center border-t border-[#d4c3a1]/5 bg-[#080808]">
        <div className="text-[10px] uppercase tracking-[1em] opacity-30">The Sakai × Frankfurt</div>
      </footer>

    </div>
  );
}