"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- TYPEN DEFINITION ---
interface FloatingFoodProps {
  emoji: string;
  label: string;
  side: 'left' | 'right';
}

// --- SCHWEBENDE ANIME-FOOD-KOMPONENTE ---
const FloatingFood: React.FC<FloatingFoodProps> = ({ emoji, label, side }) => (
  <motion.div
    initial={{ x: side === 'left' ? -200 : 200, opacity: 0, rotate: side === 'left' ? -20 : 20 }}
    whileInView={{ x: 0, opacity: 1, rotate: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ type: "spring", stiffness: 50, damping: 15 }}
    className={`flex items-center gap-6 p-8 bg-white/10 backdrop-blur-xl rounded-[3rem] border-4 ${side === 'left' ? 'border-[#ff0055]' : 'border-[#00f2ff]'} shadow-2xl hover:scale-110 transition-transform cursor-pointer relative z-10`}
  >
    <span className="text-8xl drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">{emoji}</span>
    <div className="text-left">
      <h3 className="text-4xl font-black italic uppercase text-white leading-none">{label}</h3>
      <p className="text-xs font-bold uppercase tracking-widest opacity-70">Super Oishi!</p>
    </div>
  </motion.div>
);

export default function SakaiAnimeWorld() {
  const [messages, setMessages] = useState<{ text: string; bot: boolean }[]>([
    { text: "KONICHIWA! HUNGER AUF ACTION? 👺", bot: true }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { text: input, bot: false }];
    setMessages(newMsgs);
    setInput("");
    setTimeout(() => {
      const resp = ["NANI?! ⚡", "OISHI! 🍣", "BUSHIDO POWER! ⚔️", "DATTEBAYO! 🍥"];
      setMessages([...newMsgs, { text: resp[Math.floor(Math.random() * resp.length)], bot: true }]);
    }, 600);
  };

  return (
    <div className="bg-[#0b031a] min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* ANIMIERTER HINTERGRUND (FALLENDE BLÜTEN) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 100, opacity: 0 }}
            animate={{ y: 1200, opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
            className="text-2xl absolute"
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center z-10 p-6">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-[12rem] md:text-[18rem] drop-shadow-[0_0_50px_rgba(255,0,85,0.8)] leading-none"
        >
          🍥
        </motion.div>
        <h1 className="text-8xl md:text-[14rem] font-black italic uppercase tracking-tighter leading-none text-center">
          SAKAI <br /><span className="text-[#ff0055] drop-shadow-[0_0_20px_#ff0055]">RUSH</span>
        </h1>
        <div className="mt-8 bg-[#00f2ff] text-black px-10 py-3 font-black text-2xl -rotate-3 shadow-[10px_10px_0_#fff]">
          LEVEL UP YOUR TASTE!
        </div>
      </section>

      {/* SCROLL-ACTION SECTION */}
      <section className="relative z-10 py-40 px-6 max-w-6xl mx-auto space-y-32">
        <div className="flex justify-start">
          <FloatingFood emoji="🍜" label="Turbo Ramen" side="left" />
        </div>
        <div className="flex justify-end">
          <FloatingFood emoji="🍣" label="Ninja Sushi" side="right" />
        </div>
        <div className="flex justify-start">
          <FloatingFood emoji="🍡" label="Mochi Boom" side="left" />
        </div>
      </section>

      {/* SAMURAI ACTION SECTION */}
      <section className="relative z-10 py-40 bg-[#ff0055] flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ x: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 0.2 }}
          className="text-[15rem] md:text-[20rem] select-none"
        >
          🥷
        </motion.div>
        <h2 className="text-6xl md:text-9xl font-black uppercase italic text-black text-center leading-none">
          DEFEND THE <br /> FLAVOR!
        </h2>
      </section>

      {/* CHATBOT BOX */}
      <div className="fixed bottom-8 right-8 z-50 w-80">
        <div className="bg-[#1a1a2e] border-4 border-[#00f2ff] rounded-[3rem] p-6 shadow-[0_0_40px_rgba(0,242,255,0.4)]">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
            <span className="text-5xl animate-bounce">👺</span>
            <h4 className="font-black uppercase italic text-[#00f2ff]">Sensei-Bot</h4>
          </div>
          <div className="h-40 overflow-y-auto mb-4 space-y-2 pr-2">
            {messages.map((m, i) => (
              <div key={i} className={`p-2 rounded-2xl font-bold text-sm ${m.bot ? 'bg-white/10 text-[#00f2ff]' : 'bg-[#ff0055] text-white text-right'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              className="flex-1 bg-white/5 border-2 border-white/20 rounded-full px-4 py-2 text-xs focus:border-[#00f2ff] outline-none text-white"
              placeholder="Frag den Meister..."
            />
            <button onClick={send} className="bg-[#00f2ff] text-black p-2 rounded-full font-black">⚔️</button>
          </div>
        </div>
      </div>

      <footer className="py-20 text-center opacity-30 font-black uppercase tracking-[1em] text-[10px]">
        Sakai Rush // 2026 // Webit-AI
      </footer>

    </div>
  );
}