// @ts-nocheck
"use client";
import { useEffect, useRef, useState, useCallback } from "react";

// ── Space particles generated once ──
const STARS = Array.from({length:120},(_,i)=>({
  id:i,
  x: Math.random()*100,
  y: Math.random()*100,
  size: Math.random()*2.2+0.4,
  opacity: Math.random()*0.7+0.15,
  dur: Math.random()*6+4,
  delay: Math.random()*8,
}));

const FLOATERS = Array.from({length:18},(_,i)=>({
  id:i,
  x: Math.random()*100,
  y: Math.random()*100,
  size: Math.random()*180+60,
  color: i%3===0?"rgba(139,92,246,": i%3===1?"rgba(239,68,68,":"rgba(99,102,241,",
  opacity: Math.random()*0.04+0.015,
  dur: Math.random()*30+20,
  delay: Math.random()*15,
  tx: (Math.random()-0.5)*8,
  ty: (Math.random()-0.5)*8,
}));

const METEORS = Array.from({length:6},(_,i)=>({
  id:i,
  startX: 60+Math.random()*40,
  startY: Math.random()*40,
  dur: Math.random()*3+2,
  delay: Math.random()*12+i*3,
  length: Math.random()*120+80,
}));

const PROJECTS = [
  { name:"IRONFIT Studio", tag:"Fitness", color:"#ef4444", href:"/demo/fitness" },
  { name:"La Bella", tag:"Restaurant", color:"#d4af37", href:"/demo/restaurant" },
  { name:"Studio Élite", tag:"Friseur", color:"#8b5cf6", href:"/demo/friseur" },
  { name:"MedBook App", tag:"Healthcare", color:"#06b6d4", href:"#" },
  { name:"RealEstate AI", tag:"Immobilien", color:"#10b981", href:"#" },
  { name:"LegalFlow", tag:"Kanzlei", color:"#f97316", href:"#" },
];

const INDUSTRIES = [
  {icon:"🏋️",name:"Fitness",desc:"Gym / Studio",color:"#ef4444",href:"/demo/fitness"},
  {icon:"🍝",name:"Restaurant",desc:"Food & Bar",color:"#d4af37",href:"/demo/restaurant"},
  {icon:"✂️",name:"Friseur",desc:"Hair Salon",color:"#8b5cf6",href:"/demo/friseur"},
  {icon:"🏥",name:"Arztpraxis",desc:"Healthcare",color:"#06b6d4",href:"/demo/arztpraxis"},
  {icon:"🏠",name:"Immobilien",desc:"Real Estate",color:"#10b981",href:"/demo/immobilien"},
  {icon:"⚖️",name:"Kanzlei",desc:"Legal & Law",color:"#f97316",href:"/demo/kanzlei"},
  {icon:"🛒",name:"Online Shop",desc:"E-Commerce",color:"#ec4899",href:"/demo/shop"},
  {icon:"🎓",name:"Bildung",desc:"Schule / Kurs",color:"#a78bfa",href:"/demo/bildung"},
];

const BEFORE_AFTER = [
  {
    before:{title:"Keine Website",desc:"Kunden finden dich nicht auf Google. Du verlierst täglich Aufträge an die Konkurrenz.",icon:"😔"},
    after:{title:"Moderne Website",desc:"Professioneller Auftritt, SEO-optimiert — Kunden finden dich & buchen direkt online.",icon:"🚀"},
  },
];

function getBotAnswer(msg:string):string {
  const m = msg.toLowerCase();
  if(m.includes("preis")||m.includes("kosten")||m.includes("paket"))
    return "💰 Unsere Pakete:\n\n🥉 Starter – 299€\nLanding Page, Mobile, 14 Tage Support\n\n🥈 Business – 799€\nBis 6 Seiten, CMS, SEO, 60 Tage Support\n\n🥇 Premium – 1.499€\nUnlimited, Shop, KI-Bot, 12 Monate Support\n\n🤖 KI Add-on – +299€";
  if(m.includes("wie lang")||m.includes("dauer"))
    return "⏱ Lieferzeiten:\n\n• Landing Page → 3–5 Tage\n• Business → 7–14 Tage\n• Premium → 14–21 Tage";
  if(m.includes("kontakt")||m.includes("termin"))
    return "📅 Schreib uns:\n\n📧 ghaith.almadani.makkieh@gmail.com\n📞 +49 176 85974436\n\nAntwort in 24h! 🚀";
  if(m.includes("demo")||m.includes("beispiel"))
    return "🎨 Live Demos:\n\n🏋️ /demo/fitness\n🍝 /demo/restaurant\n✂️ /demo/friseur";
  if(m.includes("hallo")||m.includes("hi"))
    return "👋 Hallo! Willkommen bei WebIT AI!\n\nFrag mich:\n• 💰 Preise\n• 🎨 Demos\n• ⏱ Dauer";
  return "💡 Schreib uns:\n\n📧 ghaith.almadani.makkieh@gmail.com\n📞 +49 176 85974436";
}

function WLogo({size=32}:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#ef4444"/>
        </linearGradient>
      </defs>
      <path d="M4 8 L10 32 L16 16 L20 28 L24 16 L30 32 L36 8"
        stroke="url(#wg)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function InteractiveCodeDemo({isMobile,pad,h2}:{isMobile:boolean,pad:string,h2:any}) {
  const [lines, setLines] = useState<{id:number,text:string,color:string,x:number,y:number,opacity:number}[]>([]);
  const [mousePos, setMousePos] = useState({x:50,y:50,active:false});
  const [typing, setTyping] = useState<{text:string,color:string}[]>([]);
  const [typingIdx, setTypingIdx] = useState(0);
  const lidRef = useRef(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const lastSpawn = useRef(0);

  const CODE_SNIPPETS = [
    {text:`const site = new WebITAI({`, color:"#8b5cf6"},
    {text:`  design: "premium",`, color:"#a78bfa"},
    {text:`  seo: true,`, color:"#10b981"},
    {text:`  chatbot: "GPT-4",`, color:"#f59e0b"},
    {text:`  mobile: "optimiert",`, color:"#8b5cf6"},
    {text:`});`, color:"#a78bfa"},
    {text:`// KI generiert deine Seite`, color:"#4ade80"},
    {text:`await site.deploy(); // ✓ Live`, color:"#ef4444"},
    {text:`<Hero gradient="purple→red" />`, color:"#8b5cf6"},
    {text:`<KIBot model="gpt-4" lang="de" />`, color:"#f59e0b"},
    {text:`<SEO rank="Google #1" />`, color:"#10b981"},
    {text:`<Animation type="space" />`, color:"#a78bfa"},
    {text:`export const speed = "3-5 Tage";`, color:"#ef4444"},
    {text:`const price = { starter: 299 };`, color:"#8b5cf6"},
    {text:`// WebIT AI — Next.js + KI`, color:"#4ade80"},
    {text:`<MobileNav ios={true} android />`, color:"#f9a8d4"},
  ];

  useEffect(()=>{
    const iv = setInterval(()=>{
      if(!mousePos.active) return;
      setTypingIdx(i=>{
        const next = (i+1)%CODE_SNIPPETS.length;
        setTyping(t=>[...t.slice(-8), CODE_SNIPPETS[next]]);
        return next;
      });
    },420);
    return ()=>clearInterval(iv);
  },[mousePos.active]);

  function onMove(e:React.MouseEvent) {
    const r = boxRef.current?.getBoundingClientRect();
    if(!r) return;
    const x = (e.clientX-r.left)/r.width*100;
    const y = (e.clientY-r.top)/r.height*100;
    setMousePos({x,y,active:true});

    const now = Date.now();
    if(now - lastSpawn.current < 120) return;
    lastSpawn.current = now;

    const snippets = CODE_SNIPPETS;
    const s = snippets[Math.floor(Math.random()*snippets.length)];
    const id = lidRef.current++;
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    setLines(l=>[...l.slice(-20),{id,text:s.text,color:s.color,x:px,y:py,opacity:1}]);
    setTimeout(()=>setLines(l=>l.filter(x=>x.id!==id)),1800);
  }

  return (
    <section style={{padding:pad,maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:1}}>
      <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px",textAlign:"center"}}>Interaktiv</p>
      <h2 style={{...h2,marginBottom:"8px",textAlign:"center"}}>WebIT AI beim Arbeiten</h2>
      <p style={{color:"rgba(255,255,255,0.28)",textAlign:"center",marginBottom:"28px",fontSize:"13px"}}>
        {isMobile?"Das baut WebIT AI für dich":"🖱 Maus über die Fläche bewegen — sieh wie Code entsteht"}
      </p>

      {/* THE BIG INTERACTIVE AREA */}
      <div ref={boxRef} onMouseMove={onMove} onMouseLeave={()=>{setMousePos(m=>({...m,active:false}));setTyping([]);}}
        style={{position:"relative",borderRadius:"24px",overflow:"hidden",
          border:"1px solid rgba(139,92,246,0.2)",
          background:"linear-gradient(135deg,#05040e,#080614,#06040c)",
          cursor:"crosshair",userSelect:"none",minHeight:"360px",
          boxShadow:"0 0 60px rgba(139,92,246,0.08)",
        }}>

        {/* Grid background */}
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(139,92,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.04) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none"}}/>

        {/* Mouse glow */}
        <div style={{position:"absolute",pointerEvents:"none",zIndex:1,
          left:`${mousePos.x}%`,top:`${mousePos.y}%`,
          width:"400px",height:"400px",
          transform:"translate(-50%,-50%)",
          background:`radial-gradient(circle,rgba(139,92,246,${mousePos.active?0.14:0}) 0%,rgba(239,68,68,${mousePos.active?0.04:0}) 40%,transparent 65%)`,
          transition:"left 0.04s,top 0.04s,background 0.3s",
        }}/>

        {/* Floating code lines from mouse */}
        {lines.map(l=>(
          <div key={l.id} style={{
            position:"absolute",pointerEvents:"none",zIndex:5,
            left:l.x,top:l.y,
            fontSize:"12px",fontWeight:"700",color:l.color,
            fontFamily:"'Courier New',monospace",
            whiteSpace:"nowrap",
            animation:"floatCode 1.8s ease-out forwards",
            transform:"translateX(-40%)",
            textShadow:`0 0 12px ${l.color}88`,
          }}>{l.text}</div>
        ))}

        {/* Terminal panel — right side */}
        <div style={{position:"absolute",top:"20px",right:"20px",width:isMobile?"calc(100% - 40px)":"320px",
          background:"rgba(0,0,0,0.7)",border:"1px solid rgba(139,92,246,0.2)",
          borderRadius:"14px",overflow:"hidden",backdropFilter:"blur(12px)",zIndex:6,
        }}>
          {/* Terminal header */}
          <div style={{padding:"10px 14px",background:"rgba(255,255,255,0.03)",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"6px"}}>
            <div style={{width:"10px",height:"10px",borderRadius:"50%",background:"#ef4444"}}/>
            <div style={{width:"10px",height:"10px",borderRadius:"50%",background:"#f59e0b"}}/>
            <div style={{width:"10px",height:"10px",borderRadius:"50%",background:"#10b981"}}/>
            <span style={{marginLeft:"8px",fontSize:"11px",color:"rgba(255,255,255,0.3)",fontFamily:"monospace"}}>webit-ai.tsx</span>
          </div>
          {/* Terminal code lines */}
          <div style={{padding:"14px",fontFamily:"'Courier New',monospace",fontSize:"11px",lineHeight:"1.9",minHeight:"160px"}}>
            {typing.length===0 ? (
              <div style={{color:"rgba(255,255,255,0.15)"}}>
                <span style={{color:"#4ade80"}}>$</span> {isMobile?"Unten mehr sehen...":"Maus bewegen..."}
                <span style={{animation:"blink 1s infinite",color:"#8b5cf6"}}>█</span>
              </div>
            ) : typing.map((t,i)=>(
              <div key={i} style={{color:t.color,opacity:0.6+(i/typing.length)*0.4,
                animation:`slideIn 0.2s ease both`}}>{t.text}</div>
            ))}
          </div>
        </div>

        {/* Left info — only when not hovering */}
        <div style={{position:"relative",zIndex:2,padding:"36px 32px",maxWidth:isMobile?"100%":"55%"}}>
          {!mousePos.active&&!isMobile ? (
            <div style={{opacity:0.4,pointerEvents:"none"}}>
              <div style={{fontSize:"40px",marginBottom:"16px"}}>🖱️</div>
              <p style={{color:"rgba(255,255,255,0.4)",fontSize:"14px",lineHeight:"1.8"}}>Maus hier bewegen<br/>und sieh wie WebIT AI<br/>deine Website baut...</p>
            </div>
          ) : (
            <div>
              <div style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 12px",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.25)",borderRadius:"100px",fontSize:"10px",color:"#4ade80",fontWeight:"700",marginBottom:"16px"}}>
                <span style={{width:"6px",height:"6px",background:"#4ade80",borderRadius:"50%",display:"inline-block",animation:"pulse 1s infinite"}}/>
                KI generiert gerade...
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                {["✦ Design wird erstellt","✦ SEO wird optimiert","✦ KI-Chatbot wird eingebaut","✦ Mobile wird angepasst"].map((t,i)=>(
                  <div key={i} style={{fontSize:"13px",color:"rgba(255,255,255,0.5)",display:"flex",alignItems:"center",gap:"8px",
                    animation:`fadeSlide 0.3s ease ${i*0.1}s both`}}>
                    <span style={{color:"#8b5cf6"}}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom hint */}
        {!mousePos.active&&!isMobile&&(
          <div style={{position:"absolute",bottom:"16px",left:"50%",transform:"translateX(-50%)",fontSize:"11px",color:"rgba(255,255,255,0.12)",whiteSpace:"nowrap",pointerEvents:"none"}}>
            🖱 Maus über diese Fläche bewegen
          </div>
        )}
      </div>

      <style>{`
        @keyframes floatCode{0%{opacity:0;transform:translateX(-40%) translateY(0) scale(0.8)}10%{opacity:1;transform:translateX(-40%) translateY(-4px) scale(1)}80%{opacity:0.7}100%{opacity:0;transform:translateX(-40%) translateY(-60px) scale(0.9)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
        @keyframes fadeSlide{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
      `}</style>
    </section>
  );
}


export default function Home() {
  const [loaded, setLoaded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatBounce, setChatBounce] = useState(false);
  const [messages, setMessages] = useState<{role:string,text:string}[]>([
    {role:"bot",text:"👋 Hallo! Ich bin der WebIT AI Assistent.\n\nFrag mich alles — Preise, Demos, KI-Features! 😊"}
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [compareIndex, setCompareIndex] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<number|null>(null);

  // Hero hover glow — only tracks inside hero, NO global trail
  const [heroGlow, setHeroGlow] = useState({x:50,y:50,active:false});
  // Global cursor glow
  const [cursor, setCursor] = useState({x:-999,y:-999});
  // Code particles
  const [codeParticles, setCodeParticles] = useState<{id:number,x:number,y:number,char:string,color:string}[]>([]);
  const particleId = useRef(0);

  // Draggable chat button
  const [chatPos, setChatPos] = useState({x:0, y:0});
  const [formData, setFormData] = useState({name:"",email:"",message:""});
  const [formSent, setFormSent] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const isDragging = useRef(false);
  const dragOrigin = useRef({mx:0, my:0, px:0, py:0});
  const didDrag = useRef(false);

  const industryRef = useRef<HTMLDivElement>(null);
  const compareTouchX = useRef(0);
  const industryTouchX = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Chat bounce every 5s
  useEffect(() => {
    const iv = setInterval(() => {
      if (!chatOpen) { setChatBounce(true); setTimeout(() => setChatBounce(false), 700); }
    }, 5000);
    return () => clearInterval(iv);
  }, [chatOpen]);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({behavior:"smooth"}); }, [messages, typing]);

  // DRAG
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    didDrag.current = false;
    dragOrigin.current = {mx: e.clientX, my: e.clientY, px: chatPos.x, py: chatPos.y};
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, [chatPos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragOrigin.current.mx;
    const dy = e.clientY - dragOrigin.current.my;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) didDrag.current = true;
    setChatPos({x: dragOrigin.current.px + dx, y: dragOrigin.current.py + dy});
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  function handleChatClick() {
    if (!didDrag.current) setChatOpen(o => !o);
  }

  // Compare touch
  function onCompareTouchStart(e: React.TouchEvent) { compareTouchX.current = e.touches[0].clientX; }
  function onCompareTouchEnd(e: React.TouchEvent) {
    const diff = compareTouchX.current - e.changedTouches[0].clientX;
    if (diff > 50) setCompareIndex(i => Math.min(i+1, BEFORE_AFTER.length-1));
    else if (diff < -50) setCompareIndex(i => Math.max(i-1, 0));
  }

  // Industry touch
  function onIndTouchStart(e: React.TouchEvent) { industryTouchX.current = e.touches[0].clientX; }
  function onIndTouchEnd(e: React.TouchEvent) {
    const diff = industryTouchX.current - e.changedTouches[0].clientX;
    if (diff > 50 && industryRef.current) industryRef.current.scrollBy({left:200,behavior:"smooth"});
    else if (diff < -50 && industryRef.current) industryRef.current.scrollBy({left:-200,behavior:"smooth"});
  }

  function sendMessage() {
    const txt = input.trim(); if (!txt) return;
    setMessages(p => [...p, {role:"user",text:txt}]);
    setInput(""); setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(p => [...p, {role:"bot",text:getBotAnswer(txt)}]);
    }, 700+Math.random()*400);
  }

  const pad = isMobile ? "60px 20px" : "90px 40px";
  const h2 = {fontSize: isMobile?"clamp(24px,7vw,38px)":"clamp(28px,4vw,52px)" as string, fontWeight:"900", letterSpacing:"-2px"};

  return (
    <main id="top" style={{minHeight:"100vh",background:"#050508",color:"white",fontFamily:"'Segoe UI',sans-serif",overflowX:"hidden"}}
      onMouseMove={e=>{
        if(isMobile) return;
        setCursor({x:e.clientX,y:e.clientY});
        // spawn code particle every ~80ms
        if(Math.random()>0.7){
          const chars=["</>","{}","[]","=>","AI","01","//","&&","px","🚀","✦","KI"];
          const colors=["#8b5cf6","#ef4444","#a78bfa","#c4b5fd","#f9a8d4"];
          const id=particleId.current++;
          const p={id,x:e.clientX,y:e.clientY,char:chars[Math.floor(Math.random()*chars.length)],color:colors[Math.floor(Math.random()*colors.length)]};
          setCodeParticles(prev=>[...prev.slice(-18),p]);
          setTimeout(()=>setCodeParticles(prev=>prev.filter(x=>x.id!==id)),900);
        }
      }}
      onMouseLeave={()=>setCursor({x:-999,y:-999})}>

      {/* Global cursor glow */}
      {!isMobile&&<div style={{position:"fixed",pointerEvents:"none",zIndex:0,left:cursor.x,top:cursor.y,width:"600px",height:"600px",transform:"translate(-50%,-50%)",background:"radial-gradient(circle,rgba(139,92,246,0.055) 0%,transparent 65%)",transition:"left 0.08s ease,top 0.08s ease"}}/>}

      {/* Code particles */}
      {!isMobile&&codeParticles.map(p=>(
        <div key={p.id} style={{position:"fixed",pointerEvents:"none",zIndex:999,left:p.x,top:p.y,fontSize:"11px",fontWeight:"700",color:p.color,fontFamily:"monospace",whiteSpace:"nowrap",animation:"codeFloat 0.9s ease-out forwards",transform:"translateX(-50%)"}}>{p.char}</div>
      ))}

      {/* ══ SPACE BACKGROUND ══ */}
      <div style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"}}>

        {/* Deep nebula clouds */}
        {FLOATERS.map(f=>(
          <div key={f.id} style={{
            position:"absolute",
            left:`${f.x}%`, top:`${f.y}%`,
            width:`${f.size}px`, height:`${f.size}px`,
            borderRadius:"50%",
            background:`radial-gradient(circle, ${f.color}${f.opacity}) 0%, ${f.color}0) 70%)`,
            animation:`nebula${f.id%4} ${f.dur}s ease-in-out infinite`,
            animationDelay:`-${f.delay}s`,
            filter:"blur(40px)",
            transform:"translate(-50%,-50%)",
          }}/>
        ))}

        {/* Stars */}
        {STARS.map(s=>(
          <div key={s.id} style={{
            position:"absolute",
            left:`${s.x}%`, top:`${s.y}%`,
            width:`${s.size}px`, height:`${s.size}px`,
            borderRadius:"50%",
            background:"white",
            opacity:s.opacity,
            animation:`starTwinkle ${s.dur}s ease-in-out infinite`,
            animationDelay:`-${s.delay}s`,
            boxShadow:s.size>1.5?`0 0 ${s.size*3}px rgba(255,255,255,0.6)`:"none",
          }}/>
        ))}

        {/* Shooting meteors */}
        {METEORS.map(m=>(
          <div key={m.id} style={{
            position:"absolute",
            left:`${m.startX}%`, top:`${m.startY}%`,
            width:`${m.length}px`, height:"1px",
            background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
            animation:`meteor ${m.dur}s linear infinite`,
            animationDelay:`${m.delay}s`,
            opacity:0,
            transform:"rotate(-35deg)",
            transformOrigin:"left center",
          }}/>
        ))}

        {/* Subtle grid */}
        <div style={{
          position:"absolute",inset:0,
          backgroundImage:"linear-gradient(rgba(139,92,246,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.018) 1px,transparent 1px)",
          backgroundSize:"80px 80px",
        }}/>
      </div>

      {/* NAV */}
      <nav style={{position:"fixed",top:isMobile?"10px":"14px",left:"50%",transform:"translateX(-50%)",zIndex:100,display:"flex",alignItems:"center",gap:isMobile?"14px":"24px",padding:isMobile?"10px 16px":"12px 24px",background:"rgba(255,255,255,0.03)",backdropFilter:"blur(24px)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"100px",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",whiteSpace:"nowrap"}}>
        <a href="/" style={{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none"}}>
          <WLogo size={isMobile?22:28}/>
          <span style={{fontSize:isMobile?"14px":"16px",fontWeight:"900",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>WebIT AI</span>
        </a>
        {!isMobile && ["Demos","Preise","Kontakt"].map(n=>(
          <a key={n} href={`#${n.toLowerCase()}`} style={{color:"rgba(255,255,255,0.38)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"}}
          onMouseEnter={e=>e.currentTarget.style.color="white"}
          onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.38)"}>{n}</a>
        ))}
        <a href="#kontakt" style={{padding:isMobile?"6px 12px":"7px 16px",borderRadius:"100px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",color:"white",fontWeight:"700",fontSize:isMobile?"12px":"13px",textDecoration:"none"}}>Anfragen ✦</a>
      </nav>

      {/* ══ HERO — hover glow nur hier ══ */}
      <section
        onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setHeroGlow({x:((e.clientX-r.left)/r.width)*100,y:((e.clientY-r.top)/r.height)*100,active:true});}}
        onMouseLeave={()=>setHeroGlow(g=>({...g,active:false}))}
        style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:isMobile?"100px 20px 60px":"120px 24px 60px",position:"relative",overflow:"hidden"}}>

        {/* Mouse glow — only inside hero */}
        <div style={{position:"absolute",inset:0,background:heroGlow.active?`radial-gradient(600px circle at ${heroGlow.x}% ${heroGlow.y}%, rgba(139,92,246,0.07), transparent 50%)`:"none",pointerEvents:"none",transition:"background 0.15s"}}/>

        <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
          <div style={{position:"absolute",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 60%)",top:"-100px",right:"-80px",animation:"float0 9s ease-in-out infinite"}}/>
          <div style={{position:"absolute",width:"350px",height:"350px",borderRadius:"50%",background:"radial-gradient(circle,rgba(239,68,68,0.07) 0%,transparent 60%)",bottom:"-60px",left:"-60px",animation:"float1 11s ease-in-out infinite"}}/>
          <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(139,92,246,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.02) 1px,transparent 1px)",backgroundSize:"60px 60px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)"}}/>
        </div>

        {/* TICKER — seamless loop */}
        <div style={{position:"absolute",top:isMobile?"68px":"78px",left:0,right:0,overflow:"hidden",maskImage:"linear-gradient(90deg,transparent,black 10%,black 90%,transparent)"}}>
          <div style={{display:"flex",gap:"12px",animation:"scrollLeft 30s linear infinite",width:"max-content"}}>
            {[...PROJECTS,...PROJECTS,...PROJECTS,...PROJECTS].map((p,i)=>(
              <a key={i} href={p.href} style={{padding:"6px 14px",background:"rgba(255,255,255,0.03)",border:`1px solid ${p.color}33`,borderRadius:"100px",fontSize:"11px",fontWeight:"600",color:p.color,whiteSpace:"nowrap",textDecoration:"none",flexShrink:0}}>{p.name} · {p.tag}</a>
            ))}
          </div>
        </div>

        <div style={{position:"relative",zIndex:2,opacity:loaded?1:0,transform:loaded?"translateY(0)":"translateY(40px)",transition:"all 1s ease"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",borderRadius:"100px",background:"rgba(139,92,246,0.08)",border:"1px solid rgba(139,92,246,0.2)",fontSize:"11px",color:"#c4b5fd",fontWeight:"600",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"24px",backdropFilter:"blur(8px)"}}>
            <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#8b5cf6",boxShadow:"0 0 8px #8b5cf6",display:"inline-block",animation:"pulse 2s infinite"}}/>
            KI-gestützte Web-Entwicklung · 2026
          </div>
          <h1 style={{fontSize:isMobile?"clamp(32px,9vw,56px)":"clamp(42px,6.5vw,90px)",fontWeight:"900",lineHeight:"0.95",letterSpacing:isMobile?"-2px":"-3.5px",marginBottom:"14px"}}>
            Gestern analog.{" "}
            <span style={{background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Heute digital.</span>
          </h1>
          <h2 style={{fontSize:isMobile?"clamp(14px,4vw,20px)":"clamp(18px,3vw,40px)",fontWeight:"800",letterSpacing:"-1px",color:"rgba(255,255,255,0.25)",marginBottom:"20px"}}>
            Morgen mit KI — weit vor der Konkurrenz.
          </h2>
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:isMobile?"14px":"17px",maxWidth:"540px",margin:"0 auto 32px",lineHeight:"1.8"}}>
            Während andere noch kämpfen,{" "}
            <strong style={{color:"white"}}>baut WebIT AI deine digitale Zukunft</strong>{" "}
            — automatisiert, modern, mit echter KI.
          </p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginBottom:"44px"}}>
            <a href="#demos" style={{padding:isMobile?"13px 28px":"15px 36px",borderRadius:"12px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",color:"white",fontWeight:"700",fontSize:isMobile?"14px":"15px",textDecoration:"none",boxShadow:"0 8px 32px rgba(139,92,246,0.35)",transition:"transform 0.2s,box-shadow 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 16px 48px rgba(139,92,246,0.5)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 32px rgba(139,92,246,0.35)"}}>Live Demos ✦</a>
            <a href="#preise" style={{padding:isMobile?"13px 28px":"15px 36px",borderRadius:"12px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.09)",color:"white",fontWeight:"600",fontSize:isMobile?"14px":"15px",textDecoration:"none",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.borderColor="rgba(139,92,246,0.4)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.borderColor="rgba(255,255,255,0.09)"}}>Preise ansehen</a>
          </div>
          <div style={{display:"flex",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"14px",overflow:"hidden",backdropFilter:"blur(10px)"}}>
            {[{n:"120+",l:"Projekte"},{n:"98%",l:"Zufrieden"},{n:"5★",l:"Bewertung"},{n:"24h",l:"Reaktion"}].map((s,i)=>(
              <div key={i} style={{padding:isMobile?"14px 12px":"20px 32px",borderRight:i<3?"1px solid rgba(255,255,255,0.05)":"none",flex:1}}>
                <div style={{fontSize:isMobile?"18px":"26px",fontWeight:"900",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{s.n}</div>
                <div style={{fontSize:"10px",color:"rgba(255,255,255,0.28)",marginTop:"2px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VORHER / NACHHER ══ */}
      <section style={{padding:pad,maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#ef4444",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px",textAlign:"center"}}>Vergleich</p>
        <h2 style={{...h2,marginBottom:"8px",textAlign:"center"}}>Vorher vs. Nachher</h2>
        <p style={{color:"rgba(255,255,255,0.3)",textAlign:"center",marginBottom:"28px",fontSize:"13px"}}>Sieh den Unterschied — ohne WebIT AI vs. mit WebIT AI</p>

        <div style={{borderRadius:"20px",border:"1px solid rgba(255,255,255,0.07)",overflow:"hidden",
          display:isMobile?"block":"grid",gridTemplateColumns:"1fr 1fr"}}>
          {/* BEFORE */}
          <div style={{padding:isMobile?"28px 22px":"52px 44px",
            background:"linear-gradient(135deg,#1a0505,#2a0808)",
            borderRight:isMobile?"none":"1px solid rgba(255,255,255,0.05)",
            borderBottom:isMobile?"1px solid rgba(255,255,255,0.08)":"none",
            position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 80% 20%,rgba(239,68,68,0.1),transparent 60%)",pointerEvents:"none"}}/>
            <div style={{fontSize:"44px",marginBottom:"14px"}}>😔</div>
            <div style={{fontSize:"9px",letterSpacing:"3px",color:"#ef4444",textTransform:"uppercase",fontWeight:"700",marginBottom:"10px"}}>❌ Ohne WebIT AI</div>
            <h3 style={{fontSize:isMobile?"20px":"24px",fontWeight:"800",color:"#fca5a5",marginBottom:"12px"}}>Keine Website</h3>
            <p style={{color:"rgba(252,165,165,0.55)",fontSize:"14px",lineHeight:"1.8"}}>Kunden finden dich nicht auf Google. Du verlierst täglich Aufträge an die Konkurrenz.</p>
            <div style={{marginTop:"18px",display:"flex",flexDirection:"column",gap:"8px"}}>
              {["❌ Nicht auf Google","❌ Keine Online-Buchung","❌ Kein Vertrauen","❌ Kunden gehen woanders"].map(t=>(
                <div key={t} style={{fontSize:"12px",color:"rgba(252,165,165,0.4)"}}>{t}</div>
              ))}
            </div>
          </div>
          {/* AFTER */}
          <div style={{padding:isMobile?"28px 22px":"52px 44px",
            background:"linear-gradient(135deg,#07060f,#0d0a1e)",
            position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 30% 20%,rgba(139,92,246,0.12),transparent 60%)",pointerEvents:"none"}}/>
            <div style={{fontSize:"44px",marginBottom:"14px"}}>🚀</div>
            <div style={{fontSize:"9px",letterSpacing:"3px",color:"#8b5cf6",textTransform:"uppercase",fontWeight:"700",marginBottom:"10px"}}>✅ Mit WebIT AI</div>
            <h3 style={{fontSize:isMobile?"20px":"24px",fontWeight:"800",color:"#a78bfa",marginBottom:"12px"}}>Moderne Website</h3>
            <p style={{color:"rgba(167,139,250,0.65)",fontSize:"14px",lineHeight:"1.8"}}>Professioneller Auftritt, SEO-optimiert — Kunden finden dich & buchen direkt online.</p>
            <div style={{marginTop:"18px",display:"flex",flexDirection:"column",gap:"8px"}}>
              {["✅ Seite 1 auf Google","✅ 24/7 Online-Buchung","✅ KI-Chatbot inklusive","✅ Kunden buchen direkt"].map(t=>(
                <div key={t} style={{fontSize:"12px",color:"rgba(167,139,250,0.5)"}}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTERACTIVE CODE DEMO ══ */}
      <InteractiveCodeDemo isMobile={isMobile} pad={pad} h2={h2}/>

      {/* ══ ÜBER MICH ══ */}
      <section id="ueber" style={{padding:pad,maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px",textAlign:"center"}}>Der Mensch dahinter</p>
        <h2 style={{...h2,marginBottom:"40px",textAlign:"center"}}>Wer ist WebIT AI?</h2>

        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:"20px",alignItems:"center"}}>

          {/* LEFT — Avatar + Fakten */}
          <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            {/* Avatar Card */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,92,246,0.2)",borderRadius:"20px",padding:"28px 24px",display:"flex",alignItems:"center",gap:"20px",backdropFilter:"blur(12px)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 0% 50%,rgba(139,92,246,0.07),transparent 60%)",pointerEvents:"none"}}/>
              {/* Avatar circle */}
              <div style={{width:"72px",height:"72px",borderRadius:"50%",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"30px",flexShrink:0,boxShadow:"0 8px 32px rgba(139,92,246,0.3)"}}>
                👨‍💻
              </div>
              <div>
                <div style={{fontWeight:"900",fontSize:"18px",letterSpacing:"-0.5px",marginBottom:"3px"}}>Ghaith Almadani</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.4)",marginBottom:"6px"}}>Gründer & Entwickler · WebIT AI</div>
                <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                  {["Next.js","PostgreSQL","KI","Docker"].map(t=>(
                    <span key={t} style={{fontSize:"10px",padding:"3px 8px",borderRadius:"100px",background:"rgba(139,92,246,0.12)",border:"1px solid rgba(139,92,246,0.25)",color:"#c4b5fd",fontWeight:"600"}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Facts */}
            {[
              {icon:"📍",label:"Wohnort",value:"Rosenberg, Baden-Württemberg"},
              {icon:"🎓",label:"Ausbildung",value:"KFZ-Mechatroniker · Fachbetrieb"},
              {icon:"💻",label:"Fokus",value:"Web-Entwicklung & KI-Integration"},
              {icon:"🚀",label:"Mission",value:"Kleine Betriebe digital stark machen"},
            ].map(f=>(
              <div key={f.label} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"12px",padding:"14px 18px",display:"flex",alignItems:"center",gap:"14px",transition:"all 0.3s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(139,92,246,0.3)";e.currentTarget.style.transform="translateX(4px)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.06)";e.currentTarget.style.transform="translateX(0)"}}>
                <span style={{fontSize:"18px"}}>{f.icon}</span>
                <div>
                  <div style={{fontSize:"10px",color:"rgba(255,255,255,0.28)",letterSpacing:"0.5px",marginBottom:"2px"}}>{f.label}</div>
                  <div style={{fontSize:"13px",fontWeight:"600",color:"rgba(255,255,255,0.8)"}}>{f.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Story */}
          <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"20px",padding:isMobile?"24px":"36px",backdropFilter:"blur(12px)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 100% 0%,rgba(239,68,68,0.05),transparent 60%)",pointerEvents:"none"}}/>
            <div style={{position:"relative",zIndex:1}}>
              <div style={{fontSize:"28px",marginBottom:"16px"}}>💡</div>
              <h3 style={{fontSize:isMobile?"18px":"22px",fontWeight:"900",letterSpacing:"-0.5px",marginBottom:"16px",lineHeight:"1.3"}}>
                Tagsüber KFZ —<br/>
                <span style={{background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Nachts Entwickler.</span>
              </h3>
              <p style={{color:"rgba(255,255,255,0.45)",fontSize:"14px",lineHeight:"1.9",marginBottom:"16px"}}>
                Ich bin <strong style={{color:"white"}}>22 Jahre alt</strong> und arbeite als KFZ-Mechatroniker — aber meine echte Leidenschaft ist die <strong style={{color:"white"}}>digitale Welt</strong>.
              </p>
              <p style={{color:"rgba(255,255,255,0.45)",fontSize:"14px",lineHeight:"1.9",marginBottom:"16px"}}>
                Was als Hobby begann, ist heute <strong style={{color:"white"}}>WebIT AI</strong> — eine Agentur die kleinen Betrieben in Deutschland hilft, endlich online sichtbar zu werden. Mit echten KI-Tools, modernem Design und Technologien die sonst nur große Konzerne kennen.
              </p>
              <p style={{color:"rgba(255,255,255,0.45)",fontSize:"14px",lineHeight:"1.9"}}>
                Ich glaube: <strong style={{color:"white"}}>Jeder Handwerker, jedes Restaurant, jede Praxis</strong> verdient eine Website die wirklich funktioniert — und Kunden bringt.
              </p>

              <div style={{marginTop:"24px",paddingTop:"20px",borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",gap:"12px",flexWrap:"wrap"}}>
                <a href="mailto:ghaith.almadani.makkieh@gmail.com" style={{display:"inline-flex",alignItems:"center",gap:"7px",padding:"9px 18px",borderRadius:"100px",background:"rgba(139,92,246,0.12)",border:"1px solid rgba(139,92,246,0.25)",color:"#c4b5fd",fontSize:"12px",fontWeight:"600",textDecoration:"none",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(139,92,246,0.25)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(139,92,246,0.12)"}}>
                  ✉️ Schreib mir
                </a>
                <a href="tel:+4917685974436" style={{display:"inline-flex",alignItems:"center",gap:"7px",padding:"9px 18px",borderRadius:"100px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.5)",fontSize:"12px",fontWeight:"600",textDecoration:"none",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.09)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)"}}>
                  📞 Anrufen
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ DEMOS ══ */}
      <section id="demos" style={{padding:pad,maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#ef4444",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px",textAlign:"center"}}>Live Demos</p>
        <h2 style={{...h2,marginBottom:"8px",textAlign:"center"}}>Für jede Branche</h2>
        <p style={{color:"rgba(255,255,255,0.3)",textAlign:"center",marginBottom:"28px",fontSize:"13px"}}>
          {isMobile?"Wische und tippe auf eine Branche":"Klick auf eine Branche — sieh sofort wie deine Seite aussieht!"}
        </p>

        {isMobile ? (
          <div ref={industryRef} onTouchStart={onIndTouchStart} onTouchEnd={onIndTouchEnd}
            style={{display:"flex",gap:"12px",overflowX:"auto",paddingBottom:"10px",scrollbarWidth:"none",WebkitOverflowScrolling:"touch"}}>
            {INDUSTRIES.map((ind,i)=>(
              <a key={i} href={ind.href} style={{flexShrink:0,width:"120px",background:"rgba(255,255,255,0.03)",border:`1px solid ${ind.color}33`,borderRadius:"16px",padding:"18px 14px",textAlign:"center",textDecoration:"none",display:"block"}}>
                <div style={{fontSize:"26px",marginBottom:"8px"}}>{ind.icon}</div>
                <div style={{fontSize:"13px",fontWeight:"700",color:"white",marginBottom:"3px"}}>{ind.name}</div>
                <div style={{fontSize:"10px",color:"rgba(255,255,255,0.3)"}}>{ind.desc}</div>
                {ind.href!=="#"&&<div style={{marginTop:"8px",fontSize:"10px",color:ind.color,fontWeight:"700"}}>Demo →</div>}
              </a>
            ))}
          </div>
        ) : (
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px"}}>
            {INDUSTRIES.map((ind,i)=>(
              <a key={i} href={ind.href}
                style={{background:hoveredIndustry===i?`${ind.color}12`:"rgba(255,255,255,0.02)",border:`1px solid ${hoveredIndustry===i?ind.color+"44":"rgba(255,255,255,0.06)"}`,borderRadius:"16px",padding:"24px 18px",textAlign:"center",textDecoration:"none",display:"block",transform:hoveredIndustry===i?"translateY(-6px)":"translateY(0)",transition:"all 0.3s",boxShadow:hoveredIndustry===i?`0 20px 40px ${ind.color}15`:"none"}}
                onMouseEnter={()=>setHoveredIndustry(i)}
                onMouseLeave={()=>setHoveredIndustry(null)}>
                <div style={{fontSize:"26px",marginBottom:"10px"}}>{ind.icon}</div>
                <div style={{fontSize:"13px",fontWeight:"700",color:hoveredIndustry===i?ind.color:"white",marginBottom:"3px",transition:"color 0.3s"}}>{ind.name}</div>
                <div style={{fontSize:"11px",color:"rgba(255,255,255,0.3)",marginBottom:hoveredIndustry===i?"8px":"0",transition:"margin 0.3s"}}>{ind.desc}</div>
                <div style={{fontSize:"11px",color:ind.color,fontWeight:"700",opacity:hoveredIndustry===i?1:0,transform:hoveredIndustry===i?"translateY(0)":"translateY(4px)",transition:"all 0.3s",height:hoveredIndustry===i?"auto":"0",overflow:"hidden"}}>
                  {ind.href!=="#"?"Live Demo →":"Kommt bald"}
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" style={{padding:pad,maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px"}}>Tech-Stack</p>
        <h2 style={{...h2,marginBottom:"32px"}}>Womit wir bauen</h2>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(3,1fr)",gap:"10px"}}>
          {[
            {icon:"▲",name:"Next.js",desc:"Blitzschnelle Web-Apps",color:"#ffffff"},
            {icon:"🐘",name:"PostgreSQL",desc:"Professionelle Datenbank",color:"#60a5fa"},
            {icon:"🐳",name:"Docker",desc:"Stabiler Betrieb",color:"#38bdf8"},
            {icon:"🎨",name:"Tailwind CSS",desc:"Perfektes Design",color:"#34d399"},
            {icon:"⬡",name:"shadcn/ui",desc:"Elegante Komponenten",color:"#a78bfa"},
            {icon:"🧠",name:"Claude AI",desc:"KI & Chatbots",color:"#ef4444"},
          ].map(s=>(
            <div key={s.name}
              style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"14px",padding:isMobile?"16px":"22px",transition:"all 0.3s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=s.color+"44";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.background=s.color+"0a"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.06)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.background="rgba(255,255,255,0.02)"}}>
              <div style={{fontSize:"20px",marginBottom:"7px"}}>{s.icon}</div>
              <div style={{fontSize:isMobile?"13px":"14px",fontWeight:"700",color:s.color,marginBottom:"3px"}}>{s.name}</div>
              <div style={{fontSize:"11px",color:"rgba(255,255,255,0.28)",lineHeight:"1.5"}}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PREISE ══ */}
      <section id="preise" style={{padding:pad,maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"12px",textAlign:"center"}}>Investition</p>
        <h2 style={{...h2,marginBottom:"8px",textAlign:"center"}}>Transparent & Fair</h2>
        <p style={{color:"rgba(255,255,255,0.28)",textAlign:"center",marginBottom:"32px",fontSize:"13px"}}>Einmalige Zahlung · Keine monatlichen Kosten</p>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:"14px"}}>
          {[
            {tier:"Starter",price:"299",color:"#8b5cf6",features:["1 Landing Page","Mobile-optimiert","Kontaktformular","Google Maps","14 Tage Support"],popular:false},
            {tier:"Business",price:"799",color:"#ef4444",features:["Bis 6 Seiten","CMS System","SEO Optimierung","Google Analytics","Blog / News","60 Tage Support"],popular:true},
            {tier:"Premium",price:"1.499",color:"#a78bfa",features:["Unlimited Seiten","Online Shop","KI-Chatbot","SEO Full-Paket","Performance Audit","12 Monate Support"],popular:false},
          ].map(p=>(
            <div key={p.tier}
              style={{background:p.popular?"rgba(239,68,68,0.05)":"rgba(255,255,255,0.02)",border:p.popular?"1px solid rgba(239,68,68,0.3)":"1px solid rgba(255,255,255,0.06)",borderRadius:"20px",padding:"28px 22px",position:"relative",transform:!isMobile&&p.popular?"translateY(-8px)":"none",boxShadow:p.popular?"0 0 60px rgba(239,68,68,0.08)":"none",backdropFilter:"blur(12px)",transition:"all 0.3s"}}
              onMouseEnter={e=>{if(!p.popular){e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";e.currentTarget.style.transform="translateY(-4px)"}}}
              onMouseLeave={e=>{if(!p.popular){e.currentTarget.style.borderColor="rgba(255,255,255,0.06)";e.currentTarget.style.transform="translateY(0)"}}}>
              {p.popular&&<div style={{position:"absolute",top:"-1px",left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",color:"white",fontSize:"10px",fontWeight:"700",letterSpacing:"2px",padding:"5px 14px",borderRadius:"0 0 8px 8px"}}>BELIEBT</div>}
              <div style={{fontSize:"10px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,0.28)",fontWeight:"700",marginBottom:"8px"}}>{p.tier}</div>
              <div style={{fontSize:"40px",fontWeight:"900",letterSpacing:"-2px",background:`linear-gradient(135deg,${p.color},#8b5cf6)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"3px"}}>€{p.price}</div>
              <div style={{fontSize:"11px",color:"rgba(255,255,255,0.22)",marginBottom:"20px"}}>einmalig · zzgl. MwSt.</div>
              <ul style={{listStyle:"none",padding:0,marginBottom:"22px",display:"flex",flexDirection:"column",gap:"7px"}}>
                {p.features.map(f=>(
                  <li key={f} style={{fontSize:"13px",color:"rgba(255,255,255,0.42)",display:"flex",gap:"7px",alignItems:"center",borderBottom:"1px solid rgba(255,255,255,0.04)",paddingBottom:"7px"}}>
                    <span style={{color:"rgba(139,92,246,0.7)"}}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" style={{display:"block",padding:"12px",borderRadius:"10px",background:p.popular?"linear-gradient(135deg,#8b5cf6,#ef4444)":"rgba(255,255,255,0.05)",border:p.popular?"none":"1px solid rgba(255,255,255,0.08)",color:"white",fontWeight:"600",fontSize:"13px",textDecoration:"none",textAlign:"center",transition:"all 0.2s"}}
              onMouseEnter={e=>{if(!p.popular){e.currentTarget.style.background="rgba(255,255,255,0.1)"}}}
              onMouseLeave={e=>{if(!p.popular){e.currentTarget.style.background="rgba(255,255,255,0.05)"}}}>
                {p.popular?"Jetzt starten →":"Anfragen →"}
              </a>
            </div>
          ))}
        </div>
        <div style={{marginTop:"14px",padding:"20px 22px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"}}>
              <span>🤖</span><span style={{fontWeight:"700",fontSize:"14px"}}>KI Add-on — Claude AI Chatbot</span>
            </div>
            <p style={{color:"rgba(255,255,255,0.28)",fontSize:"12px"}}>Intelligenter 24/7 Kundenservice-Bot powered by Claude AI</p>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:"22px",fontWeight:"900",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>+299€</div>
            <div style={{fontSize:"11px",color:"rgba(255,255,255,0.22)"}}>zu jedem Paket</div>
          </div>
        </div>
      </section>

      {/* ══ KONTAKT ══ */}
      <section id="kontakt" style={{padding:pad,maxWidth:"700px",margin:"0 auto",position:"relative",zIndex:1}}>
        <style>{`
          @keyframes borderGlow{0%,100%{opacity:0.5}50%{opacity:1}}
          @keyframes pulseRing{0%{transform:scale(1);opacity:0.6}100%{transform:scale(1.5);opacity:0}}
          @keyframes floatUp{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
          .kontakt-btn{transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1)!important}
          .kontakt-btn:hover{transform:translateY(-4px) scale(1.02)!important}
          .kontakt-btn:active{transform:scale(0.97)!important}
        `}</style>

        {/* GLOW LINES TOP */}
        <div style={{position:"relative",marginBottom:"0"}}>
          <div style={{position:"absolute",top:0,left:"10%",right:"10%",height:"1px",background:"linear-gradient(90deg,transparent,rgba(139,92,246,0.6),rgba(239,68,68,0.6),transparent)",animation:"borderGlow 3s ease-in-out infinite"}}/>
        </div>

        <div style={{padding:isMobile?"36px 20px 40px":"64px 56px",background:"linear-gradient(145deg,rgba(15,10,30,0.95),rgba(8,5,18,0.98))",border:"1px solid rgba(139,92,246,0.15)",borderRadius:"32px",backdropFilter:"blur(40px)",position:"relative",overflow:"hidden",boxShadow:"0 40px 120px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)"}}>

          {/* BG ORBS */}
          <div style={{position:"absolute",top:"-80px",left:"-80px",width:"300px",height:"300px",background:"radial-gradient(circle,rgba(139,92,246,0.08),transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",bottom:"-80px",right:"-80px",width:"300px",height:"300px",background:"radial-gradient(circle,rgba(239,68,68,0.06),transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"500px",height:"500px",background:"radial-gradient(circle,rgba(139,92,246,0.03),transparent 65%)",pointerEvents:"none"}}/>

          <div style={{position:"relative",zIndex:1,textAlign:"center"}}>

            {/* LIVE BADGE */}
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 18px",borderRadius:"100px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",fontSize:"11px",color:"#34d399",fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"24px"}}>
              <span style={{width:"6px",height:"6px",background:"#10b981",borderRadius:"50%",display:"inline-block",boxShadow:"0 0 8px #10b981",animation:"pulseRing 1.5s ease-out infinite"}}/>
              JETZT VERFÜGBAR
            </div>

            {/* HEADLINE */}
            <h2 style={{fontSize:isMobile?"clamp(28px,9vw,42px)":"clamp(32px,5vw,58px)",fontWeight:"900",letterSpacing:"-3px",lineHeight:"1.0",marginBottom:"16px",textAlign:"center"}}>
              Starte dein Projekt<br/>
              <span style={{background:"linear-gradient(135deg,#a78bfa 0%,#f472b6 50%,#ef4444 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>noch heute.</span>
            </h2>
            <p style={{color:"rgba(255,255,255,0.4)",lineHeight:"1.8",fontSize:isMobile?"14px":"16px",maxWidth:"500px",margin:"0 auto 40px"}}>
              Kostenlose Erstberatung — ich analysiere dein Business und zeige dir <strong style={{color:"rgba(255,255,255,0.75)"}}>genau was du brauchst.</strong> Kein Risiko, keine versteckten Kosten.
            </p>

            {/* CONTACT CARDS */}
            <div style={{display:"flex",flexDirection:"column",gap:"10px",maxWidth:"480px",margin:"0 auto 36px"}}>

              {/* WHATSAPP — PRIMÄR */}
              <a className="kontakt-btn"
                href="https://wa.me/4917685974436?text=Hallo%20Ghaith!%20Ich%20interessiere%20mich%20f%C3%BCr%20eine%20Webseite%20von%20WebIT%20AI.%20K%C3%B6nnen%20wir%20das%20kurz%20besprechen%3F"
                target="_blank" rel="noopener noreferrer"
                style={{display:"flex",alignItems:"center",gap:"16px",padding:"18px 22px",borderRadius:"16px",background:"linear-gradient(135deg,#25d366 0%,#1da851 100%)",color:"white",textDecoration:"none",boxShadow:"0 8px 32px rgba(37,211,102,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",position:"relative",overflow:"hidden",textAlign:"left"}}>
                <div style={{position:"absolute",top:0,right:0,width:"120px",height:"100%",background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.05))",pointerEvents:"none"}}/>
                <div style={{width:"48px",height:"48px",background:"rgba(255,255,255,0.2)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",flexShrink:0,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"}}>💬</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:"16px",fontWeight:"800",letterSpacing:"-0.3px"}}>WhatsApp — Sofort schreiben</div>
                  <div style={{fontSize:"12px",opacity:0.75,marginTop:"3px",fontWeight:"500"}}>+49 176 85974436 · Ø Antwort in 1 Stunde</div>
                </div>
                <div style={{fontSize:"20px",opacity:0.8,flexShrink:0}}>↗</div>
              </a>

              {/* EMAIL — GMAIL */}
              <a className="kontakt-btn"
                href="https://mail.google.com/mail/?view=cm&to=ghaith.almadani.makkieh@gmail.com&su=Webseiten-Anfrage%20%7C%20WebIT%20AI&body=Hallo%20Ghaith%2C%0A%0Aich%20habe%20deine%20Webseite%20webit-ai.de%20besucht%20und%20interessiere%20mich%20f%C3%BCr%20eine%20professionelle%20Webseite.%0A%0AMeine%20Branche%3A%20%0AMein%20Budget%3A%20%0AMeine%20W%C3%BCnsche%3A%20%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen"
                target="_blank" rel="noopener noreferrer"
                style={{display:"flex",alignItems:"center",gap:"16px",padding:"18px 22px",borderRadius:"16px",background:"linear-gradient(135deg,#ea4335 0%,#b31412 100%)",color:"white",textDecoration:"none",boxShadow:"0 8px 32px rgba(234,67,53,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",position:"relative",overflow:"hidden",textAlign:"left"}}>
                <div style={{position:"absolute",top:0,right:0,width:"120px",height:"100%",background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.05))",pointerEvents:"none"}}/>
                <div style={{width:"48px",height:"48px",background:"rgba(255,255,255,0.2)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"}}>
                  <svg width="26" height="20" viewBox="0 0 26 20" fill="none"><rect width="26" height="20" rx="3" fill="white" fillOpacity="0.15"/><path d="M1 1L13 11L25 1" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M1 1H25V19H1V1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:"16px",fontWeight:"800",letterSpacing:"-0.3px"}}>E-Mail — Gmail öffnen</div>
                  <div style={{fontSize:"12px",opacity:0.75,marginTop:"3px",fontWeight:"500"}}>ghaith.almadani.makkieh@gmail.com</div>
                </div>
                <div style={{fontSize:"20px",opacity:0.8,flexShrink:0}}>↗</div>
              </a>

              {/* PHONE */}
              <a className="kontakt-btn"
                href="tel:+4917685974436"
                style={{display:"flex",alignItems:"center",gap:"16px",padding:"18px 22px",borderRadius:"16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",color:"white",textDecoration:"none",boxShadow:"0 4px 20px rgba(0,0,0,0.3)",textAlign:"left"}}>
                <div style={{width:"48px",height:"48px",background:"rgba(139,92,246,0.2)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",flexShrink:0,border:"1px solid rgba(139,92,246,0.3)"}}>📞</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:"16px",fontWeight:"800",letterSpacing:"-0.3px"}}>Anrufen — Direkt sprechen</div>
                  <div style={{fontSize:"12px",color:"rgba(255,255,255,0.4)",marginTop:"3px",fontWeight:"500"}}>+49 176 85974436 · Mo–So verfügbar</div>
                </div>
                <div style={{fontSize:"20px",opacity:0.3,flexShrink:0}}>↗</div>
              </a>

            </div>

            {/* DIVIDER */}
            <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"28px",maxWidth:"480px",margin:"0 auto 28px"}}>
              <div style={{flex:1,height:"1px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.08))"}}/>
              <span style={{color:"rgba(255,255,255,0.2)",fontSize:"11px",fontWeight:"600",letterSpacing:"2px"}}>KONTAKTDATEN</span>
              <div style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(255,255,255,0.08),transparent)"}}/>
            </div>

            {/* CONTACT INFO ROW */}
            <div style={{display:"flex",flexDirection:"column",gap:"8px",maxWidth:"480px",margin:"0 auto 32px"}}>
              {[
                {icon:"✉️",label:"E-Mail",value:"ghaith.almadani.makkieh@gmail.com",href:"https://mail.google.com/mail/?view=cm&to=ghaith.almadani.makkieh@gmail.com"},
                {icon:"📱",label:"Telefon",value:"+49 176 85974436",href:"tel:+4917685974436"},
                {icon:"📍",label:"Standort",value:"Rosenberg, Baden-Württemberg",href:null},
              ].map((c,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:"14px",padding:"12px 16px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"12px"}}>
                  <div style={{fontSize:"18px",flexShrink:0,width:"32px",textAlign:"center"}}>{c.icon}</div>
                  <div style={{fontSize:"10px",color:"rgba(255,255,255,0.3)",fontWeight:"700",letterSpacing:"1.5px",textTransform:"uppercase",flexShrink:0,width:"56px"}}>{c.label}</div>
                  <div style={{flex:1,height:"1px",background:"rgba(255,255,255,0.05)",flexShrink:0}}/>
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" style={{fontSize:"13px",color:"rgba(255,255,255,0.65)",fontWeight:"600",textDecoration:"none",flexShrink:0}}>{c.value}</a>
                    : <span style={{fontSize:"13px",color:"rgba(255,255,255,0.65)",fontWeight:"600",flexShrink:0}}>{c.value}</span>
                  }
                </div>
              ))}
            </div>

            {/* TRUST ROW */}
            <div style={{display:"flex",justifyContent:"center",gap:isMobile?"12px":"24px",flexWrap:"wrap"}}>
              {[{icon:"✅",text:"Kostenlose Beratung"},{icon:"⚡",text:"Antwort in 24h"},{icon:"🔒",text:"Kein Risiko"},{icon:"💎",text:"Ab 299€"}].map(t=>(
                <div key={t.text} style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"12px",color:"rgba(255,255,255,0.25)",fontWeight:"600"}}>
                  <span>{t.icon}</span><span>{t.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.04)",padding:isMobile?"18px 20px 90px":"26px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
        <a href="/" style={{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none"}}>
          <WLogo size={22}/>
          <span style={{fontWeight:"800",fontSize:"14px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>WebIT AI</span>
        </a>
        <div style={{display:"flex",gap:"16px"}}>
          {[{label:"Impressum",href:"/impressum"},{label:"Datenschutz",href:"/datenschutz"},{label:"Kontakt",href:"mailto:ghaith.almadani.makkieh@gmail.com"}].map(l=>(
            <a key={l.label} href={l.href} style={{color:"rgba(255,255,255,0.18)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.color="white"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.18)"}>{l.label}</a>
          ))}
        </div>
        <span style={{color:"rgba(255,255,255,0.1)",fontSize:"11px"}}>© 2026 WebIT AI · Ghaith Almadani</span>
      </footer>

      {/* ══ MOBILE BOTTOM NAV ══ */}
      {isMobile && (
        <nav style={{
          position:"fixed",bottom:0,left:0,right:0,zIndex:200,
          background:"rgba(5,5,12,0.96)",backdropFilter:"blur(32px)",
          borderTop:"1px solid rgba(255,255,255,0.07)",
          display:"flex",alignItems:"center",justifyContent:"space-around",
          padding:"10px 8px calc(10px + env(safe-area-inset-bottom))",
        }}>
          {[
            {icon:"🏠",label:"Home",href:"#top"},
            {icon:"🎨",label:"Demos",href:"#demos"},
            {icon:"💰",label:"Preise",href:"#preise"},
            {icon:"👤",label:"Über",href:"#ueber"},
            {icon:"✉️",label:"Kontakt",href:"#kontakt"},
          ].map(n=>(
            <a key={n.label} href={n.href}
              style={{
                display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",
                textDecoration:"none",padding:"6px 14px",borderRadius:"14px",
                transition:"all 0.18s cubic-bezier(0.34,1.56,0.64,1)",
                WebkitTapHighlightColor:"transparent",
                minWidth:"52px",
              }}
              onTouchStart={e=>{
                const el = e.currentTarget;
                el.style.transform="scale(1.22)";
                el.style.background="rgba(139,92,246,0.18)";
                const icon = el.querySelector(".nav-icon") as HTMLElement;
                if(icon) icon.style.filter="drop-shadow(0 0 6px rgba(139,92,246,0.8))";
              }}
              onTouchEnd={e=>{
                const el = e.currentTarget;
                setTimeout(()=>{
                  el.style.transform="scale(1)";
                  el.style.background="transparent";
                  const icon = el.querySelector(".nav-icon") as HTMLElement;
                  if(icon) icon.style.filter="none";
                },150);
              }}>
              <span className="nav-icon" style={{fontSize:"22px",transition:"all 0.18s",display:"block"}}>{n.icon}</span>
              <span style={{fontSize:"9px",color:"rgba(255,255,255,0.35)",fontWeight:"600",letterSpacing:"0.3px",transition:"color 0.18s"}}>{n.label}</span>
            </a>
          ))}
        </nav>
      )}

      {/* ══ CHAT BUTTON — DRAGGABLE ══ */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onClick={handleChatClick}
        style={{
          position:"fixed",
          bottom:`${28 - chatPos.y}px`,
          right:`${28 - chatPos.x}px`,
          zIndex:500,
          width:"56px",height:"56px",borderRadius:"50%",
          background:"linear-gradient(135deg,rgba(139,92,246,0.4),rgba(239,68,68,0.4))",
          border:"1px solid rgba(139,92,246,0.5)",
          backdropFilter:"blur(16px)",
          cursor:isDragging.current?"grabbing":"grab",
          display:"flex",alignItems:"center",justifyContent:"center",
          boxShadow:"0 8px 32px rgba(139,92,246,0.35),inset 0 1px 0 rgba(255,255,255,0.12)",
          fontSize:"22px",
          animation:chatBounce?"chatBounce 0.7s ease":"none",
          userSelect:"none",
          touchAction:"none",
        }}>
        {chatOpen?"✕":"🤖"}
        {!chatOpen&&<div style={{position:"absolute",top:"-2px",right:"-2px",width:"14px",height:"14px",background:"#10b981",borderRadius:"50%",border:"2px solid #050508",animation:"pulse 2s infinite"}}/>}
        {/* Drag hint */}
        {!chatOpen&&<div style={{position:"absolute",top:"-28px",left:"50%",transform:"translateX(-50%)",fontSize:"9px",color:"rgba(255,255,255,0.3)",whiteSpace:"nowrap",fontWeight:"600",letterSpacing:"0.5px"}}>ziehen ↕</div>}
      </div>

      {/* ══ CHAT WINDOW ══ */}
      {chatOpen&&(
        <div style={{
          position:"fixed",
          bottom:isMobile?"0":`${90-chatPos.y}px`,
          right:isMobile?"0":`${28-chatPos.x}px`,
          left:isMobile?"0":"auto",
          zIndex:499,width:isMobile?"100%":"330px",
          background:"rgba(8,8,18,0.95)",
          border:"1px solid rgba(255,255,255,0.07)",
          borderRadius:isMobile?"20px 20px 0 0":"20px",
          overflow:"hidden",display:"flex",flexDirection:"column",
          maxHeight:isMobile?"72vh":"520px",
          boxShadow:"0 32px 80px rgba(0,0,0,0.7)",
          backdropFilter:"blur(24px)",
        }}>
          <div style={{padding:"14px 16px",display:"flex",alignItems:"center",gap:"10px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(255,255,255,0.02)"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><WLogo size={18}/></div>
            <div style={{flex:1}}>
              <div style={{fontWeight:"700",fontSize:"13px"}}>WebIT AI Assistent</div>
              <div style={{fontSize:"10px",color:"#10b981",display:"flex",alignItems:"center",gap:"4px"}}><span style={{width:"5px",height:"5px",background:"#10b981",borderRadius:"50%",display:"inline-block"}}/>Online · antwortet sofort</div>
            </div>
            <button onClick={()=>setChatOpen(false)} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.3)",cursor:"pointer",fontSize:"18px",lineHeight:1,padding:"4px"}}>✕</button>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:"14px",display:"flex",flexDirection:"column",gap:"8px",minHeight:"200px",maxHeight:"300px"}}>
            {messages.map((msg,i)=>(
              <div key={i} style={{maxWidth:"87%",padding:"9px 12px",borderRadius:msg.role==="bot"?"12px 12px 12px 4px":"12px 12px 4px 12px",background:msg.role==="bot"?"rgba(255,255,255,0.05)":"rgba(139,92,246,0.25)",alignSelf:msg.role==="bot"?"flex-start":"flex-end",fontSize:"12.5px",lineHeight:"1.55",border:msg.role==="bot"?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(139,92,246,0.35)",whiteSpace:"pre-line"}}>{msg.text}</div>
            ))}
            {typing&&<div style={{padding:"9px 12px",borderRadius:"12px 12px 12px 4px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.06)",display:"flex",gap:"4px",alignItems:"center",width:"48px"}}>{[0,1,2].map(i=><div key={i} style={{width:"5px",height:"5px",borderRadius:"50%",background:"rgba(255,255,255,0.32)",animation:"dot 1.2s infinite",animationDelay:`${i*0.2}s`}}/>)}</div>}
            <div ref={messagesEndRef}/>
          </div>
          <div style={{padding:"7px 10px",display:"flex",gap:"5px",flexWrap:"wrap",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
            {["💰 Preise","🎨 Demos","⏱ Dauer","📅 Termin"].map(q=>(
              <button key={q} onClick={()=>{setMessages(p=>[...p,{role:"user",text:q}]);setTyping(true);setTimeout(()=>{setTyping(false);setMessages(p=>[...p,{role:"bot",text:getBotAnswer(q)}]);},800);}}
                style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.4)",padding:"4px 10px",borderRadius:"100px",fontSize:"11px",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.09)";e.currentTarget.style.color="white"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.color="rgba(255,255,255,0.4)"}}>{q}</button>
            ))}
          </div>
          <div style={{display:"flex",gap:"7px",padding:"10px",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendMessage()} placeholder="Stell mir eine Frage..." style={{flex:1,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"10px",padding:"9px 12px",color:"white",fontSize:"12.5px",outline:"none",fontFamily:"inherit"}}/>
            <button onClick={sendMessage} style={{background:"rgba(139,92,246,0.35)",border:"1px solid rgba(139,92,246,0.25)",borderRadius:"10px",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",transition:"all 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.background="rgba(139,92,246,0.6)"}
            onMouseLeave={e=>e.currentTarget.style.background="rgba(139,92,246,0.35)"}>→</button>
          </div>
        </div>
      )}

      <style>{`
        /* Space */
        @keyframes starTwinkle{0%,100%{opacity:var(--op,0.4);transform:scale(1)}50%{opacity:0.08;transform:scale(0.6)}}
        @keyframes nebula0{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(calc(-50% + 30px),calc(-50% - 20px)) scale(1.15)}}
        @keyframes nebula1{0%,100%{transform:translate(-50%,-50%) scale(1.05)}50%{transform:translate(calc(-50% - 25px),calc(-50% + 30px)) scale(0.9)}}
        @keyframes nebula2{0%,100%{transform:translate(-50%,-50%) scale(0.95)}50%{transform:translate(calc(-50% + 20px),calc(-50% + 25px)) scale(1.1)}}
        @keyframes nebula3{0%,100%{transform:translate(-50%,-50%) scale(1.08)}50%{transform:translate(calc(-50% - 18px),calc(-50% - 22px)) scale(0.92)}}
        @keyframes meteor{0%{opacity:0;transform:rotate(-35deg) translateX(0)}5%{opacity:1}20%{opacity:0;transform:rotate(-35deg) translateX(-400px)}100%{opacity:0;transform:rotate(-35deg) translateX(-400px)}}
        /* Page */
        @keyframes float0{0%,100%{transform:translate(0,0)}50%{transform:translate(15px,-25px)}}
        @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(-12px,18px)}}
        @keyframes scrollLeft{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 8px #8b5cf6}50%{opacity:0.4}}
        @keyframes dot{0%,60%,100%{transform:translateY(0);opacity:0.32}30%{transform:translateY(-5px);opacity:1}}
        @keyframes chatBounce{0%,100%{transform:scale(1) translateY(0)}20%{transform:scale(1.18) translateY(-10px)}40%{transform:scale(1.06) translateY(-5px)}60%{transform:scale(1.12) translateY(-8px)}80%{transform:scale(1.03) translateY(-2px)}}
        @keyframes codeFloat{0%{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}100%{opacity:0;transform:translateX(-50%) translateY(-48px) scale(0.7)}}
        ::-webkit-scrollbar{display:none}
      `}</style>
    </main>
  );
}