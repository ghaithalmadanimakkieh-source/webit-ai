"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- KOMPONENTE FÜR EINZELNE MENÜ-CARDS ---
const MenuCard = ({ title, items, price, color }: { title: string, items: { name: string, desc: string }[], price: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-[#151515] border border-[#d4c3a1]/10 p-10 rounded-sm flex flex-col justify-between group hover:border-[#d4c3a1]/40 transition-all duration-500"
  >
    <div>
      <div className="flex justify-between items-end mb-12">
        <h3 className={`text-5xl font-light italic ${color}`}>{title}</h3>
        <span className="text-sm tracking-[0.2em] opacity-50">{price}</span>
      </div>
      <div className="space-y-10">
        {items.map((item, idx) => (
          <div key={idx} className="group-hover:translate-x-2 transition-transform duration-500">
            <span className="block text-white uppercase tracking-[0.2em] text-sm mb-1">{item.name}</span>
            <span className="text-xs opacity-40 font-light tracking-widest leading-relaxed block">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-16 pt-6 border-t border-[#d4c3a1]/5">
      <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 group-hover:opacity-100 transition-opacity">Discover Flavors</span>
    </div>
  </motion.div>
);

export default function TheSakaiDemo() {
  const menuRed = [
    { name: "Sashimi Moriawase", desc: "Tagesfrische Auswahl vom World-Port" },
    { name: "Wagyu A5 Nigiri", desc: "Zartschmelzendes Umami mit Shizuoka-Wasabi" },
    { name: "Miso Black Cod", desc: "72h mariniert in saiko-miso" },
    { name: "Chef's Signature Roll", desc: "Toro, Kaviar & Goldblatt" }
  ];

  const menuGreen = [
    { name: "Yasai Sushi", desc: "Saisonales Gemüse in Perfektion" },
    { name: "Tofu Age-Dashi", desc: "Knuspriger Seidentofu in leichter Dashi" },
    { name: "Nasu Dengaku", desc: "Miso-glasierte Aubergine" },
    { name: "Matcha Mochi", desc: "Hausgemacht mit zeremoniellem Matcha" }
  ];

  return (
    <div className="bg-[#0f0f0f] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#d4c3a1] selection:text-black overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 px-10 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-[#d4c3a1]/10">
        <div className="text-2xl font-bold tracking-[0.3em] uppercase text-[#d4c3a1]">The Sakai</div>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em]">
          <a href="#menu" className="hover:text-white transition">Menü</a>
          <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
        </div>
        <a href="tel:06989990330" className="border border-[#d4c3a1] px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-[#d4c3a1] hover:text-black transition">
          Reservieren
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center">
            <h1 className="text-7xl md:text-9xl font-light tracking-[0.2em] mb-4">酒井</h1>
            <span className="text-xs tracking-[0.8em] uppercase opacity-60">Selection of Taste</span>
        </div>
      </section>

      {/* NEW MENU SECTION */}
      <section id="menu" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-4">
            <h2 className="text-xs uppercase tracking-[0.6em] opacity-40">Omakase Experience</h2>
            <p className="text-4xl md:text-6xl font-light italic">Die Wahl des Meisters</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <MenuCard 
            title="Red" 
            price="185€" 
            color="text-[#f62e4a]" 
            items={menuRed} 
          />
          <MenuCard 
            title="Green" 
            price="145€" 
            color="text-[#a1d4b1]" 
            items={menuGreen} 
          />
        </div>

        <div className="mt-20 text-center">
            <p className="max-w-xl mx-auto text-sm opacity-50 italic leading-relaxed">
                "Omakase bedeutet 'Ich überlasse es Ihnen'. Vertrauen Sie auf die tägliche Selektion unseres Küchenchefs."
            </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-[#d4c3a1]/10">
        <div className="text-[10px] uppercase tracking-[1em] opacity-20">The Sakai × Frankfurt</div>
      </footer>
    </div>
  );
}