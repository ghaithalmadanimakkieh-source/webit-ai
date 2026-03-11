// @ts-nocheck
"use client";
import { useState } from "react";

const PROPERTIES = [
  {title:"Moderne Villa",loc:"München · Schwabing",price:"1.250.000",rooms:"6",sqm:"240",type:"Haus",img:"🏡",tag:"Neu"},
  {title:"Penthouse Loft",loc:"Frankfurt · Sachsenhausen",price:"890.000",rooms:"4",sqm:"160",type:"Wohnung",img:"🏢",tag:"Exklusiv"},
  {title:"Stadthaus",loc:"Berlin · Prenzlauer Berg",price:"650.000",rooms:"5",sqm:"180",type:"Haus",img:"🏘️",tag:"Beliebt"},
  {title:"Design-Wohnung",loc:"Hamburg · Eppendorf",price:"420.000",rooms:"3",sqm:"95",type:"Wohnung",img:"🏠",tag:""},
  {title:"Landhaus",loc:"Bayern · Starnberg",price:"980.000",rooms:"7",sqm:"320",type:"Haus",img:"🌿",tag:""},
  {title:"City Apartment",loc:"Stuttgart · Mitte",price:"380.000",rooms:"2",sqm:"72",type:"Wohnung",img:"🏙️",tag:""},
];

export default function ImmobilienDemo() {
  const [filter, setFilter] = useState("Alle");
  const [contactSent, setContactSent] = useState(false);

  const filtered = filter==="Alle" ? PROPERTIES : PROPERTIES.filter(p=>p.type===filter);

  return (
    <main style={{minHeight:"100vh",background:"#0a0f1e",fontFamily:"'Segoe UI',sans-serif",color:"white"}}>
      <div style={{background:"linear-gradient(135deg,#10b981,#059669)",color:"white",textAlign:"center",padding:"10px",fontSize:"13px",fontWeight:"600"}}>
        🌐 Demo erstellt von <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a> — webit-ai.de
      </div>

      {/* Nav */}
      <nav style={{padding:"20px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.06)",backdropFilter:"blur(20px)",position:"sticky",top:0,zIndex:100,background:"rgba(10,15,30,0.9)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"36px",height:"36px",background:"linear-gradient(135deg,#10b981,#059669)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>🏠</div>
          <span style={{fontWeight:"900",fontSize:"18px"}}>Prime<span style={{color:"#10b981"}}>Estate</span></span>
        </div>
        <div style={{display:"flex",gap:"24px"}}>
          {["Kaufen","Mieten","Verkaufen","Über uns"].map(n=>(
            <a key={n} href="#" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:"14px"}}>{n}</a>
          ))}
        </div>
        <a href="#kontakt" style={{padding:"9px 20px",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",borderRadius:"8px",fontWeight:"700",fontSize:"13px",textDecoration:"none"}}>Beratung ✦</a>
      </nav>

      {/* Hero */}
      <section style={{padding:"80px 40px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 0%,rgba(16,185,129,0.1),transparent 60%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:"100px",fontSize:"12px",color:"#6ee7b7",marginBottom:"20px",fontWeight:"600"}}>
            ✦ Premium Immobilien Deutschland
          </div>
          <h1 style={{fontSize:"clamp(32px,6vw,72px)",fontWeight:"900",lineHeight:"1",letterSpacing:"-3px",marginBottom:"16px"}}>
            Ihr Traumhaus<br/>
            <span style={{background:"linear-gradient(135deg,#10b981,#34d399)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>wartet auf Sie.</span>
          </h1>
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:"16px",marginBottom:"36px"}}>Exklusive Immobilien · Persönliche Beratung · Beste Preise</p>
          <div style={{display:"flex",gap:"8px",justifyContent:"center",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"14px",padding:"12px",maxWidth:"600px",margin:"0 auto",flexWrap:"wrap"}}>
            <input placeholder="🔍 Stadt, Stadtteil oder Adresse..." style={{flex:1,background:"transparent",border:"none",outline:"none",color:"white",fontSize:"14px",padding:"8px 12px",minWidth:"200px"}}/>
            <button style={{padding:"10px 24px",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",fontWeight:"700",border:"none",borderRadius:"10px",cursor:"pointer",fontSize:"14px"}}>Suchen</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{display:"flex",justifyContent:"center",gap:"0",maxWidth:"700px",margin:"0 auto 60px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"16px",overflow:"hidden"}}>
        {[{n:"1.200+",l:"Immobilien"},{n:"98%",l:"Zufrieden"},{n:"15 J.",l:"Erfahrung"},{n:"€0",l:"Provision"}].map((s,i)=>(
          <div key={i} style={{textAlign:"center",padding:"20px 32px",borderRight:i<3?"1px solid rgba(255,255,255,0.06)":"none",flex:1}}>
            <div style={{fontSize:"24px",fontWeight:"900",color:"#10b981"}}>{s.n}</div>
            <div style={{fontSize:"11px",color:"rgba(255,255,255,0.3)",marginTop:"3px"}}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* Filter + Properties */}
      <section style={{padding:"0 40px 60px",maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{display:"flex",gap:"8px",marginBottom:"28px",flexWrap:"wrap"}}>
          {["Alle","Haus","Wohnung"].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} style={{padding:"8px 20px",borderRadius:"100px",background:filter===f?"linear-gradient(135deg,#10b981,#059669)":"rgba(255,255,255,0.04)",border:`1px solid ${filter===f?"transparent":"rgba(255,255,255,0.08)"}`,color:"white",fontWeight:"600",cursor:"pointer",fontSize:"13px",fontFamily:"inherit"}}>{f}</button>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {filtered.map((p,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"16px",overflow:"hidden",transition:"all 0.3s",cursor:"pointer"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.borderColor="rgba(16,185,129,0.4)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"}}>
              <div style={{height:"140px",background:`linear-gradient(135deg,rgba(16,185,129,0.1),rgba(5,150,105,0.05))`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"52px",position:"relative"}}>
                {p.img}
                {p.tag&&<div style={{position:"absolute",top:"10px",right:"10px",background:"#10b981",color:"white",fontSize:"10px",fontWeight:"700",padding:"3px 10px",borderRadius:"100px"}}>{p.tag}</div>}
              </div>
              <div style={{padding:"18px"}}>
                <div style={{fontWeight:"800",fontSize:"15px",marginBottom:"4px"}}>{p.title}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.35)",marginBottom:"10px"}}>📍 {p.loc}</div>
                <div style={{display:"flex",gap:"12px",marginBottom:"12px"}}>
                  <span style={{fontSize:"11px",color:"rgba(255,255,255,0.3)"}}>🛏 {p.rooms} Zi.</span>
                  <span style={{fontSize:"11px",color:"rgba(255,255,255,0.3)"}}>📐 {p.sqm} m²</span>
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{fontWeight:"900",fontSize:"18px",color:"#10b981"}}>€{p.price}</div>
                  <button style={{padding:"6px 14px",background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.3)",color:"#6ee7b7",borderRadius:"8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"}}>Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" style={{padding:"60px 40px",maxWidth:"560px",margin:"0 auto",textAlign:"center"}}>
        <h2 style={{fontSize:"32px",fontWeight:"800",marginBottom:"8px"}}>Kostenlose Beratung</h2>
        <p style={{color:"rgba(255,255,255,0.35)",marginBottom:"28px"}}>Wir finden Ihre Traumimmobilie</p>
        {contactSent ? (
          <div style={{background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:"16px",padding:"40px"}}>
            <div style={{fontSize:"48px",marginBottom:"12px"}}>✅</div>
            <h3 style={{color:"#6ee7b7",marginBottom:"6px"}}>Anfrage gesendet!</h3>
            <p style={{color:"rgba(255,255,255,0.4)"}}>Wir melden uns innerhalb von 24h.</p>
          </div>
        ) : (
          <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"16px",padding:"28px"}}>
            {[{ph:"Ihr Name"},{ph:"Telefon / E-Mail"}].map((f,i)=>(
              <input key={i} placeholder={f.ph} style={{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",padding:"12px 14px",color:"white",fontSize:"14px",outline:"none",marginBottom:"12px",boxSizing:"border-box"}}/>
            ))}
            <button onClick={()=>setContactSent(true)} style={{width:"100%",padding:"14px",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",fontWeight:"700",fontSize:"15px",borderRadius:"10px",border:"none",cursor:"pointer"}}>Jetzt Beratung anfragen →</button>
          </div>
        )}
      </section>

      <footer style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"24px 40px",textAlign:"center",color:"rgba(255,255,255,0.2)",fontSize:"13px"}}>
        © 2026 PrimeEstate · Demo von <a href="https://webit-ai.de" style={{color:"#10b981"}}>WebIT AI</a>
      </footer>
    </main>
  );
}
