// @ts-nocheck
"use client";
import { useState } from "react";

const KURSE=[
  {name:"HIIT Inferno",time:"06:00 & 18:00",level:"Intensiv",color:"#ef4444",spots:3},
  {name:"Yoga Flow",time:"08:00 & 20:00",level:"Alle Level",color:"#8b5cf6",spots:8},
  {name:"Powerlifting",time:"07:00 & 17:00",level:"Fortgeschr.",color:"#f59e0b",spots:5},
  {name:"Cardio Blast",time:"09:00 & 19:00",level:"Mittel",color:"#10b981",spots:12},
  {name:"Body Pump",time:"10:00 & 18:30",level:"Alle Level",color:"#06b6d4",spots:6},
  {name:"Stretching",time:"07:30 & 21:00",level:"Einsteiger",color:"#ec4899",spots:15},
];

export default function FitnessDemo() {
  const [tab, setTab] = useState("Mo–Fr");
  const [sent, setSent] = useState(false);
  return (
    <main className="fit-main">
      <style>{`
        .fit-main{min-height:100vh;background:#080810;color:white;font-family:'Segoe UI',sans-serif;overflow-x:hidden}
        .fit-banner{background:linear-gradient(90deg,#ef4444,#8b5cf6);padding:9px;text-align:center;font-size:12px;font-weight:700}
        .fit-nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:13px 48px;background:rgba(8,8,16,0.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(239,68,68,0.15)}
        .fit-nav-links{display:flex;gap:24px}
        .fit-hero{padding:70px 48px;position:relative;overflow:hidden}
        .fit-h1{font-size:clamp(48px,7vw,90px);font-weight:900;line-height:0.95;letter-spacing:-3px;margin-bottom:18px}
        .fit-stats{display:flex;gap:36px;margin-top:36px;flex-wrap:wrap}
        .fit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .fit-grid-2{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .fit-preise{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .fit-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:20px;position:relative;overflow:hidden}
        .fit-trainer{display:flex;align-items:center;gap:14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:18px;padding:18px}
        .fit-preis-card{border-radius:18px;padding:26px;position:relative}
        .fit-cta{display:flex;gap:10px;flex-wrap:wrap}
        .fit-btns{display:flex;gap:10px;justify-content:center}
        .fit-section{padding:50px 48px;max-width:1100px;margin:0 auto}
        .fit-contact{padding:50px 48px;max-width:560px;margin:0 auto;text-align:center}
        .fit-footer{border-top:1px solid rgba(255,255,255,0.05);padding:18px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
        @media(max-width:768px){
          .fit-nav{padding:12px 16px}
          .fit-nav-links{display:none}
          .fit-hero{padding:50px 16px}
          .fit-h1{font-size:clamp(34px,9vw,48px);letter-spacing:-2px}
          .fit-stats{gap:18px}
          .fit-grid{grid-template-columns:1fr 1fr;gap:8px}
          .fit-grid-2{grid-template-columns:1fr;gap:10px}
          .fit-preise{grid-template-columns:1fr;gap:10px}
          .fit-card{padding:14px}
          .fit-section{padding:40px 16px}
          .fit-contact{padding:40px 16px}
          .fit-footer{padding:16px}
          .fit-cta{flex-direction:column}
          .fit-btns{flex-direction:column}
        }
        @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 8px #ef4444}50%{opacity:0.4}}
      `}</style>

      <div className="fit-banner">
        🎨 DEMO — <a href="https://webit-ai.de" style={{color:"white",textDecoration:"underline"}}>WebIT AI</a>
      </div>

      <nav className="fit-nav">
        <span style={{fontSize:"18px",fontWeight:"900"}}>IRON<span style={{color:"#ef4444"}}>FIT</span></span>
        <div className="fit-nav-links">
          {["Kurse","Trainer","Preise","Kontakt"].map(n=><a key={n} href="#" style={{color:"rgba(255,255,255,0.45)",textDecoration:"none",fontSize:"14px"}}>{n}</a>)}
        </div>
        <a href="#kontakt" style={{padding:"9px 16px",background:"#ef4444",borderRadius:"8px",color:"white",fontWeight:"700",fontSize:"13px",textDecoration:"none"}}>Probetraining</a>
      </nav>

      {/* HERO */}
      <section className="fit-hero">
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 50%,rgba(239,68,68,0.12),transparent 60%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:"680px",position:"relative",zIndex:1}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 14px",background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.25)",borderRadius:"100px",fontSize:"10px",color:"#fca5a5",fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"16px"}}>
            <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#ef4444",display:"inline-block",animation:"pulse 2s infinite"}}/>Premium Fitnessstudio
          </div>
          <h1 className="fit-h1">Kein Schmerz,<br/><span style={{color:"#ef4444"}}>kein Erfolg.</span></h1>
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:"15px",maxWidth:"460px",lineHeight:"1.7",marginBottom:"26px"}}>
            Professionelle Trainer, modernste Geräte und Kurse für jedes Level.
          </p>
          <div className="fit-cta">
            <a href="#kontakt" style={{padding:"13px 28px",background:"#ef4444",borderRadius:"10px",color:"white",fontWeight:"700",fontSize:"15px",textDecoration:"none",boxShadow:"0 8px 28px rgba(239,68,68,0.35)"}}>🔥 Gratis Probetraining</a>
            <a href="#kurse" style={{padding:"13px 28px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"white",fontWeight:"600",fontSize:"15px",textDecoration:"none"}}>Kurse ansehen ↓</a>
          </div>
          <div className="fit-stats">
            {[{n:"1.240+",l:"Mitglieder"},{n:"24",l:"Trainer"},{n:"8 J.",l:"Erfahrung"},{n:"6–22",l:"Öffnungszeit"}].map((s,i)=>(
              <div key={i}><div style={{fontSize:"24px",fontWeight:"900",color:"#ef4444",letterSpacing:"-1px"}}>{s.n}</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.3)",marginTop:"2px"}}>{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* KURSE */}
      <section id="kurse" className="fit-section">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"22px",flexWrap:"wrap",gap:"12px"}}>
          <div>
            <p style={{color:"#ef4444",fontSize:"10px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"4px"}}>Stundenplan</p>
            <h2 style={{fontSize:"clamp(22px,4vw,36px)",fontWeight:"900",letterSpacing:"-1px"}}>Unsere Kurse</h2>
          </div>
          <div style={{display:"flex",gap:"4px",background:"rgba(255,255,255,0.04)",padding:"4px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.07)"}}>
            {["Mo–Fr","Wochenende"].map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:"7px 14px",borderRadius:"7px",background:tab===t?"#ef4444":"transparent",color:tab===t?"white":"rgba(255,255,255,0.4)",fontWeight:"600",fontSize:"12px",border:"none",cursor:"pointer",fontFamily:"inherit"}}>{t}</button>)}
          </div>
        </div>
        <div className="fit-grid">
          {KURSE.map((k,i)=>(
            <div key={i} className="fit-card">
              <div style={{position:"absolute",top:0,right:0,width:"40px",height:"40px",background:`radial-gradient(circle at 100% 0%,${k.color}25,transparent 70%)`,borderRadius:"0 14px 0 0"}}/>
              <h3 style={{fontSize:"13px",fontWeight:"700",marginBottom:"4px"}}>{k.name}</h3>
              <span style={{fontSize:"10px",padding:"2px 7px",background:k.color+"20",borderRadius:"100px",color:k.color,fontWeight:"600",display:"inline-block",marginBottom:"6px"}}>{k.level}</span>
              <div style={{color:"rgba(255,255,255,0.4)",fontSize:"11px",marginBottom:"8px"}}>⏰ {k.time}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:"10px",color:k.spots<=5?"#ef4444":"rgba(255,255,255,0.3)"}}>{k.spots} frei</span>
                <button style={{padding:"4px 10px",background:k.color,borderRadius:"6px",color:"white",fontWeight:"600",fontSize:"11px",border:"none",cursor:"pointer"}}>Buchen</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINER */}
      <section className="fit-section">
        <p style={{color:"#ef4444",fontSize:"10px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"6px"}}>Team</p>
        <h2 style={{fontSize:"clamp(22px,4vw,36px)",fontWeight:"900",letterSpacing:"-1px",marginBottom:"22px"}}>Professionelle Trainer</h2>
        <div className="fit-grid-2">
          {[{name:"Marco R.",spec:"Powerlifting & Kraft",exp:"8 Jahre",emoji:"💪"},{name:"Sarah M.",spec:"Yoga & Wellness",exp:"6 Jahre",emoji:"🧘"},{name:"Alex K.",spec:"HIIT & Cardio",exp:"5 Jahre",emoji:"⚡"}].map((t,i)=>(
            <div key={i} className="fit-trainer">
              <div style={{width:"56px",height:"56px",flexShrink:0,borderRadius:"50%",background:"linear-gradient(135deg,#ef4444,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px"}}>{t.emoji}</div>
              <div><div style={{fontWeight:"700",fontSize:"15px",marginBottom:"3px"}}>{t.name}</div><div style={{color:"#ef4444",fontSize:"12px",marginBottom:"2px"}}>{t.spec}</div><div style={{color:"rgba(255,255,255,0.3)",fontSize:"11px"}}>{t.exp}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* PREISE */}
      <section className="fit-section">
        <p style={{color:"#ef4444",fontSize:"10px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"6px",textAlign:"center"}}>Mitgliedschaft</p>
        <h2 style={{fontSize:"clamp(22px,4vw,36px)",fontWeight:"900",letterSpacing:"-1px",marginBottom:"26px",textAlign:"center"}}>Wähle dein Paket</h2>
        <div className="fit-preise">
          {[
            {name:"Basic",price:"29",features:["Gerätebereich","Umkleiden","Basis-Beratung"],ac:"rgba(255,255,255,0.04)",bc:"rgba(255,255,255,0.08)",pop:false},
            {name:"Premium",price:"59",features:["Alle Kurse inklusive","Persönl. Trainingsplan","Sauna & Wellness","Ernährungsberatung"],ac:"rgba(239,68,68,0.07)",bc:"#ef4444",pop:true},
            {name:"Elite",price:"99",features:["Alles aus Premium","10x Personal Training","Lifestyle Coaching","VIP Zugang 24/7"],ac:"rgba(139,92,246,0.06)",bc:"rgba(139,92,246,0.3)",pop:false},
          ].map(pr=>(
            <div key={pr.name} className="fit-preis-card" style={{background:pr.ac,border:`1px solid ${pr.bc}`,boxShadow:pr.pop?"0 0 48px rgba(239,68,68,0.12)":"none",position:"relative"}}>
              {pr.pop&&<div style={{position:"absolute",top:"-1px",left:"50%",transform:"translateX(-50%)",background:"#ef4444",color:"white",fontSize:"9px",fontWeight:"700",letterSpacing:"2px",padding:"4px 12px",borderRadius:"0 0 8px 8px"}}>BELIEBT</div>}
              <div style={{fontSize:"11px",fontWeight:"700",color:"rgba(255,255,255,0.4)",marginBottom:"8px",textTransform:"uppercase"}}>{pr.name}</div>
              <div style={{marginBottom:"16px"}}><span style={{fontSize:"42px",fontWeight:"900",letterSpacing:"-1px"}}>€{pr.price}</span><span style={{color:"rgba(255,255,255,0.35)",fontSize:"12px"}}>/Monat</span></div>
              <ul style={{listStyle:"none",padding:0,marginBottom:"18px",display:"flex",flexDirection:"column",gap:"7px"}}>
                {pr.features.map(f=><li key={f} style={{fontSize:"13px",color:"rgba(255,255,255,0.55)",display:"flex",gap:"8px"}}><span style={{color:"#ef4444"}}>✓</span>{f}</li>)}
              </ul>
              <button style={{width:"100%",padding:"11px",background:pr.pop?"#ef4444":"transparent",border:pr.pop?"none":"1px solid rgba(255,255,255,0.12)",borderRadius:"10px",color:"white",fontWeight:"700",fontSize:"13px",cursor:"pointer",fontFamily:"inherit"}}>{pr.pop?"Jetzt Mitglied werden":"Auswählen →"}</button>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="fit-contact">
        <div style={{padding:"32px 24px",background:"rgba(239,68,68,0.05)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:"20px"}}>
          <div style={{fontSize:"36px",marginBottom:"10px"}}>💪</div>
          <h2 style={{fontSize:"clamp(20px,5vw,30px)",fontWeight:"900",letterSpacing:"-1px",marginBottom:"8px"}}>Starte heute.<br/><span style={{color:"#ef4444"}}>Nicht morgen.</span></h2>
          <p style={{color:"rgba(255,255,255,0.4)",marginBottom:"20px",fontSize:"13px"}}>Gratis Probetraining — kein Vertrag, kein Risiko.</p>
          {sent?<div style={{color:"#ef4444",fontWeight:"700"}}>✓ Anfrage gesendet!</div>:(
            <div className="fit-btns">
              <a href="tel:+49000000000" style={{padding:"12px 22px",background:"#ef4444",borderRadius:"10px",color:"white",fontWeight:"700",textDecoration:"none",fontSize:"14px"}}>📞 Jetzt anrufen</a>
              <button onClick={()=>setSent(true)} style={{padding:"12px 22px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"white",fontWeight:"600",fontSize:"14px",cursor:"pointer",fontFamily:"inherit"}}>✉️ Termin anfragen</button>
            </div>
          )}
        </div>
      </section>

      <footer className="fit-footer">
        <span style={{fontWeight:"900"}}>IRON<span style={{color:"#ef4444"}}>FIT</span></span>
        <span style={{color:"rgba(255,255,255,0.2)",fontSize:"12px"}}>Demo von <a href="https://webit-ai.de" style={{color:"#8b5cf6"}}>WebIT AI</a></span>
      </footer>
    </main>
  );
}