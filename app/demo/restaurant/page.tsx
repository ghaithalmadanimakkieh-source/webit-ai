"use client";

import React from 'react';

export default function TheSakaiDemo() {
  return (
    <div className="bg-[#080808] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#d4c3a1] selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 px-10 py-8 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-[#d4c3a1]/5">
        <div className="text-2xl font-light tracking-[0.5em] uppercase">The Sakai</div>
        <div className="flex gap-8 items-center text-[10px] tracking-[0.2em] uppercase">
            <span className="opacity-40">Michelin 2023</span>
            <a href="tel:06989990330" className="bg-[#d4c3a1] text-black px-4 py-2 font-bold">Booking</a>
        </div>
      </nav>

      {/* HERO SECTION - SAMURAI STYLE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#080808] z-10"></div>
          {/* SAMURAI RÜSTUNG BILD */}
          <img 
            src="http://googleusercontent.com/image_generation_content/1" 
            alt="The Sakai Samurai" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
        </div>

        <div className="relative z-20 text-center space-y-6">
          <h1 className="text-8xl md:text-[12rem] font-light tracking-widest text-white leading-none">酒井</h1>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.4em] uppercase italic">The Sakai</h2>
          <div className="pt-8 flex justify-center items-center gap-4">
            <div className="w-12 h-[1px] bg-[#d4c3a1]/30"></div>
            <p className="text-xs tracking-[0.5em] uppercase opacity-60 font-sans">Tradition & Perfection</p>
            <div className="w-12 h-[1px] bg-[#d4c3a1]/30"></div>
          </div>
        </div>
      </section>

      {/* MENÜ MIT SAMURAI-DETAILS */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-32">
          
          {/* RED MENU */}
          <div className="relative p-10 border border-[#d4c3a1]/10 bg-black/20 hover:border-[#d4c3a1]/40 transition duration-700">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d4c3a1]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d4c3a1]"></div>
            
            <h3 className="text-4xl font-light mb-8 italic">Menü Red</h3>
            <div className="space-y-6 opacity-80">
                <div className="flex justify-between border-b border-[#d4c3a1]/10 pb-2"><span>Zensai Häppchen</span><span>185€</span></div>
                <div className="flex justify-between border-b border-[#d4c3a1]/10 pb-2"><span>Sashimi Moriawase</span></div>
                <div className="flex justify-between border-b border-[#d4c3a1]/10 pb-2"><span>Gintara Miso</span></div>
                <div className="flex justify-between border-b border-[#d4c3a1]/10 pb-2"><span>Wagyu A5 Nigiri</span></div>
            </div>
          </div>

          {/* GREEN MENU */}
          <div className="relative p-10 border border-[#d4c3a1]/10 bg-black/20 hover:border-[#d4c3a1]/40 transition duration-700">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d4c3a1]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d4c3a1]"></div>
            
            <h3 className="text-4xl font-light mb-8 italic text-white/50">Menü Green</h3>
            <div className="space-y-6 opacity-80">
                <div className="flex justify-between border-b border-[#d4c3a1]/10 pb-2"><span>Edamame Shio</span><span>145€</span></div>
                <div className="flex justify-between border-b border-[#d4c3a1]/10 pb-2"><span>Yasai Sushi Selection</span></div>
                <div className="flex justify-between border-b border-[#d4c3a1]/10 pb-2"><span>Tofu Age-Dashi</span></div>
                <div className="flex justify-between border-b border-[#d4c3a1]/10 pb-2"><span>Matcha Mochi</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* KATANA ANIMATION SECTION (SPEZIAL) */}
      <section className="py-40 relative overflow-hidden bg-black flex justify-center items-center">
        {/* Die "Klinge" die durch das Bild schneidet */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4c3a1] to-transparent animate-pulse shadow-[0_0_15px_rgba(212,195,161,0.5)]"></div>
        
        <div className="relative z-10 text-center">
            <h3 className="text-xs tracking-[1em] uppercase opacity-30 mb-8">The Spirit of Sakai</h3>
            <div className="text-5xl md:text-7xl opacity-10 italic font-light">Precision. Honor. Taste.</div>
        </div>
      </section>

      {/* INFO */}
      <footer className="py-20 px-6 border-t border-[#d4c3a1]/5 text-center md:text-left">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-[10px] tracking-[0.3em] uppercase opacity-60">
            <div>Hedderichstraße 69<br/>Frankfurt am Main</div>
            <div>Mo - Sa 18:00 - 23:00<br/>Sonntag Ruhetag</div>
            <div>contact@the-sakai.com<br/>069 89990330</div>
        </div>
      </footer>
    </div>
  );
}