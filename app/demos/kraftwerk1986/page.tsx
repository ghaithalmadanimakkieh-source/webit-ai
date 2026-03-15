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
            <a href="#probetraining" className="w-full sm:w-auto px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_20px_50px_rgba(234,88,12,0.3)] uppercase tracking-wider text-center">
              Jetzt Starten
            </a>
            <a href="tel:079317285" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white font-black rounded-xl transition-all duration-300 uppercase tracking-wider text-center">
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
        <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black uppercase">Warum Kraftwerk?</h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-orange-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-orange-600/20 rounded-2xl flex items-center justify-center text-3xl mb-8">💪</div>
              <h3 className="text-2xl font-bold mb-4">Profi-Equipment</h3>
              <p className="text-slate-400 leading-relaxed">Modernste Maschinen und ein massiver Freihantelbereich für maximalen Reiz.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-orange-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center text-3xl mb-8">🔥</div>
              <h3 className="text-2xl font-bold mb-4">Hardcore Kurse</h3>
              <p className="text-slate-400 leading-relaxed">Von HYROX bis HIIT – wir bringen dich an deine Grenzen und darüber hinaus.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-orange-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-yellow-600/20 rounded-2xl flex items-center justify-center text-3xl mb-8">👑</div>
              <h3 className="text-2xl font-bold mb-4">Expert Coaching</h3>
              <p className="text-slate-400 leading-relaxed">Unsere Trainer sind Mentoren für deinen Erfolg, keine einfachen Aufseher.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase mb-16 italic">Wähle dein <span className="text-orange-500">Level</span></h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Basic", price: "39€", features: ["Krafttraining", "24/7 Zugang", "Umkleiden/Duschen"] },
              { name: "Pro", price: "49€", features: ["Alles in Basic", "Alle Kurse inklusive", "Getränke-Flat"] },
              { name: "VIP", price: "69€", features: ["Alles in Pro", "Personal Training (1x/Mon)", "Sauna-Nutzung"] }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-105 ${i === 1 ? 'border-orange-500 bg-orange-500/5 shadow-[0_0_40px_rgba(234,88,12,0.1)]' : 'border-white/10 bg-white/[0.01]'}`}>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">{plan.name}</h3>
                <div className="text-5xl font-black mb-6">{plan.price}<span className="text-sm font-normal opacity-50 uppercase tracking-normal"> / Mon.</span></div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, j) => <li key={j} className="flex gap-3 text-sm opacity-80 items-center">
                    <span className="text-orange-500 font-bold text-lg">✓</span> {f}
                  </li>)}
                </ul>
                <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition ${i === 1 ? 'bg-orange-600 hover:bg-orange-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                  Mitglied werden
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & INFO */}
      <section className="py-24 px-6 bg-orange-600 text-black relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-none">Bereit für<br />echte Power?</h2>
            <p className="text-black/80 text-xl font-medium italic">Dainbacher Weg 20, 97980 Bad Mergentheim</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="bg-black text-white p-8 rounded-2xl shadow-2xl">
              <p className="text-sm uppercase tracking-widest opacity-60 mb-2 font-bold">Öffnungszeiten</p>
              <p className="text-3xl font-black">24 / 7 OFFEN</p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest opacity-60 mb-2 font-bold">Jetzt Anrufen</p>
                <a href="tel:079317285" className="text-3xl font-black hover:text-orange-500 transition-colors">07931 7285</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-600 text-sm border-t border-white/5 relative z-10">
        <p>Webit-AI Osterburken • Ghaith Almadani • Demo für Kraftwerk 1986</p>
      </footer>

    </div>
  );
}