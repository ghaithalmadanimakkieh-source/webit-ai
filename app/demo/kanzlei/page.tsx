// @ts-nocheck
"use client";
import { useState } from "react";

const GEBIETE=[
  {icon:"⚖️",title:"Zivilrecht",desc:"Verträge, Schadensersatz, allg. Zivilrecht"},
  {icon:"🏢",title:"Gesellschaftsrecht",desc:"GmbH, AG, Unternehmenstransaktionen"},
  {icon:"👨‍👩‍👧",title:"Familienrecht",desc:"Scheidung, Unterhalt, Sorgerecht"},
  {icon:"🏠",title:"Immobilienrecht",desc:"Kauf, Miete, Baurecht, WEG"},
  {icon:"💼",title:"Arbeitsrecht",desc:"Kündigung, Abfindung, Arbeitsvertrag"},
  {icon:"🛡️",title:"Strafrecht",desc:"Verteidigung in Strafverfahren"},
];

export default function KanzleiDemo() {
  const [sent, setSent] = useState(false);
  return (
    <main className="kanz-main">
      <style>{`
        .kanz-main{min-height:100vh;background:#0f0e0a;font-family:'Georgia',serif;color:#e8e0d0;overflow-x:hidden}
        .kanz-nav{padding:13px 56px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(248,231,188,0.1);background:rgba(15,14,10,0.97);position:sticky;top:0;z-index:100}
        .kanz-nav-links{display:flex;gap:24px;font-family:'Segoe UI',sans-serif}
        .kanz-hero{padding:84px 56px;position:relative;overflow:hidden;border-bottom:1px solid rgba(248,231,188,0.08)}
        .kanz-h1{font-size:clamp(28px,5vw,58px);font-weight:400;line-height:1.15;letter-spacing:-1px;margin-bottom:16px;color:#f0e8d8}
        .kanz-cta{display:flex;gap:12px;font-family:'Segoe UI',sans-serif;flex-wrap:wrap}
        .kanz-stats{display:flex;border-bottom:1px solid rgba(248,231,188,0.08);flex-wrap:wrap}
        .kanz-stat{flex:1 1 22%;min-width:70px;padding:24px 28px;border-right:1px solid rgba(248,231,188,0.08);text-align:center}
        .kanz-gebiete{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(248,231,188,0.08)}
        .kanz-gebiet{padding:26px 22px;background:#0f0e0a;transition:all 0.2s;cursor:pointer}
        .kanz-section{padding:50px 56px}
        .kanz-contact{padding:50px 56px;max-width:540px}
        .kanz-footer{border-top:1px solid rgba(248,231,188,0.08);padding:18px 56px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-family:'Segoe UI',sans-serif}
        @media(max-width:768px){
          .kanz-nav{padding:12px 16px}
          .kanz-nav-links{display:none}
          .kanz-hero{padding:50px 16px}
          .kanz-h1{font-size:clamp(26px,8vw,40px);letter-spacing:-0.5px}
          .kanz-cta{flex-direction:column}
          .kanz-stat{padding:14px 10px;border-right:none;border-bottom:1px solid rgba(248,231,188,0.08)}
          .kanz-gebiete{grid-template-columns:1fr 1fr}
          .kanz-gebiet{padding:18px 14px}
          .kanz-section{padding:40px 16px}
          .kanz-contact{padding:40px 16px}
          .kanz-footer{padding:16px}
        }
      `}</style>

      <div style={{background:"linear-gradient(135deg,#f97316,#ea580c)",color:"white",textAlign:"center",padding:"9px",fontSize:"12px",fontWeight:"600",fontFamily:"'Segoe UI',sans-serif"}}>
        🌐 DEMO — <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a>
      </div>

      <nav className="kanz-nav">
        <div>
          <div style={{fontWeight:"700",fontSize:"clamp(13px,2.5vw,17px)",letterSpacing:"1px",color:"#f8e5a0",fontFamily:"'Segoe UI',sans-serif"}}>WEBER & PARTNER</div>
          <div style={{fontSize:"9px",letterSpacing:"3px",color:"rgba(248,229,160,0.35)",fontFamily:"'Segoe UI',sans-serif"}}>RECHTSANWÄLTE · NOTARE</div>
        </div>
        <div className="kanz-nav-links">
          {["Rechtsgebiete","Team","Kanzlei","Kontakt"].map(n=><a key={n} href="#" style={{color:"rgba(232,224,208,0.45)",textDecoration:"none",fontSize:"12px",letterSpacing:"1px"}}>{n}</a>)}
        </div>
        <a href="#kontakt" style={{padding:"8px 14px",border:"1px solid #f8e5a0",color:"#f8e5a0",fontSize:"11px",letterSpacing:"1px",textDecoration:"none",fontFamily:"'Segoe UI',sans-serif",fontWeight:"600"}}>ERSTBERATUNG</a>
      </nav>

      {/* HERO */}
      <section className="kanz-hero">
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(ellipse at 80% 50%,rgba(249,115,22,0.06),transparent 60%)"}}/>
        <div style={{maxWidth:"620px",position:"relative",zIndex:1}}>
          <div style={{fontSize:"10px",letterSpacing:"4px",color:"#f8e5a0",fontFamily:"'Segoe UI',sans-serif",marginBottom:"16px",opacity:0.5,textTransform:"uppercase"}}>Seit 1998 · München</div>
          <h1 className="kanz-h1">Recht verstehen.<br/><em style={{color:"#f8e5a0"}}>Ihr Recht vertreten.</em></h1>
          <p style={{color:"rgba(232,224,208,0.45)",fontSize:"15px",lineHeight:"1.9",maxWidth:"480px",marginBottom:"28px",fontFamily:"'Segoe UI',sans-serif"}}>
            Wir stehen auf Ihrer Seite — mit Erfahrung, Präzision und dem Willen, Ihre Interessen durchzusetzen.
          </p>
          <div className="kanz-cta">
            <a href="#kontakt" style={{padding:"12px 26px",background:"#f8e5a0",color:"#0f0e0a",fontWeight:"700",fontSize:"13px",letterSpacing:"1px",textDecoration:"none"}}>JETZT ANFRAGEN</a>
            <a href="#gebiete" style={{padding:"12px 26px",border:"1px solid rgba(248,229,160,0.25)",color:"rgba(248,229,160,0.6)",fontSize:"13px",letterSpacing:"1px",textDecoration:"none"}}>RECHTSGEBIETE ↓</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="kanz-stats">
        {[{n:"25+",l:"Jahre"},{n:"3.000+",l:"Mandate"},{n:"98%",l:"Erfolg"},{n:"8",l:"Anwälte"}].map((s,i)=>(
          <div key={i} className="kanz-stat">
            <div style={{fontSize:"clamp(18px,3vw,28px)",fontWeight:"300",color:"#f8e5a0",letterSpacing:"-1px"}}>{s.n}</div>
            <div style={{fontSize:"10px",color:"rgba(232,224,208,0.3)",marginTop:"4px",letterSpacing:"1px",fontFamily:"'Segoe UI',sans-serif",textTransform:"uppercase"}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* RECHTSGEBIETE */}
      <section id="gebiete" className="kanz-section">
        <div style={{fontSize:"10px",letterSpacing:"4px",color:"rgba(248,229,160,0.35)",fontFamily:"'Segoe UI',sans-serif",marginBottom:"12px",textTransform:"uppercase"}}>Rechtsgebiete</div>
        <h2 style={{fontSize:"clamp(22px,4vw,36px)",fontWeight:"400",marginBottom:"24px",color:"#f0e8d8"}}>Unsere Expertise</h2>
        <div className="kanz-gebiete">
          {GEBIETE.map(g=>(
            <div key={g.title} className="kanz-gebiet"
            onMouseEnter={e=>e.currentTarget.style.background="#1a1812"}
            onMouseLeave={e=>e.currentTarget.style.background="#0f0e0a"}>
              <div style={{fontSize:"clamp(18px,3vw,22px)",marginBottom:"8px"}}>{g.icon}</div>
              <div style={{fontWeight:"600",fontSize:"clamp(12px,2vw,14px)",color:"#f8e5a0",marginBottom:"5px",letterSpacing:"0.3px"}}>{g.title}</div>
              <div style={{fontSize:"11px",color:"rgba(232,224,208,0.3)",lineHeight:"1.5",fontFamily:"'Segoe UI',sans-serif"}}>{g.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="kanz-contact">
        <div style={{fontSize:"10px",letterSpacing:"4px",color:"rgba(248,229,160,0.35)",fontFamily:"'Segoe UI',sans-serif",marginBottom:"12px",textTransform:"uppercase"}}>Kontakt</div>
        <h2 style={{fontSize:"clamp(20px,4vw,30px)",fontWeight:"400",marginBottom:"24px",color:"#f0e8d8"}}>Erstberatung anfragen</h2>
        {sent?(
          <div style={{padding:"24px",border:"1px solid rgba(248,231,188,0.2)",textAlign:"center",fontFamily:"'Segoe UI',sans-serif"}}>
            <div style={{fontSize:"32px",marginBottom:"8px"}}>✉️</div>
            <p style={{color:"#f8e5a0"}}>Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24h.</p>
          </div>
        ):(
          <div style={{display:"flex",flexDirection:"column",gap:"12px",fontFamily:"'Segoe UI',sans-serif"}}>
            {["Ihr vollständiger Name","Telefon oder E-Mail"].map((ph,i)=>(
              <input key={i} placeholder={ph} style={{background:"transparent",border:"none",borderBottom:"1px solid rgba(248,231,188,0.15)",padding:"11px 0",color:"#e8e0d0",fontSize:"14px",outline:"none",width:"100%"}}/>
            ))}
            <textarea placeholder="Ihr Anliegen..." rows={3} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(248,231,188,0.1)",padding:"12px",color:"#e8e0d0",fontSize:"14px",outline:"none",resize:"none",marginTop:"4px"}}/>
            <button onClick={()=>setSent(true)} style={{padding:"13px 26px",background:"#f8e5a0",color:"#0f0e0a",fontWeight:"700",fontSize:"12px",letterSpacing:"1px",border:"none",cursor:"pointer",alignSelf:"flex-start",marginTop:"4px"}}>ANFRAGE SENDEN →</button>
          </div>
        )}
      </section>

      <footer className="kanz-footer">
        <span style={{color:"rgba(232,224,208,0.2)",fontSize:"12px"}}>© 2026 Weber & Partner</span>
        <span style={{color:"rgba(232,224,208,0.2)",fontSize:"12px"}}>Demo von <a href="https://webit-ai.de" style={{color:"#f97316"}}>WebIT AI</a></span>
      </footer>
    </main>
  );
}