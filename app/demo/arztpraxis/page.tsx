// @ts-nocheck
"use client";
import { useState } from "react";

export default function ArztpraxisDemo() {
  const [activeTab, setActiveTab] = useState("leistungen");
  const [formSent, setFormSent] = useState(false);

  return (
    <main style={{minHeight:"100vh",background:"#f0f4f8",fontFamily:"'Segoe UI',sans-serif",color:"#1a2030"}}>
      {/* Banner */}
      <div style={{background:"linear-gradient(135deg,#0ea5e9,#0284c7)",color:"white",textAlign:"center",padding:"10px",fontSize:"13px",fontWeight:"600"}}>
        🌐 Demo erstellt von <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a> — webit-ai.de
      </div>

      {/* Nav */}
      <nav style={{background:"white",boxShadow:"0 2px 12px rgba(0,0,0,0.08)",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px",padding:"16px 0"}}>
          <div style={{width:"40px",height:"40px",background:"linear-gradient(135deg,#0ea5e9,#0284c7)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>🏥</div>
          <div>
            <div style={{fontWeight:"800",fontSize:"16px",color:"#0284c7"}}>Dr. med. Müller</div>
            <div style={{fontSize:"11px",color:"#64748b"}}>Allgemeinmedizin · Hausarzt</div>
          </div>
        </div>
        <div style={{display:"flex",gap:"24px"}}>
          {["Leistungen","Team","Öffnungszeiten","Kontakt"].map(n=>(
            <a key={n} href="#" style={{color:"#475569",textDecoration:"none",fontSize:"14px",fontWeight:"500"}}>{n}</a>
          ))}
        </div>
        <a href="#termin" style={{padding:"10px 22px",background:"linear-gradient(135deg,#0ea5e9,#0284c7)",color:"white",borderRadius:"8px",fontWeight:"700",fontSize:"13px",textDecoration:"none"}}>Termin buchen</a>
      </nav>

      {/* Hero */}
      <section style={{background:"linear-gradient(135deg,#0c4a6e,#0284c7)",color:"white",padding:"80px 40px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 20% 50%,rgba(255,255,255,0.05) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(255,255,255,0.05) 0%,transparent 50%)"}}/>
        <div style={{position:"relative",zIndex:1,maxWidth:"700px",margin:"0 auto"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",background:"rgba(255,255,255,0.15)",borderRadius:"100px",fontSize:"12px",fontWeight:"600",marginBottom:"20px"}}>
            <span style={{width:"6px",height:"6px",background:"#4ade80",borderRadius:"50%",display:"inline-block"}}/>
            Neue Patienten willkommen
          </div>
          <h1 style={{fontSize:"clamp(28px,5vw,52px)",fontWeight:"900",lineHeight:"1.1",marginBottom:"16px"}}>Ihre Gesundheit<br/>in besten Händen</h1>
          <p style={{opacity:0.8,fontSize:"16px",lineHeight:"1.7",marginBottom:"32px"}}>Moderne Medizin mit persönlicher Betreuung — Hausarztpraxis Dr. Müller in Ihrer Nähe.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="#termin" style={{padding:"14px 32px",background:"white",color:"#0284c7",fontWeight:"700",borderRadius:"10px",textDecoration:"none",fontSize:"15px"}}>📅 Online Termin</a>
            <a href="tel:+4907123456789" style={{padding:"14px 32px",background:"rgba(255,255,255,0.15)",color:"white",fontWeight:"600",borderRadius:"10px",textDecoration:"none",fontSize:"15px",border:"1px solid rgba(255,255,255,0.3)"}}>📞 Jetzt anrufen</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{background:"white",padding:"32px 40px",display:"flex",justifyContent:"center",gap:"0",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
        {[{n:"2.500+",l:"Patienten"},{n:"15 J.",l:"Erfahrung"},{n:"4.9★",l:"Bewertung"},{n:"Mo–Sa",l:"Geöffnet"}].map((s,i)=>(
          <div key={i} style={{textAlign:"center",padding:"16px 40px",borderRight:i<3?"1px solid #e2e8f0":"none"}}>
            <div style={{fontSize:"26px",fontWeight:"900",color:"#0284c7"}}>{s.n}</div>
            <div style={{fontSize:"12px",color:"#64748b",marginTop:"3px"}}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* Leistungen */}
      <section style={{padding:"60px 40px",maxWidth:"900px",margin:"0 auto"}}>
        <h2 style={{fontSize:"32px",fontWeight:"800",textAlign:"center",marginBottom:"8px"}}>Unsere Leistungen</h2>
        <p style={{color:"#64748b",textAlign:"center",marginBottom:"36px"}}>Umfassende medizinische Versorgung aus einer Hand</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {[
            {icon:"🩺",title:"Vorsorge",desc:"Check-Up, Impfungen, Krebsvorsorge"},
            {icon:"💊",title:"Innere Medizin",desc:"Bluthochdruck, Diabetes, Herz"},
            {icon:"🩸",title:"Labor & Diagnostik",desc:"Blutbild, EKG, Ultraschall"},
            {icon:"🦴",title:"Orthopädie",desc:"Rücken, Gelenke, Sportmedizin"},
            {icon:"🧠",title:"Neurologie",desc:"Kopfschmerz, Schlafstörungen"},
            {icon:"👶",title:"Kindergesundheit",desc:"Kindervorsorge, Impfplan"},
          ].map(l=>(
            <div key={l.title} style={{background:"white",borderRadius:"14px",padding:"24px 20px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",border:"1px solid #e2e8f0",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(2,132,199,0.15)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize:"28px",marginBottom:"10px"}}>{l.icon}</div>
              <div style={{fontWeight:"700",marginBottom:"6px",color:"#0f172a"}}>{l.title}</div>
              <div style={{fontSize:"13px",color:"#64748b",lineHeight:"1.5"}}>{l.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{background:"white",padding:"60px 40px"}}>
        <div style={{maxWidth:"900px",margin:"0 auto"}}>
          <h2 style={{fontSize:"32px",fontWeight:"800",textAlign:"center",marginBottom:"8px"}}>Unser Team</h2>
          <p style={{color:"#64748b",textAlign:"center",marginBottom:"36px"}}>Erfahren, einfühlsam, für Sie da</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {[
              {name:"Dr. med. Klaus Müller",role:"Facharzt Allgemeinmedizin",emoji:"👨‍⚕️",color:"#0284c7"},
              {name:"Dr. med. Sarah Weber",role:"Ärztin für Innere Medizin",emoji:"👩‍⚕️",color:"#7c3aed"},
              {name:"Anna Schneider",role:"Medizinische Fachangestellte",emoji:"👩‍💼",color:"#059669"},
            ].map(t=>(
              <div key={t.name} style={{textAlign:"center",padding:"28px 20px",background:"#f8fafc",borderRadius:"16px",border:"1px solid #e2e8f0"}}>
                <div style={{width:"72px",height:"72px",background:`${t.color}18`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",margin:"0 auto 14px"}}>{t.emoji}</div>
                <div style={{fontWeight:"700",fontSize:"15px",marginBottom:"4px"}}>{t.name}</div>
                <div style={{fontSize:"12px",color:"#64748b"}}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Termin */}
      <section id="termin" style={{padding:"60px 40px",maxWidth:"600px",margin:"0 auto"}}>
        <h2 style={{fontSize:"32px",fontWeight:"800",textAlign:"center",marginBottom:"8px"}}>Termin online buchen</h2>
        <p style={{color:"#64748b",textAlign:"center",marginBottom:"32px"}}>Schnell & einfach — ohne Warteschleife</p>
        {formSent ? (
          <div style={{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:"16px",padding:"40px",textAlign:"center"}}>
            <div style={{fontSize:"48px",marginBottom:"12px"}}>✅</div>
            <h3 style={{fontWeight:"800",color:"#166534",marginBottom:"8px"}}>Anfrage gesendet!</h3>
            <p style={{color:"#15803d"}}>Wir melden uns innerhalb von 24h bei Ihnen.</p>
          </div>
        ) : (
          <div style={{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"}}>
            {[{label:"Name",ph:"Max Mustermann",type:"text"},{label:"Telefon",ph:"+49 123 456789",type:"tel"},{label:"E-Mail",ph:"max@email.de",type:"email"}].map(f=>(
              <div key={f.label} style={{marginBottom:"16px"}}>
                <label style={{fontSize:"13px",fontWeight:"600",color:"#374151",display:"block",marginBottom:"6px"}}>{f.label}</label>
                <input type={f.type} placeholder={f.ph} style={{width:"100%",padding:"11px 14px",border:"1px solid #e2e8f0",borderRadius:"8px",fontSize:"14px",outline:"none",boxSizing:"border-box"}}/>
              </div>
            ))}
            <div style={{marginBottom:"20px"}}>
              <label style={{fontSize:"13px",fontWeight:"600",color:"#374151",display:"block",marginBottom:"6px"}}>Anliegen</label>
              <select style={{width:"100%",padding:"11px 14px",border:"1px solid #e2e8f0",borderRadius:"8px",fontSize:"14px",outline:"none",background:"white"}}>
                {["Erstuntersuchung","Folgerezept","Vorsorge","Krankmeldung","Sonstiges"].map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <button onClick={()=>setFormSent(true)} style={{width:"100%",padding:"14px",background:"linear-gradient(135deg,#0ea5e9,#0284c7)",color:"white",fontWeight:"700",fontSize:"15px",borderRadius:"10px",border:"none",cursor:"pointer"}}>📅 Termin anfragen</button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer style={{background:"#0c4a6e",color:"white",padding:"32px 40px",textAlign:"center"}}>
        <p style={{opacity:0.7,fontSize:"13px"}}>© 2026 Praxis Dr. Müller · Demo von <a href="https://webit-ai.de" style={{color:"#7dd3fc"}}>WebIT AI</a></p>
      </footer>
    </main>
  );
}
