"use client";

import React from 'react';

export default function KraftwerkDemo() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white overflow-x-hidden min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/10 to-slate-900/80"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
            Kraftwerk 1986
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Fitnessstudio <span className="font-bold text-orange-400">Bad Mergentheim</span><br />
            <span className="text-2xl md:text-3xl">Kraft. Power. Ergebnisse.</span>
          </p>
          
          <a href="#probetraining" className="group inline-flex items-center gap-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 transition-all duration-300 uppercase tracking-wide">
            Kostenloses Probetraining
            <span className="w-4 h-4 border-2 border-white rounded-full border-r-0 border-t-0 animate-spin ml-2"></span>
          </a>
          
          <p className="mt-8 text-lg text-slate-300">
            <span className="font-bold text-yellow-400 text-2xl">4.7 Sterne</span> ⭐⭐⭐⭐⭐ (62 Bewertungen)
          </p>
        </div>

        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-40 md:h-40 bg-red-400/20 rounded-full blur-xl animate-pulse"></div>
      </section>

      {/* ÜBER UNS */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
                Dein <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Kraftwerk</span><br />
                in Bad Mergentheim
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-slate-300">
                Willkommen im Kraftwerk 1986 – modernes Fitnessstudio mit 4.7 Sternen Bewertungen. Saubere Geräte, starke Kurse, freundliches Team.
              </p>
              <ul className="space-y-4 text-lg text-slate-300">
                <li>• <span className="font-bold text-yellow-400">4.7 Sterne</span> aus 62 echten Bewertungen</li>
                <li>• Neue Geräte & saubere Räume</li>
                <li>• Zentrale Lage: Dainbacher Weg 20</li>
                <li>• Tolle Kursangebote für alle Levels</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-12 border border-orange-500/30 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                  <div className="text-3xl mb-2">💪</div>
                  <h3 className="font-bold text-xl mb-2">Krafttraining</h3>
                  <p className="text-orange-400 font-bold text-2xl">24/7 Zugang</p>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                  <div className="text-3xl mb-2">👥</div>
                  <h3 className="font-bold text-xl mb-2">Trainer</h3>
                  <p className="text-orange-400 font-bold text-2xl">Profi-Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANGEBOTE */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-20">
            Unsere <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Angebote</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {["Krafttraining", "Fitnesskurse", "Trainer", "Atmosphäre"].map((item, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 hover:border-orange-500/70 transition-all">
                   <h3 className="text-2xl font-black mb-4">{item}</h3>
                   <p className="text-slate-400">Top Qualität & modernste Ausstattung.</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="probetraining" className="py-24 bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white">Jetzt ins Kraftwerk!</h2>
        <p className="text-xl text-orange-100 mb-12">Dein erstes Training ist kostenlos.</p>
        <a href="tel:079317285" className="bg-white text-orange-600 font-bold px-12 py-6 rounded-full text-xl shadow-2xl inline-block">
          📞 07931 7285
        </a>
      </section>
    </div>
  );
}