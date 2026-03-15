"use client";

import React from 'react';

export default function KraftwerkDemo() {
  return (
    <div className="bg-[#0a0a0c] text-white selection:bg-orange-500 selection:text-white min-h-screen font-sans">
      
      {/* GLOW DECORATION */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-red-600/10 blur-[100px] rounded-full"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="relative z-10 text-center max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-6 border border-orange-500/30 rounded-full bg-orange-500/5 backdrop-blur-md">
            <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Bad Mergentheim's Premium Gym</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            KRAFT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">WERK 1986</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Keine Ausreden mehr. Erreiche deine Bestform im intensivsten Gym der Region. 
            <span className="text-white font-medium"> Kraft. Fokus. Ergebnisse.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="#probetraining" className="w-full sm:w-auto px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_20px_50px_rgba(234,88,12,0.3)] uppercase tracking-wider">
              Jetzt Starten
            </a>
            <a href="tel:079317285" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white font-black rounded-xl transition-all duration-300 uppercase tracking-wider">
              Anrufen
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">4.7</span>
              <div className="text-orange-500 italic text-sm">⭐⭐⭐⭐⭐ Google</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">24/7</span>
              <div className="text-orange-500 italic text-sm">Zutritt</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-orange-500/50 transition-all duration-500 hover:bg-white/[0.05]">
              <div className="w-14 h-14 bg-orange-600/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">💪</div>
              <h3 className="text-2xl font-bold mb-4">Profi-Equipment</h3>
              <p className="text-slate-400 leading-relaxed">Modernste Maschinen und ein massiver Freihantelbereich für maximalen Reiz.</p>
            </div>

            {/* CARD 2 */}
            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-orange-500/50 transition-all duration-500 hover:bg-white/[0.05]">
              <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🔥</div>
              <h3 className="text-2xl font-bold mb-4">Hardcore Kurse</h3>
              <p className="text-slate-400 leading-relaxed">Von HYROX bis HIIT – wir bringen dich an deine Grenzen und darüber hinaus.</p>
            </div>

            {/* CARD 3 */}
            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-orange-500/50 transition-all duration-500 hover:bg-white/[0.05]">
              <div className="w-14 h-14 bg-yellow-600/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">👑</div>
              <h3 className="text-2xl font-bold mb-4">Expert Coaching</h3>
              <p className="text-slate-400 leading-relaxed">Unsere Trainer sind keine Aufseher, sondern Mentoren für deinen Erfolg.</p>
            </div>

          </div>
        </div>
      </section>

      {/* LOCATION & INFO */}
      <section className="py-24 px-6 bg-orange-600 text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-none">Bereit für<br />echte Power?</h2>
            <p className="text-black/80 text-xl font-medium italic">Besuche uns im Dainbacher Weg 20, Bad Mergentheim.</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="bg-black text-white p-8 rounded-2xl shadow-2xl">
              <p className="text-sm uppercase tracking-widest opacity-60 mb-2">Öffnungszeiten</p>
              <p className="text-2xl font-bold">24 STUNDEN / 7 TAGE</p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest opacity-60 mb-2">Support-Hotline</p>
                <a href="tel:079317285" className="text-3xl font-black hover:text-orange-500 transition-colors">07931 7285</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-600 text-sm border-t border-white/5">
        <p>&copy; 2026 Webit-AI Studio Demo - Kraftwerk 1986</p>
      </footer>

    </div>
  );
}