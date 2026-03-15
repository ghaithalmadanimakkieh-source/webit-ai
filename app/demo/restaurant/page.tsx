"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BOOKING MODAL COMPONENT ---
const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1a0b2e]/60 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
          className="bg-[#fffcf0] w-full max-w-lg rounded-2xl p-10 relative shadow-2xl border-4 border-[#ff0055]/10"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-2xl opacity-30 hover:opacity-100 transition">✕</button>
          
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-[0.5em] text-[#ff0055] uppercase font-bold">Reservierung</span>
            <h3 className="text-4xl font-bold italic mt-2">Ein Platz am Tresen</h3>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Anfrage gesendet! 酒井'); onClose(); }}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" required className="bg-white border-2 border-[#d4c3a1]/20 p-4 rounded-xl text-sm focus:border-[#ff0055] outline-none transition" />
              <input type="number" placeholder="Gäste" min="1" max="6" required className="bg-white border-2 border-[#d4c3a1]/20 p-4 rounded-xl text-sm focus:border-[#ff0055] outline-none transition" />
            </div>
            <input type="date" required className="w-full bg-white border-2 border-[#d4c3a1]/20 p-4 rounded-xl text-sm focus:border-[#ff0055] outline-none transition" />
            <select className="w-full bg-white border-2 border-[#d4c3a1]/20 p-4 rounded-xl text-sm focus:border-[#ff0055] outline-none transition appearance-none">
              <option>Menü RED (185€)</option>
              <option>Menü GREEN (145€)</option>
            </select>
            <button className="w-full bg-[#ff0055] text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-2xl transition-all active:scale-95">
              Anfrage Senden
            </button>
          </form>
          <p className="text-[10px] text-center mt-8 opacity-40 uppercase tracking-widest italic">Begrenzte Plätze // Frischegarantie</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- MENU CARD ---
const MenuCard = ({ title, kanji, items, price, accent, description }: any) => (
  <motion.div whileHover={{ y: -8 }} className="relative bg-[#fff1e0] border-2 border-[#d4c3a1]/20 p-12 overflow-hidden group transition-all duration-700 shadow-xl rounded-2xl">
    <div className="absolute -right-4 -bottom-10 text-[20rem] font-black opacity-[0.03] pointer-events-none select-none italic text-[#ff0055]">{kanji}</div>
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-12 border-b-2 border-[#d4c3a1]/10 pb-8">
        <div>
          <span className={`text-[10px] tracking-[0.5em] uppercase opacity-50 block mb-2 ${accent}`}>Selection</span>
          <h3 className="text-5xl font-light tracking-tighter text-[#1a0b2e]">{title} <span className={`text-3xl ml-2 font-black ${accent}`}>{kanji}</span></h3>
          <p className="text-[11px] opacity-60 italic mt-2 text-[#1a0b2e]">{description}</p>
        </div>
        <span className="text-3xl font-light text-[#1a0b2e]">{price}</span>
      </div>
      <div className="space-y-8">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="group/item">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-[#1a0b2e] uppercase tracking-[0.2em] text-sm font-bold">{item.name}</span>
              <span className="text-[10px] opacity-40 italic">{item.origin}</span>
            </div>
            <p className="text-[11px] opacity-60 leading-relaxed text-[#1a0b2e]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function TheSakaiFinal() {
  const [isBookingOpen, setBookingOpen] = useState(false);

  const menuRed = [
    { name: "Sashimi Moriawase", origin: "Toyosu Market", desc: "Tagesfrische Auswahl vom World-Port Tokyo." },
    { name: "Wagyu A5 Nigiri", origin: "Kagoshima", desc: "A5-Wagyu mit Trüffel-Ponzu." },
    { name: "Miso Black Cod", origin: "Hokkaido", desc: "In Saiko-Miso marinierter Kohlenfisch." }
  ];

  return (
    <div className="bg-[#fffcf0] text-[#1a0b2e] min-h-screen font-serif selection:bg-[#ff0055] selection:text-white">
      <BookingModal isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} />
      
      {/* WOOD TEXTURE */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none bg-[url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070')] bg-cover"></div>

      {/* NAV */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center bg-[#fffcf0]/90 border-b border-[#d4c3a1]/20 backdrop-blur-md">
        <div className="text-2xl font-bold tracking-[0.3em] uppercase">The Sakai</div>
        <button onClick={() => setBookingOpen(true)} className="bg-[#ff0055] text-white px-10 py-3 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg hover:scale-105 transition-all">
          Reserve
        </button>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="text-center relative z-10">
          <h1 className="text-[15rem] md:text-[22rem] font-black opacity-5 absolute left-1/2 -translate-x-1/2 -top-32 text-[#ff0055]">酒井</h1>
          <span className="text-xs tracking-[1em] uppercase mb-4 block opacity-60">Fine Japanese Dining</span>
          <h2 className="text-8xl md:text-[12rem] font-bold tracking-tighter uppercase italic">Sakai</h2>
        </div>
      </section>

      {/* MENU */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <MenuCard title="Red" kanji="赤" price="185€" accent="text-[#ff0055]" items={menuRed} description="The Signature Experience" />
          <MenuCard title="Green" kanji="緑" price="145€" accent="text-[#a1d4b1]" items={menuRed} description="Pure Plant Precision" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 bg-[#fff9eb] border-y border-[#d4c3a1]/20 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h4 className="text-[#ff0055] text-xs uppercase tracking-widest font-bold">Standort</h4>
            <p className="text-xl font-light">Hedderichstraße 69, 60596 Frankfurt</p>
          </div>
          <div className="space-y-4 border-x border-[#d4c3a1]/20 px-8">
            <h4 className="text-[#ff0055] text-xs uppercase tracking-widest font-bold">Öffnungszeiten</h4>
            <p className="text-xl font-light">Mo — Sa: 18:00 — 23:00</p>
          </div>
          <div className="space-y-4 text-right">
            <h4 className="text-[#ff0055] text-xs uppercase tracking-widest font-bold">Direkt</h4>
            <p className="text-xl font-light">069 89990330</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 text-center opacity-40">
        <p className="text-[10px] uppercase tracking-[1em] mb-4">Impressum // Datenschutz</p>
        <div className="text-2xl italic">酒井</div>
      </footer>
    </div>
  );
}