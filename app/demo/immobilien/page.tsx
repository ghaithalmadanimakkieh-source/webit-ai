// @ts-nocheck
"use client";
import { useState } from "react";

const PROPS=[
  {title:"Moderne Villa",loc:"München · Schwabing",price:"1.250.000",rooms:"6",sqm:"240",type:"Haus",img:"🏡",tag:"Neu",color:"#10b981"},
  {title:"Penthouse Loft",loc:"Frankfurt · Sachsenhausen",price:"890.000",rooms:"4",sqm:"160",type:"Wohnung",img:"🏢",tag:"Exklusiv",color:"#8b5cf6"},
  {title:"Stadthaus",loc:"Berlin · Prenzlauer Berg",price:"650.000",rooms:"5",sqm:"180",type:"Haus",img:"🏘️",tag:"Beliebt",color:"#f59e0b"},
  {title:"Design-Wohnung",loc:"Hamburg · Eppendorf",price:"420.000",rooms:"3",sqm:"95",type:"Wohnung",img:"🏠",tag:"",color:"#06b6d4"},
  {title:"Landhaus",loc:"Bayern · Starnberg",price:"980.000",rooms:"7",sqm:"320",type:"Haus",img:"🌿",tag:"",color:"#10b981"},
  {title:"City Apartment",loc:"Stuttgart · Mitte",price:"380.000",rooms:"2",sqm:"72",type:"Wohnung",img:"🏙️",tag:"",color:"#ec4899"},
];

export default function ImmobilienDemo() {
  const [filter, setFilter] = useState("Alle");
  const [sent, setSent] = useState(false);
  const filtered = filter==="Alle"?PROPS:PROPS.filter(p=>p.type===filter);
  return (
    <main className="immo-main">
      <style>{`
        .immo-main{min-height:100vh;background:#0a0f1e;font-family:'Segoe UI',sans-serif;color:white;overflow-x:hidden}
        .immo-nav{padding:13px 40px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.06);background:rgba(10,15,30,0.97);position:sticky;top:0;z-index:100}
        .immo-nav-links{display:flex;gap:20px}
        .immo-hero{padding:64px 40px;position:relative;overflow:hidden;text-align:center}
        .immo-stats{display:flex;max-width:680px;margin:0 auto 44px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;overflow:hidden;flex-wrap:wrap}
        .immo-stat{text-align:center;padding:16px 20px;border-right:1px solid rgba(255,255,255,0.06);flex:1 1 22%;min-width:70px}
        .immo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .immo-section{padding:0 40px 50px;max-width:1100px;margin:0 auto}
        .immo-contact{padding:50px 40px;max-width:500px;margin:0 auto;text-align:center}
        .immo-footer{border-top:1px solid rgba(255,255,255,0.05);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
        .immo-input{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:11px 13px;color:white;font-size:14px;outline:none;margin-bottom:10px;box-sizing:border-box}
        @media(max-width:768px){
          .immo-nav{padding:12px 16px}
          .immo-nav-links{display:none}
          .immo-hero{padding:48px 16px}
          .immo-stats{margin:0 16px 32px;border-radius:10px}
          .immo-stat{padding:12px 8px;border-right:none;border-bottom:1px solid rgba(255,255,255,0.06)}
          .immo-grid{grid-template-columns:1fr 1fr;gap:8px}
          .immo-section{padding:0 16px 40px}
          .immo-contact{padding:40px 16px}
          .immo-footer{padding:16px}
        }
      `}</style>

      <div style={{background:"linear-gradient(135deg,#10b981,#059669)",color:"white",textAlign:"center",padding:"9px",fontSize:"12px",fontWeight:"600"}}>
        🌐 DEMO — <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a>
      </div>

      <nav className="immo-nav">
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <div style={{width:"30px",height:"30px",background:"linear-gradient(135deg,#10b981,#059669)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px"}}>🏠</div>
          <span style={{fontWeight:"900",fontSize:"16px"}}>Prime<span style={{color:"#10b981"}}>Estate</span></span>
        </div>
        <div className="immo-nav-links">
          {["Kaufen","Mieten","Verkaufen","Über uns"].map(n=><a key={n} href="#" style={{color:"rgba(255,255,255,0.45)",textDecoration:"none",fontSize:"13px"}}>{n}</a>)}
        </div>
        <a href="#kontakt" style={{padding:"9px 14px",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",borderRadius:"8px",fontWeight:"700",fontSize:"12px",textDecoration:"none"}}>Beratung</a>
      </nav>

      {/* HERO */}
      <section className="immo-hero">
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 0%,rgba(16,185,129,0.1),transparent 60%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 14px",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.25)",borderRadius:"100px",fontSize:"10px",color:"#6ee7b7",marginBottom:"14px",fontWeight:"600"}}>✦ Premium Immobilien Deutschland</div>
          <h1 style={{fontSize:"clamp(28px,7vw,64px)",fontWeight:"900",lineHeight:"1",letterSpacing:"-2px",marginBottom:"12px"}}>
            Ihr Traumhaus<br/><span style={{background:"linear-gradient(135deg,#10b981,#34d399)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>wartet auf Sie.</span>
          </h1>
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:"15px",marginBottom:"24px"}}>Exklusive Immobilien · Persönliche Beratung · Beste Preise</p>
          <div style={{display:"flex",gap:"8px",justifyContent:"center",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"9px",maxWidth:"460px",margin:"0 auto"}}>
            <input placeholder="🔍 Stadt oder Adresse..." style={{flex:1,background:"transparent",border:"none",outline:"none",color:"white",fontSize:"14px",padding:"5px 8px",minWidth:"0"}}/>
            <button style={{padding:"8px 16px",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",fontWeight:"700",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"13px",whiteSpace:"nowrap"}}>Suchen</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="immo-stats">
        {[{n:"1.200+",l:"Immobilien"},{n:"98%",l:"Zufrieden"},{n:"15 J.",l:"Erfahrung"},{n:"€0",l:"Provision"}].map((s,i)=>(
          <div key={i} className="immo-stat">
            <div style={{fontSize:"clamp(14px,3vw,20px)",fontWeight:"900",color:"#10b981"}}>{s.n}</div>
            <div style={{fontSize:"10px",color:"rgba(255,255,255,0.28)",marginTop:"2px"}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* FILTER + PROPS */}
      <section className="immo-section">
        <div style={{display:"flex",gap:"8px",marginBottom:"18px",flexWrap:"wrap"}}>
          {["Alle","Haus","Wohnung"].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} style={{padding:"7px 18px",borderRadius:"100px",background:filter===f?"linear-gradient(135deg,#10b981,#059669)":"rgba(255,255,255,0.04)",border:`1px solid ${filter===f?"transparent":"rgba(255,255,255,0.08)"}`,color:"white",fontWeight:"600",cursor:"pointer",fontSize:"13px",fontFamily:"inherit"}}>{f}</button>
          ))}
        </div>
        <div className="immo-grid">
          {filtered.map((p,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"12px",overflow:"hidden",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.borderColor="rgba(16,185,129,0.35)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"}}>
              <div style={{height:"100px",background:`linear-gradient(135deg,${p.color}12,${p.color}05)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"40px",position:"relative"}}>
                {p.img}
                {p.tag&&<div style={{position:"absolute",top:"8px",right:"8px",background:"#10b981",color:"white",fontSize:"9px",fontWeight:"700",padding:"2px 8px",borderRadius:"100px"}}>{p.tag}</div>}
              </div>
              <div style={{padding:"12px"}}>
                <div style={{fontWeight:"800",fontSize:"12px",marginBottom:"2px"}}>{p.title}</div>
                <div style={{fontSize:"10px",color:"rgba(255,255,255,0.3)",marginBottom:"6px"}}>📍 {p.loc}</div>
                <div style={{display:"flex",gap:"8px",marginBottom:"8px"}}>
                  <span style={{fontSize:"10px",color:"rgba(255,255,255,0.3)"}}>🛏 {p.rooms}</span>
                  <span style={{fontSize:"10px",color:"rgba(255,255,255,0.3)"}}>📐 {p.sqm}m²</span>
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{fontWeight:"900",fontSize:"13px",color:"#10b981"}}>€{parseInt(p.price).toLocaleString("de")}</div>
                  <button style={{padding:"4px 9px",background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.25)",color:"#6ee7b7",borderRadius:"6px",fontSize:"10px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"}}>Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="immo-contact">
        <h2 style={{fontSize:"clamp(22px,4vw,28px)",fontWeight:"800",marginBottom:"6px"}}>Kostenlose Beratung</h2>
        <p style={{color:"rgba(255,255,255,0.35)",marginBottom:"20px",fontSize:"13px"}}>Wir finden Ihre Traumimmobilie</p>
        {sent?(
          <div style={{background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:"12px",padding:"28px"}}>
            <div style={{fontSize:"36px",marginBottom:"8px"}}>✅</div>
            <p style={{color:"#6ee7b7",fontWeight:"700"}}>Anfrage gesendet! Wir melden uns innerhalb von 24h.</p>
          </div>
        ):(
          <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"12px",padding:"22px"}}>
            <input className="immo-input" placeholder="Ihr Name"/>
            <input className="immo-input" placeholder="Telefon / E-Mail"/>
            <button onClick={()=>setSent(true)} style={{width:"100%",padding:"13px",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",fontWeight:"700",fontSize:"14px",borderRadius:"10px",border:"none",cursor:"pointer"}}>Beratung anfragen →</button>
          </div>
        )}
      </section>

      <footer className="immo-footer">
        <span style={{fontWeight:"900",color:"#10b981"}}>PrimeEstate</span>
        <span style={{color:"rgba(255,255,255,0.2)",fontSize:"12px"}}>Demo von <a href="https://webit-ai.de" style={{color:"#10b981"}}>WebIT AI</a></span>
      </footer>
    </main>
  );
}