"use client";
import { useState, useEffect } from "react";

export default function FitnessDemo() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("kurse");
  const [count, setCount] = useState({members: 0, trainers: 0, years: 0});

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const timer = setTimeout(() => {
      let m = 0, t = 0, y = 0;
      const interval = setInterval(() => {
        if (m < 1240) { m += 17; setCount(c => ({...c, members: m})); }
        if (t < 24) { t += 1; setCount(c => ({...c, trainers: t})); }
        if (y < 8) { y += 1; setCount(c => ({...c, years: y})); }
        if (m >= 1240 && t >= 24 && y >= 8) clearInterval(interval);
      }, 40);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const KURSE = [
    {name:"HIIT Inferno",time:"06:00 & 18:00",level:"Intensiv",color:"#ef4444",spots:3},
    {name:"Yoga Flow",time:"08:00 & 20:00",level:"Alle Level",color:"#8b5cf6",spots:8},
    {name:"Powerlifting",time:"07:00 & 17:00",level:"Fortgeschritten",color:"#f59e0b",spots:5},
    {name:"Cardio Blast",time:"09:00 & 19:00",level:"Mittel",color:"#10b981",spots:12},
    {name:"Body Pump",time:"10:00 & 18:30",level:"Alle Level",color:"#06b6d4",spots:6},
    {name:"Stretching",time:"07:30 & 21:00",level:"Einsteiger",color:"#ec4899",spots:15},
  ];

  return (
    <main style={{minHeight:"100vh",background:"#080810",color:"white",fontFamily:"'Segoe UI',sans-serif",overflowX:"hidden"}}>

      {/* DEMO BANNER */}
      <div style={{background:"linear-gradient(90deg,#ef4444,#8b5cf6)",padding:"10px",textAlign:"center",fontSize:"13px",fontWeight:"700",letterSpacing:"1px"}}>
        🎨 DEMO SEITE — Erstellt von <a href="/" style={{color:"white",textDecoration:"underline"}}>WebIT AI</a> · So könnte dein Fitness Studio aussehen!
      </div>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 48px",background:"rgba(8,8,16,0.9)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(239,68,68,0.15)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"36px",height:"36px",background:"linear-gradient(135deg,#ef4444,#dc2626)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"18px"}}>⚡</div>
          <span style={{fontSize:"20px",fontWeight:"900",letterSpacing:"-0.5px"}}>IRON<span style={{color:"#ef4444"}}>FIT</span></span>
        </div>
        <div style={{display:"flex",gap:"32px"}}>
          {["Kurse","Trainer","Preise","Kontakt"].map(i=>(
            <a key={i} href="#" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:"14px",fontWeight:"500",transition:"color 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.color="white"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.5)"}>{i}</a>
          ))}
        </div>
        <a href="#" style={{padding:"10px 24px",background:"#ef4444",borderRadius:"8px",color:"white",fontWeight:"700",fontSize:"14px",textDecoration:"none",transition:"all 0.2s"}}
        onMouseEnter={e=>e.currentTarget.style.background="#dc2626"}
        onMouseLeave={e=>e.currentTarget.style.background="#ef4444"}>Probetraining →</a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:"90vh",display:"flex",alignItems:"center",padding:"80px 48px",position:"relative",overflow:"hidden"}}>
        {/* BG */}
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 50%,rgba(239,68,68,0.12) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",right:"48px",top:"50%",transform:"translateY(-50%)",fontSize:"280px",fontWeight:"900",color:"rgba(239,68,68,0.04)",letterSpacing:"-20px",userSelect:"none",pointerEvents:"none",lineHeight:1}}>IRON</div>

        <div style={{maxWidth:"700px",opacity:loaded?1:0,transform:loaded?"translateY(0)":"translateY(30px)",transition:"all 1s ease"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.25)",borderRadius:"100px",fontSize:"11px",color:"#fca5a5",fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"28px"}}>
            <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#ef4444",display:"inline-block",animation:"pulse 2s infinite"}}/>
            Osternurken · Seit 2017
          </div>
          <h1 style={{fontSize:"clamp(48px,7vw,96px)",fontWeight:"900",lineHeight:"0.95",letterSpacing:"-4px",marginBottom:"24px"}}>
            Kein<br/>
            <span style={{color:"#ef4444"}}>Schmerz,</span><br/>
            kein Erfolg.
          </h1>
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:"18px",maxWidth:"480px",lineHeight:"1.7",marginBottom:"40px"}}>
            Dein Premium Fitnessstudio — mit professionellen Trainern, modernsten Geräten und Kursen für jedes Level.
          </p>
          <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
            <a href="#" style={{padding:"16px 40px",background:"#ef4444",borderRadius:"10px",color:"white",fontWeight:"700",fontSize:"16px",textDecoration:"none",boxShadow:"0 8px 32px rgba(239,68,68,0.4)",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 16px 48px rgba(239,68,68,0.5)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 32px rgba(239,68,68,0.4)"}}>
              🔥 Gratis Probetraining
            </a>
            <a href="#" style={{padding:"16px 40px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"white",fontWeight:"600",fontSize:"16px",textDecoration:"none",backdropFilter:"blur(10px)"}}>
              Kurse ansehen
            </a>
          </div>

          {/* STATS */}
          <div style={{display:"flex",gap:"40px",marginTop:"56px"}}>
            {[{n:count.members>0?`${count.members.toLocaleString()}+`:"0",l:"Mitglieder"},{n:count.trainers>0?`${count.trainers}`:"0",l:"Trainer"},{n:count.years>0?`${count.years}`:"0",l:"Jahre Erfahrung"}].map((s,i)=>(
              <div key={i}>
                <div style={{fontSize:"36px",fontWeight:"900",color:"#ef4444",letterSpacing:"-1px"}}>{s.n}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.35)",marginTop:"2px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KURSE */}
      <section style={{padding:"80px 48px",maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"40px"}}>
          <div>
            <p style={{color:"#ef4444",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"8px"}}>Stundenplan</p>
            <h2 style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:"900",letterSpacing:"-2px"}}>Unsere Kurse</h2>
          </div>
          <div style={{display:"flex",gap:"4px",background:"rgba(255,255,255,0.04)",padding:"4px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.07)"}}>
            {["Mo–Fr","Wochenende"].map(t=>(
              <button key={t} onClick={()=>setActiveTab(t)} style={{padding:"8px 20px",borderRadius:"7px",background:activeTab===t?"#ef4444":"transparent",color:activeTab===t?"white":"rgba(255,255,255,0.4)",fontWeight:"600",fontSize:"13px",border:"none",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"14px"}}>
          {KURSE.map((k,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"16px",padding:"24px",transition:"all 0.3s",cursor:"pointer",position:"relative",overflow:"hidden"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=k.color+"55";e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.background=k.color+"0a"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.background="rgba(255,255,255,0.03)"}}>
              <div style={{position:"absolute",top:0,right:0,width:"60px",height:"60px",background:`radial-gradient(circle at 100% 0%,${k.color}22,transparent 70%)`,borderRadius:"0 16px 0 0"}}/>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"12px"}}>
                <h3 style={{fontSize:"16px",fontWeight:"700"}}>{k.name}</h3>
                <span style={{fontSize:"11px",padding:"3px 8px",background:k.color+"22",borderRadius:"100px",color:k.color,fontWeight:"600",whiteSpace:"nowrap"}}>{k.level}</span>
              </div>
              <div style={{color:"rgba(255,255,255,0.4)",fontSize:"13px",marginBottom:"14px"}}>⏰ {k.time}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:"12px",color:k.spots<=5?"#ef4444":"rgba(255,255,255,0.3)"}}>{k.spots} Plätze frei</span>
                <button style={{padding:"6px 14px",background:k.color,borderRadius:"6px",color:"white",fontWeight:"600",fontSize:"12px",border:"none",cursor:"pointer"}}>Buchen</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINER */}
      <section style={{padding:"80px 48px",maxWidth:"1100px",margin:"0 auto"}}>
        <p style={{color:"#ef4444",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"8px"}}>Unser Team</p>
        <h2 style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"40px"}}>Professionelle Trainer</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
          {[
            {name:"Marco R.",spec:"Powerlifting & Kraft",exp:"8 Jahre",emoji:"💪"},
            {name:"Sarah M.",spec:"Yoga & Wellness",exp:"6 Jahre",emoji:"🧘"},
            {name:"Alex K.",spec:"HIIT & Cardio",exp:"5 Jahre",emoji:"⚡"},
          ].map((t,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"20px",padding:"32px",textAlign:"center",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(239,68,68,0.3)";e.currentTarget.style.transform="translateY(-4px)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{width:"80px",height:"80px",borderRadius:"50%",background:"linear-gradient(135deg,#ef4444,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",margin:"0 auto 16px"}}>
                {t.emoji}
              </div>
              <h3 style={{fontSize:"18px",fontWeight:"700",marginBottom:"6px"}}>{t.name}</h3>
              <p style={{color:"#ef4444",fontSize:"13px",fontWeight:"600",marginBottom:"4px"}}>{t.spec}</p>
              <p style={{color:"rgba(255,255,255,0.3)",fontSize:"12px"}}>{t.exp} Erfahrung</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREISE */}
      <section style={{padding:"80px 48px",maxWidth:"1100px",margin:"0 auto"}}>
        <p style={{color:"#ef4444",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"8px",textAlign:"center"}}>Mitgliedschaft</p>
        <h2 style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"48px",textAlign:"center"}}>Wähle dein Paket</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {[
            {name:"Basic",price:"29",per:"Monat",features:["Gerätebereich","Umkleiden & Duschen","Basis-Beratung"],color:"rgba(255,255,255,0.06)",border:"rgba(255,255,255,0.08)",popular:false},
            {name:"Premium",price:"59",per:"Monat",features:["Alle Kurse inklusive","Persönlicher Trainingsplan","Sauna & Wellness","Ernährungsberatung"],color:"rgba(239,68,68,0.08)",border:"#ef4444",popular:true},
            {name:"Elite",price:"99",per:"Monat",features:["Alles aus Premium","10x Personal Training","Lifestyle Coaching","VIP Zugang 24/7"],color:"rgba(139,92,246,0.06)",border:"rgba(139,92,246,0.3)",popular:false},
          ].map(p=>(
            <div key={p.name} style={{background:p.color,border:`1px solid ${p.border}`,borderRadius:"20px",padding:"32px",position:"relative",transform:p.popular?"translateY(-8px)":"none",boxShadow:p.popular?"0 0 60px rgba(239,68,68,0.15)":"none",transition:"all 0.3s"}}
            onMouseEnter={e=>{if(!p.popular)e.currentTarget.style.transform="translateY(-4px)"}}
            onMouseLeave={e=>{if(!p.popular)e.currentTarget.style.transform="translateY(0)"}}>
              {p.popular&&<div style={{position:"absolute",top:"-1px",left:"50%",transform:"translateX(-50%)",background:"#ef4444",color:"white",fontSize:"10px",fontWeight:"700",letterSpacing:"2px",padding:"5px 14px",borderRadius:"0 0 8px 8px"}}>BELIEBT</div>}
              <div style={{fontSize:"13px",fontWeight:"700",color:"rgba(255,255,255,0.4)",marginBottom:"12px",textTransform:"uppercase",letterSpacing:"1px"}}>{p.name}</div>
              <div style={{marginBottom:"24px"}}>
                <span style={{fontSize:"52px",fontWeight:"900",letterSpacing:"-2px"}}>€{p.price}</span>
                <span style={{color:"rgba(255,255,255,0.35)",fontSize:"14px"}}>/{p.per}</span>
              </div>
              <ul style={{listStyle:"none",padding:0,marginBottom:"28px",display:"flex",flexDirection:"column",gap:"10px"}}>
                {p.features.map(f=>(
                  <li key={f} style={{fontSize:"14px",color:"rgba(255,255,255,0.55)",display:"flex",gap:"8px",alignItems:"center"}}>
                    <span style={{color:"#ef4444",fontWeight:"700"}}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <button style={{width:"100%",padding:"13px",background:p.popular?"#ef4444":"transparent",border:p.popular?"none":`1px solid rgba(255,255,255,0.15)`,borderRadius:"10px",color:"white",fontWeight:"700",fontSize:"14px",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}
              onMouseEnter={e=>{if(!p.popular)e.currentTarget.style.background="rgba(255,255,255,0.08)"}}
              onMouseLeave={e=>{if(!p.popular)e.currentTarget.style.background="transparent"}}>
                {p.popular?"Jetzt Mitglied werden":"Auswählen →"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{padding:"80px 48px",maxWidth:"700px",margin:"0 auto",textAlign:"center"}}>
        <div style={{padding:"56px",background:"rgba(239,68,68,0.05)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:"28px",backdropFilter:"blur(20px)"}}>
          <div style={{fontSize:"40px",marginBottom:"14px"}}>💪</div>
          <h2 style={{fontSize:"36px",fontWeight:"900",letterSpacing:"-1.5px",marginBottom:"12px"}}>
            Starte heute.<br/><span style={{color:"#ef4444"}}>Nicht morgen.</span>
          </h2>
          <p style={{color:"rgba(255,255,255,0.4)",marginBottom:"32px",lineHeight:"1.7"}}>Gratis Probetraining — kein Vertrag, kein Risiko.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginBottom:"24px"}}>
            <a href="tel:+49000000000" style={{padding:"14px 32px",background:"#ef4444",borderRadius:"10px",color:"white",fontWeight:"700",textDecoration:"none",fontSize:"15px"}}>📞 Jetzt anrufen</a>
            <a href="mailto:info@ironfit.de" style={{padding:"14px 32px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"white",fontWeight:"600",textDecoration:"none",fontSize:"15px"}}>✉️ E-Mail schreiben</a>
          </div>
          <p style={{color:"rgba(255,255,255,0.2)",fontSize:"12px"}}>Brückenstr. 5 · 74749 Rosenberg · Mo–Fr 6–22 Uhr · Sa–So 8–20 Uhr</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"28px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"}}>
        <span style={{fontWeight:"900",fontSize:"16px"}}>IRON<span style={{color:"#ef4444"}}>FIT</span></span>
        <div style={{display:"flex",gap:"20px"}}>
          <a href="#" style={{color:"rgba(255,255,255,0.25)",textDecoration:"none",fontSize:"13px"}}>Impressum</a>
          <a href="#" style={{color:"rgba(255,255,255,0.25)",textDecoration:"none",fontSize:"13px"}}>Datenschutz</a>
        </div>
        <div style={{textAlign:"right"}}>
          <p style={{color:"rgba(255,255,255,0.2)",fontSize:"12px"}}>Demo erstellt von</p>
          <a href="/" style={{color:"#8b5cf6",textDecoration:"none",fontWeight:"700",fontSize:"13px"}}>WebIT AI ✦</a>
        </div>
      </footer>

      <style>{`
        @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 8px #ef4444}50%{opacity:0.4;box-shadow:0 0 3px #ef4444}}
      `}</style>
    </main>
  );
}
