"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TheSakaiDemo() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-[#0a0a0a] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#d4c3a1] selection:text-black overflow-x-hidden">
      
      {/* NAVBAR ANIMATED */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-[#d4c3a1]/5"
      >
        <div className="text-xl md:text-2xl font-bold tracking-[0.4em] uppercase">The Sakai</div>
        <a href="tel:06989990330" className="bg-[#d4c3a1] text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">
          Reservieren
        </a>
      </motion.nav>

      {/* HERO SECTION WITH IMAGE */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0a0a0a] z-10"></div>
          {/* HIER IST DEIN NEUES BILD */}
          <img 
            src="http://googleusercontent.com/image_generation_content/0" 
            alt="Premium Sushi" 
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="relative z-20 text-center px-4"
        >
          <span className="block text-[10px] tracking-[0.8em] uppercase mb-4 opacity-60">Michelin Guide 2023</span>
          <h1 className="text-7xl md:text-[12rem] font-light leading-none tracking-tighter mb-6">
            酒井 <span className="italic font-bold text-white">Sakai</span>
          </h1>
          <p className="text-sm md:text-lg max-w-xl mx-auto font-light tracking-widest uppercase opacity-80">
            Die Kunst des perfekten Omakase
          </p>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30"
        >
          <div className="w-[1px] h-20 bg-[#d4c3a1]"></div>
        </motion.div>
      </section>

      {/* BILD-GALERIE / GERICHTE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 border border-[#d4c3a1]/20 group-hover:border-[#d4c3a1]/50 transition-all duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2070" 
              className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Japanese Dish"
            />
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-light italic">Inspiration mit Tradition</h2>
            <p className="text-lg opacity-70 leading-relaxed font-light">
              Bei uns steht das Produkt im Vordergrund. Wir servieren feinste Qualität nach Omakase-Art – der Koch entscheidet über die Komposition Ihrer Reise durch die Aromen Japans.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <span className="block text-2xl font-bold">A5</span>
                <span className="text-[10px] uppercase tracking-widest opacity-50">Wagyu Beef</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">100%</span>
                <span className="text-[10px] uppercase tracking-widest opacity-50">Handcrafted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5 bg-black">
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">Ghaith Almadani × Webit-AI</p>
        <div className="text-xs italic opacity-60">Hedderichstraße 69, Frankfurt</div>
      </footer>
    </div>
  );
}