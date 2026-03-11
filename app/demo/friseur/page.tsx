// @ts-nocheck
"use client";
import { useState } from "react";

const SERVICES=[
  {name:"Herrenschnitt",price:"35",dur:"45 min",emoji:"✂️",desc:"Schnitt, Waschen & Stylen"},
  {name:"Damenschnitt",price:"55",dur:"60 min",emoji:"💇",desc:"Schnitt, Föhnen & Finish"},
  {name:"Colorierung",price:"85",dur:"120 min",emoji:"🎨",desc:"Color, Highlights, Balayage"},
  {name:"Bart-Trim",price:"20",dur:"30 min",emoji:"🪒",desc:"Trimmen, Formen & Pflegen"},
  {name:"Keratin",price:"120",dur:"180 min",emoji:"✨",desc:"Glättungsbehandlung"},
  {name:"Hochzeit",price:"150",dur:"90 min",emoji:"💍",desc:"Brautfrisur & Probe-Termin"},
];
const TEAM=[
  {name:"Isabella V.",role:"Senior Stylistin · 12 J.",emoji:"👩‍🦱",color:"#ec4899"},
  {name:"Marco B.",role:"Barber & Stylist · 8 J.",emoji:"💈",color:"#8b5cf6"},
  {name:"Lea S.",role:"Coloristin · 6 J.",emoji:"🎨",color:"#f59e0b"},
];

export default function FriseurDemo() {
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  return (
    <main className="fris-main">
      <style>{`
        .fris-main{min-height:100vh;background:#fafaf9;font-family:'Segoe UI',sans-serif;color:#1a1a2e;overflow-x:hidden}
        .fris-nav{background:white;box-shadow:0 1px 14px rgba(0,0,0,0.07);padding:13px 48px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
        .fris-nav-links{display:flex;gap:22px}
        .fris-hero{background:linear-gradient(135deg,#1a1a2e,#2d1b69);color:white;padding:72px 48px;position:relative;overflow:hidden}
        .fris-h1{font-size:clamp(36px,6vw,66px);font-weight:900;line-height:1;letter-spacing:-2px;margin-bottom:16px}
        .fris-cta{display:flex;gap:10px;flex-wrap:wrap}
        .fris-stats{display:flex;gap:28px;margin-top:28px;flex-wrap:wrap}
        .fris-services{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .fris-team{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .fris-section{padding:50px 48px;max-width:960px;margin:0 auto}
        .fris-team-section{background:#f8f7ff;padding:50px 48px}
        .fris-contact{padding:50px 48px;max-width:500px;margin:0 auto}
        .fris-footer{background:#1a1a2e;padding:18px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
        .fris-input{width:100%;padding:11px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;margin-bottom:12px}
        @media(max-width:768px){
          .fris-nav{padding:12px 16px}
          .fris-nav-links{display:none}
          .fris-hero{padding:52px 16px}
          .fris-h1{font-size:clamp(30px,9vw,44px);letter-spacing:-1px}
          .fris-cta{flex-direction:column}
          .fris-stats{gap:16px}
          .fris-services{grid-template-columns:1fr 1fr;gap:8px}
          .fris-team{grid-template-columns:1fr;gap:10px}
          .fris-section{padding:40px 16px}
          .fris-team-section{padding:40px 16px}
          .fris-contact{padding:40px 16px}
          .fris-footer{padding:16px}
        }
      `}</style>

      <div style={{background:"linear-gradient(90deg,#1a1a2e,#2d1b69)",color:"white",padding:"9px",textAlign:"center",fontSize:"12px",fontWeight:"600"}}>
        🎨 DEMO — <a href="https://webit-ai.de" style={{color:"white",textDecoration:"underline"}}>WebIT AI</a>
      </div>

      <nav className="fris-nav">
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"32px",height:"32px",background:"linear-gradient(135deg,#1a1a2e,#8b5cf6)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",color:"white"}}>✂️</div>
          <div>
            <div style={{fontWeight:"800",fontSize:"15px",color:"#1a1a2e"}}>Studio Élite</div>
            <div style={{fontSize:"10px",color:"#94a3b8",letterSpacing:"1px"}}>PREMIUM FRISEUR</div>
          </div>
        </div>
        <div className="fris-nav-links">
          {["Leistungen","Team","Preise","Kontakt"].map(n=><a key={n} href="#" style={{color:"#64748b",textDecoration:"none",fontSize:"13px",fontWeight:"500"}}>{n}</a>)}
        </div>
        <a href="#termin" style={{padding:"9px 16px",background:"linear-gradient(135deg,#1a1a2e,#8b5cf6)",color:"white",borderRadius:"8px",fontWeight:"700",fontSize:"12px",textDecoration:"none"}}>Termin buchen</a>
      </nav>

      {/* HERO */}
      <section className="fris-hero">
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 80% 50%,rgba(139,92,246,0.15),transparent 50%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:"580px",position:"relative",zIndex:1}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 14px",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"100px",fontSize:"10px",color:"rgba(255,255,255,0.7)",fontWeight:"600",letterSpacing:"2px",marginBottom:"16px"}}>
            ✦ PREMIUM HAARSTUDIO · SEIT 2012
          </div>
          <h1 className="fris-h1">Dein Haar.<br/><span style={{background:"linear-gradient(135deg,#c4b5fd,#f9a8d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Dein Statement.</span></h1>
          <p style={{opacity:0.6,fontSize:"15px",lineHeight:"1.8",marginBottom:"26px",maxWidth:"400px"}}>Modernste Techniken, Premium-Produkte und ein Team das dich wirklich sieht.</p>
          <div className="fris-cta">
            <a href="#termin" style={{padding:"13px 26px",background:"white",color:"#1a1a2e",fontWeight:"700",borderRadius:"8px",textDecoration:"none",fontSize:"14px"}}>📅 Termin buchen</a>
            <a href="#leistungen" style={{padding:"13px 26px",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.2)",color:"white",fontWeight:"600",borderRadius:"8px",textDecoration:"none",fontSize:"14px"}}>Leistungen ↓</a>
          </div>
          <div className="fris-stats">
            {[{n:"500+",l:"Stammkunden"},{n:"12 J.",l:"Erfahrung"},{n:"4.9★",l:"Bewertung"},{n:"Mo–Sa",l:"Geöffnet"}].map((s,i)=>(
              <div key={i}><div style={{fontSize:"20px",fontWeight:"900",color:"#c4b5fd"}}>{s.n}</div><div style={{fontSize:"10px",opacity:0.4,marginTop:"2px"}}>{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="fris-section">
        <p style={{color:"#8b5cf6",fontSize:"10px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"6px",textAlign:"center"}}>Services</p>
        <h2 style={{fontSize:"clamp(22px,4vw,34px)",fontWeight:"800",marginBottom:"24px",textAlign:"center"}}>Unsere Leistungen</h2>
        <div className="fris-services">
          {SERVICES.map((s,i)=>(
            <div key={i} onClick={()=>setActive(i)}
              style={{background:active===i?"linear-gradient(135deg,#1a1a2e,#2d1b69)":"white",border:`1px solid ${active===i?"transparent":"#e2e8f0"}`,borderRadius:"14px",padding:"18px",cursor:"pointer",transition:"all 0.3s",boxShadow:active===i?"0 12px 36px rgba(139,92,246,0.2)":"0 2px 8px rgba(0,0,0,0.04)"}}>
              <div style={{fontSize:"26px",marginBottom:"7px"}}>{s.emoji}</div>
              <div style={{fontWeight:"700",fontSize:"13px",marginBottom:"3px",color:active===i?"white":"#1a1a2e"}}>{s.name}</div>
              <div style={{fontSize:"11px",color:active===i?"rgba(255,255,255,0.45)":"#94a3b8",marginBottom:"7px",lineHeight:"1.4"}}>{s.desc}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontWeight:"900",fontSize:"15px",color:active===i?"#c4b5fd":"#8b5cf6"}}>ab €{s.price}</span>
                <span style={{fontSize:"10px",color:active===i?"rgba(255,255,255,0.35)":"#94a3b8"}}>{s.dur}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="fris-team-section">
        <div style={{maxWidth:"960px",margin:"0 auto"}}>
          <p style={{color:"#8b5cf6",fontSize:"10px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"6px",textAlign:"center"}}>Unser Team</p>
          <h2 style={{fontSize:"clamp(22px,4vw,34px)",fontWeight:"800",marginBottom:"24px",textAlign:"center"}}>Deine Stylisten</h2>
          <div className="fris-team">
            {TEAM.map((t,i)=>(
              <div key={i} style={{background:"white",borderRadius:"14px",padding:"18px 20px",boxShadow:"0 2px 12px rgba(0,0,0,0.05)",display:"flex",alignItems:"center",gap:"14px"}}>
                <div style={{width:"54px",height:"54px",flexShrink:0,borderRadius:"50%",background:`${t.color}18`,border:`2px solid ${t.color}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"}}>{t.emoji}</div>
                <div><div style={{fontWeight:"700",fontSize:"14px",marginBottom:"3px"}}>{t.name}</div><div style={{fontSize:"12px",color:"#64748b"}}>{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMIN */}
      <section id="termin" className="fris-contact">
        <p style={{color:"#8b5cf6",fontSize:"10px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"6px",textAlign:"center"}}>Buchung</p>
        <h2 style={{fontSize:"clamp(22px,4vw,28px)",fontWeight:"800",marginBottom:"22px",textAlign:"center"}}>Termin vereinbaren</h2>
        {sent?(
          <div style={{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:"14px",padding:"28px",textAlign:"center"}}>
            <div style={{fontSize:"36px",marginBottom:"8px"}}>✅</div>
            <h3 style={{fontWeight:"700",color:"#166534",marginBottom:"4px"}}>Termin angefragt!</h3>
            <p style={{color:"#15803d",fontSize:"13px"}}>Wir bestätigen innerhalb von 24h.</p>
          </div>
        ):(
          <div style={{background:"white",borderRadius:"14px",padding:"24px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)"}}>
            {["Dein Name","Telefon oder E-Mail","Gewünschte Leistung"].map((ph,i)=>(
              <input key={i} className="fris-input" placeholder={ph}/>
            ))}
            <select className="fris-input" style={{background:"white",color:"#374151",cursor:"pointer"}}>
              {["Nächstmöglicher Termin","Morgen Vormittag","Morgen Nachmittag","Nächste Woche"].map(o=><option key={o}>{o}</option>)}
            </select>
            <button onClick={()=>setSent(true)} style={{width:"100%",padding:"13px",background:"linear-gradient(135deg,#1a1a2e,#8b5cf6)",color:"white",fontWeight:"700",fontSize:"14px",borderRadius:"10px",border:"none",cursor:"pointer"}}>📅 Termin anfragen</button>
          </div>
        )}
      </section>

      <footer className="fris-footer">
        <span style={{color:"white",fontWeight:"700",fontSize:"14px"}}>Studio Élite</span>
        <span style={{color:"rgba(255,255,255,0.3)",fontSize:"12px"}}>Demo von <a href="https://webit-ai.de" style={{color:"#c4b5fd"}}>WebIT AI</a></span>
      </footer>
    </main>
  );
}