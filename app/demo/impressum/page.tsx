export default function Impressum() {
  return (
    <main style={{minHeight:"100vh",background:"#050508",color:"white",fontFamily:"'Segoe UI',sans-serif",padding:"120px 40px 80px"}}>
      <div style={{maxWidth:"700px",margin:"0 auto"}}>
        <a href="/" style={{display:"inline-flex",alignItems:"center",gap:"8px",color:"rgba(255,255,255,0.4)",textDecoration:"none",fontSize:"14px",marginBottom:"48px",transition:"color 0.2s"}}
        onMouseEnter={e=>e.currentTarget.style.color="white"}
        onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.4)"}>
          ← Zurück zur Startseite
        </a>
        <h1 style={{fontSize:"48px",fontWeight:"900",letterSpacing:"-2px",marginBottom:"8px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Impressum</h1>
        <p style={{color:"rgba(255,255,255,0.3)",marginBottom:"48px",fontSize:"14px"}}>Angaben gemäß § 5 TMG</p>

        <div style={{display:"flex",flexDirection:"column",gap:"32px"}}>
          {[
            {title:"Betreiber & Verantwortlicher",content:["Ghaith Almadani","74749 Rosenberg","Baden-Württemberg, Deutschland"]},
            {title:"Kontakt",content:["E-Mail: ghaith.almadani.makkieh@gmail.com","Telefon: +49 176 85974436"]},
            {title:"Berufsbezeichnung",content:["Webentwickler & KI-Spezialist","WebIT AI — Einzelunternehmen"]},
            {title:"Haftungsausschluss",content:["Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen werden."]},
            {title:"Urheberrecht",content:["Die durch den Betreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung."]},
          ].map((s,i)=>(
            <div key={i} style={{padding:"28px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"16px",backdropFilter:"blur(10px)"}}>
              <h2 style={{fontSize:"16px",fontWeight:"700",color:"#8b5cf6",marginBottom:"14px",letterSpacing:"0.5px"}}>{s.title}</h2>
              {s.content.map((c,j)=><p key={j} style={{color:"rgba(255,255,255,0.55)",fontSize:"14px",lineHeight:"1.8"}}>{c}</p>)}
            </div>
          ))}
        </div>

        <div style={{marginTop:"48px",padding:"20px",borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
          <a href="/" style={{color:"#8b5cf6",textDecoration:"none",fontWeight:"700",fontSize:"14px"}}>← WebIT AI</a>
          <a href="/datenschutz" style={{color:"rgba(255,255,255,0.3)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"}}
          onMouseEnter={e=>e.currentTarget.style.color="white"}
          onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.3)"}>Datenschutz →</a>
        </div>
      </div>
    </main>
  );
}