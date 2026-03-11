// @ts-nocheck
"use client";
export default function Datenschutz() {
  return (
    <main style={{minHeight:"100vh",background:"#050508",color:"white",fontFamily:"'Segoe UI',sans-serif",padding:"120px 40px 80px"}}>
      <div style={{maxWidth:"700px",margin:"0 auto"}}>
        <a href="/" style={{display:"inline-flex",alignItems:"center",gap:"8px",color:"rgba(255,255,255,0.4)",textDecoration:"none",fontSize:"14px",marginBottom:"48px",transition:"color 0.2s"}}
        onMouseEnter={e=>e.currentTarget.style.color="white"}
        onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.4)"}>
          ← Zurück zur Startseite
        </a>
        <h1 style={{fontSize:"48px",fontWeight:"900",letterSpacing:"-2px",marginBottom:"8px",background:"linear-gradient(135deg,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Datenschutz</h1>
        <p style={{color:"rgba(255,255,255,0.3)",marginBottom:"48px",fontSize:"14px"}}>Datenschutzerklärung gemäß DSGVO</p>

        <div style={{display:"flex",flexDirection:"column",gap:"28px"}}>
          {[
            {title:"1. Verantwortlicher",content:"Ghaith Almadani, 74749 Rosenberg, Baden-Württemberg. E-Mail: ghaith.almadani.makkieh@gmail.com"},
            {title:"2. Erhebung von Daten",content:"Diese Website erhebt keine personenbezogenen Daten ohne Ihre Einwilligung. Beim Besuch der Website werden technische Daten (IP-Adresse, Browsertyp, Uhrzeit) automatisch vom Server erfasst. Diese Daten werden nicht mit anderen Daten zusammengeführt."},
            {title:"3. Hosting — Vercel",content:"Diese Website wird bei Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA gehostet. Vercel verarbeitet Verbindungsdaten zur Auslieferung der Website. Weitere Informationen: vercel.com/legal/privacy-policy"},
            {title:"4. Kontaktaufnahme",content:"Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."},
            {title:"5. Ihre Rechte (DSGVO)",content:"Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Beschwerden können an die zuständige Aufsichtsbehörde Baden-Württemberg gerichtet werden: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg."},
            {title:"6. Cookies",content:"Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind."},
            {title:"7. Änderungen",content:"Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Stand: März 2025."},
          ].map((s,i)=>(
            <div key={i} style={{padding:"28px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"16px",backdropFilter:"blur(10px)"}}>
              <h2 style={{fontSize:"15px",fontWeight:"700",color:"#8b5cf6",marginBottom:"12px"}}>{s.title}</h2>
              <p style={{color:"rgba(255,255,255,0.5)",fontSize:"14px",lineHeight:"1.8"}}>{s.content}</p>
            </div>
          ))}
        </div>

        <div style={{marginTop:"48px",padding:"20px",borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
          <a href="/" style={{color:"#8b5cf6",textDecoration:"none",fontWeight:"700",fontSize:"14px"}}>← WebIT AI</a>
          <a href="/impressum" style={{color:"rgba(255,255,255,0.3)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"}}
          onMouseEnter={e=>e.currentTarget.style.color="white"}
          onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.3)"}>Impressum →</a>
        </div>
      </div>
    </main>
  );
}