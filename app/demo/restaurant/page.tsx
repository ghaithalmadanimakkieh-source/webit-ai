"use client";
import { useState, useEffect } from "react";

export default function RestaurantDemo() {
  const [loaded, setLoaded] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Vorspeisen");
  const [reservation, setReservation] = useState({persons:"2",date:"",time:"19:00"});
  const [reserved, setReserved] = useState(false);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const MENU: Record<string, {name:string,desc:string,price:string,tag?:string}[]> = {
    "Vorspeisen": [
      {name:"Burrata Classica",desc:"Büffelmozzarella, Kirschtomaten, Basilikum, Olivenöl extra vergine",price:"14,90",tag:"Chef's Pick"},
      {name:"Carpaccio di Manzo",desc:"Hauchfein geschnittenes Rinderfilet, Rucola, Parmesan, Kapern",price:"16,50"},
      {name:"Bruschetta Mista",desc:"Drei Variationen auf knusprigem Sauerteigbrot",price:"9,90"},
    ],
    "Hauptspeisen": [
      {name:"Risotto ai Funghi",desc:"Cremiges Steinpilz-Risotto, Trüffelöl, Parmesan, frische Kräuter",price:"22,90",tag:"Signature"},
      {name:"Saltimbocca Romano",desc:"Kalbsschnitzel, Prosciutto, Salbei, Weißwein-Soße",price:"28,50"},
      {name:"Pasta alla Norma",desc:"Hausgemachte Paccheri, gebratene Aubergine, Ricotta salata",price:"18,90"},
      {name:"Branzino al Forno",desc:"Ofengebackener Wolfsbarsch, mediterrane Gemüse, Zitrone",price:"32,00"},
    ],
    "Desserts": [
      {name:"Tiramisù della Nonna",desc:"Hausrezept, Löffelbiskuit, Espresso, Mascarpone, Kakao",price:"8,90",tag:"Hausgemacht"},
      {name:"Panna Cotta",desc:"Vanille, Erdbeercoulis, frische Beeren",price:"7,50"},
      {name:"Affogato al Caffè",desc:"Vanilleeis, doppelter Espresso, Amaretto optional",price:"7,90"},
    ],
  };

  return (
    <main style={{minHeight:"100vh",background:"#0c0a06",color:"#f5f0e8",fontFamily:"Georgia, serif",overflowX:"hidden"}}>

      {/* DEMO BANNER */}
      <div style={{background:"linear-gradient(90deg,#8b5cf6,#ef4444)",padding:"10px",textAlign:"center",fontSize:"13px",fontWeight:"700",fontFamily:"'Segoe UI',sans-serif",letterSpacing:"1px"}}>
        🎨 DEMO SEITE — Erstellt von <a href="/" style={{color:"white",textDecoration:"underline"}}>WebIT AI</a> · So könnte dein Restaurant aussehen!
      </div>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 56px",background:"rgba(12,10,6,0.95)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(212,175,55,0.15)"}}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:"22px",fontWeight:"700",letterSpacing:"3px",color:"#d4af37"}}>LA BELLA</div>
          <div style={{fontSize:"10px",letterSpacing:"4px",color:"rgba(245,240,232,0.4)",textTransform:"uppercase"}}>Ristorante & Bar</div>
        </div>
        <div style={{display:"flex",gap:"32px"}}>
          {["Speisekarte","Geschichte","Reservierung","Kontakt"].map(i=>(
            <a key={i} href="#" style={{color:"rgba(245,240,232,0.45)",textDecoration:"none",fontSize:"14px",letterSpacing:"1px",transition:"color 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.color="#d4af37"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(245,240,232,0.45)"}>{i}</a>
          ))}
        </div>
        <a href="#reservierung" style={{padding:"10px 24px",border:"1px solid #d4af37",borderRadius:"4px",color:"#d4af37",fontSize:"13px",textDecoration:"none",letterSpacing:"1px",transition:"all 0.3s"}}
        onMouseEnter={e=>{e.currentTarget.style.background="#d4af37";e.currentTarget.style.color="#0c0a06"}}
        onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#d4af37"}}>
          RESERVIEREN
        </a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:"85vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"80px 48px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 60%,rgba(212,175,55,0.06) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(212,175,55,0.04) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none"}}/>

        <div style={{opacity:loaded?1:0,transform:loaded?"translateY(0)":"translateY(30px)",transition:"all 1.2s ease",position:"relative",zIndex:1}}>
          <div style={{fontSize:"13px",letterSpacing:"6px",color:"#d4af37",textTransform:"uppercase",marginBottom:"20px",fontFamily:"'Segoe UI',sans-serif",fontWeight:"600"}}>
            ✦ Cucina Italiana Autentica ✦
          </div>
          <h1 style={{fontSize:"clamp(48px,8vw,110px)",fontWeight:"400",lineHeight:"1",letterSpacing:"-2px",marginBottom:"24px",fontStyle:"italic"}}>
            La <span style={{color:"#d4af37",fontStyle:"normal",fontWeight:"700"}}>Bella</span>
          </h1>
          <p style={{color:"rgba(245,240,232,0.45)",fontSize:"18px",maxWidth:"520px",margin:"0 auto 48px",lineHeight:"1.8",fontFamily:"'Segoe UI',sans-serif",fontStyle:"normal"}}>
            Authentische italienische Küche — frische Zutaten, überlieferte Rezepte, unvergessliche Abende seit 2016.
          </p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="#speisekarte" style={{padding:"15px 40px",background:"#d4af37",color:"#0c0a06",fontWeight:"700",fontSize:"14px",textDecoration:"none",letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Segoe UI',sans-serif",transition:"all 0.3s"}}
            onMouseEnter={e=>e.currentTarget.style.background="#b8962e"}
            onMouseLeave={e=>e.currentTarget.style.background="#d4af37"}>
              Speisekarte
            </a>
            <a href="#reservierung" style={{padding:"15px 40px",border:"1px solid rgba(245,240,232,0.2)",color:"rgba(245,240,232,0.7)",fontSize:"14px",textDecoration:"none",letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Segoe UI',sans-serif",transition:"all 0.3s"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(245,240,232,0.5)"}
            onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(245,240,232,0.2)"}>
              Tisch reservieren
            </a>
          </div>
        </div>

        {/* OPENING */}
        <div style={{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"48px",fontFamily:"'Segoe UI',sans-serif"}}>
          {[{l:"Dienstag–Freitag",v:"12:00 – 14:30 & 18:00 – 23:00"},{l:"Samstag–Sonntag",v:"12:00 – 23:00"}].map(h=>(
            <div key={h.l} style={{textAlign:"center"}}>
              <div style={{fontSize:"10px",letterSpacing:"2px",color:"#d4af37",textTransform:"uppercase",marginBottom:"4px"}}>{h.l}</div>
              <div style={{fontSize:"13px",color:"rgba(245,240,232,0.5)"}}>{h.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{display:"flex",alignItems:"center",gap:"20px",padding:"0 80px",margin:"0 auto",maxWidth:"800px"}}>
        <div style={{flex:1,height:"1px",background:"linear-gradient(90deg,transparent,rgba(212,175,55,0.3))"}}/>
        <span style={{color:"#d4af37",fontSize:"20px"}}>✦</span>
        <div style={{flex:1,height:"1px",background:"linear-gradient(90deg,rgba(212,175,55,0.3),transparent)"}}/>
      </div>

      {/* SPEISEKARTE */}
      <section id="speisekarte" style={{padding:"80px 56px",maxWidth:"900px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"48px"}}>
          <div style={{fontSize:"11px",letterSpacing:"4px",color:"#d4af37",textTransform:"uppercase",marginBottom:"12px",fontFamily:"'Segoe UI',sans-serif"}}>Unsere Karte</div>
          <h2 style={{fontSize:"clamp(32px,5vw,60px)",fontWeight:"400",letterSpacing:"-1px",marginBottom:"32px",fontStyle:"italic"}}>Speisekarte</h2>
          <div style={{display:"flex",gap:"4px",justifyContent:"center",background:"rgba(255,255,255,0.03)",padding:"4px",borderRadius:"6px",border:"1px solid rgba(212,175,55,0.1)",width:"fit-content",margin:"0 auto"}}>
            {Object.keys(MENU).map(cat=>(
              <button key={cat} onClick={()=>setActiveMenu(cat)} style={{padding:"9px 24px",borderRadius:"4px",background:activeMenu===cat?"#d4af37":"transparent",color:activeMenu===cat?"#0c0a06":"rgba(245,240,232,0.4)",fontWeight:activeMenu===cat?"700":"500",fontSize:"13px",border:"none",cursor:"pointer",fontFamily:"Georgia,serif",letterSpacing:"0.5px",transition:"all 0.2s"}}>{cat}</button>
            ))}
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          {MENU[activeMenu].map((item,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"24px 0",borderBottom:"1px solid rgba(212,175,55,0.08)",gap:"24px"}}>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"}}>
                  <h3 style={{fontSize:"18px",fontWeight:"400",fontStyle:"italic"}}>{item.name}</h3>
                  {item.tag&&<span style={{fontSize:"10px",padding:"2px 8px",background:"rgba(212,175,55,0.1)",border:"1px solid rgba(212,175,55,0.2)",color:"#d4af37",fontFamily:"'Segoe UI',sans-serif",fontStyle:"normal",letterSpacing:"1px"}}>{item.tag}</span>}
                </div>
                <p style={{color:"rgba(245,240,232,0.4)",fontSize:"13px",lineHeight:"1.6",fontFamily:"'Segoe UI',sans-serif",fontStyle:"normal"}}>{item.desc}</p>
              </div>
              <div style={{fontSize:"18px",color:"#d4af37",fontWeight:"400",whiteSpace:"nowrap",fontFamily:"'Segoe UI',sans-serif"}}>€ {item.price}</div>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",color:"rgba(245,240,232,0.2)",fontSize:"12px",marginTop:"24px",fontFamily:"'Segoe UI',sans-serif"}}>Alle Preise inkl. MwSt. · Allergene auf Anfrage</p>
      </section>

      {/* RESERVIERUNG */}
      <section id="reservierung" style={{padding:"80px 56px",maxWidth:"700px",margin:"0 auto"}}>
        <div style={{padding:"56px",background:"rgba(212,175,55,0.03)",border:"1px solid rgba(212,175,55,0.12)",borderRadius:"4px",fontFamily:"'Segoe UI',sans-serif"}}>
          {!reserved ? (
            <>
              <div style={{textAlign:"center",marginBottom:"40px"}}>
                <div style={{fontSize:"11px",letterSpacing:"4px",color:"#d4af37",textTransform:"uppercase",marginBottom:"10px"}}>Tisch reservieren</div>
                <h2 style={{fontSize:"36px",fontWeight:"400",fontStyle:"italic",fontFamily:"Georgia,serif"}}>Reservierung</h2>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"16px"}}>
                <div>
                  <label style={{display:"block",fontSize:"11px",letterSpacing:"2px",color:"rgba(245,240,232,0.4)",textTransform:"uppercase",marginBottom:"8px"}}>Personen</label>
                  <select value={reservation.persons} onChange={e=>setReservation(r=>({...r,persons:e.target.value}))} style={{width:"100%",padding:"12px 16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(212,175,55,0.15)",borderRadius:"4px",color:"#f5f0e8",fontSize:"14px",fontFamily:"'Segoe UI',sans-serif",outline:"none"}}>
                    {["1","2","3","4","5","6","7","8+"].map(n=><option key={n} value={n} style={{background:"#1a1508"}}>{n} {n==="1"?"Person":"Personen"}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{display:"block",fontSize:"11px",letterSpacing:"2px",color:"rgba(245,240,232,0.4)",textTransform:"uppercase",marginBottom:"8px"}}>Uhrzeit</label>
                  <select value={reservation.time} onChange={e=>setReservation(r=>({...r,time:e.target.value}))} style={{width:"100%",padding:"12px 16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(212,175,55,0.15)",borderRadius:"4px",color:"#f5f0e8",fontSize:"14px",fontFamily:"'Segoe UI',sans-serif",outline:"none"}}>
                    {["12:00","12:30","13:00","13:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map(t=><option key={t} value={t} style={{background:"#1a1508"}}>{t} Uhr</option>)}
                  </select>
                </div>
              </div>
              <div style={{marginBottom:"24px"}}>
                <label style={{display:"block",fontSize:"11px",letterSpacing:"2px",color:"rgba(245,240,232,0.4)",textTransform:"uppercase",marginBottom:"8px"}}>Datum</label>
                <input type="date" value={reservation.date} onChange={e=>setReservation(r=>({...r,date:e.target.value}))} style={{width:"100%",padding:"12px 16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(212,175,55,0.15)",borderRadius:"4px",color:"#f5f0e8",fontSize:"14px",fontFamily:"'Segoe UI',sans-serif",outline:"none",boxSizing:"border-box"}}/>
              </div>
              <button onClick={()=>reservation.date&&setReserved(true)} style={{width:"100%",padding:"15px",background:reservation.date?"#d4af37":"rgba(255,255,255,0.05)",border:"none",borderRadius:"4px",color:reservation.date?"#0c0a06":"rgba(255,255,255,0.2)",fontWeight:"700",fontSize:"14px",cursor:reservation.date?"pointer":"default",fontFamily:"'Segoe UI',sans-serif",letterSpacing:"2px",textTransform:"uppercase",transition:"all 0.3s"}}>
                Tisch reservieren
              </button>
            </>
          ) : (
            <div style={{textAlign:"center",padding:"20px 0"}}>
              <div style={{fontSize:"48px",marginBottom:"16px"}}>✦</div>
              <h3 style={{fontSize:"28px",fontWeight:"400",fontStyle:"italic",fontFamily:"Georgia,serif",color:"#d4af37",marginBottom:"12px"}}>Grazie!</h3>
              <p style={{color:"rgba(245,240,232,0.5)",lineHeight:"1.8"}}>Ihre Reservierung für <strong style={{color:"#f5f0e8"}}>{reservation.persons} {reservation.persons==="1"?"Person":"Personen"}</strong> am <strong style={{color:"#f5f0e8"}}>{reservation.date}</strong> um <strong style={{color:"#f5f0e8"}}>{reservation.time} Uhr</strong> wurde angefragt.</p>
              <p style={{color:"rgba(245,240,232,0.3)",fontSize:"13px",marginTop:"12px"}}>Wir bestätigen per E-Mail innerhalb von 2 Stunden.</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:"1px solid rgba(212,175,55,0.1)",padding:"32px 56px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px",fontFamily:"'Segoe UI',sans-serif"}}>
        <div>
          <div style={{fontSize:"16px",fontWeight:"700",letterSpacing:"3px",color:"#d4af37",fontFamily:"Georgia,serif"}}>LA BELLA</div>
          <p style={{color:"rgba(245,240,232,0.2)",fontSize:"12px",marginTop:"4px"}}>Brückenstr. 5 · 74749 Rosenberg</p>
        </div>
        <div style={{display:"flex",gap:"20px"}}>
          <a href="#" style={{color:"rgba(245,240,232,0.2)",textDecoration:"none",fontSize:"13px"}}>Impressum</a>
          <a href="#" style={{color:"rgba(245,240,232,0.2)",textDecoration:"none",fontSize:"13px"}}>Datenschutz</a>
        </div>
        <div style={{textAlign:"right"}}>
          <p style={{color:"rgba(245,240,232,0.18)",fontSize:"12px"}}>Demo erstellt von</p>
          <a href="/" style={{color:"#8b5cf6",textDecoration:"none",fontWeight:"700",fontSize:"13px"}}>WebIT AI ✦</a>
        </div>
      </footer>
    </main>
  );
}
