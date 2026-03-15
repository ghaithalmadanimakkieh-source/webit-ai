import Link from "next/link";

export const metadata = {
  title: "AGB | WebIT AI",
  description: "Allgemeine Geschäftsbedingungen von WebIT AI - Ghaith Almadani",
};

export default function AGBPage() {
  return (
    <main style={{minHeight:"100vh",background:"#030305",color:"white",fontFamily:"'Inter', sans-serif",padding:"120px 24px",position:"relative"}}>
      
      {/* Background Glow */}
      <div style={{position:"fixed",top:"-20%",left:"50%",transform:"translateX(-50%)",width:"800px",height:"800px",background:"radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 70%)",pointerEvents:"none",zIndex:0}}/>

      <div style={{maxWidth:"800px",margin:"0 auto",position:"relative",zIndex:1,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"32px",padding:"60px",backdropFilter:"blur(20px)"}}>
        
        <Link href="/" style={{display:"inline-block",marginBottom:"40px",color:"#8b5cf6",textDecoration:"none",fontWeight:"700",fontSize:"14px",letterSpacing:"1px",textTransform:"uppercase"}}>
          ← Zurück zur Startseite
        </Link>

        <h1 style={{fontSize:"clamp(32px,5vw,48px)",fontWeight:"900",letterSpacing:"-1px",marginBottom:"16px"}}>Allgemeine Geschäftsbedingungen</h1>
        <p style={{color:"rgba(255,255,255,0.4)",marginBottom:"48px",fontSize:"14px"}}>Stand: März 2026 | WebIT AI - Ghaith Almadani</p>

        <div style={{display:"flex",flexDirection:"column",gap:"40px",color:"rgba(255,255,255,0.7)",lineHeight:"1.8",fontSize:"16px",fontWeight:"300"}}>
          
          <section>
            <h2 style={{color:"#fff",fontSize:"20px",fontWeight:"800",marginBottom:"16px"}}>§1 Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen und Angebote zwischen WebIT AI (Inh. Ghaith Almadani, nachfolgend "Dienstleister") und seinen Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Dienstleister stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
          </section>

          <section>
            <h2 style={{color:"#fff",fontSize:"20px",fontWeight:"800",marginBottom:"16px"}}>§2 Leistungsumfang und Vertragsschluss</h2>
            <p>1. Der Dienstleister erstellt maßgeschneiderte Webseiten, KI-Integrationen und Softwarelösungen.<br/>
               2. Ein Vertrag kommt erst durch eine schriftliche Auftragsbestätigung per E-Mail oder die Unterzeichnung eines Angebots zustande.</p>
          </section>

          <section>
            <h2 style={{color:"#fff",fontSize:"20px",fontWeight:"800",marginBottom:"16px"}}>§3 Preise und Zahlungsbedingungen</h2>
            <p>Alle angegebenen Preise sind Netto-Preise und verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. Soweit nicht anders vereinbart, sind Rechnungen innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig. Bei größeren Projekten behält sich der Dienstleister vor, eine Anzahlung von 50% vor Projektbeginn zu verlangen.</p>
          </section>

          <section>
            <h2 style={{color:"#fff",fontSize:"20px",fontWeight:"800",marginBottom:"16px"}}>§4 Mitwirkungspflichten des Kunden</h2>
            <p>Der Kunde ist verpflichtet, alle für die Umsetzung des Projekts notwendigen Daten (Texte, Bilder, Zugänge) rechtzeitig und in entsprechender Qualität zur Verfügung zu stellen. Verzögerungen, die durch den Kunden entstehen, verschieben die vereinbarten Lieferzeiten entsprechend.</p>
          </section>

          <section>
            <h2 style={{color:"#fff",fontSize:"20px",fontWeight:"800",marginBottom:"16px"}}>§5 Urheberrecht und Nutzungsrechte</h2>
            <p>Das Urheberrecht an den vom Dienstleister erstellten Codes, Designs und Konzepten verbleibt bis zur vollständigen Bezahlung beim Dienstleister. Nach vollständiger Bezahlung erhält der Kunde ein zeitlich und räumlich unbeschränktes Nutzungsrecht für den vereinbarten Zweck.</p>
          </section>

        </div>
      </div>
    </main>
  );
}