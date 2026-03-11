// @ts-nocheck
"use client";
import { useState } from "react";

const MENU={
  "Antipasti":[{name:"Bruschetta al Pomodoro",desc:"Röstbrot, Tomaten, Basilikum",price:"8.50",veg:true},{name:"Burrata Pugliese",desc:"Cremige Burrata, Rucola, Kirschtomaten",price:"13.90",veg:true},{name:"Carpaccio di Manzo",desc:"Rindfleisch, Parmesan, Kapern",price:"16.50",veg:false}],
  "Pasta":[{name:"Spaghetti Carbonara",desc:"Original röm. Art, Guanciale, Pecorino",price:"17.90",veg:false},{name:"Tagliatelle al Ragù",desc:"Hausgemachte Pasta, langsam geschmortes Ragù",price:"18.50",veg:false},{name:"Penne all'Arrabbiata",desc:"Würzige Tomatensauce, Knoblauch, Chili",price:"14.90",veg:true}],
  "Secondi":[{name:"Branzino al Forno",desc:"Wolfsbarsch, Zitronenbutter, Kräuter",price:"28.90",veg:false},{name:"Bistecca Fiorentina",desc:"T-Bone 400g, Rosmarin, Meersalz",price:"42.00",veg:false},{name:"Pollo alla Griglia",desc:"Gegrilltes Huhn, mediterrane Kräuter",price:"22.50",veg:false}],
  "Dessert":[{name:"Tiramisù",desc:"Mascarpone, Ladyfinger, Espresso",price:"8.90",veg:true},{name:"Panna Cotta",desc:"Erdbeercoulis, frische Beeren",price:"7.90",veg:true},{name:"Cannoli Siciliani",desc:"Ricotta, Pistazien, Orangenschale",price:"8.50",veg:true}],
};

export default function RestaurantDemo() {
  const [cat, setCat] = useState("Antipasti");
  const [sent, setSent] = useState(false);
  return (
    <main className="rist-main">
      <style>{`
        .rist-main{min-height:100vh;background:#0a0800;color:#f5f0e8;font-family:'Georgia',serif;overflow-x:hidden}
        .rist-nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:13px 56px;background:rgba(10,8,0,0.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(212,175,55,0.12)}
        .rist-nav-links{display:flex;gap:24px;font-family:'Segoe UI',sans-serif}
        .rist-hero{padding:90px 56px;position:relative;overflow:hidden}
        .rist-h1{font-size:clamp(40px,6vw,72px);font-weight:400;line-height:1.1;letter-spacing:-1px;margin-bottom:18px}
        .rist-cta{display:flex;gap:12px;font-family:'Segoe UI',sans-serif;flex-wrap:wrap}
        .rist-stats{display:flex;gap:32px;margin-top:32px;font-family:'Segoe UI',sans-serif;flex-wrap:wrap}
        .rist-cats{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;font-family:'Segoe UI',sans-serif}
        .rist-menu-row{display:flex;justify-content:space-between;align-items:center;padding:20px 28px;background:#0a0800;gap:12px}
        .rist-form{display:flex;flex-direction:column;gap:12px;font-family:'Segoe UI',sans-serif}
        .rist-section{padding:50px 56px;max-width:920px;margin:0 auto}
        .rist-contact{padding:50px 56px;max-width:480px;margin:0 auto}
        .rist-footer{border-top:1px solid rgba(212,175,55,0.08);padding:18px 56px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-family:'Segoe UI',sans-serif}
        @media(max-width:768px){
          .rist-nav{padding:12px 16px}
          .rist-nav-links{display:none}
          .rist-hero{padding:52px 16px}
          .rist-h1{font-size:clamp(30px,9vw,44px);letter-spacing:-0.5px}
          .rist-cta{flex-direction:column}
          .rist-stats{gap:18px}
          .rist-menu-row{padding:14px 14px}
          .rist-section{padding:40px 16px}
          .rist-contact{padding:40px 16px}
          .rist-footer{padding:16px}
        }
      `}</style>

      <div style={{background:"linear-gradient(90deg,#d4af37,#b8941f)",padding:"9px",textAlign:"center",fontSize:"12px",fontWeight:"700",fontFamily:"'Segoe UI',sans-serif",color:"#0a0800"}}>
        🎨 DEMO — <a href="https://webit-ai.de" style={{color:"#0a0800",fontWeight:"800"}}>WebIT AI</a>
      </div>

      <nav className="rist-nav">
        <div>
          <div style={{fontWeight:"700",fontSize:"18px",letterSpacing:"2px",color:"#d4af37",fontFamily:"'Segoe UI',sans-serif"}}>LA BELLA</div>
          <div style={{fontSize:"9px",letterSpacing:"3px",color:"rgba(212,175,55,0.35)",fontFamily:"'Segoe UI',sans-serif"}}>RISTORANTE ITALIANO</div>
        </div>
        <div className="rist-nav-links">
          {["Menü","Weine","Reservierung","Über uns"].map(n=><a key={n} href="#" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none",fontSize:"13px"}}>{n}</a>)}
        </div>
        <a href="#reservierung" style={{padding:"8px 14px",border:"1px solid #d4af37",color:"#d4af37",fontSize:"12px",letterSpacing:"1px",textDecoration:"none",fontFamily:"'Segoe UI',sans-serif",fontWeight:"600"}}>RESERVIEREN</a>
      </nav>

      {/* HERO */}
      <section className="rist-hero">
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 60% 50%,rgba(212,175,55,0.06),transparent 60%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:"600px",position:"relative",zIndex:1}}>
          <div style={{fontSize:"10px",letterSpacing:"5px",color:"rgba(212,175,55,0.5)",fontFamily:"'Segoe UI',sans-serif",marginBottom:"14px",textTransform:"uppercase"}}>Dal 1985 · Milano</div>
          <h1 className="rist-h1">La cucina<br/><em style={{color:"#d4af37"}}>dell'anima.</em></h1>
          <p style={{color:"rgba(245,240,232,0.45)",fontSize:"15px",lineHeight:"1.9",maxWidth:"460px",marginBottom:"28px",fontFamily:"'Segoe UI',sans-serif"}}>
            Authentische italienische Küche — hausgemachte Pasta, frischeste Zutaten.
          </p>
          <div className="rist-cta">
            <a href="#reservierung" style={{padding:"13px 28px",background:"#d4af37",color:"#0a0800",fontWeight:"700",fontSize:"13px",textDecoration:"none",letterSpacing:"1px"}}>TISCH RESERVIEREN</a>
            <a href="#menu" style={{padding:"13px 28px",border:"1px solid rgba(212,175,55,0.3)",color:"rgba(212,175,55,0.7)",fontSize:"13px",textDecoration:"none",letterSpacing:"1px"}}>MENÜ ANSEHEN</a>
          </div>
          <div className="rist-stats">
            {[{n:"38+",l:"Jahre"},{n:"4.9★",l:"Google"},{n:"120",l:"Sitzplätze"},{n:"Di–So",l:"Geöffnet"}].map((s,i)=>(
              <div key={i}><div style={{fontSize:"20px",fontWeight:"700",color:"#d4af37"}}>{s.n}</div><div style={{fontSize:"10px",color:"rgba(245,240,232,0.3)",marginTop:"2px"}}>{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="rist-section">
        <div style={{fontSize:"10px",letterSpacing:"4px",color:"rgba(212,175,55,0.4)",fontFamily:"'Segoe UI',sans-serif",marginBottom:"10px",textAlign:"center",textTransform:"uppercase"}}>La Nostra Cucina</div>
        <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:"400",marginBottom:"24px",textAlign:"center"}}>Il Menù</h2>
        <div className="rist-cats">
          {Object.keys(MENU).map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:"7px 18px",background:cat===c?"#d4af37":"transparent",border:`1px solid ${cat===c?"#d4af37":"rgba(212,175,55,0.2)"}`,color:cat===c?"#0a0800":"rgba(212,175,55,0.6)",fontSize:"12px",letterSpacing:"1px",cursor:"pointer",fontFamily:"inherit"}}>{c.toUpperCase()}</button>)}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(212,175,55,0.06)"}}>
          {MENU[cat].map((item,i)=>(
            <div key={i} className="rist-menu-row"
            onMouseEnter={e=>e.currentTarget.style.background="#0f0d02"}
            onMouseLeave={e=>e.currentTarget.style.background="#0a0800"}>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px",flexWrap:"wrap"}}>
                  <span style={{fontWeight:"700",fontSize:"15px",color:"#f5f0e8"}}>{item.name}</span>
                  {item.veg&&<span style={{fontSize:"9px",padding:"2px 6px",background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.3)",color:"#6ee7b7",borderRadius:"100px",fontFamily:"'Segoe UI',sans-serif"}}>VEG</span>}
                </div>
                <div style={{fontSize:"12px",color:"rgba(245,240,232,0.35)",fontFamily:"'Segoe UI',sans-serif",lineHeight:"1.5"}}>{item.desc}</div>
              </div>
              <div style={{fontWeight:"700",fontSize:"16px",color:"#d4af37",flexShrink:0}}>€{item.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVIERUNG */}
      <section id="reservierung" className="rist-contact">
        <div style={{fontSize:"10px",letterSpacing:"4px",color:"rgba(212,175,55,0.4)",fontFamily:"'Segoe UI',sans-serif",marginBottom:"10px",textTransform:"uppercase"}}>Reservierung</div>
        <h2 style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:"400",marginBottom:"22px"}}>Ihren Tisch reservieren</h2>
        {sent?(
          <div style={{padding:"28px",border:"1px solid rgba(212,175,55,0.2)",textAlign:"center",fontFamily:"'Segoe UI',sans-serif"}}>
            <div style={{fontSize:"28px",marginBottom:"10px"}}>🍷</div>
            <p style={{color:"#d4af37",fontWeight:"600"}}>Vielen Dank! Wir bestätigen binnen 2h.</p>
          </div>
        ):(
          <div className="rist-form">
            {["Ihr Name","Telefon oder E-Mail","Anzahl Personen","Datum & Uhrzeit"].map((ph,i)=>(
              <input key={i} placeholder={ph} style={{background:"transparent",border:"none",borderBottom:"1px solid rgba(212,175,55,0.2)",padding:"11px 0",color:"#f5f0e8",fontSize:"14px",outline:"none",width:"100%",boxSizing:"border-box"}}/>
            ))}
            <button onClick={()=>setSent(true)} style={{padding:"13px",background:"#d4af37",color:"#0a0800",fontWeight:"700",fontSize:"12px",letterSpacing:"1px",border:"none",cursor:"pointer",marginTop:"6px"}}>RESERVIERUNG SENDEN →</button>
          </div>
        )}
      </section>

      <footer className="rist-footer">
        <span style={{color:"#d4af37",fontWeight:"700",letterSpacing:"2px",fontSize:"13px"}}>LA BELLA</span>
        <span style={{color:"rgba(245,240,232,0.2)",fontSize:"12px"}}>Demo von <a href="https://webit-ai.de" style={{color:"#d4af37"}}>WebIT AI</a></span>
      </footer>
    </main>
  );
}