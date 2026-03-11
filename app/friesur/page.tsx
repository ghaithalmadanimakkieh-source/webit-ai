"use client";
import { useState, useEffect } from "react";

export default function FriseurDemo() {
  const [loaded, setLoaded] = useState(false);
  const [selectedService, setSelectedService] = useState<number|null>(null);
  const [step, setStep] = useState(1);
  const [booked, setBooked] = useState(false);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const SERVICES = [
    {name:"Herrenschnitt",desc:"Waschen, Schneiden, Stylen",price:"35",dur:"45 Min",icon:"✂️"},
    {name:"Damenschnitt",desc:"Waschen, Schneiden, Föhnen",price:"55",dur:"60 Min",icon:"💇"},
    {name:"Balayage",desc:"Highlights & Color Melt",price:"120",dur:"150 Min",icon:"🎨"},
    {name:"Haartönung",desc:"Vollfarbe mit Pflege",price:"75",dur:"90 Min",icon:"✨"},
    {name:"Bart-Styling",desc:"Trimmen, Formen, Pflege",price:"25",dur:"30 Min",icon:"🪒"},
    {name:"Keratin-Kur",desc:"Intensive Glättungsbehandlung",price:"95",dur:"120 Min",icon:"💎"},
  ];

  const TIMES = ["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"];

  return (
    <main style={{minHeight:"100vh",background:"#fafaf8",color:"#1a1a1a",fontFamily:"'Segoe UI',sans-serif",overflowX:"hidden"}}>

      {/* DEMO BANNER */}
      <div style={{background:"linear-gradient(90deg,#8b5cf6,#ef4444)",padding:"10px",textAlign:"center",fontSize:"13px",fontWeight:"700",color:"white",letterSpacing:"1px"}}>
        🎨 DEMO SEITE — Erstellt von <a href="/" style={{color:"white",textDecoration:"underline"}}>WebIT AI</a> · So könnte dein Friseursalon aussehen!
      </div>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 56px",background:"rgba(250,250,248,0.95)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(0,0,0,0.06)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <div style={{width:"38px",height:"38px",background:"#1a1a1a",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>✂️</div>
          <div>
            <div style={{fontSize:"17px",fontWeight:"800",letterSpacing:"-0.5px",color:"#1a1a1a"}}>Studio <span style={{color:"#8b5cf6"}}>Élite</span></div>
            <div style={{fontSize:"10px",color:"rgba(0,0,0,0.35)",letterSpacing:"2px",textTransform:"uppercase"}}>Hair & Beauty</div>
          </div>
        </div>
        <div style={{display:"flex",gap:"28px"}}>
          {["Leistungen","Team","Galerie","Termine"].map(i=>(
            <a key={i} href="#" style={{color:"rgba(0,0,0,0.4)",textDecoration:"none",fontSize:"14px",fontWeight:"500",transition:"color 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.color="#1a1a1a"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(0,0,0,0.4)"}>{i}</a>
          ))}
        </div>
        <a href="#buchen" style={{padding:"10px 24px",background:"#1a1a1a",borderRadius:"100px",color:"white",fontWeight:"700",fontSize:"13px",textDecoration:"none",transition:"all 0.2s"}}
        onMouseEnter={e=>e.currentTarget.style.background="#8b5cf6"}
        onMouseLeave={e=>e.currentTarget.style.background="#1a1a1a"}>
          Termin buchen
        </a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:"88vh",display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",padding:"60px 56px",gap:"60px",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{opacity:loaded?1:0,transform:loaded?"translateX(0)":"translateX(-30px)",transition:"all 1s ease"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",background:"rgba(139,92,246,0.08)",border:"1px solid rgba(139,92,246,0.15)",borderRadius:"100px",fontSize:"11px",color:"#8b5cf6",fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"28px"}}>
            ✦ Premium Salon · Osternurken
          </div>
          <h1 style={{fontSize:"clamp(40px,5vw,72px)",fontWeight:"900",lineHeight:"1.05",letterSpacing:"-2.5px",marginBottom:"20px",color:"#1a1a1a"}}>
            Dein Haar.<br/>
            <span style={{color:"#8b5cf6"}}>Dein Style.</span><br/>
            Dein Moment.
          </h1>
          <p style={{color:"rgba(0,0,0,0.45)",fontSize:"17px",maxWidth:"460px",lineHeight:"1.75",marginBottom:"40px"}}>
            Professionelle Haarkunst mit über 10 Jahren Erfahrung — von der klassischen Pflege bis zum modernen Statement-Look.
          </p>
          <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
            <a href="#buchen" style={{padding:"15px 36px",background:"#1a1a1a",borderRadius:"12px",color:"white",fontWeight:"700",fontSize:"15px",textDecoration:"none",transition:"all 0.3s"}}
            onMouseEnter={e=>e.currentTarget.style.background="#8b5cf6"}
            onMouseLeave={e=>e.currentTarget.style.background="#1a1a1a"}>
              Termin buchen ✦
            </a>
            <a href="#leistungen" style={{padding:"15px 36px",background:"transparent",border:"2px solid rgba(0,0,0,0.1)",borderRadius:"12px",color:"#1a1a1a",fontWeight:"600",fontSize:"15px",textDecoration:"none",transition:"all 0.3s"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(0,0,0,0.3)"}
            onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(0,0,0,0.1)"}>
              Preisliste
            </a>
          </div>
          {/* MINI STATS */}
          <div style={{display:"flex",gap:"32px",marginTop:"48px",paddingTop:"32px",borderTop:"1px solid rgba(0,0,0,0.07)"}}>
            {[{n:"10+",l:"Jahre Erfahrung"},{n:"2.000+",l:"Zufriedene Kunden"},{n:"4.9★",l:"Google Bewertung"}].map(s=>(
              <div key={s.l}>
                <div style={{fontSize:"22px",fontWeight:"900",color:"#8b5cf6",letterSpacing:"-0.5px"}}>{s.n}</div>
                <div style={{fontSize:"11px",color:"rgba(0,0,0,0.35)",marginTop:"2px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HERO VISUAL */}
        <div style={{opacity:loaded?1:0,transform:loaded?"translateX(0)":"translateX(30px)",transition:"all 1s ease 0.2s",position:"relative"}}>
          <div style={{background:"linear-gradient(135deg,#f3f0ff,#fdf0f8)",borderRadius:"32px",padding:"48px",display:"flex",flexDirection:"column",gap:"16px",border:"1px solid rgba(139,92,246,0.1)"}}>
            <div style={{display:"flex",alignItems:"center",gap:"12px",padding:"16px",background:"white",borderRadius:"12px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
              <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"linear-gradient(135deg,#8b5cf6,#ec4899)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",flexShrink:0}}>💇</div>
              <div>
                <div style={{fontWeight:"700",fontSize:"14px",color:"#1a1a1a"}}>Nächster Termin</div>
                <div style={{fontSize:"13px",color:"rgba(0,0,0,0.4)"}}>Heute · 15:30 Uhr</div>
              </div>
              <div style={{marginLeft:"auto",padding:"4px 12px",background:"rgba(16,185,129,0.1)",borderRadius:"100px",color:"#10b981",fontSize:"11px",fontWeight:"700"}}>Bestätigt</div>
            </div>
            {["Balayage · Sarah K. · 14:00","Herrenschnitt · Max M. · 16:00","Keratin-Kur · Jana B. · 17:30"].map((a,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",background:"rgba(255,255,255,0.6)",borderRadius:"10px",fontSize:"13px",color:"rgba(0,0,0,0.5)"}}>
                <div style={{width:"8px",height:"8px",borderRadius:"50%",background:["#8b5cf6","#ef4444","#f59e0b"][i],flexShrink:0}}/>
                {a}
              </div>
            ))}
            <div style={{padding:"14px 16px",background:"rgba(139,92,246,0.08)",borderRadius:"10px",textAlign:"center",fontSize:"13px",color:"#8b5cf6",fontWeight:"600",border:"1px dashed rgba(139,92,246,0.2)"}}>
              ✦ 3 freie Slots heute noch verfügbar
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" style={{padding:"80px 56px",background:"#f5f4f0"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"8px"}}>Was wir anbieten</p>
          <h2 style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"44px",color:"#1a1a1a"}}>Unsere Leistungen</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"14px"}}>
            {SERVICES.map((s,i)=>(
              <div key={i} style={{background:"white",borderRadius:"16px",padding:"28px",transition:"all 0.3s",cursor:"pointer",border:"2px solid transparent",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(139,92,246,0.3)";e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(139,92,246,0.1)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="transparent";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.05)"}}>
                <div style={{fontSize:"28px",marginBottom:"12px"}}>{s.icon}</div>
                <h3 style={{fontSize:"16px",fontWeight:"700",color:"#1a1a1a",marginBottom:"6px"}}>{s.name}</h3>
                <p style={{color:"rgba(0,0,0,0.4)",fontSize:"13px",marginBottom:"16px",lineHeight:"1.5"}}>{s.desc}</p>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <span style={{fontSize:"20px",fontWeight:"900",color:"#1a1a1a"}}>€{s.price}</span>
                    <span style={{color:"rgba(0,0,0,0.3)",fontSize:"12px",marginLeft:"4px"}}>· {s.dur}</span>
                  </div>
                  <a href="#buchen" style={{padding:"7px 16px",background:"#1a1a1a",borderRadius:"8px",color:"white",fontWeight:"600",fontSize:"12px",textDecoration:"none",transition:"background 0.2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#8b5cf6"}
                  onMouseLeave={e=>e.currentTarget.style.background="#1a1a1a"}>Buchen</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{padding:"80px 56px",maxWidth:"1100px",margin:"0 auto"}}>
        <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"8px"}}>Unser Team</p>
        <h2 style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"44px",color:"#1a1a1a"}}>Eure Stylisten</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
          {[
            {name:"Lena Wagner",spec:"Coloristin & Balayage",exp:"10 Jahre",emoji:"👩‍🎨"},
            {name:"Marco Rossi",spec:"Herrenschnitt & Bart",exp:"7 Jahre",emoji:"💈"},
            {name:"Sofia Klein",spec:"Bridal & Hochsteckfrisuren",exp:"8 Jahre",emoji:"👑"},
          ].map((t,i)=>(
            <div key={i} style={{background:"#f5f4f0",borderRadius:"20px",padding:"32px",textAlign:"center",transition:"all 0.3s",border:"2px solid transparent"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(139,92,246,0.2)";e.currentTarget.style.transform="translateY(-4px)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="transparent";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{width:"80px",height:"80px",borderRadius:"50%",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",margin:"0 auto 16px"}}>
                {t.emoji}
              </div>
              <h3 style={{fontSize:"17px",fontWeight:"700",color:"#1a1a1a",marginBottom:"5px"}}>{t.name}</h3>
              <p style={{color:"#8b5cf6",fontSize:"13px",fontWeight:"600",marginBottom:"3px"}}>{t.spec}</p>
              <p style={{color:"rgba(0,0,0,0.35)",fontSize:"12px"}}>{t.exp} Erfahrung</p>
            </div>
          ))}
        </div>
      </section>

      {/* TERMIN BUCHEN */}
      <section id="buchen" style={{padding:"80px 56px",background:"#1a1a1a"}}>
        <div style={{maxWidth:"800px",margin:"0 auto"}}>
          <p style={{color:"#8b5cf6",fontSize:"11px",fontWeight:"700",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"8px",textAlign:"center"}}>Online buchen</p>
          <h2 style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:"900",letterSpacing:"-2px",marginBottom:"48px",color:"white",textAlign:"center"}}>Termin reservieren</h2>

          {!booked ? (
            <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"24px",padding:"40px",backdropFilter:"blur(10px)"}}>
              {/* STEP INDICATOR */}
              <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"36px",justifyContent:"center"}}>
                {[1,2,3].map(s=>(
                  <div key={s} style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <div style={{width:"32px",height:"32px",borderRadius:"50%",background:step>=s?"#8b5cf6":"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:"700",color:step>=s?"white":"rgba(255,255,255,0.3)",transition:"all 0.3s"}}>{s}</div>
                    {s<3&&<div style={{width:"40px",height:"1px",background:step>s?"#8b5cf6":"rgba(255,255,255,0.1)",transition:"all 0.3s"}}/>}
                  </div>
                ))}
              </div>

              {step===1 && (
                <div>
                  <p style={{color:"rgba(255,255,255,0.5)",fontSize:"14px",textAlign:"center",marginBottom:"24px"}}>Welche Leistung möchtest du?</p>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",marginBottom:"28px"}}>
                    {SERVICES.map((s,i)=>(
                      <div key={i} onClick={()=>setSelectedService(i)} style={{padding:"16px",background:selectedService===i?"rgba(139,92,246,0.2)":"rgba(255,255,255,0.04)",border:`1px solid ${selectedService===i?"#8b5cf6":"rgba(255,255,255,0.08)"}`,borderRadius:"12px",cursor:"pointer",transition:"all 0.2s",display:"flex",gap:"12px",alignItems:"center"}}>
                        <span style={{fontSize:"20px"}}>{s.icon}</span>
                        <div>
                          <div style={{fontWeight:"600",fontSize:"14px",color:"white"}}>{s.name}</div>
                          <div style={{fontSize:"12px",color:"rgba(255,255,255,0.35)"}}>{s.dur} · ab €{s.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={()=>selectedService!==null&&setStep(2)} style={{width:"100%",padding:"14px",background:selectedService!==null?"#8b5cf6":"rgba(255,255,255,0.08)",border:"none",borderRadius:"12px",color:"white",fontWeight:"700",fontSize:"15px",cursor:selectedService!==null?"pointer":"default",fontFamily:"inherit",transition:"all 0.3s"}}>
                    Weiter →
                  </button>
                </div>
              )}

              {step===2 && (
                <div>
                  <p style={{color:"rgba(255,255,255,0.5)",fontSize:"14px",textAlign:"center",marginBottom:"24px"}}>Wann möchtest du kommen?</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"8px",justifyContent:"center",marginBottom:"28px"}}>
                    {TIMES.map(t=>(
                      <button key={t} style={{padding:"10px 18px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",color:"rgba(255,255,255,0.6)",fontSize:"13px",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}
                      onMouseEnter={e=>{e.currentTarget.style.background="rgba(139,92,246,0.3)";e.currentTarget.style.borderColor="#8b5cf6";e.currentTarget.style.color="white"}}
                      onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";e.currentTarget.style.color="rgba(255,255,255,0.6)"}}
                      onClick={()=>setStep(3)}>{t}</button>
                    ))}
                  </div>
                  <button onClick={()=>setStep(1)} style={{width:"100%",padding:"12px",background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",color:"rgba(255,255,255,0.4)",fontSize:"14px",cursor:"pointer",fontFamily:"inherit"}}>← Zurück</button>
                </div>
              )}

              {step===3 && (
                <div>
                  <p style={{color:"rgba(255,255,255,0.5)",fontSize:"14px",textAlign:"center",marginBottom:"24px"}}>Fast geschafft! Deine Daten:</p>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"14px"}}>
                    <input placeholder="Dein Name" style={{padding:"13px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"white",fontSize:"14px",outline:"none",fontFamily:"inherit"}}/>
                    <input placeholder="Telefon" style={{padding:"13px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"white",fontSize:"14px",outline:"none",fontFamily:"inherit"}}/>
                  </div>
                  <input placeholder="E-Mail" style={{width:"100%",padding:"13px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"white",fontSize:"14px",outline:"none",fontFamily:"inherit",marginBottom:"20px",boxSizing:"border-box"}}/>
                  <button onClick={()=>setBooked(true)} style={{width:"100%",padding:"15px",background:"#8b5cf6",border:"none",borderRadius:"12px",color:"white",fontWeight:"700",fontSize:"15px",cursor:"pointer",fontFamily:"inherit",transition:"all 0.3s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#7c3aed"}
                  onMouseLeave={e=>e.currentTarget.style.background="#8b5cf6"}>
                    ✓ Termin bestätigen
                  </button>
                  <button onClick={()=>setStep(2)} style={{width:"100%",padding:"12px",background:"transparent",border:"none",color:"rgba(255,255,255,0.3)",fontSize:"14px",cursor:"pointer",fontFamily:"inherit",marginTop:"8px"}}>← Zurück</button>
                </div>
              )}
            </div>
          ) : (
            <div style={{background:"rgba(139,92,246,0.1)",border:"1px solid rgba(139,92,246,0.3)",borderRadius:"24px",padding:"56px",textAlign:"center",backdropFilter:"blur(10px)"}}>
              <div style={{fontSize:"48px",marginBottom:"16px"}}>✦</div>
              <h3 style={{fontSize:"28px",fontWeight:"900",color:"white",marginBottom:"10px"}}>Termin bestätigt!</h3>
              <p style={{color:"rgba(255,255,255,0.5)",lineHeight:"1.8"}}>
                Wir freuen uns auf deinen Besuch!<br/>Du erhältst eine Bestätigung per SMS.
              </p>
              <button onClick={()=>{setBooked(false);setStep(1);setSelectedService(null);}} style={{marginTop:"24px",padding:"12px 32px",background:"transparent",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"10px",color:"rgba(255,255,255,0.5)",fontSize:"14px",cursor:"pointer",fontFamily:"inherit"}}>Weiteren Termin buchen</button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:"1px solid rgba(0,0,0,0.06)",padding:"28px 56px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px",background:"#fafaf8"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"30px",height:"30px",background:"#1a1a1a",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px"}}>✂️</div>
          <span style={{fontWeight:"800",fontSize:"14px",color:"#1a1a1a"}}>Studio <span style={{color:"#8b5cf6"}}>Élite</span></span>
        </div>
        <div style={{display:"flex",gap:"20px"}}>
          <a href="#" style={{color:"rgba(0,0,0,0.25)",textDecoration:"none",fontSize:"13px"}}>Impressum</a>
          <a href="#" style={{color:"rgba(0,0,0,0.25)",textDecoration:"none",fontSize:"13px"}}>Datenschutz</a>
        </div>
        <div style={{textAlign:"right"}}>
          <p style={{color:"rgba(0,0,0,0.2)",fontSize:"12px"}}>Demo erstellt von</p>
          <a href="/" style={{color:"#8b5cf6",textDecoration:"none",fontWeight:"700",fontSize:"13px"}}>WebIT AI ✦</a>
        </div>
      </footer>
    </main>
  );
}
