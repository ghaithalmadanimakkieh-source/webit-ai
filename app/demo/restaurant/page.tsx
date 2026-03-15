"use client";

import React from 'react';

export default function TheSakaiDemo() {
  return (
    <div className="bg-[#0f0f0f] text-[#d4c3a1] min-h-screen font-serif selection:bg-[#d4c3a1] selection:text-black">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 px-10 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-[#d4c3a1]/10">
        <div className="text-2xl font-bold tracking-[0.3em] uppercase text-[#d4c3a1]">The Sakai</div>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em]">
          <a href="#menu" className="hover:text-white transition">Menü</a>
          <a href="#omakase" className="hover:text-white transition">Omakase</a>
          <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
        </div>
        <a href="tel:06989990330" className="border border-[#d4c3a1] px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-[#d4c3a1] hover:text-black transition">
          Reservieren
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          {/* Ein Platzhalter für ein edles Hintergrundbild */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-20 text-center space-y-6 px-4">
          <div className="flex justify-center mb-4">
            <span className="h-[1px] w-12 bg-[#d4c3a1] self-center"></span>
            <span className="mx-4 text-xs tracking-[0.5em] uppercase">Frankfurt am Main</span>
            <span className="h-[1px] w-12 bg-[#d4c3a1] self-center"></span>
          </div>
          <h1 className="text-6xl md:text-9xl font-light tracking-[0.1em] lowercase">酒井 <span className="uppercase font-bold italic text-[#d4c3a1]">Sakai</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed italic opacity-80">
            "Inspiration mit Tradition. Qualität mit Ambiente."
          </p>
          <div className="pt-10">
            <div className="inline-block border border-[#d4c3a1]/30 p-2">
                <div className="border border-[#d4c3a1] px-12 py-4 uppercase tracking-[0.3em] text-sm hover:bg-[#d4c3a1] hover:text-black transition cursor-pointer">
                    Experience Omakase
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTON */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs tracking-[0.4em] uppercase mb-12 opacity-50">Unsere Philosophie</h2>
          <p className="text-2xl md:text-4xl leading-[1.6] font-light">
            Erleben Sie unser einzigartiges <span className="text-white italic">Sushi-Omakase-Menü</span>. 
            Ein japanischer Essensstil, bei dem Sie dem Koch vertrauen. Wie in Japan.
          </p>
          <div className="mt-16 flex justify-center gap-4">
            <div className="p-4 border border-[#d4c3a1]/10 rounded-full">
                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Michelin_Guide_Star.svg/1200px-Michelin_Guide_Star.svg.png" className="h-12 invert opacity-50" alt="Michelin" />
            </div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section id="menu" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h3 className="text-4xl font-light italic underline underline-offset-[12px] decoration-[#d4c3a1]/30">Menü Red</h3>
            <p className="opacity-70 leading-relaxed">Unser Signature Menü mit feinstem Fisch und original Wagyu-Fleisch. Handverlesene Zutaten direkt vom Markt.</p>
            <ul className="space-y-6 border-l border-[#d4c3a1]/20 pl-8">
              <li>
                <span className="block text-white uppercase tracking-widest text-sm">Sashimi Moriawase</span>
                <span className="text-xs opacity-50">Tagesfrische Auswahl</span>
              </li>
              <li>
                <span className="block text-white uppercase tracking-widest text-sm">Wagyu A5 Nigiri</span>
                <span className="text-xs opacity-50">Zartschmelzendes Umami</span>
              </li>
              <li>
                <span className="block text-white uppercase tracking-widest text-sm">Miso Black Cod</span>
                <span className="text-xs opacity-50">Nach traditionellem Rezept</span>
              </li>
            </ul>
          </div>

          <div className="space-y-12">
            <h3 className="text-4xl font-light italic underline underline-offset-[12px] decoration-[#d4c3a1]/30">Menü Green</h3>
            <p className="opacity-70 leading-relaxed">Die vegane Kunst Japans. Rein pflanzlich, ohne Kompromisse beim Geschmack und der Ästhetik.</p>
            <ul className="space-y-6 border-l border-[#d4c3a1]/20 pl-8">
              <li>
                <span className="block text-white uppercase tracking-widest text-sm">Yasai Sushi</span>
                <span className="text-xs opacity-50">Saisonales Gemüse kunstvoll serviert</span>
              </li>
              <li>
                <span className="block text-white uppercase tracking-widest text-sm">Tofu Age-Dashi</span>
                <span className="text-xs opacity-50">In leichter Dashi-Brühe</span>
              </li>
              <li>
                <span className="block text-white uppercase tracking-widest text-sm">Matcha Mochi</span>
                <span className="text-xs opacity-50">Hausgemacht</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT / INFO */}
      <section id="kontakt" className="py-32 px-6 bg-black border-t border-[#d4c3a1]/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold">Location</h4>
            <p className="opacity-70">Hedderichstraße 69<br />60596 Frankfurt am Main</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold">Öffnungszeiten</h4>
            <p className="opacity-70">Mo. - Sa. 18:00 - 23:00<br />Sonntag Ruhetag</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold">Direkt</h4>
            <p className="opacity-70">069 89990330<br />contact@the-sakai.com</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-[10px] uppercase tracking-widest opacity-30 border-t border-[#d4c3a1]/5">
        &copy; 2026 Webit-AI Studio - Designed for The Sakai by Ghaith Almadani
      </footer>

    </div>
  );
}