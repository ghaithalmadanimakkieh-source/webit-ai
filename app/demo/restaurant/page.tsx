"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- INTERFACES FÜR TYPESCRIPT ---
interface FloatingDishProps {
  children: React.ReactNode;
  delay?: number;
}

interface Message {
  role: 'bot' | 'user';
  text: string;
}

// --- HILFSKOMPONENTE (Typensicher) ---
const FloatingDish: React.FC<FloatingDishProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -100, rotate: -20 }}
    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ type: "spring", stiffness: 50, delay: delay }}
    className="relative"
  >
    {children}
  </motion.div>
);

const SAMURAI_IMAGE = "https://images.unsplash.com/photo-1599408162485-6d06e6ca189b?q=80&w=1974"; // Stabilerer Link

export default function JapanScrollExperience() {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Message[]>([
    { role: 'bot', text: 'Konichiwa! Bereit für ein Abenteuer? 🏯' }
  ]);
  const [isMounted, setIsMounted] = useState(false);

  // Verhindert Hydration-Fehler bei Next.js
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleSendMessage = () => {
    if (chatInput.trim() === "") return;
    const newMessages: Message[] = [...chatMessages, { role: 'user', text: chatInput }];
    setChatMessages(newMessages);
    setChatInput("");

    setTimeout(() => {
      let botResponse = "Nani? 🧐";
      const input = chatInput.toLowerCase();
      if (input.includes("hallo") || input.includes("hi")) botResponse = "Yaaay! Ein neuer Freund! 🎉";
      else if (input.includes("ramen")) botResponse = "Ramen ist Leben! 🍜 Probier das Omakase!";
      else if (input.includes("sushi")) botResponse = "Sushi-Zeit! 🍣 Ich liebe Fatty Tuna!";
      else if (input.includes("danke")) botResponse = "Gern geschehen! Arigato! 🙏";
      
      setChatMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  if (!isMounted) return <div className="bg-[#1a1a2e] min-h-screen" />;

  return (
    <div className="bg-[#1a1a2e] text-white min-h-screen font-sans selection:bg-[#f62e4a] selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-[#1a1a2e]/80 backdrop-blur-md border-b border-white/10">
        <div className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span className="text-4xl">🎎</span>
            <span className="uppercase tracking-widest text-lg bg-[#f62e4a] px-3 py-1 rounded-full">Kyoto Rush</span>
        </div>
        <a href="#booking" className="bg-[#f62e4a] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition duration-300">
          Reservieren!
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60 z-10"></div>
        </motion.div>

        <div className="relative z-20 text-center px-4 space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block bg-[#f62e4a] p-4 rounded-full text-6xl mb-4 shadow-xl"
          >
            🍥
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-extrabold tracking-tighter text-white uppercase"
          >
            The Sakai
          </motion.h1>
          <p className="text-xl md:text-3xl max-w-2xl mx-auto font-medium leading-relaxed text-[#d4c3a1]">
            Kulinarische Anime-Welt! Omakase, Sushi & Spaß! 🍣🍜
          </p>
        </div>
      </section>

      {/* GERICHTE SECTION */}
      <section className="py-32 px-6 bg-[#0a0a0a] space-y-24 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <FloatingDish>
                <div className="text-center bg-[#1a1a2e] p-8 rounded-3xl border-4 border-[#f62e4a] shadow-2xl">
                    <span className="text-9xl block mb-4">🍜</span>
                    <h3 className="text-4xl font-extrabold text-[#f62e4a]">Ramen Rush</h3>
                    <p className="opacity-80">Heiß, würzig, legendär!</p>
                </div>
            </FloatingDish>
            <div className="text-right">
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase italic underline decoration-[#f62e4a]">Epic Taste!</h2>
            </div>
        </div>
      </section>

      {/* SAMURAI HIGHLIGHT */}
      <section className="py-32 bg-[#1a1a2e] text-center px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-20 space-y-12">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative inline-block"
            >
                <div className="h-80 w-80 mx-auto rounded-full border-8 border-[#f62e4a] overflow-hidden shadow-2xl">
                    <img src={SAMURAI_IMAGE} alt="Samurai" className="w-full h-full object-cover" />
                </div>
                <motion.span 
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-4 right-4 text-6xl bg-black p-2 rounded-full border-4 border-[#f62e4a]"
                >
                    ⚔️
                </motion.span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic">Samurai Spirit</h2>
        </div>
      </section>

      {/* CHATBOT */}
      <section className="py-20 bg-black px-6 border-t border-white/10 relative z-10">
        <div className="max-w-xl mx-auto bg-[#1a1a2e] p-6 rounded-[2rem] border-4 border-[#f62e4a] shadow-2xl">
            <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                <span className="text-5xl animate-bounce">👺</span>
                <h3 className="text-3xl font-black text-[#f62e4a] uppercase">Sakai Bot</h3>
            </div>
            <div className="h-60 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
                {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`p-4 rounded-2xl max-w-[85%] font-bold ${msg.role === 'bot' ? 'bg-white/10 text-white' : 'bg-[#f62e4a] text-white shadow-lg'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <input 
                    type="text" 
                    value={chatInput} 
                    onChange={(e) => setChatInput(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Frag den Meister..." 
                    className="flex-grow p-4 rounded-full bg-white/5 border-2 border-white/10 text-white focus:border-[#f62e4a] outline-none transition-all"
                />
                <button onClick={handleSendMessage} className="bg-[#f62e4a] p-4 rounded-full hover:scale-110 transition shadow-xl">
                    ⚔️
                </button>
            </div>
        </div>
      </section>

      <footer className="py-12 text-center text-[10px] font-bold uppercase tracking-[0.8em] opacity-30">
        Sakai Rush // Anime Edition // 2026
      </footer>

    </div>
  );
}