// @ts-nocheck
"use client";
import { useEffect, useRef, useState, useCallback } from "react";

// --- Deine originalen Animationen & Partikel ---
const STARS = Array.from({length:120},(_,i)=>({
  id:i, x: Math.random()*100, y: Math.random()*100,
  size: Math.random()*2.2+0.4, opacity: Math.random()*0.7+0.15,
  dur: Math.random()*6+4, delay: Math.random()*8,
}));

const FLOATERS = Array.from({length:18},(_,i)=>({
  id:i, x: Math.random()*100, y: Math.random()*100,
  size: Math.random()*180+60,
  color: i%3===0?"rgba(139,92,246,": i%3===1?"rgba(239,68,68,":"rgba(99,102,241,",
  opacity: Math.random()*0.04+0.015, dur: Math.random()*30+20,
  delay: Math.random()*15, tx: (Math.random()-0.5)*8, ty: (Math.random()-0.5)*8,
}));

const METEORS = Array.from({length:6},(_,i)=>({
  id:i, startX: 60+Math.random()*40, startY: Math.random()*40,
  dur: Math.random()*4+4, delay: Math.random()*10
}));

// DEIN SHOPIFY LINK
const SHOPIFY_URL = "https://webit-ai.myshopify.com/products/webit-ai-premium-gastro-paket-inkl-ki-bot";

// Shopify Icon Komponente (SVG)
const ShopifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '10px' }}>
    <path d="M4.68 7.16L3.18 19.38C3.12 19.86 3.48 20.3 3.96 20.36H20.04C20.52 20.3 20.88 19.86 20.82 19.38L19.32 7.16M4.68 7.16C4.68 7.16 5.82 3.5 12 3.5C18.18 3.5 19.32 7.16 19.32 7.16M4.68 7.16H19.32M9 10V11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 11V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function WebITPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleScroll(); handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("resize", handleResize); };
  }, []);

  const goToShopify = () => {
    window.open(SHOPIFY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: "hidden", minHeight: "100vh", position: "relative" }}>
      
      {/* BACKGROUND (Stars, Meteors, etc.) */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {STARS.map(s => (
          <div key={s.id} style={{ position: "absolute", left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, background: "#fff", borderRadius: "50%", opacity: s.opacity, animation: `pulse ${s.dur}s infinite ${s.delay}s` }} />
        ))}
        {METEORS.map(m => (
          <div key={m.id} style={{ position: "absolute", top: `${m.startY}%`, left: `${m.startX}%`, width: "2px", height: "100px", background: "linear-gradient(to bottom, #fff, transparent)", opacity: 0, animation: `meteor ${m.dur}s linear infinite ${m.delay}s` }} />
        ))}
      </div>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: scrolled ? "15px 5%" : "25px 5%", background: scrolled ? "rgba(0,0,0,0.85)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", transition: "all 0.4s" }}>
        <div style={{ fontSize: "20px", fontWeight: "900" }}>WEBIT<span style={{ color: "#ff0055" }}> AI</span></div>
        <button onClick={goToShopify} style={{ padding: "10px 24px", borderRadius: "100px", background: "#fff", color: "#000", fontWeight: "800", cursor: "pointer", border: "none", display: "flex", alignItems: "center" }}>
          Projekt starten <ShopifyIcon />
        </button>
      </nav>

      {/* HERO SECTION (Dein originales Prestige Design) */}
      <section style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h1 style={{ fontSize: isMobile ? "50px" : "110px", fontWeight: "900", lineHeight: 0.9, letterSpacing: "-4px" }}>DIGITAL<br/>PRESTIGE.</h1>
        <p style={{ opacity: 0.6, marginTop: "20px", marginBottom: "40px", maxWidth: "600px" }}>Wir bauen keine Webseiten. Wir erschaffen digitale Imperien.</p>
        
        <button onClick={goToShopify} style={{ 
          padding: isMobile ? "18px 36px" : "22px 48px", 
          borderRadius: "20px", background: "#fff", color: "#000", 
          fontWeight: "900", cursor: "pointer", border: "none", 
          display: "flex", alignItems: "center", fontSize: "16px",
          boxShadow: "0 20px 40px rgba(255,255,255,0.15)" 
        }}>
          PROJEKT STARTEN <ShopifyIcon />
        </button>
      </section>

      {/* CSS ANIMATIONS */}
      <style jsx global>{`
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes meteor { 0% { opacity: 0; transform: rotate(-35deg) translateY(0); } 5% { opacity: 1; } 20% { opacity: 0; transform: rotate(-35deg) translateY(400px); } 100% { opacity: 0; } }
        body { margin: 0; background: black; }
      `}</style>
    </div>
  );
}