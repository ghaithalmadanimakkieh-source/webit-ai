// @ts-nocheck
"use client";
import { useState } from "react";

export default function KanzleiDemo() {
  const [sent, setSent] = useState(false);

  return (
    <main style={{minHeight:"100vh",background:"#0f0e0a",fontFamily:"'Georgia',serif",color:"#e8e0d0"}}>
      <div style={{background:"linear-gradient(135deg,#f97316,#ea580c)",color:"white",textAlign:"center",padding:"10px",fontSize:"13px",fontWeight:"600",fontFamily:"'Segoe UI',sans-serif"}}>
        🌐 Demo erstellt von <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a> — webit-ai.de
      </div>

      {/* Nav */}
      <nav style={{padding:"20px 60px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(248,231,188,0.1)",background:"rgba(15,14,10,0.95)"}}>
        <div>
          <div style={{fontWeight:"700",fontSize:"20px",letterSpacing:"2px",color:"#f8e5a0"}}>WEBER & PARTNER</div>
          <div style={{fontSize:"11px",letterSpacing:"3px",color:"rgba(248,229,160,0.4)",fontFamily:"'Segoe UI',sans-serif"}}>RECHTSANWÄLTE · NOTARE</div>
        </div>
        <div style={{display:"flex",gap:"32px",fontFamily:"'Segoe UI',sans-serif"}}>
          {["Rechtsgebiete","Team","Kanzlei","Kontakt"].map(n=>(
            <a key={n} href="#" style={{color:"rgba(232,224,208,0.5)",textDecoration:"none",fontSize:"13px",letterSpacing:"1px"}}>{n}</a>
          ))}
        </div>
        <a href="#kontakt" style={{padding:"10px 24px",border:"1px solid #f8e5a0",color:"#f8e5a0",fontSize:"12px",letterSpacing:"2px",textDecoration:"none",fontFamily:"'Segoe UI',sans-serif",fontWeight:"600"}}>ERSTBERATUNG</a>
      </nav>

      {/* Hero */}
      <section style={{padding:"100px 60px",position:"relative",overflow:"hidden",borderBottom:"1px solid rgba(248,231,188,0.08)"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(ellipse at 80% 50%,rgba(249,115,22,0.05),transparent 60%)"}}/>
        <div style={{maxWidth:"700px",position:"relative",zIndex:1}}>
          <div style={{fontSize:"11px",letterSpacing:"4px",color:"#f8e5a0",fontFamily:"'Segoe UI',sans-serif",marginBottom:"24px",opacity:0.6}}>SEIT 1998 · MÜNCHEN</div>
          <h1 style={{fontSize:"clamp(32px,5vw,64px)",fontWeight:"400",lineHeight:"1.15",letterSpacing:"-1px",marginBottom:"24px",color:"#f0e8d8"}}>
            Recht verstehen.<br/>
            <em style={{color:"#f8e5a0"}}>Ihr Recht vertreten.</em>
          </h1>
          <p style={{color:"rgba(232,224,208,0.5)",fontSize:"16px",lineHeight:"1.9",maxWidth:"520px",marginBottom:"40px",fontFamily:"'Segoe UI',sans-serif"}}>
            Wir stehen auf Ihrer Seite — mit Erfahrung, Präzision und dem unbedingten Willen, Ihre Interessen durchzusetzen.
          </p>
          <div style={{display:"flex",gap:"16px",fontFamily:"'Segoe UI',sans-serif"}}>
            <a href="#kontakt" style={{padding:"14px 32px",background:"#f8e5a0",color:"#0f0e0a",fontWeight:"700",fontSize:"13px",letterSpacing:"1px",textDecoration:"none"}}>JETZT ANFRAGEN</a>
            <a href="#gebiete" style={{padding:"14px 32px",border:"1px solid rgba(248,229,160,0.3)",color:"rgba(248,229,160,0.7)",fontSize:"13px",letterSpacing:"1px",textDecoration:"none"}}>RECHTSGEBIETE</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{display:"flex",borderBottom:"1px solid rgba(248,231,188,0.08)"}}>
        {[{n:"25+",l:"Jahre Erfahrung"},{n:"3.000+",l:"Mandate"},{n:"98%",l:"Erfolgsquote"},{n:"8",l:"Anwälte"}].map((s,i)=>(
          <div key={i} style={{flex:1,padding:"32px 40px",borderRight:i<3?"1px solid rgba(248,231,188,0.08)":"none",textAlign:"center"}}>
            <div style={{fontSize:"32px",fontWeight:"300",color:"#f8e5a0",letterSpacing:"-1px"}}>{s.n}</div>
            <div style={{fontSize:"11px",color:"rgba(232,224,208,0.3)",marginTop:"6px",letterSpacing:"2px",fontFamily:"'Segoe UI',sans-serif"}}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* Rechtsgebiete */}
      <section id="gebiete" style={{padding:"80px 60px",borderBottom:"1px solid rgba(248,231,188,0.08)"}}>
        <div style={{fontSize:"11px",letterSpacing:"4px",color:"rgba(248,229,160,0.4)",fontFamily:"'Segoe UI',sans-serif",marginBottom:"20px"}}>RECHTSGEBIETE</div>
        <h2 style={{fontSize:"40px",fontWeight:"400",marginBottom:"48px",color:"#f0e8d8"}}>Unsere Expertise</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"rgba(248,231,188,0.08)"}}>
          {[
            {icon:"⚖️",title:"Zivilrecht",desc:"Verträge, Schadensersatz, allgemeines Zivilrecht"},
            {icon:"🏢",title:"Gesellschaftsrecht",desc:"GmbH, AG, Unternehmenstransaktionen"},
            {icon:"👨‍👩‍👧",title:"Familienrecht",desc:"Scheidung, Unterhalt, Sorgerecht"},
            {icon:"🏠",title:"Immobilienrecht",desc:"Kauf, Miete, Baurecht, WEG"},
            {icon:"💼",title:"Arbeitsrecht",desc:"Kündigung, Abfindung, Arbeitsvertrag"},
            {icon:"🛡️",title:"Strafrecht",desc:"Verteidigung in allen Strafverfahren"},
          ].map(g=>(
            <div key={g.title} style={{padding:"32px 28px",background:"#0f0e0a",transition:"all 0.3s",cursor:"pointer"}}
            onMouseEnter={e=>e.currentTarget.style.background="#1a1812"}
            onMouseLeave={e=>e.currentTarget.style.background="#0f0e0a"}>
              <div style={{fontSize:"24px",marginBottom:"14px"}}>{g.icon}</div>
              <div style={{fontWeight:"600",fontSize:"16px",color:"#f8e5a0",marginBottom:"8px",letterSpacing:"0.5px"}}>{g.title}</div>
              <div style={{fontSize:"13px",color:"rgba(232,224,208,0.35)",lineHeight:"1.6",fontFamily:"'Segoe UI',sans-serif"}}>{g.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" style={{padding:"80px 60px",maxWidth:"600px"}}>
        <div style={{fontSize:"11px",letterSpacing:"4px",color:"rgba(248,229,160,0.4)",fontFamily:"'Segoe UI',sans-serif",marginBottom:"20px"}}>KONTAKT</div>
        <h2 style={{fontSize:"36px",fontWeight:"400",marginBottom:"32px",color:"#f0e8d8"}}>Erstberatung anfragen</h2>
        {sent ? (
          <div style={{padding:"32px",border:"1px solid rgba(248,231,188,0.2)",textAlign:"center"}}>
            <div style={{fontSize:"40px",marginBottom:"12px"}}>✉️</div>
            <p style={{color:"#f8e5a0",fontFamily:"'Segoe UI',sans-serif"}}>Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden.</p>
          </div>
        ) : (
          <div style={{display:"flex",flexDirection:"column",gap:"14px",fontFamily:"'Segoe UI',sans-serif"}}>
            {[{ph:"Ihr vollständiger Name"},{ph:"Telefon oder E-Mail"}].map((f,i)=>(
              <input key={i} placeholder={f.ph} style={{background:"transparent",border:"none",borderBottom:"1px solid rgba(248,231,188,0.2)",padding:"12px 0",color:"#e8e0d0",fontSize:"14px",outline:"none"}}/>
            ))}
            <textarea placeholder="Ihr Anliegen (kurze Beschreibung)..." rows={4} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(248,231,188,0.12)",padding:"14px",color:"#e8e0d0",fontSize:"14px",outline:"none",resize:"none",marginTop:"8px"}}/>
            <button onClick={()=>setSent(true)} style={{padding:"14px 32px",background:"#f8e5a0",color:"#0f0e0a",fontWeight:"700",fontSize:"13px",letterSpacing:"1px",border:"none",cursor:"pointer",alignSelf:"flex-start",marginTop:"8px"}}>ANFRAGE SENDEN →</button>
          </div>
        )}
      </section>

      <footer style={{borderTop:"1px solid rgba(248,231,188,0.08)",padding:"24px 60px",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"'Segoe UI',sans-serif"}}>
        <span style={{color:"rgba(232,224,208,0.2)",fontSize:"12px"}}>© 2026 Weber & Partner · Demo von <a href="https://webit-ai.de" style={{color:"#f97316"}}>WebIT AI</a></span>
        <span style={{color:"rgba(232,224,208,0.2)",fontSize:"12px"}}>München · Frankfurt · Berlin</span>
      </footer>
    </main>
  );
}
