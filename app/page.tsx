"use client";
import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  { name: "IRONFIT Studio", tag: "Fitness", color: "#ef4444", href:"/demo/fitness" },
  { name: "La Bella", tag: "Restaurant", color: "#d4af37", href:"/demo/restaurant" },
  { name: "Studio Élite", tag: "Friseur", color: "#8b5cf6", href:"/demo/friseur" },
  { name: "MedBook App", tag: "Healthcare", color: "#06b6d4", href:"#" },
  { name: "RealEstate AI", tag: "Immobilien", color: "#10b981", href:"#" },
  { name: "LegalFlow", tag: "Kanzlei", color: "#f97316", href:"#" },
];

const CODE_SNIPPETS = [
  "const ai = new WebIT();",
  "await ai.build('future');",
  "npm run deploy",
  "git push origin main",
  "SELECT * FROM success;",
  "docker compose up -d",
  "AI.train(yourBusiness)",
  "return <YourDream />;",
  "console.log('🚀');",
  "fetch('/api/growth')",
  "if(webit) profit++;",
  "next build && next start",
];

const INDUSTRIES = [
  {icon:"🏋️",name:"Fitness",desc:"Gym / Studio",color:"#ef4444",href:"/demo/fitness"},
  {icon:"🍝",name:"Restaurant",desc:"Food & Bar",color:"#d4af37",href:"/demo/restaurant"},
  {icon:"✂️",name:"Friseur",desc:"Hair Salon",color:"#8b5cf6",href:"/demo/friseur"},
  {icon:"🏥",name:"Arztpraxis",desc:"Healthcare",color:"#06b6d4",href:"#"},
  {icon:"🏠",name:"Immobilien",desc:"Real Estate",color:"#10b981",href:"#"},
  {icon:"⚖️",name:"Kanzlei",desc:"Legal & Law",color:"#f97316",href:"#"},
  {icon:"🛒",name:"Online Shop",desc:"E-Commerce",color:"#ec4899",href:"#"},
  {icon:"🎓",name:"Bildung",desc:"Schule / Kurs",color:"#a78bfa",href:"#"},
];

function getBotAnswer(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("preis") || m.includes("kosten") || m.includes("paket") || m.includes("wie viel")) {
    return "💰 Unsere Pakete:\n\n🥉 Starter – 299€\nLanding Page, Mobile, Kontaktformular, 14 Tage Support\n\n🥈 Business – 799€\nBis 6 Seiten, CMS, SEO, Analytics, 60 Tage Support\n\n🥇 Premium – 1.499€\nUnlimited, Shop, KI-Bot, SEO Full, 12 Monate Support\n\n🤖 KI Add-on – +299€\nClaude AI Chatbot\n\nAlle Preise einmalig, zzgl. MwSt.";
  }
  if (m.includes("wie lang") || m.includes("dauer") || m.includes("wann")) {
    return "⏱ Lieferzeiten:\n\n• Landing Page → 3–5 Tage\n• Business Website → 7–14 Tage\n• Premium + Shop → 14–21 Tage\n\nNach dem Erstgespräch bekommst du einen Zeitplan!";
  }
  if (m.includes("kontakt") || m.includes("termin") || m.includes("anfrage")) {
    return "📅 Schreib uns direkt:\n\n📧 ghaith.almadani.makkieh@gmail.com\n📞 +49 176 85974436\n\nAntwort in 24h — kostenlos & unverbindlich! 🚀";
  }
  if (m.includes("demo") || m.includes("beispiel") || m.includes("seite")) {
    return "🎨 Unsere Demo-Seiten:\n\n🏋️ Fitness Studio → /demo/fitness\n🍝 Restaurant → /demo/restaurant\n✂️ Friseur → /demo/friseur\n\nEinfach auf 'Live Demo' klicken und direkt ansehen!";
  }
  if (m.includes("was macht") || m.includes("wer seid") || m.includes("über")) {
    return "🏢 WebIT AI — gegründet von Ghaith Almadani.\n\n✦ Moderne Webseiten & Shops\n✦ KI-Integration (Claude AI)\n✦ Automatisierung\n✦ Full-Stack: Next.js, PostgreSQL, Docker";
  }
  if (m.includes("seo") || m.includes("google")) {
    return "🔍 SEO bei WebIT AI:\n\n• Keyword-Recherche\n• Meta-Tags & Struktur\n• Google Search Console\n• Core Web Vitals\n• Ladezeit unter 2 Sekunden\n\nMehr Google = mehr Kunden! 📈";
  }
  if (m.includes("ki") || m.includes("ai") || m.includes("chatbot")) {
    return "🤖 KI-Features:\n\n• AI-Chatbot (wie ich!) für deine Kunden\n• 24/7 Kundenbetreuung\n• Powered by Claude AI\n\nAb +299€ zu jedem Paket!";
  }
  if (m.includes("hallo") || m.includes("hi") || m.includes("hey")) {
    return "👋 Hallo! Willkommen bei WebIT AI!\n\nFrag mich:\n• 💰 Preise & Pakete\n• 🎨 Demo-Seiten ansehen\n• ⏱ Wie lange dauert es?\n• 🤖 KI-Features\n\nWas interessiert dich?";
  }
  if (m.includes("danke") || m.includes("super") || m.includes("cool")) {
    return "😊 Sehr gerne! Schreib uns auf ghaith.almadani.makkieh@gmail.com — wir freuen uns! 🚀";
  }
  return `💡 Gute Frage!\n\n📧 ghaith.almadani.makkieh@gmail.com\n📞 +49 176 85974436\n\nOder frag mich über Preise, Demos, KI oder SEO! 😊`;
}

// W LOGO SVG
function WLogo({size=32}:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#ef4444"/>
        </linearGradient>
      </defs>
      <path d="M4 8 L10 32 L16 16 L20 28 L24 16 L30 32 L36 8" stroke="url(#wg)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [trail, setTrail] = useState<{x:number,y:number,id:number,size:number}[]>([]);
  const [codeDrops, setCodeDrops] = useState<{id:number,x:number,y:number,text:string,opacity:number}[]>([]);
  const [isOnMagic, setIsOnMagic] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{role:string,text:string}[]>([
    {role:"bot", text:"👋 Hallo! Ich bin der WebIT AI Assistent.\n\nFrag mich alles — Preise, Demos, KI-Features oder was du wissen möchtest! 😊"}
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<number|null>(null);
  const trailIdRef = useRef(0);
  const codeIdRef = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setTimeout(() => setLoaded(true), 200); }, []);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({behavior:"smooth"}); }, [messages, typing]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({x:(e.clientX/window.innerWidth)*100, y:(e.clientY/window.innerHeight)*100});
      trailIdRef.current++;
      const size = Math.random() * 14 + 5;
      setTrail(prev => [...prev.slice(-30), {x:e.clientX, y:e.clientY, id:trailIdRef.current, size}]);
      if (isOnMagic) {
        codeIdRef.current++;
        const text = CODE_SNIPPETS[Math.floor(Math.random()*CODE_SNIPPETS.length)];
        setCodeDrops(prev => [...prev.slice(-12), {id:codeIdRef.current, x:e.clientX, y:e.clientY, text, opacity:1}]);
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [isOnMagic]);

  useEffect(() => {
    const iv = setInterval(() => {
      setCodeDrops(prev => prev.map(d=>({...d,opacity:d.opacity-0.05,y:d.y-2})).filter(d=>d.opacity>0));
      setTrail(prev => prev.slice(-22));
    }, 50);
    return () => clearInterval(iv);
  }, []);

  function sendMessage() {
    const txt = input.trim();
    if (!txt) return;
    setMessages(prev => [...prev, {role:"user",text:txt}]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, {role:"bot",text:getBotAnswer(txt)}]);
    }, 700 + Math.random()*400);
  }

  return (
    <main style={{minHeight:"100vh",background:"#050508",color:"white",fontFamily:"'Segoe UI',sans-serif",overflowX:"hidden"}}>

      {/* GLASS TRAIL */}
      {trail.map((p,i)=>(
        <div key={p.id} style={{
          position:"fixed", left:p.x-p.size/2, top:p.y-p.size/2,
          width:`${p.size}px`, height:`${p.size}px`, borderRadius:"50%",
          background:`rgba(255,255,255,${(i/trail.length)*0.06})`,
          border:`1px solid rgba(255,255,255,${(i/trail.length)*0.18})`,
          backdropFilter:"blur(2px)",
          pointerEvents:"none", zIndex:9999,
          boxShadow:`0 0 ${p.size*1.5}px rgba(139,92,246,${(i/trail.length)*0.12}), inset 0 1px 0 rgba(255,255,255,${(i/trail.length)*0.25})`,
        }}/>
      ))}

      {/* CODE DROPS */}
      {codeDrops.map(d=>(
        <div key={d.id} style={{
          position:"fixed", left:d.x+14, top:d.y-8,
          pointerEvents:"none", zIndex:9998,
          fontFamily:"'Courier New',monospace", fontSize:"11px", fontWeight:"600",
          color:`rgba(167,139,250,${d.opacity})`,
          textShadow:`0 0 10px rgba(139,92,246,${d.opacity*0.8})`,
          whiteSpace:"nowrap",
          background:`rgba(139,92,246,${d.opacity*0.07})`,
          padding:"2px 8px", borderRadius:"4px",
          border:`1px solid rgba(139,92,246,${d.opacity*0.18})`,
          backdropFilter:"blur(4px)",
        }}>{d.text}</div>
      ))}

      {/* AMBIENT */}
      <div style={{position:"fixed",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(139,92,246,0.05) 0%,transparent 70%)",left:`calc(${mousePos.x}vw - 300px)`,top:`calc(${mousePos.y}vh - 300px)`,pointerEvents:"none",zIndex:0,transition:"left 0.5s ease,top 0.5s ease"}}/>

      {/* NAV */}
      <nav style={{position:"fixed",top:"14px",left:"50%",transform:"translateX(-50%)",zIndex:100,display:"flex",alignItems:"center",gap:"24px",padding:"12px 24px",background:"rgba(255,255,255,0.03)",backdropFilter:"blur(24px)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"100px",boxShadow:"0 8px 32px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.04)",whiteSpace:"nowrap"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <WLogo size={28}/>
          <span style={{fontSize:"16px",fontWeight:"900",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"-0.5px"}}>WebIT AI</span>
        </div>
        {["Über uns","Demos","Preise","Kontakt"].map(item=>(
          <a key={item} href={`#${item.toLowerCase().replace(" ","")}`} style={{color:"rgba(255,255,255,0.38)",textDecoration:"none",fontSize:"13px",fontWeight:"500",transition:"color 0.2s"}}
          onMouseEnter={e=>e.currentTarget.style.color="white"}
          onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.38)"}>{item}</a>
        ))}
        <a href="#kontakt" style={{padding:"7px 16px",borderRadius:"100px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",color:"white",fontWeight:"700",fontSize:"13px",textDecoration:"none",boxShadow:"0 4px 16px rgba(139,92,246,0.3)"}}>Anfragen ✦</a>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"120px 24px 60px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
          <div style={{position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 60%)",top:"-150px",right:"-100px",animation:"float0 9s ease-in-out infinite"}}/>
          <div style={{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(239,68,68,0.07) 0%,transparent 60%)",bottom:"-80px",left:"-80px",animation:"float1 11s ease-in-out infinite"}}/>
          <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(139,92,246,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.025) 1px,transparent 1px)",backgroundSize:"60px 60px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)"}}/>
        </div>

        {/* TICKER */}
        <div style={{position:"absolute",top:"78px",left:0,right:0,overflow:"hidden",maskImage:"linear-gradient(90deg,transparent,black 15%,black 85%,transparent)"}}>
          <div style={{display:"flex",gap:"12px",animation:"scrollLeft 22s linear infinite",width:"max-content"}}>
            {[...PROJECTS,...PROJECTS].map((p,i)=>(
              <a key={i} href={p.href} style={{padding:"7px 16px",background:"rgba(255,255,255,0.03)",border:`1px solid ${p.color}33`,borderRadius:"100px",fontSize:"11px",fontWeight:"600",color:p.color,whiteSpace:"nowrap",textDecoration:"none",transition:"all 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.background=p.color+"15"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"}>{p.name} · {p.tag}</a>
            ))}
          </div>
        </div>

        <div style={{position:"relative",zIndex:2,opacity:loaded?1:0,transform:loaded?"translateY(0)":"translateY(40px)",transition:"all 1s ease"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"7px 18px",borderRadius:"100px",background:"rgba(139,92,246,0.08)",border:"1px solid rgba(139,92,246,0.2)",fontSize:"11px",color:"#c4b5fd",fontWeight:"600",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"28px",backdropFilter:"blur(8px)"}}>
            <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#8b5cf6",boxShadow:"0 0 8px #8b5cf6",display:"inline-block",animation:"pulse 2s infinite"}}/>
            KI-gestützte Web-Entwicklung · 2025
          </div>
          <h1 style={{fontSize:"clamp(38px,6.5vw,90px)",fontWeight:"900",lineHeight:"0.95",letterSpacing:"-3.5px",marginBottom:"16px",maxWidth:"900px"}}>
            Gestern analog.{" "}
            <span style={{background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Heute digital.</span>
          </h1>
          <h2 style={{fontSize:"clamp(18px,3vw,42px)",fontWeight:"800",letterSpacing:"-1.5px",color:"rgba(255,255,255,0.25)",marginBottom:"24px"}}>
            Morgen mit KI — weit vor der Konkurrenz.
          </h2>
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:"17px",maxWidth:"540px",margin:"0 auto 36px",lineHeight:"1.8"}}>
            Während andere noch kämpfen,{" "}
            <strong style={{color:"white"}}>baut WebIT AI deine digitale Zukunft</strong>{" "}
            — automatisiert, modern, mit echter KI.
          </p>
          <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap",marginBottom:"52px"}}>
            <a href="#demos" style={{padding:"15px 36px",borderRadius:"12px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",color:"white",fontWeight:"700",fontSize:"15px",textDecoration:"none",boxShadow:"0 8px 32px rgba(139,92,246,0.35)",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 16px 48px rgba(139,92,246,0.5)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 32px rgba(139,92,246,0.35)"}}>
              Live Demos ansehen ✦
            </a>
            <a href="#preise" style={{padding:"15px 36px",borderRadius:"12px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.09)",color:"white",fontWeight:"600",fontSize:"15px",textDecoration:"none",backdropFilter:"blur(10px)",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.borderColor="rgba(139,92,246,0.4)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.borderColor="rgba(255,255,255,0.09)"}}>
              Preise ansehen
            </a>
          </div>
          <div style={{display:"flex",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"16px",overflow:"hidden",backdropFilter:"blur(10px)"}}>
            {[{n:"120+",l:"Projekte"},{n:"98%",l:"Zufrieden"},{n:"5★",l:"Bewertung"},{n:"24h",l:"Reaktion"}].map((s,i)=>(
              <div key={i} style={{padding:"20px 32px",borderRight:i<3?"1px solid rgba(255,255,255,0.05)":"none",flex:1}}>
                <div style={{fontSize:"26px",fontWeight:"900",letterSpacing:"-1px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{s.n}</div>
                <div style={{fontSize:"11px",color:"rgba(255,255,255,0.28)",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WÜSTE VS OASE ══ */}
      <section style={{padding:"90px 40px",maxWidth:"1000px",margin:"0 auto"}}>
        <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px",textAlign:"center"}}>Die Wahrheit</p>
        <h2 style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"44px",textAlign:"center"}}>Wo stehst du gerade?</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3px",borderRadius:"24px",overflow:"hidden",border:"1px solid rgba(255,255,255,0.05)"}}>
          <div style={{padding:"52px 44px",background:"linear-gradient(135deg,#1a0a00,#2d1500)"}}>
            <div style={{fontSize:"38px",marginBottom:"12px"}}>🏜️</div>
            <div style={{fontSize:"10px",letterSpacing:"3px",color:"#92400e",textTransform:"uppercase",fontWeight:"700",marginBottom:"8px"}}>Ohne WebIT AI</div>
            <h3 style={{fontSize:"22px",fontWeight:"800",color:"#fbbf24",letterSpacing:"-0.5px",marginBottom:"18px"}}>Die digitale Wüste</h3>
            <ul style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"9px"}}>
              {["❌ Veraltete oder keine Website","❌ Keine KI-Automatisierung","❌ Kunden gehen zur Konkurrenz","❌ Manueller Aufwand frisst Zeit","❌ Kein digitales Wachstum"].map(t=>(
                <li key={t} style={{color:"rgba(251,191,36,0.5)",fontSize:"14px"}}>{t}</li>
              ))}
            </ul>
          </div>
          <div style={{padding:"52px 44px",background:"linear-gradient(135deg,#050f1a,#071525)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"radial-gradient(ellipse at 50% 0%,rgba(139,92,246,0.1),transparent 60%)",pointerEvents:"none"}}/>
            <div style={{fontSize:"38px",marginBottom:"12px"}}>🌊</div>
            <div style={{fontSize:"10px",letterSpacing:"3px",color:"#7c3aed",textTransform:"uppercase",fontWeight:"700",marginBottom:"8px"}}>Mit WebIT AI</div>
            <h3 style={{fontSize:"22px",fontWeight:"800",color:"#a78bfa",letterSpacing:"-0.5px",marginBottom:"18px"}}>Die digitale Oase</h3>
            <ul style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"9px"}}>
              {["✅ Moderne Hochleistungs-Website","✅ KI arbeitet 24/7 für dich","✅ Kunden finden & bleiben bei dir","✅ Alles automatisiert & skalierbar","✅ Digitales Wachstum auf Autopilot"].map(t=>(
                <li key={t} style={{color:"rgba(167,139,250,0.75)",fontSize:"14px"}}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ LIVE DEMOS ══ */}
      <section id="demos" style={{padding:"90px 40px",maxWidth:"1000px",margin:"0 auto"}}>
        <p style={{color:"#ef4444",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px",textAlign:"center"}}>Live Demos</p>
        <h2 style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"12px",textAlign:"center"}}>Für jede Branche</h2>
        <p style={{color:"rgba(255,255,255,0.3)",textAlign:"center",marginBottom:"44px",fontSize:"14px"}}>Klick auf eine Branche und sieh wie deine Seite aussehen könnte — live & echte Demo!</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px"}}>
          {INDUSTRIES.map((ind,i)=>(
            <a key={i} href={ind.href} style={{
              background: hoveredIndustry===i ? ind.color+"12" : "rgba(255,255,255,0.02)",
              border:`1px solid ${hoveredIndustry===i ? ind.color+"44" : "rgba(255,255,255,0.06)"}`,
              borderRadius:"16px",padding:"24px 20px",textAlign:"center",
              transition:"all 0.3s",cursor:"pointer",textDecoration:"none",
              display:"block",
              transform: hoveredIndustry===i ? "translateY(-6px)" : "translateY(0)",
              boxShadow: hoveredIndustry===i ? `0 20px 40px ${ind.color}15` : "none",
              backdropFilter:"blur(8px)",
            }}
            onMouseEnter={()=>setHoveredIndustry(i)}
            onMouseLeave={()=>setHoveredIndustry(null)}>
              <div style={{fontSize:"28px",marginBottom:"10px"}}>{ind.icon}</div>
              <div style={{fontSize:"14px",fontWeight:"700",color:hoveredIndustry===i?ind.color:"white",marginBottom:"4px",transition:"color 0.3s"}}>{ind.name}</div>
              <div style={{fontSize:"11px",color:"rgba(255,255,255,0.3)"}}>{ind.desc}</div>
              {ind.href !== "#" && (
                <div style={{marginTop:"12px",fontSize:"11px",color:ind.color,fontWeight:"600",opacity:hoveredIndustry===i?1:0,transition:"opacity 0.3s"}}>
                  Live Demo →
                </div>
              )}
              {ind.href === "#" && (
                <div style={{marginTop:"12px",fontSize:"10px",color:"rgba(255,255,255,0.2)",opacity:hoveredIndustry===i?1:0,transition:"opacity 0.3s"}}>
                  Kommt bald
                </div>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* ══ CODE MAGIC ZONE ══ */}
      <section style={{padding:"80px 40px",maxWidth:"1000px",margin:"0 auto",textAlign:"center"}}>
        <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px"}}>Interaktiv</p>
        <h2 style={{fontSize:"clamp(26px,4vw,48px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"10px"}}>Fühl die Magie 👇</h2>
        <p style={{color:"rgba(255,255,255,0.3)",marginBottom:"32px",fontSize:"14px"}}>Bewege deine Maus — sieh wie wir Code in Websites verwandeln</p>
        <div
          onMouseEnter={()=>setIsOnMagic(true)}
          onMouseLeave={()=>setIsOnMagic(false)}
          style={{
            height:"280px",borderRadius:"20px",
            background:isOnMagic?"rgba(139,92,246,0.04)":"rgba(255,255,255,0.02)",
            border:`1px solid ${isOnMagic?"rgba(139,92,246,0.25)":"rgba(255,255,255,0.05)"}`,
            position:"relative",overflow:"hidden",backdropFilter:"blur(20px)",cursor:"crosshair",
            transition:"all 0.4s",
            boxShadow:isOnMagic?"0 0 60px rgba(139,92,246,0.07),inset 0 1px 0 rgba(255,255,255,0.04)":"none",
          }}>
          <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(139,92,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.04) 1px,transparent 1px)",backgroundSize:"40px 40px",opacity:isOnMagic?1:0.3,transition:"opacity 0.4s"}}/>
          {isOnMagic && (
            <div style={{position:"absolute",width:"260px",height:"260px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,0.025) 0%,rgba(139,92,246,0.05) 40%,transparent 70%)",border:"1px solid rgba(255,255,255,0.05)",backdropFilter:"blur(6px)",left:`calc(${mousePos.x}% - 130px)`,top:"50%",transform:"translateY(-50%)",transition:"left 0.08s ease",pointerEvents:"none",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08)"}}/>
          )}
          {isOnMagic && [0,1,2,3].map(i=>(
            <div key={i} style={{position:"absolute",width:`${48+i*52}px`,height:`${48+i*52}px`,borderRadius:"50%",border:`1px solid rgba(255,255,255,${0.1-i*0.02})`,background:`rgba(255,255,255,${0.008-i*0.001})`,backdropFilter:"blur(1px)",left:`calc(${mousePos.x}% - ${24+i*26}px)`,top:"50%",transform:"translateY(-50%)",transition:`left ${0.08+i*0.04}s ease`,pointerEvents:"none",animation:`ripplePulse ${1.8+i*0.4}s ease-in-out infinite`,animationDelay:`${i*0.2}s`}}/>
          ))}
          <div style={{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",opacity:isOnMagic?0:1,transition:"opacity 0.3s",pointerEvents:"none"}}>
            <p style={{color:"rgba(255,255,255,0.15)",fontSize:"14px"}}>✦ Maus hier bewegen ✦</p>
          </div>
          {isOnMagic && <div style={{position:"absolute",bottom:"16px",left:"50%",transform:"translateX(-50%)",zIndex:3,whiteSpace:"nowrap",padding:"4px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"100px",backdropFilter:"blur(8px)"}}><span style={{fontSize:"11px",color:"rgba(167,139,250,0.6)",fontFamily:"'Courier New',monospace"}}>// WebIT AI macht das für dich 🚀</span></div>}
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" style={{padding:"90px 40px",maxWidth:"1000px",margin:"0 auto"}}>
        <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px"}}>Tech-Stack</p>
        <h2 style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"40px"}}>Womit wir bauen</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
          {[
            {icon:"▲",name:"Next.js",desc:"Blitzschnelle Web-Apps",color:"#fff"},
            {icon:"🐘",name:"PostgreSQL",desc:"Professionelle Datenbank",color:"#60a5fa"},
            {icon:"🐳",name:"Docker",desc:"Stabiler Betrieb",color:"#38bdf8"},
            {icon:"🎨",name:"Tailwind CSS",desc:"Perfektes Design",color:"#34d399"},
            {icon:"⬡",name:"shadcn/ui",desc:"Elegante Komponenten",color:"#a78bfa"},
            {icon:"🧠",name:"Claude AI",desc:"KI & Chatbots",color:"#ef4444"},
          ].map(s=>(
            <div key={s.name} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"14px",padding:"22px",transition:"all 0.3s",backdropFilter:"blur(8px)"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=s.color+"33";e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.background=s.color+"08"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.06)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.background="rgba(255,255,255,0.02)"}}>
              <div style={{fontSize:"22px",marginBottom:"8px"}}>{s.icon}</div>
              <div style={{fontSize:"14px",fontWeight:"700",color:s.color,marginBottom:"4px"}}>{s.name}</div>
              <div style={{fontSize:"12px",color:"rgba(255,255,255,0.28)",lineHeight:"1.5"}}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PREISE ══ */}
      <section id="preise" style={{padding:"90px 40px",maxWidth:"1000px",margin:"0 auto"}}>
        <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px",textAlign:"center"}}>Investition</p>
        <h2 style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"10px",textAlign:"center"}}>Transparent & Fair</h2>
        <p style={{color:"rgba(255,255,255,0.28)",textAlign:"center",marginBottom:"44px",fontSize:"14px"}}>Einmalige Zahlung · Keine monatlichen Kosten · Keine versteckten Gebühren</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"14px"}}>
          {[
            {tier:"Starter",price:"299",color:"#8b5cf6",features:["1 Landing Page","Mobile-optimiert","Kontaktformular","Google Maps","14 Tage Support"],popular:false},
            {tier:"Business",price:"799",color:"#ef4444",features:["Bis 6 Seiten","CMS System","SEO Optimierung","Google Analytics","Blog / News","60 Tage Support"],popular:true},
            {tier:"Premium",price:"1.499",color:"#a78bfa",features:["Unlimited Seiten","Online Shop","KI-Chatbot","SEO Full-Paket","Performance Audit","12 Monate Support"],popular:false},
          ].map(p=>(
            <div key={p.tier} style={{background:p.popular?"rgba(239,68,68,0.05)":"rgba(255,255,255,0.02)",border:p.popular?"1px solid rgba(239,68,68,0.35)":"1px solid rgba(255,255,255,0.06)",borderRadius:"20px",padding:"30px 24px",position:"relative",transform:p.popular?"translateY(-8px)":"none",boxShadow:p.popular?"0 0 60px rgba(239,68,68,0.08)":"none",backdropFilter:"blur(12px)",transition:"all 0.3s"}}
            onMouseEnter={e=>{if(!p.popular){e.currentTarget.style.borderColor="rgba(255,255,255,0.12)";e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.background="rgba(255,255,255,0.04)"}}}
            onMouseLeave={e=>{if(!p.popular){e.currentTarget.style.borderColor="rgba(255,255,255,0.06)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.background="rgba(255,255,255,0.02)"}}}>
              {p.popular&&<div style={{position:"absolute",top:"-1px",left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",color:"white",fontSize:"10px",fontWeight:"700",letterSpacing:"2px",padding:"5px 14px",borderRadius:"0 0 8px 8px"}}>BELIEBT</div>}
              <div style={{fontSize:"10px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,0.28)",fontWeight:"700",marginBottom:"10px"}}>{p.tier}</div>
              <div style={{fontSize:"42px",fontWeight:"900",letterSpacing:"-2px",background:`linear-gradient(135deg,${p.color},#8b5cf6)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"4px"}}>€{p.price}</div>
              <div style={{fontSize:"11px",color:"rgba(255,255,255,0.22)",marginBottom:"22px"}}>einmalig · zzgl. MwSt.</div>
              <ul style={{listStyle:"none",padding:0,marginBottom:"24px",display:"flex",flexDirection:"column",gap:"8px"}}>
                {p.features.map(f=>(
                  <li key={f} style={{fontSize:"13px",color:"rgba(255,255,255,0.42)",display:"flex",alignItems:"center",gap:"7px",borderBottom:"1px solid rgba(255,255,255,0.04)",paddingBottom:"8px"}}>
                    <span style={{color:"rgba(255,255,255,0.35)"}}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" style={{display:"block",padding:"12px",borderRadius:"10px",background:p.popular?"linear-gradient(135deg,#8b5cf6,#ef4444)":"rgba(255,255,255,0.05)",border:p.popular?"none":"1px solid rgba(255,255,255,0.08)",color:"white",fontWeight:"600",fontSize:"13px",textDecoration:"none",textAlign:"center",backdropFilter:"blur(4px)",transition:"all 0.2s"}}
              onMouseEnter={e=>{if(!p.popular){e.currentTarget.style.background="rgba(255,255,255,0.1)";e.currentTarget.style.borderColor="rgba(255,255,255,0.15)"}}}
              onMouseLeave={e=>{if(!p.popular){e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"}}}>
                {p.popular?"Jetzt starten →":"Anfragen →"}
              </a>
            </div>
          ))}
        </div>
        <div style={{marginTop:"14px",padding:"22px 28px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",backdropFilter:"blur(10px)"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"4px"}}>
              <span style={{fontSize:"16px"}}>🤖</span>
              <span style={{fontWeight:"700",fontSize:"14px"}}>KI Add-on — Claude AI Chatbot</span>
              <span style={{padding:"2px 10px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:"100px",color:"rgba(255,255,255,0.45)",fontSize:"10px",fontWeight:"600"}}>Zubuchbar</span>
            </div>
            <p style={{color:"rgba(255,255,255,0.28)",fontSize:"12px"}}>Intelligenter 24/7 Kundenservice-Bot powered by Claude AI</p>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:"24px",fontWeight:"900",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>+299€</div>
            <div style={{fontSize:"11px",color:"rgba(255,255,255,0.22)"}}>zu jedem Paket</div>
          </div>
        </div>
      </section>

      {/* ══ KONTAKT ══ */}
      <section id="kontakt" style={{padding:"90px 40px",maxWidth:"660px",margin:"0 auto",textAlign:"center"}}>
        <div style={{padding:"52px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"28px",backdropFilter:"blur(24px)",position:"relative",overflow:"hidden",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.04)"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 0%,rgba(139,92,246,0.07),transparent 60%)",pointerEvents:"none"}}/>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"14px"}}><WLogo size={44}/></div>
            <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"10px"}}>Starte jetzt</p>
            <h2 style={{fontSize:"clamp(24px,4vw,40px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"12px"}}>
              Deine digitale Zukunft<br/>
              <span style={{background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>beginnt heute.</span>
            </h2>
            <p style={{color:"rgba(255,255,255,0.3)",lineHeight:"1.7",marginBottom:"32px",fontSize:"14px"}}>Kostenlose Erstberatung · Kein Risiko · Antwort in 24h</p>
            <a href="mailto:ghaith.almadani.makkieh@gmail.com" style={{display:"inline-block",padding:"15px 44px",borderRadius:"12px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",color:"white",fontWeight:"700",fontSize:"15px",textDecoration:"none",boxShadow:"0 8px 40px rgba(139,92,246,0.25)",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 16px 60px rgba(139,92,246,0.4)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 40px rgba(139,92,246,0.25)"}}>
              ✉️ Jetzt kostenlos anfragen
            </a>
            <p style={{marginTop:"20px",color:"rgba(255,255,255,0.2)",fontSize:"13px"}}>
              📞 <a href="tel:+4917685974436" style={{color:"rgba(255,255,255,0.35)",textDecoration:"none"}}>+49 176 85974436</a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.04)",padding:"28px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"14px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <WLogo size={24}/>
          <span style={{fontWeight:"800",fontSize:"14px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>WebIT AI</span>
        </div>
        <div style={{display:"flex",gap:"20px"}}>
          <a href="/impressum" style={{color:"rgba(255,255,255,0.18)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"}} onMouseEnter={e=>e.currentTarget.style.color="white"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.18)"}>Impressum</a>
          <a href="/datenschutz" style={{color:"rgba(255,255,255,0.18)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"}} onMouseEnter={e=>e.currentTarget.style.color="white"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.18)"}>Datenschutz</a>
          <a href="mailto:ghaith.almadani.makkieh@gmail.com" style={{color:"rgba(255,255,255,0.18)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"}} onMouseEnter={e=>e.currentTarget.style.color="white"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.18)"}>Kontakt</a>
        </div>
        <span style={{color:"rgba(255,255,255,0.1)",fontSize:"12px"}}>© 2025 WebIT AI · Ghaith Almadani · Rosenberg</span>
      </footer>

      {/* ══ CHATBOT ══ */}
      <button onClick={()=>setChatOpen(o=>!o)} style={{position:"fixed",bottom:"28px",right:"28px",zIndex:500,width:"54px",height:"54px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",backdropFilter:"blur(16px)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.08)",fontSize:"20px",transition:"all 0.2s"}}
      onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.09)";e.currentTarget.style.transform="scale(1.05)"}}
      onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.transform="scale(1)"}}>
        {chatOpen?"✕":"🤖"}
        {!chatOpen&&<div style={{position:"absolute",top:"-2px",right:"-2px",width:"12px",height:"12px",background:"#10b981",borderRadius:"50%",border:"2px solid #050508"}}/>}
      </button>

      {chatOpen && (
        <div style={{position:"fixed",bottom:"90px",right:"28px",zIndex:499,width:"330px",background:"rgba(8,8,18,0.9)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"20px",overflow:"hidden",display:"flex",flexDirection:"column",maxHeight:"520px",boxShadow:"0 32px 80px rgba(0,0,0,0.7),inset 0 1px 0 rgba(255,255,255,0.04)",backdropFilter:"blur(24px)"}}>
          <div style={{padding:"14px 16px",display:"flex",alignItems:"center",gap:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(255,255,255,0.02)"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",flexShrink:0}}><WLogo size={18}/></div>
            <div style={{flex:1}}>
              <div style={{fontWeight:"700",fontSize:"13px"}}>WebIT AI Assistent</div>
              <div style={{fontSize:"10px",color:"#10b981",display:"flex",alignItems:"center",gap:"4px"}}><span style={{width:"5px",height:"5px",background:"#10b981",borderRadius:"50%",display:"inline-block"}}/>Online · antwortet sofort</div>
            </div>
            <button onClick={()=>setChatOpen(false)} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.22)",cursor:"pointer",fontSize:"16px",lineHeight:1}}>✕</button>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:"14px",display:"flex",flexDirection:"column",gap:"8px",minHeight:"230px",maxHeight:"290px"}}>
            {messages.map((msg,i)=>(
              <div key={i} style={{maxWidth:"87%",padding:"9px 12px",borderRadius:msg.role==="bot"?"12px 12px 12px 4px":"12px 12px 4px 12px",background:msg.role==="bot"?"rgba(255,255,255,0.05)":"rgba(139,92,246,0.25)",alignSelf:msg.role==="bot"?"flex-start":"flex-end",fontSize:"12.5px",lineHeight:"1.55",border:msg.role==="bot"?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(139,92,246,0.35)",whiteSpace:"pre-line",backdropFilter:"blur(8px)"}}>{msg.text}</div>
            ))}
            {typing&&<div style={{maxWidth:"87%",padding:"9px 12px",borderRadius:"12px 12px 12px 4px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.06)",display:"flex",gap:"4px",alignItems:"center",width:"48px",backdropFilter:"blur(8px)"}}>{[0,1,2].map(i=><div key={i} style={{width:"5px",height:"5px",borderRadius:"50%",background:"rgba(255,255,255,0.32)",animation:"dot 1.2s infinite",animationDelay:`${i*0.2}s`}}/>)}</div>}
            <div ref={messagesEndRef}/>
          </div>
          <div style={{padding:"7px 10px",display:"flex",gap:"5px",flexWrap:"wrap",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
            {["💰 Preise","🎨 Demos","⏱ Dauer","📅 Termin"].map(q=>(
              <button key={q} onClick={()=>{setMessages(prev=>[...prev,{role:"user",text:q}]);setTyping(true);setTimeout(()=>{setTyping(false);setMessages(prev=>[...prev,{role:"bot",text:getBotAnswer(q)}]);},800);}} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.38)",padding:"4px 10px",borderRadius:"100px",fontSize:"11px",cursor:"pointer",fontFamily:"inherit",fontWeight:"500",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.color="white"}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.color="rgba(255,255,255,0.38)"}}>{q}</button>
            ))}
          </div>
          <div style={{display:"flex",gap:"7px",padding:"10px",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendMessage()} placeholder="Stell mir eine Frage..." style={{flex:1,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"10px",padding:"9px 12px",color:"white",fontSize:"12.5px",outline:"none",fontFamily:"inherit"}}/>
            <button onClick={sendMessage} style={{background:"rgba(139,92,246,0.35)",border:"1px solid rgba(139,92,246,0.25)",borderRadius:"10px",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"14px",flexShrink:0,color:"white",transition:"all 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.background="rgba(139,92,246,0.6)"}
            onMouseLeave={e=>e.currentTarget.style.background="rgba(139,92,246,0.35)"}>→</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float0{0%,100%{transform:translate(0,0)}50%{transform:translate(15px,-25px)}}
        @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(-12px,18px)}}
        @keyframes scrollLeft{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 8px #8b5cf6}50%{opacity:0.4}}
        @keyframes dot{0%,60%,100%{transform:translateY(0);opacity:0.32}30%{transform:translateY(-5px);opacity:1}}
        @keyframes ripplePulse{0%,100%{opacity:0.7}50%{opacity:0.2}}
      `}</style>
    </main>
  );
}
