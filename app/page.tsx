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

// ---- Shopify Link und Icon ----
const SHOPIFY_URL = "https://webit-ai.myshopify.com/products/webit-ai-premium-gastro-paket-inkl-ki-bot";
const ShopifyIcon = ({size=20}:{size?:number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.68 7.16L3.18 19.38C3.12 19.86 3.48 20.3 3.96 20.36H20.04C20.52 20.3 20.88 19.86 20.82 19.38L19.32 7.16M4.68 7.16C4.68 7.16 5.82 3.5 12 3.5C18.18 3.5 19.32 7.16 19.32 7.16M4.68 7.16H19.32M9 10V11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 11V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
// ---------------------------------

function getBotAnswer(msg:string):string {
  const m = msg.toLowerCase();
  if(m.includes("preis")||m.includes("kosten")||m.includes("paket"))
    return "💰 Unsere Pakete:\n\n🥉 Starter – 299€\nLanding Page, Mobile, 1 Woche Support\n\n🥈 Business – 799€\nBis 6 Seiten, CMS, SEO, 14 Tage Support\n\n🥇 Premium – 1.499€\nUnlimited, Shop, KI-Bot, 1 Monat Support\n\n🤖 KI Add-on – +299€";
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
    <section style={{padding:pad,maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1}}>
      <p style={{color:"#8b5cf6",fontSize:"12px",fontWeight:"800",letterSpacing:"4px",textTransform:"uppercase",marginBottom:"16px",textAlign:"center"}}>Tech Core</p>
      <h2 style={{...h2,marginBottom:"12px",textAlign:"center"}}>WebIT AI beim Arbeiten</h2>
      <p style={{color:"rgba(255,255,255,0.4)",textAlign:"center",marginBottom:"40px",fontSize:"16px",fontWeight:"300"}}>
        {isMobile?"Das baut WebIT AI für dich":"🖱 Maus über die Fläche bewegen — sieh wie Code entsteht"}
      </p>

      {/* THE BIG INTERACTIVE AREA - Aivinity Style */}
      <div ref={boxRef} onMouseMove={onMove} onMouseLeave={()=>{setMousePos(m=>({...m,active:false}));setTyping([]);}}
        style={{position:"relative",borderRadius:"32px",overflow:"hidden",
          border:"1px solid rgba(255,255,255,0.08)",
          background:"linear-gradient(145deg, rgba(10,5,20,0.8), rgba(5,3,10,0.95))",
          cursor:"crosshair",userSelect:"none",minHeight:isMobile?"400px":"480px",
          boxShadow:"0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          backdropFilter:"blur(24px)",
        }}>

        {/* Grid background */}
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none"}}/>

        {/* Mouse glow */}
        <div style={{position:"absolute",pointerEvents:"none",zIndex:1,
          left:`${mousePos.x}%`,top:`${mousePos.y}%`,
          width:"500px",height:"500px",
          transform:"translate(-50%,-50%)",
          background:`radial-gradient(circle,rgba(139,92,246,${mousePos.active?0.15:0}) 0%,rgba(239,68,68,${mousePos.active?0.05:0}) 40%,transparent 70%)`,
          transition:"left 0.05s,top 0.05s,background 0.3s",
        }}/>

        {/* Floating code lines from mouse */}
        {lines.map(l=>(
          <div key={l.id} style={{
            position:"absolute",pointerEvents:"none",zIndex:5,
            left:l.x,top:l.y,
            fontSize:"13px",fontWeight:"700",color:l.color,
            fontFamily:"'Courier New',monospace",
            whiteSpace:"nowrap",
            animation:"floatCode 1.8s ease-out forwards",
            transform:"translateX(-40%)",
            textShadow:`0 0 16px ${l.color}99`,
          }}>{l.text}</div>
        ))}

        {/* Terminal panel — right side */}
        <div style={{position:"absolute",top:"24px",right:"24px",width:isMobile?"calc(100% - 48px)":"380px",
          background:"rgba(0,0,0,0.85)",border:"1px solid rgba(255,255,255,0.1)",
          borderRadius:"20px",overflow:"hidden",backdropFilter:"blur(20px)",zIndex:6,
          boxShadow:"0 20px 40px rgba(0,0,0,0.5)"
        }}>
          {/* Terminal header */}
          <div style={{padding:"12px 18px",background:"rgba(255,255,255,0.02)",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"8px"}}>
            <div style={{width:"12px",height:"12px",borderRadius:"50%",background:"#ef4444"}}/>
            <div style={{width:"12px",height:"12px",borderRadius:"50%",background:"#f59e0b"}}/>
            <div style={{width:"12px",height:"12px",borderRadius:"50%",background:"#10b981"}}/>
            <span style={{marginLeft:"10px",fontSize:"12px",color:"rgba(255,255,255,0.4)",fontFamily:"monospace",letterSpacing:"1px"}}>webit-ai.tsx</span>
          </div>
          {/* Terminal code lines */}
          <div style={{padding:"18px",fontFamily:"'Courier New',monospace",fontSize:"13px",lineHeight:"2",minHeight:"200px"}}>
            {typing.length===0 ? (
              <div style={{color:"rgba(255,255,255,0.2)"}}>
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
        <div style={{position:"relative",zIndex:2,padding:"48px 40px",maxWidth:isMobile?"100%":"55%"}}>
          {!mousePos.active&&!isMobile ? (
            <div style={{opacity:0.5,pointerEvents:"none"}}>
              <div style={{fontSize:"48px",marginBottom:"24px"}}>🖱️</div>
              <p style={{color:"rgba(255,255,255,0.5)",fontSize:"18px",lineHeight:"1.6",fontWeight:"300"}}>Maus hier bewegen<br/>und sieh wie WebIT AI<br/>deine Website baut...</p>
            </div>
          ) : (
            <div>
              <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.25)",borderRadius:"100px",fontSize:"11px",color:"#4ade80",fontWeight:"800",marginBottom:"24px",letterSpacing:"1px"}}>
                <span style={{width:"8px",height:"8px",background:"#4ade80",borderRadius:"50%",display:"inline-block",animation:"pulse 1s infinite"}}/>
                KI generiert gerade...
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
                {["✦ Design wird erstellt","✦ SEO wird optimiert","✦ KI-Chatbot wird eingebaut","✦ Mobile wird angepasst"].map((t,i)=>(
                  <div key={i} style={{fontSize:"15px",color:"rgba(255,255,255,0.6)",fontWeight:"500",display:"flex",alignItems:"center",gap:"10px",
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
          <div style={{position:"absolute",bottom:"24px",left:"50%",transform:"translateX(-50%)",fontSize:"12px",color:"rgba(255,255,255,0.2)",whiteSpace:"nowrap",pointerEvents:"none",letterSpacing:"2px",textTransform:"uppercase"}}>
            🖱 Maus über diese Fläche bewegen
          </div>
        )}
      </div>
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

  // Größere Paddings und Headlines (Aivinity Style)
  const pad = isMobile ? "80px 20px" : "140px 40px";
  const h2 = {fontSize: isMobile?"clamp(32px,8vw,48px)":"clamp(48px,5vw,72px)" as string, fontWeight:"900", letterSpacing:"-0.04em", lineHeight:"1.1"};

  return (
    <main id="top" style={{minHeight:"100vh",background:"#030305",color:"white",fontFamily:"'Inter', 'Segoe UI', sans-serif",overflowX:"hidden"}}
      onMouseMove={e=>{
        if(isMobile) return;
        setCursor({x:e.clientX,y:e.clientY});
        // spawn code particle every ~80ms (Deine Original-Technik)
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
      {!isMobile&&<div style={{position:"fixed",pointerEvents:"none",zIndex:0,left:cursor.x,top:cursor.y,width:"800px",height:"800px",transform:"translate(-50%,-50%)",background:"radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 60%)",transition:"left 0.1s ease-out,top 0.1s ease-out"}}/>}

      {/* Code particles */}
      {!isMobile&&codeParticles.map(p=>(
        <div key={p.id} style={{position:"fixed",pointerEvents:"none",zIndex:999,left:p.x,top:p.y,fontSize:"12px",fontWeight:"800",color:p.color,fontFamily:"monospace",whiteSpace:"nowrap",animation:"codeFloat 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",transform:"translateX(-50%)"}}>{p.char}</div>
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
            filter:"blur(60px)",
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
            boxShadow:s.size>1.5?`0 0 ${s.size*4}px rgba(255,255,255,0.8)`:"none",
          }}/>
        ))}

        {/* Shooting meteors */}
        {METEORS.map(m=>(
          <div key={m.id} style={{
            position:"absolute",
            left:`${m.startX}%`, top:`${m.startY}%`,
            width:`${m.length}px`, height:"2px",
            background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
            animation:`meteor ${m.dur}s linear infinite`,
            animationDelay:`${m.delay}s`,
            opacity:0,
            transform:"rotate(-35deg)",
            transformOrigin:"left center",
            boxShadow:"0 0 10px rgba(255,255,255,0.5)"
          }}/>
        ))}

        {/* Subtle grid */}
        <div style={{
          position:"absolute",inset:0,
          backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize:"100px 100px",
        }}/>
      </div>

      {/* NAV (Aivinity Style Pill) */}
      <nav style={{position:"fixed",top:isMobile?"16px":"24px",left:"50%",transform:"translateX(-50%)",zIndex:100,display:"flex",alignItems:"center",gap:isMobile?"14px":"40px",padding:isMobile?"12px 20px":"16px 32px",background:"rgba(5,5,10,0.6)",backdropFilter:"blur(32px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"100px",boxShadow:"0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",whiteSpace:"nowrap", width:isMobile?"90%":"auto", justifyContent:isMobile?"space-between":"center"}}>
        <a href="/" style={{display:"flex",alignItems:"center",gap:"10px",textDecoration:"none"}}>
          <WLogo size={isMobile?24:32}/>
          <span style={{fontSize:isMobile?"16px":"20px",fontWeight:"900",letterSpacing:"-0.5px",background:"linear-gradient(135deg,#fff,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>WebIT AI</span>
        </a>
        {!isMobile && ["Demos","Preise","Kontakt"].map(n=>(
          <a key={n} href={`#${n.toLowerCase()}`} style={{color:"rgba(255,255,255,0.5)",fontWeight:"600",textDecoration:"none",fontSize:"12px",letterSpacing:"2px",textTransform:"uppercase",transition:"color 0.2s"}}
          onMouseEnter={e=>e.currentTarget.style.color="white"}
          onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.5)"}>{n}</a>
        ))}
        <a href="#kontakt" style={{padding:isMobile?"8px 16px":"10px 24px",borderRadius:"100px",background:"#fff",color:"#000",fontWeight:"800",fontSize:isMobile?"11px":"12px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s"}}
        onMouseEnter={e=>{e.currentTarget.style.background="#ff0055";e.currentTarget.style.color="#fff";e.currentTarget.style.transform="scale(1.05)"}}
        onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="#000";e.currentTarget.style.transform="scale(1)"}}>Projekt starten</a>
      </nav>

      {/* ══ HERO — Übermenschlich Aivinity Style ══ */}
      <section
        onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setHeroGlow({x:((e.clientX-r.left)/r.width)*100,y:((e.clientY-r.top)/r.height)*100,active:true});}}
        onMouseLeave={()=>setHeroGlow(g=>({...g,active:false}))}
        style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:isMobile?"120px 20px 60px":"160px 24px 80px",position:"relative",overflow:"hidden"}}>

        {/* KANJI BACKGROUND (Aivinity Depth) */}
        <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)", fontSize:isMobile?"25rem":"45rem", fontWeight:"900", color:"rgba(255,255,255,0.015)", pointerEvents:"none", userSelect:"none", fontStyle:"italic"}}>創造</div>

        {/* Mouse glow — only inside hero */}
        <div style={{position:"absolute",inset:0,background:heroGlow.active?`radial-gradient(800px circle at ${heroGlow.x}% ${heroGlow.y}%, rgba(139,92,246,0.08), transparent 50%)`:"none",pointerEvents:"none",transition:"background 0.2s ease-out"}}/>

        <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
          <div style={{position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(139,92,246,0.15) 0%,transparent 60%)",top:"-150px",right:"-100px",animation:"float0 12s ease-in-out infinite"}}/>
          <div style={{position:"absolute",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle,rgba(239,68,68,0.1) 0%,transparent 60%)",bottom:"-100px",left:"-100px",animation:"float1 15s ease-in-out infinite"}}/>
        </div>

        {/* TICKER */}
        <div style={{position:"absolute",top:isMobile?"80px":"110px",left:0,right:0,overflow:"hidden",maskImage:"linear-gradient(90deg,transparent,black 10%,black 90%,transparent)"}}>
          <div style={{display:"flex",gap:"16px",animation:"scrollLeft 40s linear infinite",width:"max-content"}}>
            {[...PROJECTS,...PROJECTS,...PROJECTS,...PROJECTS].map((p,i)=>(
              <a key={i} href={p.href} style={{padding:"8px 20px",background:"rgba(255,255,255,0.02)",border:`1px solid rgba(255,255,255,0.05)`,borderRadius:"100px",fontSize:"12px",fontWeight:"700",letterSpacing:"1px",color:"rgba(255,255,255,0.6)",whiteSpace:"nowrap",textDecoration:"none",flexShrink:0,backdropFilter:"blur(10px)"}}>{p.name} <span style={{color:p.color}}>· {p.tag}</span></a>
            ))}
          </div>
        </div>

        <div style={{position:"relative",zIndex:2,opacity:loaded?1:0,transform:loaded?"translateY(0)":"translateY(50px)",transition:"all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"10px",padding:"8px 20px",borderRadius:"100px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",fontSize:"11px",color:"#fff",fontWeight:"800",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"32px",backdropFilter:"blur(12px)"}}>
            <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#ef4444",boxShadow:"0 0 12px #ef4444",display:"inline-block",animation:"pulse 2s infinite"}}/>
            Osterburken Excellence
          </div>
          <h1 style={{fontSize:isMobile?"clamp(50px,12vw,80px)":"clamp(80px,8vw,150px)",fontWeight:"900",lineHeight:"0.85",letterSpacing:isMobile?"-2px":"-6px",marginBottom:"24px", textTransform:"uppercase"}}>
            Digital <br/>
            <span style={{background:"linear-gradient(180deg,#ffffff 0%,rgba(255,255,255,0.3) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent", fontStyle:"italic"}}>Prestige.</span>
          </h1>
          <h2 style={{fontSize:isMobile?"16px":"24px",fontWeight:"300",letterSpacing:"0px",color:"rgba(255,255,255,0.5)",marginBottom:"40px", maxWidth:"700px", margin:"0 auto 40px", lineHeight:"1.6"}}>
            Wir bauen keine gewöhnlichen Webseiten. Wir erschaffen <strong style={{color:"#fff", fontWeight:"700"}}>digitale Statussymbole</strong> für Marken, die den Markt anführen wollen.
          </h2>
          
          {/* ══ DREI BUTTONS: Projekt starten (original) | ZU SHOPIFY | Demos ansehen ══ */}
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap",marginBottom:"60px"}}>
            
            {/* 1. Original "Projekt starten" (leitet zu Kontakt) */}
            <a href="#kontakt" style={{padding:isMobile?"18px 36px":"22px 48px",borderRadius:"20px",background:"#fff",color:"#000",fontWeight:"900",fontSize:isMobile?"13px":"15px",letterSpacing:"2px",textTransform:"uppercase",textDecoration:"none",boxShadow:"0 20px 40px rgba(255,255,255,0.15)",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.02)";e.currentTarget.style.boxShadow="0 30px 60px rgba(255,255,255,0.25)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0) scale(1)";e.currentTarget.style.boxShadow="0 20px 40px rgba(255,255,255,0.15)"}}>Projekt starten</a>
            
            {/* 2. NEU: Shopify-Button (leitet zu deinem Produkt) */}
            <a 
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: isMobile ? "18px 36px" : "22px 48px",
                borderRadius: "20px",
                background: "#96bf48", // Shopify Grün
                color: "#fff",
                fontWeight: "900",
                fontSize: isMobile ? "13px" : "15px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 20px 40px rgba(150,191,72,0.2)",
                transition: "all 0.3s"
              }}
              onMouseEnter={e=>{
                e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 30px 60px rgba(150,191,72,0.3)";
              }}
              onMouseLeave={e=>{
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(150,191,72,0.2)";
              }}
            >
              Zu Shopify <ShopifyIcon size={20} />
            </a>
            
            {/* 3. Original "Demos ansehen" */}
            <a href="#demos" style={{padding:isMobile?"18px 36px":"22px 48px",borderRadius:"20px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",color:"white",fontWeight:"700",fontSize:isMobile?"13px":"15px",letterSpacing:"2px",textTransform:"uppercase",textDecoration:"none",backdropFilter:"blur(10px)",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"}}>Demos ansehen</a>
          </div>

          <div style={{display:"inline-flex",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"24px",overflow:"hidden",backdropFilter:"blur(20px)", boxShadow:"0 20px 40px rgba(0,0,0,0.5)"}}>
            {[{n:"100/100",l:"Google Speed"},{n:"24/7",l:"AI Integration"},{n:"100%",l:"Custom Design"}].map((s,i)=>(
              <div key={i} style={{padding:isMobile?"16px 20px":"24px 40px",borderRight:i<2?"1px solid rgba(255,255,255,0.05)":"none"}}>
                <div style={{fontSize:isMobile?"20px":"32px",fontWeight:"900",color:"#fff",letterSpacing:"-1px"}}>{s.n}</div>
                <div style={{fontSize:"10px",color:"rgba(255,255,255,0.4)",marginTop:"4px", letterSpacing:"1px", textTransform:"uppercase", fontWeight:"700"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest der Seite (unverändert) */}
      {/* ══ VORHER / NACHHER (Bento Style) ══ */}
      <section style={{padding:pad,maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#8b5cf6",fontSize:"12px",fontWeight:"800",letterSpacing:"4px",textTransform:"uppercase",marginBottom:"16px",textAlign:"center"}}>Der Unterschied</p>
        <h2 style={{...h2,marginBottom:"16px",textAlign:"center"}}>Vorher vs. Nachher</h2>
        <p style={{color:"rgba(255,255,255,0.4)",textAlign:"center",marginBottom:"60px",fontSize:"16px",fontWeight:"300"}}>Warum Webit AI den Markt verändert.</p>

        <div style={{display:isMobile?"block":"grid",gridTemplateColumns:"1fr 1fr", gap:"24px"}}>
          {/* BEFORE */}
          <div style={{padding:isMobile?"40px 30px":"60px 50px",
            background:"rgba(15,5,5,0.6)",
            border:"1px solid rgba(239,68,68,0.1)",
            borderRadius:"32px",
            position:"relative",overflow:"hidden",
            boxShadow:"0 20px 60px rgba(0,0,0,0.5)",
            backdropFilter:"blur(20px)"}}>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 80% 20%,rgba(239,68,68,0.05),transparent 60%)",pointerEvents:"none"}}/>
            <div style={{fontSize:"50px",marginBottom:"20px"}}>😔</div>
            <div style={{fontSize:"10px",letterSpacing:"4px",color:"#ef4444",textTransform:"uppercase",fontWeight:"900",marginBottom:"16px"}}>❌ Ohne WebIT AI</div>
            <h3 style={{fontSize:isMobile?"24px":"32px",fontWeight:"900",color:"#fff",marginBottom:"16px",letterSpacing:"-1px"}}>Die unsichtbare Marke</h3>
            <p style={{color:"rgba(255,255,255,0.5)",fontSize:"16px",lineHeight:"1.7",fontWeight:"300"}}>Kunden suchen dich auf Google, finden dich nicht, und buchen beim Konkurrenten. Deine Marke verliert täglich an Wert.</p>
            <div style={{marginTop:"32px",display:"flex",flexDirection:"column",gap:"12px"}}>
              {["❌ Langsame Ladezeiten","❌ Keine Online-Buchung","❌ Wirkt unprofessionell","❌ Umsatz geht verloren"].map(t=>(
                <div key={t} style={{fontSize:"14px",color:"rgba(255,255,255,0.4)",fontWeight:"500"}}>{t}</div>
              ))}
            </div>
          </div>
          {/* AFTER */}
          <div style={{padding:isMobile?"40px 30px":"60px 50px",
            background:"rgba(5,5,15,0.8)",
            border:"1px solid rgba(139,92,246,0.3)",
            borderRadius:"32px",
            position:"relative",overflow:"hidden",
            boxShadow:"0 30px 80px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
            backdropFilter:"blur(20px)",
            marginTop:isMobile?"24px":"0"}}>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 30% 20%,rgba(139,92,246,0.15),transparent 60%)",pointerEvents:"none"}}/>
            <div style={{fontSize:"50px",marginBottom:"20px"}}>🚀</div>
            <div style={{fontSize:"10px",letterSpacing:"4px",color:"#8b5cf6",textTransform:"uppercase",fontWeight:"900",marginBottom:"16px"}}>✅ Mit WebIT AI</div>
            <h3 style={{fontSize:isMobile?"24px":"32px",fontWeight:"900",color:"#fff",marginBottom:"16px",letterSpacing:"-1px"}}>Digitales Statussymbol</h3>
            <p style={{color:"rgba(255,255,255,0.7)",fontSize:"16px",lineHeight:"1.7",fontWeight:"300"}}>Ein extrem schnelles, beeindruckendes Erlebnis. Kunden vertrauen dir sofort und buchen vollautomatisch.</p>
            <div style={{marginTop:"32px",display:"flex",flexDirection:"column",gap:"12px"}}>
              {["✅ High-End Design (Aivinity Level)","✅ 24/7 KI-Chatbot für Kunden","✅ 100/100 Google Speed","✅ Automatisierte Buchungen"].map(t=>(
                <div key={t} style={{fontSize:"14px",color:"#c4b5fd",fontWeight:"600"}}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTERACTIVE CODE DEMO (Unverändert, aber im neuen CSS Gewand) ══ */}
      <InteractiveCodeDemo isMobile={isMobile} pad={pad} h2={h2}/>

      {/* ══ ÜBER MICH (KFZ STORY - Bento Grid Upgrade) ══ */}
      <section id="ueber" style={{padding:pad,maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#8b5cf6",fontSize:"12px",fontWeight:"800",letterSpacing:"4px",textTransform:"uppercase",marginBottom:"16px",textAlign:"center"}}>Der Founder</p>
        <h2 style={{...h2,marginBottom:"60px",textAlign:"center"}}>Vom KFZ zur KI.</h2>

        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1.5fr",gap:"24px",alignItems:"stretch"}}>

          {/* LEFT — Avatar + Fakten */}
          <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
            {/* Avatar Card */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"32px",padding:"40px 32px",display:"flex",alignItems:"center",gap:"24px",backdropFilter:"blur(20px)",position:"relative",overflow:"hidden",boxShadow:"0 20px 40px rgba(0,0,0,0.5)"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 0% 50%,rgba(139,92,246,0.1),transparent 60%)",pointerEvents:"none"}}/>
              {/* Avatar circle */}
              <div style={{width:"80px",height:"80px",borderRadius:"50%",background:"linear-gradient(135deg,#fff,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",flexShrink:0,boxShadow:"0 10px 30px rgba(139,92,246,0.2)"}}>
                👨‍💻
              </div>
              <div>
                <div style={{fontWeight:"900",fontSize:"24px",letterSpacing:"-1px",marginBottom:"4px",color:"#fff"}}>Ghaith Almadani</div>
                <div style={{fontSize:"13px",color:"rgba(255,255,255,0.5)",marginBottom:"12px",fontWeight:"500",letterSpacing:"1px",textTransform:"uppercase"}}>WebIT AI Founder</div>
                <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                  {["Next.js","AI","UI/UX"].map(t=>(
                    <span key={t} style={{fontSize:"10px",padding:"4px 10px",borderRadius:"100px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#fff",fontWeight:"700",letterSpacing:"1px"}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Facts */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",height:"100%"}}>
              {[
                {icon:"📍",label:"Base",value:"Osterburken"},
                {icon:"🔧",label:"Roots",value:"KFZ-Mechatronik"},
              ].map(f=>(
                <div key={f.label} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"24px",padding:"24px",display:"flex",flexDirection:"column",justifyContent:"center",backdropFilter:"blur(10px)",boxShadow:"0 10px 30px rgba(0,0,0,0.3)"}}>
                  <span style={{fontSize:"24px",marginBottom:"12px"}}>{f.icon}</span>
                  <div style={{fontSize:"10px",color:"rgba(255,255,255,0.4)",letterSpacing:"2px",textTransform:"uppercase",fontWeight:"800",marginBottom:"4px"}}>{f.label}</div>
                  <div style={{fontSize:"14px",fontWeight:"700",color:"#fff"}}>{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Story */}
          <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"32px",padding:isMobile?"40px 30px":"60px 50px",backdropFilter:"blur(20px)",position:"relative",overflow:"hidden",boxShadow:"0 20px 40px rgba(0,0,0,0.5)"}}>
            <div style={{position:"absolute", top:"-20px", right:"-20px", fontSize:"15rem", fontWeight:"900", fontStyle:"italic", color:"rgba(255,255,255,0.02)", pointerEvents:"none", userSelect:"none"}}>KFZ</div>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 100% 0%,rgba(239,68,68,0.05),transparent 60%)",pointerEvents:"none"}}/>
            <div style={{position:"relative",zIndex:1}}>
              <h3 style={{fontSize:isMobile?"28px":"40px",fontWeight:"900",letterSpacing:"-1px",marginBottom:"32px",lineHeight:"1.1",textTransform:"uppercase"}}>
                Tagsüber <span style={{color:"#ef4444"}}>KFZ</span>.<br/>
                Nachts <span style={{color:"#8b5cf6"}}>Code</span>.
              </h3>
              <p style={{color:"rgba(255,255,255,0.6)",fontSize:"16px",lineHeight:"1.8",marginBottom:"24px",fontWeight:"300"}}>
                Ich weiß, was harte Arbeit bedeutet. Als ausgebildeter KFZ-Mechatroniker habe ich gelernt, dass <strong style={{color:"#fff",fontWeight:"700"}}>Präzision alles ist</strong>. Wenn ein Teil nicht zu 100% passt, läuft der Motor nicht.
              </p>
              <p style={{color:"rgba(255,255,255,0.6)",fontSize:"16px",lineHeight:"1.8",marginBottom:"24px",fontWeight:"300"}}>
                Genau diese Mentalität bringe ich in den Code. Was als Hobby anfing, ist heute **WebIT AI**. Ich baue keine Standard-Seiten, ich baue hochgezüchtete, digitale Maschinen, die Unternehmen an die Spitze bringen.
              </p>
              <p style={{color:"rgba(255,255,255,0.6)",fontSize:"16px",lineHeight:"1.8",fontWeight:"300"}}>
                Die Konkurrenz schläft nicht — und <strong style={{color:"#fff",fontWeight:"700"}}>wir tun es auch nicht</strong>.
              </p>

              <div style={{marginTop:"48px",display:"flex",gap:"16px",flexWrap:"wrap"}}>
                <a href="mailto:ghaith.almadani.makkieh@gmail.com" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"16px 32px",borderRadius:"100px",background:"#fff",color:"#000",fontSize:"13px",fontWeight:"800",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.boxShadow="0 10px 20px rgba(255,255,255,0.2)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="none"}}>
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ DEMOS ══ */}
      <section id="demos" style={{padding:pad,maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#8b5cf6",fontSize:"12px",fontWeight:"800",letterSpacing:"4px",textTransform:"uppercase",marginBottom:"16px",textAlign:"center"}}>High-End Portfolio</p>
        <h2 style={{...h2,marginBottom:"16px",textAlign:"center"}}>Bereit für jede Branche</h2>
        <p style={{color:"rgba(255,255,255,0.4)",textAlign:"center",marginBottom:"60px",fontSize:"16px",fontWeight:"300"}}>
          {isMobile?"Wische, um die Demos zu sehen.":"Klick auf eine Branche, um die Premium-Demos live zu erleben."}
        </p>

        {isMobile ? (
          <div ref={industryRef} onTouchStart={onIndTouchStart} onTouchEnd={onIndTouchEnd}
            style={{display:"flex",gap:"16px",overflowX:"auto",paddingBottom:"20px",scrollbarWidth:"none",WebkitOverflowScrolling:"touch"}}>
            {INDUSTRIES.map((ind,i)=>(
              <a key={i} href={ind.href} style={{flexShrink:0,width:"160px",background:"rgba(255,255,255,0.02)",border:`1px solid rgba(255,255,255,0.05)`,borderRadius:"24px",padding:"32px 24px",textAlign:"center",textDecoration:"none",display:"block",boxShadow:"0 10px 30px rgba(0,0,0,0.5)",backdropFilter:"blur(10px)"}}>
                <div style={{fontSize:"40px",marginBottom:"16px"}}>{ind.icon}</div>
                <div style={{fontSize:"16px",fontWeight:"800",color:"white",marginBottom:"8px",letterSpacing:"-0.5px"}}>{ind.name}</div>
                <div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)",fontWeight:"500"}}>{ind.desc}</div>
                {ind.href!=="#"&&<div style={{marginTop:"16px",fontSize:"10px",color:ind.color,fontWeight:"800",letterSpacing:"1px",textTransform:"uppercase"}}>Demo ansehen</div>}
              </a>
            ))}
          </div>
        ) : (
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            {INDUSTRIES.map((ind,i)=>(
              <a key={i} href={ind.href}
                style={{background:hoveredIndustry===i?`rgba(255,255,255,0.05)`:"rgba(255,255,255,0.02)",border:`1px solid ${hoveredIndustry===i?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.05)"}`,borderRadius:"32px",padding:"40px 24px",textAlign:"center",textDecoration:"none",display:"block",transform:hoveredIndustry===i?"translateY(-8px)":"translateY(0)",transition:"all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",boxShadow:hoveredIndustry===i?`0 30px 60px rgba(0,0,0,0.6)`:"0 10px 30px rgba(0,0,0,0.4)",backdropFilter:"blur(20px)"}}
                onMouseEnter={()=>setHoveredIndustry(i)}
                onMouseLeave={()=>setHoveredIndustry(null)}>
                <div style={{fontSize:"48px",marginBottom:"20px",transform:hoveredIndustry===i?"scale(1.1)":"scale(1)",transition:"transform 0.4s"}}>{ind.icon}</div>
                <div style={{fontSize:"18px",fontWeight:"900",color:"#fff",marginBottom:"8px",transition:"color 0.3s",letterSpacing:"-0.5px"}}>{ind.name}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.4)",fontWeight:"500",marginBottom:"20px"}}>{ind.desc}</div>
                <div style={{fontSize:"11px",color:ind.color,fontWeight:"800",opacity:hoveredIndustry===i?1:0.5,letterSpacing:"1px",textTransform:"uppercase",transition:"all 0.3s"}}>
                  {ind.href!=="#"?"Demo starten →":"In Entwicklung"}
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ══ SKILLS (Bento Tech Stack) ══ */}
      <section id="skills" style={{padding:pad,maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#8b5cf6",fontSize:"12px",fontWeight:"800",letterSpacing:"4px",textTransform:"uppercase",marginBottom:"16px",textAlign:"center"}}>Tech Stack</p>
        <h2 style={{...h2,marginBottom:"60px",textAlign:"center"}}>Engineered for Speed.</h2>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(3,1fr)",gap:"24px"}}>
          {[
            {icon:"▲",name:"Next.js",desc:"Blitzschnelle Web-Apps mit Server-Side Rendering.",color:"#ffffff"},
            {icon:"🐘",name:"PostgreSQL",desc:"Absolut skalierbare, professionelle Datenbanken.",color:"#60a5fa"},
            {icon:"🐳",name:"Docker",desc:"Stabiler Betrieb und schnelles Deployment überall.",color:"#38bdf8"},
            {icon:"🎨",name:"Tailwind",desc:"Pixelperfektes Design, genau wie dieses hier.",color:"#34d399"},
            {icon:"⬡",name:"UI/UX",desc:"High-End Komponenten, die konvertieren.",color:"#a78bfa"},
            {icon:"🧠",name:"KI Core",desc:"Smarte Chatbots und Automatisierungen inklusive.",color:"#ef4444"},
          ].map(s=>(
            <div key={s.name}
              style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"32px",padding:isMobile?"24px":"40px 32px",transition:"all 0.4s",backdropFilter:"blur(10px)",boxShadow:"0 10px 30px rgba(0,0,0,0.3)"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.background="rgba(255,255,255,0.04)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.05)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.background="rgba(255,255,255,0.02)"}}>
              <div style={{fontSize:"32px",marginBottom:"16px"}}>{s.icon}</div>
              <div style={{fontSize:isMobile?"16px":"20px",fontWeight:"900",color:"#fff",marginBottom:"8px",letterSpacing:"-0.5px"}}>{s.name}</div>
              <div style={{fontSize:"13px",color:"rgba(255,255,255,0.4)",lineHeight:"1.6",fontWeight:"300"}}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PREISE (Aivinity Style Pricing) ══ */}
      <section id="preise" style={{padding:pad,maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1}}>
        <p style={{color:"#8b5cf6",fontSize:"12px",fontWeight:"800",letterSpacing:"4px",textTransform:"uppercase",marginBottom:"16px",textAlign:"center"}}>Pricing</p>
        <h2 style={{...h2,marginBottom:"16px",textAlign:"center"}}>Keine Kompromisse.</h2>
        <p style={{color:"rgba(255,255,255,0.4)",textAlign:"center",marginBottom:"60px",fontSize:"16px",fontWeight:"300"}}>Einmalige Zahlung. Kein verstecktes Abo.</p>
        
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:"24px", alignItems:"center"}}>
          {[
            {tier:"Starter",price:"299",color:"#8b5cf6",features:["1 Landing Page","Mobile-optimiert","Kontaktformular","Google Maps","1 Woche Support"],popular:false},
            {tier:"Business",price:"799",color:"#ef4444",features:["Bis 6 Seiten","CMS System","SEO Optimierung","Google Analytics","Blog / News","14 Tage Support"],popular:true},
            {tier:"Premium",price:"1.499",color:"#a78bfa",features:["Unlimited Seiten","Online Shop","KI-Chatbot","SEO Full-Paket","Performance Audit","1 Monat Support"],popular:false},
          ].map(p=>(
            <div key={p.tier}
              style={{background:p.popular?"rgba(255,255,255,0.04)":"rgba(255,255,255,0.01)",border:p.popular?"1px solid rgba(255,255,255,0.15)":"1px solid rgba(255,255,255,0.05)",borderRadius:"40px",padding:p.popular?"60px 40px":"48px 40px",position:"relative",transform:!isMobile&&p.popular?"scale(1.05)":"none",boxShadow:p.popular?"0 40px 80px rgba(0,0,0,0.8)":"0 20px 40px rgba(0,0,0,0.4)",backdropFilter:"blur(20px)",transition:"all 0.4s", zIndex:p.popular?10:1}}>
              
              {p.popular&&<div style={{position:"absolute",top:"24px",right:"24px",background:"#fff",color:"#000",fontSize:"10px",fontWeight:"900",letterSpacing:"2px",padding:"6px 16px",borderRadius:"100px",textTransform:"uppercase"}}>Bestseller</div>}
              
              <div style={{fontSize:"12px",letterSpacing:"4px",textTransform:"uppercase",color:p.popular?"#fff":"rgba(255,255,255,0.4)",fontWeight:"800",marginBottom:"16px"}}>{p.tier}</div>
              <div style={{fontSize:"60px",fontWeight:"900",letterSpacing:"-3px",color:"#fff",marginBottom:"8px", lineHeight:"1"}}>€{p.price}</div>
              <div style={{fontSize:"12px",color:"rgba(255,255,255,0.3)",marginBottom:"40px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"1px"}}>einmalig · zzgl. MwSt.</div>
              
              <ul style={{listStyle:"none",padding:0,marginBottom:"48px",display:"flex",flexDirection:"column",gap:"16px"}}>
                {p.features.map(f=>(
                  <li key={f} style={{fontSize:"14px",color:"rgba(255,255,255,0.6)",display:"flex",gap:"12px",alignItems:"center",fontWeight:"500"}}>
                    <span style={{color:p.popular?"#fff":"rgba(255,255,255,0.3)"}}>✓</span>{f}
                  </li>
                ))}
              </ul>
              
              <a href="#kontakt" style={{display:"block",padding:"20px",borderRadius:"20px",background:p.popular?"#fff":"rgba(255,255,255,0.03)",border:p.popular?"none":"1px solid rgba(255,255,255,0.1)",color:p.popular?"#000":"#fff",fontWeight:"800",fontSize:"14px",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",textAlign:"center",transition:"all 0.3s"}}
              onMouseEnter={e=>{if(!p.popular){e.currentTarget.style.background="rgba(255,255,255,0.08)"}else{e.currentTarget.style.transform="scale(1.05)"}}}
              onMouseLeave={e=>{if(!p.popular){e.currentTarget.style.background="rgba(255,255,255,0.03)"}else{e.currentTarget.style.transform="scale(1)"}}}>
                {p.popular?"Jetzt starten":"Anfragen"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ══ KONTAKT (Aivinity Style Giant Footer) ══ */}
      <section id="kontakt" style={{padding:isMobile?"80px 20px":"160px 40px",maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:1,textAlign:"center"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"100%",height:"100%",background:"radial-gradient(circle,rgba(255,255,255,0.03) 0%,transparent 60%)",pointerEvents:"none",zIndex:-1}}/>
        
        <h2 style={{fontSize:isMobile?"clamp(40px,10vw,60px)":"clamp(60px,8vw,120px)",fontWeight:"900",letterSpacing:"-4px",lineHeight:"0.9",marginBottom:"40px",textTransform:"uppercase"}}>
          Ready to <br/>
          <span style={{fontStyle:"italic", color:"rgba(255,255,255,0.2)"}}>Build?</span>
        </h2>
        <p style={{color:"rgba(255,255,255,0.4)",lineHeight:"1.8",fontSize:isMobile?"16px":"20px",maxWidth:"600px",margin:"0 auto 60px",fontWeight:"300"}}>
          Kostenlose Erstberatung. Wir analysieren dein Business und bauen die digitale Architektur, die du verdienst.
        </p>

        <div style={{display:"flex",flexDirection:isMobile?"column":"row",gap:"24px",justifyContent:"center",alignItems:"center",marginBottom:"80px"}}>
          <a href="https://wa.me/4917685974436" target="_blank" rel="noopener noreferrer"
            style={{display:"flex",alignItems:"center",gap:"16px",padding:"20px 40px",borderRadius:"100px",background:"#fff",color:"#000",textDecoration:"none",fontWeight:"900",fontSize:"14px",letterSpacing:"2px",textTransform:"uppercase",transition:"all 0.3s",boxShadow:"0 20px 40px rgba(255,255,255,0.15)"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)"}}>
            <span style={{fontSize:"20px"}}>💬</span> WhatsApp
          </a>

          <a href="mailto:ghaith.almadani.makkieh@gmail.com"
            style={{display:"flex",alignItems:"center",gap:"16px",padding:"20px 40px",borderRadius:"100px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",color:"#fff",textDecoration:"none",fontWeight:"800",fontSize:"14px",letterSpacing:"2px",textTransform:"uppercase",transition:"all 0.3s",backdropFilter:"blur(10px)"}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)"}}>
            <span style={{fontSize:"20px"}}>✉️</span> E-Mail Senden
          </a>
        </div>
        
        <div style={{display:"flex",gap:"40px",justifyContent:"center",color:"rgba(255,255,255,0.3)",fontSize:"12px",fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase",flexWrap:"wrap"}}>
          <span>+49 176 85974436</span>
          <span>Osterburken</span>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:isMobile?"32px 24px 100px":"48px 60px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"24px",background:"#000"}}>
        <a href="/" style={{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"}}>
          <WLogo size={24}/>
          <span style={{fontWeight:"900",fontSize:"16px",letterSpacing:"-0.5px",color:"#fff"}}>WebIT AI</span>
        </a>
        <div style={{display:"flex",gap:"32px"}}>
          {[
            {label:"Impressum",href:"/impressum"},
            {label:"Datenschutz",href:"/datenschutz"},
            {label:"📄 AGB",href:"/agb"}
          ].map(l=>(
            <a key={l.label} href={l.href} style={{color:"rgba(255,255,255,0.3)",fontWeight:"600",textDecoration:"none",fontSize:"12px",letterSpacing:"1px",textTransform:"uppercase",transition:"color 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.color="white"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.3)"}>{l.label}</a>
          ))}
        </div>
        <span style={{color:"rgba(255,255,255,0.2)",fontSize:"11px",fontWeight:"600",letterSpacing:"1px",textTransform:"uppercase"}}>© 2026 Crafted in Osterburken</span>
      </footer>

      {/* ══ MOBILE BOTTOM NAV ══ */}
      {isMobile && (
        <nav style={{
          position:"fixed",bottom:0,left:0,right:0,zIndex:200,
          background:"rgba(0,0,0,0.8)",backdropFilter:"blur(32px)",
          borderTop:"1px solid rgba(255,255,255,0.05)",
          display:"flex",alignItems:"center",justifyContent:"space-around",
          padding:"12px 8px calc(12px + env(safe-area-inset-bottom))",
        }}>
          {[
            {icon:"🏠",label:"Home",href:"#top"},
            {icon:"🎨",label:"Demos",href:"#demos"},
            {icon:"💎",label:"Preise",href:"#preise"},
            {icon:"💬",label:"Kontakt",href:"#kontakt"},
          ].map(n=>(
            <a key={n.label} href={n.href}
              style={{
                display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",
                textDecoration:"none",padding:"8px 16px",borderRadius:"16px",
                transition:"all 0.2s",
                WebkitTapHighlightColor:"transparent",
              }}>
              <span style={{fontSize:"20px"}}>{n.icon}</span>
              <span style={{fontSize:"9px",color:"rgba(255,255,255,0.4)",fontWeight:"800",letterSpacing:"1px",textTransform:"uppercase"}}>{n.label}</span>
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
          width:"64px",height:"64px",borderRadius:"50%",
          background:"#fff",
          color:"#000",
          cursor:isDragging.current?"grabbing":"grab",
          display:"flex",alignItems:"center",justifyContent:"center",
          boxShadow:"0 20px 40px rgba(255,255,255,0.2)",
          fontSize:"24px",
          animation:chatBounce?"chatBounce 0.7s ease":"none",
          userSelect:"none",
          touchAction:"none",
          transition:"transform 0.2s"
        }}
        onMouseEnter={e=>{if(!isDragging.current) e.currentTarget.style.transform="scale(1.1)"}}
        onMouseLeave={e=>{if(!isDragging.current) e.currentTarget.style.transform="scale(1)"}}>
        {chatOpen?"✕":"🤖"}
        {!chatOpen&&<div style={{position:"absolute",top:"0px",right:"0px",width:"16px",height:"16px",background:"#10b981",borderRadius:"50%",border:"3px solid #000",animation:"pulse 2s infinite"}}/>}
      </div>

      {/* ══ CHAT WINDOW ══ */}
      {chatOpen&&(
        <div style={{
          position:"fixed",
          bottom:isMobile?"0":`${100-chatPos.y}px`,
          right:isMobile?"0":`${28-chatPos.x}px`,
          left:isMobile?"0":"auto",
          zIndex:499,width:isMobile?"100%":"380px",
          background:"rgba(10,10,15,0.95)",
          border:"1px solid rgba(255,255,255,0.1)",
          borderRadius:isMobile?"32px 32px 0 0":"32px",
          overflow:"hidden",display:"flex",flexDirection:"column",
          maxHeight:isMobile?"80vh":"600px",
          boxShadow:"0 40px 100px rgba(0,0,0,0.8)",
          backdropFilter:"blur(40px)",
        }}>
          <div style={{padding:"20px 24px",display:"flex",alignItems:"center",gap:"12px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(255,255,255,0.02)"}}>
            <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><WLogo size={20}/></div>
            <div style={{flex:1}}>
              <div style={{fontWeight:"900",fontSize:"14px",letterSpacing:"-0.5px"}}>WebIT AI Core</div>
              <div style={{fontSize:"10px",color:"#10b981",display:"flex",alignItems:"center",gap:"6px",fontWeight:"700",textTransform:"uppercase",letterSpacing:"1px"}}><span style={{width:"6px",height:"6px",background:"#10b981",borderRadius:"50%",display:"inline-block"}}/>Online</div>
            </div>
            <button onClick={()=>setChatOpen(false)} style={{background:"rgba(255,255,255,0.05)",border:"none",color:"#fff",cursor:"pointer",fontSize:"16px",width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"12px",minHeight:"250px",maxHeight:"400px"}}>
            {messages.map((msg,i)=>(
              <div key={i} style={{maxWidth:"85%",padding:"12px 16px",borderRadius:msg.role==="bot"?"16px 16px 16px 4px":"16px 16px 4px 16px",background:msg.role==="bot"?"rgba(255,255,255,0.05)":"#fff",color:msg.role==="bot"?"#fff":"#000",alignSelf:msg.role==="bot"?"flex-start":"flex-end",fontSize:"14px",lineHeight:"1.6",fontWeight:"500",whiteSpace:"pre-line"}}>{msg.text}</div>
            ))}
            {typing&&<div style={{padding:"12px 16px",borderRadius:"16px 16px 16px 4px",background:"rgba(255,255,255,0.05)",display:"flex",gap:"6px",alignItems:"center",width:"60px"}}>{[0,1,2].map(i=><div key={i} style={{width:"6px",height:"6px",borderRadius:"50%",background:"rgba(255,255,255,0.4)",animation:"dot 1.2s infinite",animationDelay:`${i*0.2}s`}}/>)}</div>}
            <div ref={messagesEndRef}/>
          </div>
          <div style={{padding:"12px 20px",display:"flex",gap:"8px",flexWrap:"wrap",borderTop:"1px solid rgba(255,255,255,0.05)"}}>
            {["💰 Preise","🎨 Demos","⏱ Dauer"].map(q=>(
              <button key={q} onClick={()=>{setMessages(p=>[...p,{role:"user",text:q}]);setTyping(true);setTimeout(()=>{setTyping(false);setMessages(p=>[...p,{role:"bot",text:getBotAnswer(q)}]);},800);}}
                style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#fff",padding:"6px 12px",borderRadius:"100px",fontSize:"11px",fontWeight:"700",letterSpacing:"1px",textTransform:"uppercase",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="#000"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.color="#fff"}}>{q}</button>
            ))}
          </div>
          <div style={{display:"flex",gap:"12px",padding:"20px",borderTop:"1px solid rgba(255,255,255,0.05)",background:"rgba(0,0,0,0.5)"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendMessage()} placeholder="Frag mich was..." style={{flex:1,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"16px",padding:"12px 16px",color:"white",fontSize:"14px",fontWeight:"500",outline:"none",fontFamily:"inherit"}}/>
            <button onClick={sendMessage} style={{background:"#fff",border:"none",borderRadius:"16px",width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#000",fontSize:"20px",transition:"all 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.transform="scale(1.05)"}
            onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>→</button>
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
        @keyframes meteor{0%{opacity:0;transform:rotate(-35deg) translateX(0)}5%{opacity:1}20%{opacity:0;transform:rotate(-35deg) translateX(-600px)}100%{opacity:0;transform:rotate(-35deg) translateX(-600px)}}
        /* Page */
        @keyframes float0{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-30px)}}
        @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,25px)}}
        @keyframes scrollLeft{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 12px #ef4444}50%{opacity:0.4}}
        @keyframes dot{0%,60%,100%{transform:translateY(0);opacity:0.32}30%{transform:translateY(-6px);opacity:1}}
        @keyframes chatBounce{0%,100%{transform:scale(1) translateY(0)}20%{transform:scale(1.18) translateY(-10px)}40%{transform:scale(1.06) translateY(-5px)}60%{transform:scale(1.12) translateY(-8px)}80%{transform:scale(1.03) translateY(-2px)}}
        @keyframes codeFloat{0%{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}100%{opacity:0;transform:translateX(-50%) translateY(-60px) scale(0.7)}}
        ::-webkit-scrollbar{display:none}
      `}</style>
    </main>
  );
}