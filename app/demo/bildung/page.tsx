// @ts-nocheck
"use client";
import { useState } from "react";

const COURSES=[
  {title:"Web Development",desc:"HTML, CSS, JavaScript, React — von 0 zum Job",emoji:"💻",dur:"12 Wochen",level:"Anfänger",price:"499",students:"1.240",color:"#a78bfa"},
  {title:"KI & Machine Learning",desc:"Python, TensorFlow, GPT-APIs — praxisnah",emoji:"🧠",dur:"8 Wochen",level:"Fortgeschritten",price:"399",students:"890",color:"#8b5cf6"},
  {title:"UI/UX Design",desc:"Figma, Design Systems, User Research",emoji:"🎨",dur:"6 Wochen",level:"Alle Level",price:"299",students:"2.100",color:"#a78bfa"},
  {title:"Digital Marketing",desc:"SEO, Ads, Social Media, Analytics",emoji:"📈",dur:"4 Wochen",level:"Anfänger",price:"199",students:"3.400",color:"#7c3aed"},
  {title:"Datenanalyse",desc:"Pandas, Matplotlib, SQL für Einsteiger",emoji:"📊",dur:"6 Wochen",level:"Mittel",price:"349",students:"670",color:"#6d28d9"},
  {title:"Video & Content",desc:"Filming, Editing, YouTube & TikTok",emoji:"🎬",dur:"5 Wochen",level:"Anfänger",price:"249",students:"1.800",color:"#8b5cf6"},
];

export default function BildungDemo() {
  const [enrolled, setEnrolled] = useState(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="bild-main">
      <style>{`
        .bild-main{min-height:100vh;background:#0a0612;font-family:'Segoe UI',sans-serif;color:white;overflow-x:hidden}
        .bild-nav{padding:13px 40px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.06);background:rgba(10,6,18,0.97);position:sticky;top:0;z-index:100}
        .bild-nav-links{display:flex;gap:22px}
        .bild-hero{padding:72px 40px;text-align:center;position:relative;overflow:hidden}
        .bild-h1{font-size:clamp(28px,6vw,64px);font-weight:900;line-height:1;letter-spacing:-2px;margin-bottom:12px}
        .bild-hero-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
        .bild-stats{display:flex;max-width:740px;margin:0 auto 44px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;overflow:hidden;flex-wrap:wrap}
        .bild-stat{flex:1 1 22%;min-width:70px;text-align:center;padding:16px 18px;border-right:1px solid rgba(255,255,255,0.06)}
        .bild-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:1050px;margin:0 auto}
        .bild-section{padding:0 40px 50px}
        .bild-newsletter{padding:0 40px 60px;max-width:480px;margin:0 auto;text-align:center}
        .bild-footer{border-top:1px solid rgba(255,255,255,0.05);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
        .bild-nl-form{display:flex;gap:8px}
        @media(max-width:768px){
          .bild-nav{padding:12px 16px}
          .bild-nav-links{display:none}
          .bild-hero{padding:50px 16px}
          .bild-h1{font-size:clamp(26px,8vw,40px);letter-spacing:-1px}
          .bild-hero-btns{flex-direction:column;align-items:center}
          .bild-stats{margin:0 16px 32px;border-radius:10px}
          .bild-stat{padding:12px 8px;border-right:none;border-bottom:1px solid rgba(255,255,255,0.06)}
          .bild-grid{grid-template-columns:1fr;gap:10px}
          .bild-section{padding:0 16px 40px}
          .bild-newsletter{padding:0 16px 50px}
          .bild-footer{padding:16px}
          .bild-nl-form{flex-direction:column}
        }
      `}</style>

      <div style={{background:"linear-gradient(135deg,#7c3aed,#a78bfa)",color:"white",textAlign:"center",padding:"9px",fontSize:"12px",fontWeight:"600"}}>
        🌐 DEMO — <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a>
      </div>

      <nav className="bild-nav">
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <div style={{width:"28px",height:"28px",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",borderRadius:"7px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px"}}>🎓</div>
          <span style={{fontWeight:"900",fontSize:"16px"}}>Learn<span style={{color:"#a78bfa"}}>AI</span></span>
        </div>
        <div className="bild-nav-links">
          {["Kurse","Dozenten","Preise","Blog"].map(n=><a key={n} href="#" style={{color:"rgba(255,255,255,0.4)",textDecoration:"none",fontSize:"13px"}}>{n}</a>)}
        </div>
        <a href="#kurse" style={{padding:"8px 14px",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",color:"white",borderRadius:"8px",fontWeight:"700",fontSize:"12px",textDecoration:"none"}}>Starten</a>
      </nav>

      {/* HERO */}
      <section className="bild-hero">
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 0%,rgba(124,58,237,0.14),transparent 60%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"7px",padding:"5px 14px",background:"rgba(124,58,237,0.14)",border:"1px solid rgba(124,58,237,0.3)",borderRadius:"100px",fontSize:"10px",color:"#c4b5fd",marginBottom:"14px",fontWeight:"600"}}>🎓 Online Kurse · Jederzeit · Überall</div>
          <h1 className="bild-h1">Lerne die Skills<br/><span style={{background:"linear-gradient(135deg,#7c3aed,#a78bfa,#c4b5fd)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>der Zukunft.</span></h1>
          <p style={{color:"rgba(255,255,255,0.38)",fontSize:"15px",marginBottom:"24px",maxWidth:"420px",margin:"0 auto 24px",lineHeight:"1.7"}}>KI, Coding, Design — lerne von Experten und starte neu.</p>
          <div className="bild-hero-btns">
            <a href="#kurse" style={{padding:"12px 26px",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",color:"white",fontWeight:"700",borderRadius:"10px",textDecoration:"none",fontSize:"14px",boxShadow:"0 8px 28px rgba(124,58,237,0.35)"}}>Kurse entdecken ✦</a>
            <a href="#" style={{padding:"12px 26px",background:"rgba(255,255,255,0.05)",color:"white",fontWeight:"600",borderRadius:"10px",textDecoration:"none",fontSize:"14px",border:"1px solid rgba(255,255,255,0.1)"}}>▶ Demo ansehen</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bild-stats">
        {[{n:"12.000+",l:"Studenten"},{n:"48",l:"Kurse"},{n:"4.9★",l:"Bewertung"},{n:"92%",l:"Joberfolg"}].map((s,i)=>(
          <div key={i} className="bild-stat">
            <div style={{fontSize:"clamp(14px,3vw,18px)",fontWeight:"900",color:"#a78bfa"}}>{s.n}</div>
            <div style={{fontSize:"10px",color:"rgba(255,255,255,0.28)",marginTop:"2px"}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* KURSE */}
      <section id="kurse" className="bild-section">
        <h2 style={{fontSize:"clamp(22px,4vw,32px)",fontWeight:"800",marginBottom:"6px",textAlign:"center"}}>Unsere Kurse</h2>
        <p style={{color:"rgba(255,255,255,0.28)",textAlign:"center",marginBottom:"22px",fontSize:"13px"}}>Von Experten aus der Praxis</p>
        <div className="bild-grid">
          {COURSES.map((c,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"14px",overflow:"hidden",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(124,58,237,0.4)";e.currentTarget.style.transform="translateY(-3px)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{height:"80px",background:`linear-gradient(135deg,${c.color}18,${c.color}06)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"38px"}}>{c.emoji}</div>
              <div style={{padding:"16px"}}>
                <div style={{display:"flex",gap:"6px",marginBottom:"7px",flexWrap:"wrap"}}>
                  <span style={{fontSize:"9px",padding:"2px 7px",background:"rgba(124,58,237,0.14)",border:"1px solid rgba(124,58,237,0.2)",borderRadius:"100px",color:"#c4b5fd"}}>{c.level}</span>
                  <span style={{fontSize:"9px",padding:"2px 7px",background:"rgba(255,255,255,0.04)",borderRadius:"100px",color:"rgba(255,255,255,0.3)"}}>{c.dur}</span>
                </div>
                <div style={{fontWeight:"800",fontSize:"14px",marginBottom:"4px",lineHeight:"1.3"}}>{c.title}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.3)",lineHeight:"1.5",marginBottom:"10px"}}>{c.desc}</div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"}}>
                  <div style={{fontWeight:"900",fontSize:"18px",color:c.color}}>€{c.price}</div>
                  <div style={{fontSize:"10px",color:"rgba(255,255,255,0.2)"}}>👥 {c.students}</div>
                </div>
                <button onClick={()=>setEnrolled(c.title)} style={{width:"100%",padding:"9px",background:enrolled===c.title?"#10b981":`linear-gradient(135deg,${c.color},${c.color}88)`,color:"white",fontWeight:"700",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontFamily:"inherit",transition:"all 0.3s"}}>
                  {enrolled===c.title?"✓ Eingeschrieben!":"Jetzt einschreiben"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bild-newsletter">
        <div style={{background:"rgba(124,58,237,0.07)",border:"1px solid rgba(124,58,237,0.18)",borderRadius:"16px",padding:"28px 22px"}}>
          <div style={{fontSize:"32px",marginBottom:"10px"}}>📬</div>
          <h2 style={{fontSize:"clamp(18px,4vw,20px)",fontWeight:"800",marginBottom:"6px"}}>Kostenlos starten</h2>
          <p style={{color:"rgba(255,255,255,0.3)",marginBottom:"18px",fontSize:"13px"}}>3 kostenlose Lektionen direkt in dein Postfach</p>
          {submitted?(
            <div style={{color:"#a78bfa",fontWeight:"700"}}>✓ Danke! Prüfe dein Postfach 📧</div>
          ):(
            <div className="bild-nl-form">
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Deine E-Mail Adresse" style={{flex:1,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:"10px",padding:"11px 13px",color:"white",fontSize:"13px",outline:"none"}}/>
              <button onClick={()=>setSubmitted(true)} style={{padding:"11px 18px",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",color:"white",fontWeight:"700",border:"none",borderRadius:"10px",cursor:"pointer",fontSize:"13px",fontFamily:"inherit",whiteSpace:"nowrap"}}>Starten →</button>
            </div>
          )}
        </div>
      </section>

      <footer className="bild-footer">
        <span style={{fontWeight:"900"}}>Learn<span style={{color:"#a78bfa"}}>AI</span></span>
        <span style={{color:"rgba(255,255,255,0.2)",fontSize:"12px"}}>Demo von <a href="https://webit-ai.de" style={{color:"#a78bfa"}}>WebIT AI</a></span>
      </footer>
    </main>
  );
}