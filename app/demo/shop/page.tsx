// @ts-nocheck
"use client";
import { useState } from "react";

const PRODUCTS = [
  {name:"Premium Sneaker",price:"129",oldPrice:"179",cat:"Schuhe",emoji:"👟",tag:"Sale",color:"#ec4899"},
  {name:"Casual Hoodie",price:"79",oldPrice:"",cat:"Kleidung",emoji:"👕",tag:"Neu",color:"#8b5cf6"},
  {name:"Slim Jeans",price:"89",oldPrice:"120",cat:"Kleidung",emoji:"👖",tag:"Sale",color:"#3b82f6"},
  {name:"Leather Bag",price:"159",oldPrice:"",cat:"Taschen",emoji:"👜",tag:"Beliebt",color:"#f97316"},
  {name:"Sport Watch",price:"199",oldPrice:"249",cat:"Accessoires",emoji:"⌚",tag:"Sale",color:"#10b981"},
  {name:"Sunglasses",price:"69",oldPrice:"",cat:"Accessoires",emoji:"🕶️",tag:"",color:"#f59e0b"},
  {name:"Running Shoes",price:"149",oldPrice:"189",cat:"Schuhe",emoji:"🏃",tag:"Sale",color:"#ef4444"},
  {name:"Silk Scarf",price:"49",oldPrice:"",cat:"Accessoires",emoji:"🧣",tag:"Neu",color:"#ec4899"},
];

export default function ShopDemo() {
  const [cart, setCart] = useState<string[]>([]);
  const [filter, setFilter] = useState("Alle");
  const [added, setAdded] = useState<string|null>(null);

  const cats = ["Alle","Schuhe","Kleidung","Taschen","Accessoires"];
  const filtered = filter==="Alle" ? PRODUCTS : PRODUCTS.filter(p=>p.cat===filter);

  function addToCart(name:string) {
    setCart(c=>[...c,name]);
    setAdded(name);
    setTimeout(()=>setAdded(null),1500);
  }

  return (
    <main style={{minHeight:"100vh",background:"#fafafa",fontFamily:"'Segoe UI',sans-serif",color:"#111"}}>
      <div style={{background:"linear-gradient(135deg,#ec4899,#8b5cf6)",color:"white",textAlign:"center",padding:"10px",fontSize:"13px",fontWeight:"600"}}>
        🌐 Demo erstellt von <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a> — webit-ai.de
      </div>

      {/* Nav */}
      <nav style={{background:"white",boxShadow:"0 1px 12px rgba(0,0,0,0.08)",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100}}>
        <div style={{padding:"18px 0",fontWeight:"900",fontSize:"20px",letterSpacing:"-1px"}}>
          <span style={{background:"linear-gradient(135deg,#ec4899,#8b5cf6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>NOVA</span>
          <span style={{color:"#111"}}>STYLE</span>
        </div>
        <div style={{display:"flex",gap:"28px"}}>
          {["Neu","Sale","Damen","Herren","Accessoires"].map(n=>(
            <a key={n} href="#" style={{color:"#64748b",textDecoration:"none",fontSize:"14px",fontWeight:"500"}}>{n}</a>
          ))}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
          <span style={{fontSize:"14px",color:"#64748b"}}>🔍</span>
          <span style={{fontSize:"14px",color:"#64748b"}}>❤️</span>
          <div style={{position:"relative",cursor:"pointer"}}>
            <span style={{fontSize:"20px"}}>🛒</span>
            {cart.length>0&&<div style={{position:"absolute",top:"-6px",right:"-6px",width:"18px",height:"18px",background:"linear-gradient(135deg,#ec4899,#8b5cf6)",borderRadius:"50%",color:"white",fontSize:"10px",fontWeight:"700",display:"flex",alignItems:"center",justifyContent:"center"}}>{cart.length}</div>}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{background:"linear-gradient(135deg,#1a0830,#2d1b69)",color:"white",padding:"80px 40px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",alignItems:"center"}}>
        <div>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",background:"rgba(236,72,153,0.2)",border:"1px solid rgba(236,72,153,0.4)",borderRadius:"100px",fontSize:"12px",color:"#f9a8d4",marginBottom:"20px",fontWeight:"600"}}>
            ✦ Neue Kollektion 2026
          </div>
          <h1 style={{fontSize:"clamp(32px,5vw,60px)",fontWeight:"900",lineHeight:"1",letterSpacing:"-2px",marginBottom:"16px"}}>
            Style that<br/>
            <span style={{background:"linear-gradient(135deg,#ec4899,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>moves you.</span>
          </h1>
          <p style={{opacity:0.6,fontSize:"15px",lineHeight:"1.7",marginBottom:"32px"}}>Entdecke die neuesten Trends — kostenloser Versand ab 50€.</p>
          <div style={{display:"flex",gap:"12px"}}>
            <a href="#produkte" style={{padding:"14px 28px",background:"linear-gradient(135deg,#ec4899,#8b5cf6)",color:"white",fontWeight:"700",borderRadius:"10px",textDecoration:"none",fontSize:"14px"}}>Jetzt shoppen ✦</a>
            <a href="#" style={{padding:"14px 28px",background:"rgba(255,255,255,0.08)",color:"white",fontWeight:"600",borderRadius:"10px",textDecoration:"none",fontSize:"14px",border:"1px solid rgba(255,255,255,0.15)"}}>Sale ansehen</a>
          </div>
        </div>
        <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"}}>
          {["👟","👜","🕶️","⌚"].map((e,i)=>(
            <div key={i} style={{width:"90px",height:"90px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"40px",animation:`float${i} ${6+i}s ease-in-out infinite`}}>{e}</div>
          ))}
        </div>
      </section>

      {/* Filter */}
      <section id="produkte" style={{padding:"40px 40px 20px",display:"flex",gap:"8px",flexWrap:"wrap"}}>
        {cats.map(c=>(
          <button key={c} onClick={()=>setFilter(c)} style={{padding:"8px 20px",borderRadius:"100px",background:filter===c?"linear-gradient(135deg,#ec4899,#8b5cf6)":"white",border:`1px solid ${filter===c?"transparent":"#e2e8f0"}`,color:filter===c?"white":"#64748b",fontWeight:"600",cursor:"pointer",fontSize:"13px",fontFamily:"inherit",boxShadow:filter===c?"0 4px 16px rgba(236,72,153,0.3)":"none"}}>{c}</button>
        ))}
      </section>

      {/* Products */}
      <section style={{padding:"20px 40px 60px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",maxWidth:"1200px",margin:"0 auto"}}>
        {filtered.map((p,i)=>(
          <div key={i} style={{background:"white",borderRadius:"16px",overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",transition:"all 0.3s"}}
          onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 20px 40px rgba(0,0,0,0.12)"}}
          onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.06)"}}>
            <div style={{height:"160px",background:`linear-gradient(135deg,${p.color}15,${p.color}05)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"56px",position:"relative"}}>
              {p.emoji}
              {p.tag&&<div style={{position:"absolute",top:"10px",left:"10px",background:p.tag==="Sale"?"#ef4444":p.tag==="Neu"?"#10b981":"#8b5cf6",color:"white",fontSize:"10px",fontWeight:"700",padding:"3px 10px",borderRadius:"100px"}}>{p.tag}</div>}
              <button onClick={()=>addToCart(p.name)} style={{position:"absolute",bottom:"10px",right:"10px",width:"32px",height:"32px",background:"white",border:"none",borderRadius:"50%",cursor:"pointer",fontSize:"14px",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"}}>❤️</button>
            </div>
            <div style={{padding:"14px"}}>
              <div style={{fontSize:"11px",color:"#94a3b8",marginBottom:"4px"}}>{p.cat}</div>
              <div style={{fontWeight:"700",marginBottom:"8px",fontSize:"14px"}}>{p.name}</div>
              <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}}>
                <span style={{fontWeight:"900",fontSize:"16px",color:p.color}}>€{p.price}</span>
                {p.oldPrice&&<span style={{fontSize:"12px",color:"#94a3b8",textDecoration:"line-through"}}>€{p.oldPrice}</span>}
              </div>
              <button onClick={()=>addToCart(p.name)} style={{width:"100%",padding:"9px",background:added===p.name?"#10b981":`linear-gradient(135deg,${p.color},${p.color}99)`,color:"white",fontWeight:"700",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontFamily:"inherit",transition:"all 0.3s"}}>
                {added===p.name?"✓ Hinzugefügt!":"In den Warenkorb"}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Banner */}
      <section style={{background:"linear-gradient(135deg,#1a0830,#2d1b69)",color:"white",padding:"48px 40px",textAlign:"center",margin:"0 40px 60px",borderRadius:"20px"}}>
        <h2 style={{fontSize:"32px",fontWeight:"900",marginBottom:"8px"}}>Kostenloser Versand 🚀</h2>
        <p style={{opacity:0.6,marginBottom:"20px"}}>Ab 50€ Bestellwert · Lieferung in 2-3 Tagen</p>
        <a href="#produkte" style={{padding:"12px 28px",background:"linear-gradient(135deg,#ec4899,#8b5cf6)",color:"white",fontWeight:"700",borderRadius:"10px",textDecoration:"none",fontSize:"14px"}}>Jetzt bestellen</a>
      </section>

      <footer style={{background:"#111",color:"white",padding:"28px 40px",textAlign:"center",fontSize:"13px",color:"rgba(255,255,255,0.3)"}}>
        © 2026 NovaStyle · Demo von <a href="https://webit-ai.de" style={{color:"#ec4899"}}>WebIT AI</a>
      </footer>

      <style>{`
        @keyframes float0{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes float1{0%,100%{transform:translateY(-5px)}50%{transform:translateY(5px)}}
        @keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes float3{0%,100%{transform:translateY(-4px)}50%{transform:translateY(8px)}}
      `}</style>
    </main>
  );
}