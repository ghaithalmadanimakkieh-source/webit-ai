// @ts-nocheck
"use client";
import { useState } from "react";

const LEISTUNGEN=[
  {icon:"🩺",title:"Vorsorge",desc:"Check-Up, Impfungen, Krebsvorsorge"},
  {icon:"💊",title:"Innere Medizin",desc:"Bluthochdruck, Diabetes, Herz"},
  {icon:"🩸",title:"Labor & Diagnostik",desc:"Blutbild, EKG, Ultraschall"},
  {icon:"🦴",title:"Orthopädie",desc:"Rücken, Gelenke, Sport"},
  {icon:"🧠",title:"Neurologie",desc:"Kopfschmerz, Schlafstörungen"},
  {icon:"👶",title:"Kindergesundheit",desc:"Vorsorge & Impfplan"},
];

export default function ArztpraxisDemo() {
  const [sent, setSent] = useState(false);
  return (
    <main className="arzt-main">
      <style>{`
        .arzt-main{min-height:100vh;background:#f0f4f8;font-family:'Segoe UI',sans-serif;color:#1a2030;overflow-x:hidden}
        .arzt-nav{background:white;box-shadow:0 2px 12px rgba(0,0,0,0.08);padding:13px 40px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
        .arzt-nav-links{display:flex;gap:20px}
        .arzt-hero{background:linear-gradient(135deg,#0c4a6e,#0284c7);color:white;padding:64px 40px;position:relative;overflow:hidden;text-align:center}
        .arzt-hero-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
        .arzt-stats{background:white;display:flex;flex-wrap:wrap;box-shadow:0 4px 20px rgba(0,0,0,0.06)}
        .arzt-stat{text-align:center;padding:18px 28px;border-right:1px solid #e2e8f0;flex:1 1 22%;min-width:70px}
        .arzt-services{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .arzt-team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .arzt-team-card{text-align:center;padding:20px;background:#f8fafc;border-radius:14px;border:1px solid #e2e8f0}
        .arzt-section{padding:50px 40px;max-width:880px;margin:0 auto}
        .arzt-team-section{background:white;padding:50px 40px}
        .arzt-contact{padding:50px 40px;max-width:520px;margin:0 auto}
        .arzt-footer{background:#0c4a6e;color:white;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
        .arzt-input{width:100%;padding:11px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;margin-bottom:12px}
        @media(max-width:768px){
          .arzt-nav{padding:12px 16px}
          .arzt-nav-links{display:none}
          .arzt-hero{padding:50px 16px}
          .arzt-hero-btns{flex-direction:column;align-items:center}
          .arzt-stat{padding:12px 8px;border-right:none;border-bottom:1px solid #e2e8f0}
          .arzt-services{grid-template-columns:1fr 1fr;gap:8px}
          .arzt-team-grid{grid-template-columns:1fr;gap:10px}
          .arzt-team-card{display:flex;align-items:center;gap:14px;text-align:left;padding:16px}
          .arzt-section{padding:40px 16px}
          .arzt-team-section{padding:40px 16px}
          .arzt-contact{padding:40px 16px}
          .arzt-footer{padding:16px}
        }
      `}</style>

      <div style={{background:"linear-gradient(135deg,#0ea5e9,#0284c7)",color:"white",textAlign:"center",padding:"9px",fontSize:"12px",fontWeight:"600"}}>
        🌐 DEMO — <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a>
      </div>

      <nav className="arzt-nav">
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"34px",height:"34px",background:"linear-gradient(135deg,#0ea5e9,#0284c7)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"}}>🏥</div>
          <div>
            <div style={{fontWeight:"800",fontSize:"15px",color:"#0284c7"}}>Dr. med. Müller</div>
            <div style={{fontSize:"10px",color:"#64748b"}}>Allgemeinmedizin · Hausarzt</div>
          </div>
        </div>
        <div className="arzt-nav-links">
          {["Leistungen","Team","Zeiten","Kontakt"].map(n=><a key={n} href="#" style={{color:"#475569",textDecoration:"none",fontSize:"13px",fontWeight:"500"}}>{n}</a>)}
        </div>
        <a href="#termin" style={{padding:"9px 14px",background:"linear-gradient(135deg,#0ea5e9,#0284c7)",color:"white",borderRadius:"8px",fontWeight:"700",fontSize:"12px",textDecoration:"none"}}>Online Termin</a>
      </nav>

      {/* HERO */}
      <section className="arzt-hero">
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 20% 50%,rgba(255,255,255,0.06),transparent 50%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1,maxWidth:"600px",margin:"0 auto"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 14px",background:"rgba(255,255,255,0.12)",borderRadius:"100px",fontSize:"10px",fontWeight:"600",marginBottom:"14px"}}>
            <span style={{width:"6px",height:"6px",background:"#4ade80",borderRadius:"50%",display:"inline-block"}}/>Neue Patienten willkommen
          </div>
          <h1 style={{fontSize:"clamp(26px,6vw,50px)",fontWeight:"900",lineHeight:"1.1",marginBottom:"12px"}}>Ihre Gesundheit<br/>in besten Händen</h1>
          <p style={{opacity:0.75,fontSize:"15px",lineHeight:"1.7",marginBottom:"24px"}}>Moderne Medizin mit persönlicher Betreuung — Hausarztpraxis Dr. Müller.</p>
          <div className="arzt-hero-btns">
            <a href="#termin" style={{padding:"12px 26px",background:"white",color:"#0284c7",fontWeight:"700",borderRadius:"10px",textDecoration:"none",fontSize:"14px"}}>📅 Online Termin</a>
            <a href="tel:+4907123456789" style={{padding:"12px 26px",background:"rgba(255,255,255,0.12)",color:"white",fontWeight:"600",borderRadius:"10px",textDecoration:"none",fontSize:"14px",border:"1px solid rgba(255,255,255,0.25)"}}>📞 Anrufen</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="arzt-stats">
        {[{n:"2.500+",l:"Patienten"},{n:"15 J.",l:"Erfahrung"},{n:"4.9★",l:"Bewertung"},{n:"Mo–Sa",l:"Geöffnet"}].map((s,i)=>(
          <div key={i} className="arzt-stat">
            <div style={{fontSize:"clamp(16px,3vw,22px)",fontWeight:"900",color:"#0284c7"}}>{s.n}</div>
            <div style={{fontSize:"11px",color:"#64748b",marginTop:"2px"}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* LEISTUNGEN */}
      <section className="arzt-section">
        <h2 style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:"800",textAlign:"center",marginBottom:"6px"}}>Unsere Leistungen</h2>
        <p style={{color:"#64748b",textAlign:"center",marginBottom:"24px",fontSize:"13px"}}>Umfassende medizinische Versorgung aus einer Hand</p>
        <div className="arzt-services">
          {LEISTUNGEN.map(l=>(
            <div key={l.title} style={{background:"white",borderRadius:"12px",padding:"18px",boxShadow:"0 2px 10px rgba(0,0,0,0.05)",border:"1px solid #e2e8f0",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 10px 28px rgba(2,132,199,0.1)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 10px rgba(0,0,0,0.05)"}}>
              <div style={{fontSize:"24px",marginBottom:"7px"}}>{l.icon}</div>
              <div style={{fontWeight:"700",marginBottom:"4px",color:"#0f172a",fontSize:"13px"}}>{l.title}</div>
              <div style={{fontSize:"11px",color:"#64748b",lineHeight:"1.5"}}>{l.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="arzt-team-section">
        <div style={{maxWidth:"880px",margin:"0 auto"}}>
          <h2 style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:"800",textAlign:"center",marginBottom:"6px"}}>Unser Team</h2>
          <p style={{color:"#64748b",textAlign:"center",marginBottom:"24px",fontSize:"13px"}}>Erfahren, einfühlsam, für Sie da</p>
          <div className="arzt-team-grid">
            {[{name:"Dr. med. Klaus Müller",role:"Facharzt Allgemeinmedizin",emoji:"👨‍⚕️",color:"#0284c7"},{name:"Dr. med. Sarah Weber",role:"Innere Medizin",emoji:"👩‍⚕️",color:"#7c3aed"},{name:"Anna Schneider",role:"Med. Fachangestellte",emoji:"👩‍💼",color:"#059669"}].map(t=>(
              <div key={t.name} className="arzt-team-card">
                <div style={{width:"60px",height:"60px",flexShrink:0,background:`${t.color}18`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"26px",margin:"0 auto 10px"}}>{t.emoji}</div>
                <div style={{fontWeight:"700",fontSize:"14px",marginBottom:"3px"}}>{t.name}</div>
                <div style={{fontSize:"12px",color:"#64748b"}}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMIN */}
      <section id="termin" className="arzt-contact">
        <h2 style={{fontSize:"clamp(22px,4vw,28px)",fontWeight:"800",textAlign:"center",marginBottom:"6px"}}>Termin online buchen</h2>
        <p style={{color:"#64748b",textAlign:"center",marginBottom:"20px",fontSize:"13px"}}>Schnell & einfach — ohne Warteschleife</p>
        {sent?(
          <div style={{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:"14px",padding:"28px",textAlign:"center"}}>
            <div style={{fontSize:"36px",marginBottom:"8px"}}>✅</div>
            <h3 style={{fontWeight:"700",color:"#166534",marginBottom:"4px"}}>Anfrage gesendet!</h3>
            <p style={{color:"#15803d",fontSize:"13px"}}>Wir melden uns innerhalb von 24h.</p>
          </div>
        ):(
          <div style={{background:"white",borderRadius:"14px",padding:"24px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)"}}>
            <input className="arzt-input" placeholder="Name"/>
            <input className="arzt-input" placeholder="Telefon" type="tel"/>
            <input className="arzt-input" placeholder="E-Mail" type="email"/>
            <select className="arzt-input" style={{background:"white",color:"#374151",cursor:"pointer"}}>
              {["Erstuntersuchung","Folgerezept","Vorsorge","Krankmeldung","Sonstiges"].map(o=><option key={o}>{o}</option>)}
            </select>
            <button onClick={()=>setSent(true)} style={{width:"100%",padding:"13px",background:"linear-gradient(135deg,#0ea5e9,#0284c7)",color:"white",fontWeight:"700",fontSize:"14px",borderRadius:"10px",border:"none",cursor:"pointer"}}>📅 Termin anfragen</button>
          </div>
        )}
      </section>

      <footer className="arzt-footer">
        <span style={{fontSize:"13px",opacity:0.7}}>© 2026 Dr. Müller</span>
        <span style={{fontSize:"12px",opacity:0.6}}>Demo von <a href="https://webit-ai.de" style={{color:"#7dd3fc"}}>WebIT AI</a></span>
      </footer>
    </main>
  );
}