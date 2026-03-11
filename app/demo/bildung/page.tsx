// @ts-nocheck
"use client";
import { useState } from "react";

const COURSES = [
  {title:"Web Development Bootcamp",desc:"HTML, CSS, JavaScript, React — von 0 zum Job",emoji:"💻",dur:"12 Wochen",level:"Anfänger",price:"499",students:"1.240",color:"#a78bfa"},
  {title:"KI & Machine Learning",desc:"Python, TensorFlow, GPT-APIs — praxisnah",emoji:"🧠",dur:"8 Wochen",level:"Fortgeschritten",price:"399",students:"890",color:"#8b5cf6"},
  {title:"UI/UX Design",desc:"Figma, Design Systems, User Research",emoji:"🎨",dur:"6 Wochen",level:"Alle Level",price:"299",students:"2.100",color:"#a78bfa"},
  {title:"Digital Marketing",desc:"SEO, Ads, Social Media, Analytics",emoji:"📈",dur:"4 Wochen",level:"Anfänger",price:"199",students:"3.400",color:"#7c3aed"},
  {title:"Datenanalyse mit Python",desc:"Pandas, Matplotlib, SQL für Einsteiger",emoji:"📊",dur:"6 Wochen",level:"Mittel",price:"349",students:"670",color:"#6d28d9"},
  {title:"Video & Content Creation",desc:"Filming, Editing, YouTube & TikTok Wachstum",emoji:"🎬",dur:"5 Wochen",level:"Anfänger",price:"249",students:"1.800",color:"#8b5cf6"},
];

export default function BildungDemo() {
  const [enrolled, setEnrolled] = useState<string|null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main style={{minHeight:"100vh",background:"#0a0612",fontFamily:"'Segoe UI',sans-serif",color:"white"}}>
      <div style={{background:"linear-gradient(135deg,#7c3aed,#a78bfa)",color:"white",textAlign:"center",padding:"10px",fontSize:"13px",fontWeight:"600"}}>
        🌐 Demo erstellt von <a href="https://webit-ai.de" style={{color:"white",fontWeight:"800"}}>WebIT AI</a> — webit-ai.de
      </div>

      {/* Nav */}
      <nav style={{padding:"18px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.06)",background:"rgba(10,6,18,0.95)",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"36px",height:"36px",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>🎓</div>
          <span style={{fontWeight:"900",fontSize:"18px"}}>Learn<span style={{color:"#a78bfa"}}>AI</span></span>
        </div>
        <div style={{display:"flex",gap:"28px"}}>
          {["Kurse","Dozenten","Preise","Blog"].map(n=>(
            <a key={n} href="#" style={{color:"rgba(255,255,255,0.4)",textDecoration:"none",fontSize:"14px"}}>{n}</a>
          ))}
        </div>
        <a href="#kurse" style={{padding:"9px 20px",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",color:"white",borderRadius:"8px",fontWeight:"700",fontSize:"13px",textDecoration:"none"}}>Kostenlos starten</a>
      </nav>

      {/* Hero */}
      <section style={{padding:"90px 40px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 0%,rgba(124,58,237,0.15),transparent 60%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",background:"rgba(124,58,237,0.15)",border:"1px solid rgba(124,58,237,0.35)",borderRadius:"100px",fontSize:"12px",color:"#c4b5fd",marginBottom:"20px",fontWeight:"600"}}>
            🎓 Online Kurse · Jederzeit · Überall
          </div>
          <h1 style={{fontSize:"clamp(32px,6vw,72px)",fontWeight:"900",lineHeight:"1",letterSpacing:"-3px",marginBottom:"16px"}}>
            Lerne die Skills<br/>
            <span style={{background:"linear-gradient(135deg,#7c3aed,#a78bfa,#c4b5fd)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>der Zukunft.</span>
          </h1>
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:"16px",marginBottom:"36px",maxWidth:"500px",margin:"0 auto 36px",lineHeight:"1.7"}}>
            KI, Coding, Design — lerne von Experten und starte deine Karriere neu.
          </p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center"}}>
            <a href="#kurse" style={{padding:"14px 32px",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",color:"white",fontWeight:"700",borderRadius:"10px",textDecoration:"none",fontSize:"15px",boxShadow:"0 8px 32px rgba(124,58,237,0.4)"}}>Kurse entdecken ✦</a>
            <a href="#" style={{padding:"14px 32px",background:"rgba(255,255,255,0.05)",color:"white",fontWeight:"600",borderRadius:"10px",textDecoration:"none",fontSize:"15px",border:"1px solid rgba(255,255,255,0.1)"}}>▶ Demo ansehen</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{display:"flex",maxWidth:"800px",margin:"0 auto 60px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"16px",overflow:"hidden"}}>
        {[{n:"12.000+",l:"Studenten"},{n:"48",l:"Kurse"},{n:"4.9★",l:"Bewertung"},{n:"92%",l:"Joberfolg"}].map((s,i)=>(
          <div key={i} style={{flex:1,textAlign:"center",padding:"20px",borderRight:i<3?"1px solid rgba(255,255,255,0.06)":"none"}}>
            <div style={{fontSize:"22px",fontWeight:"900",color:"#a78bfa"}}>{s.n}</div>
            <div style={{fontSize:"11px",color:"rgba(255,255,255,0.3)",marginTop:"3px"}}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* Courses */}
      <section id="kurse" style={{padding:"0 40px 60px",maxWidth:"1100px",margin:"0 auto"}}>
        <h2 style={{fontSize:"36px",fontWeight:"800",marginBottom:"8px",textAlign:"center"}}>Unsere Kurse</h2>
        <p style={{color:"rgba(255,255,255,0.3)",textAlign:"center",marginBottom:"36px"}}>Von Experten aus der Praxis</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {COURSES.map((c,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"16px",overflow:"hidden",transition:"all 0.3s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(124,58,237,0.4)";e.currentTarget.style.transform="translateY(-4px)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{height:"100px",background:`linear-gradient(135deg,${c.color}20,${c.color}08)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"44px"}}>
                {c.emoji}
              </div>
              <div style={{padding:"18px"}}>
                <div style={{display:"flex",gap:"6px",marginBottom:"10px",flexWrap:"wrap"}}>
                  <span style={{fontSize:"10px",padding:"3px 8px",background:"rgba(124,58,237,0.15)",border:"1px solid rgba(124,58,237,0.25)",borderRadius:"100px",color:"#c4b5fd"}}>{c.level}</span>
                  <span style={{fontSize:"10px",padding:"3px 8px",background:"rgba(255,255,255,0.05)",borderRadius:"100px",color:"rgba(255,255,255,0.4)"}}>{c.dur}</span>
                </div>
                <div style={{fontWeight:"800",fontSize:"15px",marginBottom:"6px",lineHeight:"1.3"}}>{c.title}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.35)",lineHeight:"1.5",marginBottom:"14px"}}>{c.desc}</div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"}}>
                  <div style={{fontWeight:"900",fontSize:"18px",color:c.color}}>€{c.price}</div>
                  <div style={{fontSize:"11px",color:"rgba(255,255,255,0.25)"}}>👥 {c.students} Studenten</div>
                </div>
                <button onClick={()=>setEnrolled(c.title)} style={{width:"100%",padding:"10px",background:enrolled===c.title?"#10b981":`linear-gradient(135deg,${c.color},${c.color}99)`,color:"white",fontWeight:"700",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontFamily:"inherit",transition:"all 0.3s"}}>
                  {enrolled===c.title?"✓ Eingeschrieben!":"Jetzt einschreiben"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{padding:"60px 40px",maxWidth:"560px",margin:"0 auto",textAlign:"center"}}>
        <div style={{background:"rgba(124,58,237,0.08)",border:"1px solid rgba(124,58,237,0.2)",borderRadius:"20px",padding:"40px"}}>
          <div style={{fontSize:"40px",marginBottom:"14px"}}>📬</div>
          <h2 style={{fontSize:"24px",fontWeight:"800",marginBottom:"8px"}}>Kostenlos starten</h2>
          <p style={{color:"rgba(255,255,255,0.35)",marginBottom:"24px",fontSize:"14px"}}>Erhalte 3 kostenlose Lektionen direkt in dein Postfach</p>
          {submitted ? (
            <div style={{color:"#a78bfa",fontWeight:"700"}}>✓ Danke! Prüfe dein E-Mail Postfach 📧</div>
          ) : (
            <div style={{display:"flex",gap:"8px"}}>
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Deine E-Mail Adresse" style={{flex:1,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"12px 14px",color:"white",fontSize:"14px",outline:"none"}}/>
              <button onClick={()=>setSubmitted(true)} style={{padding:"12px 20px",background:"linear-gradient(135deg,#7c3aed,#a78bfa)",color:"white",fontWeight:"700",border:"none",borderRadius:"10px",cursor:"pointer",fontSize:"13px",fontFamily:"inherit",whiteSpace:"nowrap"}}>Starten →</button>
            </div>
          )}
        </div>
      </section>

      <footer style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"24px 40px",textAlign:"center",color:"rgba(255,255,255,0.2)",fontSize:"13px"}}>
        © 2026 LearnAI · Demo von <a href="https://webit-ai.de" style={{color:"#a78bfa"}}>WebIT AI</a>
      </footer>
    </main>
  );
}