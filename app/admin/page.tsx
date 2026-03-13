// @ts-nocheck
"use client";
import { useState, useEffect, useRef } from "react";

const PASSWORD = "Madani.09630";

const TABS = {
  hero: {
    label: "🏠 Hero",
    fields: {
      badge: { label: "Badge Text", type: "input", val: "KI-gestützte Web-Entwicklung · 2026" },
      h1a: { label: "Überschrift Zeile 1", type: "input", val: "Gestern analog." },
      h1b: { label: "Überschrift Zeile 2 (lila)", type: "input", val: "Heute digital." },
      h2: { label: "Unterzeile", type: "input", val: "Morgen mit KI — weit vor der Konkurrenz." },
      desc: { label: "Beschreibung", type: "textarea", val: "Wir bauen dir eine professionelle Webseite — automatisiert, modern, mit echter KI." },
      cta1: { label: "Button 1", type: "input", val: "Live Demos" },
      cta2: { label: "Button 2", type: "input", val: "Anfragen ✦" },
    }
  },
  kontakt: {
    label: "📞 Kontakt",
    fields: {
      headline: { label: "Überschrift", type: "input", val: "Starte dein Projekt noch heute." },
      subline: { label: "Lila Text", type: "input", val: "professionelle Webseite?" },
      desc: { label: "Beschreibungstext", type: "textarea", val: "Kostenlose Erstberatung — ich analysiere dein Business und zeige dir genau was du brauchst. Kein Risiko, keine versteckten Kosten." },
      wa_sub: { label: "WhatsApp Untertitel", type: "input", val: "+49 176 85974436 · Antwort in 1 Stunde" },
      mail_text: { label: "E-Mail Button Text", type: "input", val: "E-Mail — Gmail öffnen" },
      phone: { label: "Telefonnummer", type: "input", val: "+49 176 85974436" },
      email: { label: "E-Mail Adresse", type: "input", val: "ghaith.almadani.makkieh@gmail.com" },
      location: { label: "Standort", type: "input", val: "Rosenberg, Baden-Württemberg" },
    }
  },
  preise: {
    label: "💰 Preise",
    fields: {
      t1_name: { label: "Paket 1 Name", type: "input", val: "Starter" },
      t1_price: { label: "Paket 1 Preis (€)", type: "input", val: "299" },
      t1_features: { label: "Paket 1 Features (eine pro Zeile)", type: "textarea", val: "1 Landing Page\nMobile-optimiert\nKontaktformular\nGoogle Maps\n14 Tage Support" },
      t2_name: { label: "Paket 2 Name", type: "input", val: "Business" },
      t2_price: { label: "Paket 2 Preis (€)", type: "input", val: "799" },
      t2_features: { label: "Paket 2 Features", type: "textarea", val: "Bis 6 Seiten\nCMS System\nSEO Optimierung\nGoogle Analytics\n60 Tage Support" },
      t3_name: { label: "Paket 3 Name", type: "input", val: "Premium" },
      t3_price: { label: "Paket 3 Preis (€)", type: "input", val: "1.499" },
      t3_features: { label: "Paket 3 Features", type: "textarea", val: "Unlimited Seiten\nOnline Shop\nKI-Chatbot\nSEO Full-Paket\n12 Monate Support" },
    }
  },
  ueber: {
    label: "👤 Über mich",
    fields: {
      name: { label: "Name", type: "input", val: "Ghaith Almadani" },
      job: { label: "Beruf", type: "input", val: "KFZ-Mechatroniker & Web-Entwickler" },
      story: { label: "Geschichte", type: "textarea", val: "Was als Hobby begann, ist heute WebIT AI — eine Agentur die kleinen Betrieben in Deutschland hilft, endlich online sichtbar zu werden. Mit echten KI-Tools, modernem Design und Technologien die sonst nur große Konzerne kennen." },
      location: { label: "Standort", type: "input", val: "Rosenberg, Baden-Württemberg" },
      age: { label: "Alter", type: "input", val: "22" },
    }
  },
  bot: {
    label: "🤖 Bot",
    fields: {
      greeting: { label: "Begrüßungs-Nachricht", type: "textarea", val: "👋 Hallo! Ich bin der WebIT AI Assistent.\n\nFrag mich alles — Preise, Demos, KI-Features! 😊" },
      preis: { label: "Antwort bei 'preis'", type: "textarea", val: "💰 Unsere Pakete:\n\n🥉 Starter – 299€\nLanding Page, Mobile, SEO\n\n🥈 Business – 799€\nBis 6 Seiten, CMS, SEO\n\n🥇 Premium – 1.499€\nUnlimited, Shop, KI-Bot" },
      kontakt: { label: "Antwort bei 'kontakt'", type: "textarea", val: "📞 +49 176 85974436\n✉️ ghaith.almadani.makkieh@gmail.com\n\nAntwort innerhalb von 24h!" },
      dauer: { label: "Antwort bei 'dauer'", type: "textarea", val: "⏱️ Starter: 3–5 Tage\nBusiness: 7–10 Tage\nPremium: 14–21 Tage" },
      garantie: { label: "Antwort bei 'garantie'", type: "textarea", val: "✅ 14 Tage kostenlose Nachbesserung\nKeine versteckten Kosten\nKein Monatsabo — einmalige Zahlung" },
    }
  },
  seo: {
    label: "🔍 SEO",
    fields: {
      title: { label: "Meta Title", type: "input", val: "WebIT AI – KI Webseiten für lokale Businesses" },
      desc: { label: "Meta Description", type: "textarea", val: "WebIT AI aus Rosenberg erstellt moderne, KI-gestützte Webseiten für lokale Unternehmen in Baden-Württemberg. Günstig, schnell, professionell – ab 299€." },
      keywords: { label: "Keywords (kommagetrennt)", type: "textarea", val: "Webdesign Rosenberg, KI Webdesign, Webseite erstellen Baden-Württemberg, günstiger Webdesigner" },
    }
  }
};

const SYSTEM_PROMPT = `Du bist Claude Sonnet 4.6 — persönlicher KI-Assistent für Ghaith Almadani.

ÜBER GHAITH:
- 22 Jahre alt, Rosenberg, Baden-Württemberg
- KFZ-Mechatroniker & Webentwickler
- Gründer von WebIT AI (webit-ai.de)
- Baut professionelle Webseiten für lokale Businesses ab 299€
- Tech-Stack: Next.js, Tailwind CSS, TypeScript, Vercel, PostgreSQL

WEBIT AI ANGEBOTE:
- Starter (299€): Landing Page, Mobile, Kontaktformular, Google Maps, 14 Tage Support
- Business (799€): Bis 6 Seiten, CMS, SEO, Google Analytics, 60 Tage Support  
- Premium (1.499€): Unlimited, Online Shop, KI-Chatbot, SEO Full-Paket, 12 Monate Support

DEINE AUFGABE:
- Hilf Ghaith seine Webseite-Texte zu verbessern
- Schreib konkrete Vorschläge wenn er nach Text fragt
- Hilf bei Code-Fragen (Next.js, React, Tailwind)
- Gib Business-Ratschläge für lokale Kunden in BW
- Antworte IMMER auf Deutsch
- Sei direkt, konkret, kein unnötiges Blabla
- Wenn du Text vorschlägst, mach ihn klar erkennbar`;

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const [tab, setTab] = useState("hero");
  const [vals, setVals] = useState({});
  const [activeField, setActiveField] = useState(null);
  const [aiMsgs, setAiMsgs] = useState([
    { role: "bot", text: "👋 Hallo Ghaith!\n\nIch bin Claude Sonnet 4.6 — dein persönlicher KI-Assistent für WebIT AI.\n\nIch kann dir helfen mit:\n• Texte verbessern & schreiben\n• Code-Fragen (Next.js, React)\n• SEO & Business-Tipps\n• Kunden-Nachrichten\n\nWas soll ich für dich tun?" }
  ]);
  const [aiInp, setAiInp] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const msgsRef = useRef(null);
  const aiInpRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem("wa_adm") === "1") setAuthed(true);
  }, []);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [aiMsgs]);

  function login() {
    if (pw === PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem("wa_adm", "1");
    } else {
      setPwErr(true);
      setTimeout(() => setPwErr(false), 2000);
    }
  }

  function getVal(tabKey, fieldKey) {
    return vals[tabKey]?.[fieldKey] ?? TABS[tabKey].fields[fieldKey].val;
  }

  function setVal(tabKey, fieldKey, value) {
    setVals(v => ({ ...v, [tabKey]: { ...v[tabKey], [fieldKey]: value } }));
  }

  function copyAll() {
    const cfg = TABS[tab];
    let out = `// ══ WebIT AI Admin Export — ${cfg.label} ══\n// Kopiere die Werte in deine page.tsx\n\n`;
    Object.entries(cfg.fields).forEach(([key, f]) => {
      const v = getVal(tab, key);
      out += `// ${f.label}\n"${v}"\n\n`;
    });
    navigator.clipboard.writeText(out).then(() => {
      setCopied(true);
      setSaveStatus("✓ In Zwischenablage kopiert!");
      setTimeout(() => { setCopied(false); setSaveStatus(""); }, 3000);
    });
  }

  async function sendAI() {
    const text = aiInp.trim();
    if (!text || aiLoading) return;
    setAiInp("");
    setAiMsgs(m => [...m, { role: "user", text }]);
    setAiLoading(true);

    const currentVals = Object.fromEntries(
      Object.entries(TABS[tab].fields).map(([k, f]) => [f.label, getVal(tab, k)])
    );

    const contextSystem = `${SYSTEM_PROMPT}\n\nAKTUELLER BEREICH: ${TABS[tab].label}\nAKTUELLE WERTE:\n${JSON.stringify(currentVals, null, 2)}`;

    const apiMessages = aiMsgs
      .filter(m => m.role !== "bot" || aiMsgs.indexOf(m) > 0)
      .map(m => ({ role: m.role === "user" ? "user" : "assistant", content: m.text }));
    apiMessages.push({ role: "user", content: text });

    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages, system: contextSystem })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setAiMsgs(m => [...m, { role: "bot", text: data.text }]);
    } catch (err) {
      setAiMsgs(m => [...m, { role: "bot", text: "❌ Fehler: " + (err.message || "Verbindungsproblem") + "\n\nStelle sicher dass ANTHROPIC_API_KEY in Vercel gesetzt ist." }]);
    }
    setAiLoading(false);
    aiInpRef.current?.focus();
  }

  // ── STYLES ──
  const dark = "#07070f";
  const card = "rgba(255,255,255,0.03)";
  const border = "rgba(255,255,255,0.07)";
  const purple = "#8b5cf6";
  const inp = { width:"100%", padding:"10px 12px", background:"rgba(255,255,255,0.05)", border:`1px solid ${border}`, borderRadius:"10px", color:"white", fontSize:"13px", fontFamily:"inherit", outline:"none", boxSizing:"border-box" as const, transition:"border 0.2s" };
  const ta = { ...inp, resize:"vertical" as const, minHeight:"80px" };

  // ── LOGIN ──
  if (!authed) return (
    <div style={{ minHeight:"100vh", background:dark, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Segoe UI',system-ui,sans-serif", color:"white" }}>
      <div style={{ width:"100%", maxWidth:"320px", padding:"0 24px", textAlign:"center" }}>
        <div style={{ width:"56px", height:"56px", background:`linear-gradient(135deg,${purple},#ef4444)`, borderRadius:"16px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px", fontWeight:900, margin:"0 auto 20px", boxShadow:`0 12px 36px rgba(139,92,246,0.35)` }}>W</div>
        <h1 style={{ fontSize:"22px", fontWeight:900, letterSpacing:"-1px", margin:"0 0 6px" }}>WebIT AI Admin</h1>
        <p style={{ color:"rgba(255,255,255,0.3)", fontSize:"13px", margin:"0 0 28px" }}>Nur für dich · Privater Bereich</p>
        <input type="password" placeholder="Passwort..." value={pw}
          onChange={e => setPw(e.target.value)} onKeyDown={e => e.key==="Enter" && login()}
          style={{ ...inp, padding:"13px 16px", fontSize:"14px", marginBottom:"10px", borderColor: pwErr ? "#ef4444" : border }}
        />
        {pwErr && <p style={{ color:"#ef4444", fontSize:"13px", marginBottom:"8px" }}>Falsches Passwort ❌</p>}
        <button onClick={login} style={{ width:"100%", padding:"13px", background:`linear-gradient(135deg,${purple},#ef4444)`, color:"white", fontWeight:800, fontSize:"15px", borderRadius:"12px", border:"none", cursor:"pointer", fontFamily:"inherit", boxShadow:`0 8px 28px rgba(139,92,246,0.3)` }}>
          Einloggen →
        </button>
        <p style={{ marginTop:"20px" }}><a href="/" style={{ color:"rgba(255,255,255,0.2)", fontSize:"12px", textDecoration:"none" }}>← Zurück zur Webseite</a></p>
      </div>
    </div>
  );

  // ── ADMIN ──
  return (
    <div style={{ minHeight:"100vh", background:dark, color:"white", fontFamily:"'Segoe UI',system-ui,sans-serif", display:"flex", flexDirection:"column" }}>
      <style>{`
        *{box-sizing:border-box}
        input:focus,textarea:focus{border-color:${purple}!important;box-shadow:0 0 0 3px rgba(139,92,246,0.1)!important}
        textarea{resize:vertical}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}
        .fld:hover{background:rgba(255,255,255,0.04)!important;color:rgba(255,255,255,0.8)!important}
        .lnk:hover{background:rgba(255,255,255,0.07)!important}
        .snd:hover{background:#7c3aed!important}
        .snd:disabled{opacity:0.4;cursor:not-allowed!important}
      `}</style>

      {/* TOPBAR */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 20px", background:"rgba(255,255,255,0.02)", borderBottom:`1px solid ${border}`, position:"sticky", top:0, zIndex:100, backdropFilter:"blur(24px)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:"30px", height:"30px", background:`linear-gradient(135deg,${purple},#ef4444)`, borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"15px", fontWeight:900 }}>W</div>
          <span style={{ fontWeight:800, fontSize:"15px" }}>WebIT AI Admin</span>
          <span style={{ background:`rgba(139,92,246,0.15)`, border:`1px solid rgba(139,92,246,0.3)`, color:"#c4b5fd", fontSize:"10px", fontWeight:700, padding:"2px 8px", borderRadius:"100px", letterSpacing:"0.5px" }}>Claude Sonnet 4.6</span>
          {saveStatus && <span style={{ fontSize:"12px", color:"#34d399", fontWeight:700 }}>{saveStatus}</span>}
        </div>
        <div style={{ display:"flex", gap:"8px" }}>
          <a href="https://webit-ai.de" target="_blank" className="lnk" style={{ padding:"6px 14px", background:"rgba(255,255,255,0.04)", border:`1px solid ${border}`, borderRadius:"8px", color:"rgba(255,255,255,0.5)", textDecoration:"none", fontSize:"12px", transition:"all 0.2s" }}>🌐 Live Seite</a>
          <button onClick={() => { setAuthed(false); sessionStorage.removeItem("wa_adm"); }} style={{ padding:"6px 14px", background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)", borderRadius:"8px", color:"#f87171", cursor:"pointer", fontSize:"12px", fontFamily:"inherit" }}>Logout</button>
        </div>
      </div>

      {/* TABS */}
      <div style={{ display:"flex", gap:"4px", padding:"10px 20px", borderBottom:`1px solid ${border}`, overflowX:"auto", flexShrink:0 }}>
        {Object.entries(TABS).map(([key, cfg]) => (
          <button key={key} onClick={() => { setTab(key); setActiveField(null); }}
            style={{ padding:"7px 16px", borderRadius:"9px", fontSize:"13px", fontWeight:600, cursor:"pointer", border:"1px solid", fontFamily:"inherit", whiteSpace:"nowrap", transition:"all 0.2s", background: tab===key ? `linear-gradient(135deg,${purple},#ef4444)` : card, color: tab===key ? "white" : "rgba(255,255,255,0.4)", borderColor: tab===key ? "transparent" : border }}>
            {cfg.label}
          </button>
        ))}
      </div>

      {/* BODY */}
      <div style={{ display:"flex", flex:1, overflow:"hidden", minHeight:0 }}>

        {/* LEFT SIDEBAR */}
        <div style={{ width:"200px", borderRight:`1px solid ${border}`, display:"flex", flexDirection:"column", flexShrink:0, overflow:"auto" }}>
          <div style={{ padding:"12px 14px 6px", fontSize:"9px", color:"rgba(255,255,255,0.25)", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase" }}>Felder</div>
          {Object.entries(TABS[tab].fields).map(([key, f]) => (
            <div key={key} className="fld"
              onClick={() => { setActiveField(key); document.getElementById("fg-"+key)?.scrollIntoView({ behavior:"smooth", block:"nearest" }); }}
              style={{ padding:"8px 14px", margin:"1px 6px", borderRadius:"8px", cursor:"pointer", fontSize:"12px", color: activeField===key ? "white" : "rgba(255,255,255,0.38)", background: activeField===key ? `rgba(139,92,246,0.15)` : "transparent", border:`1px solid ${activeField===key ? "rgba(139,92,246,0.3)" : "transparent"}`, transition:"all 0.15s" }}>
              {f.label}
            </div>
          ))}
          <div style={{ marginTop:"auto", padding:"12px" }}>
            <button onClick={copyAll} style={{ width:"100%", padding:"9px", background: copied ? "rgba(16,185,129,0.15)" : `linear-gradient(135deg,${purple},#ef4444)`, color: copied ? "#34d399" : "white", fontWeight:700, fontSize:"12px", borderRadius:"9px", border: copied ? "1px solid rgba(16,185,129,0.3)" : "none", cursor:"pointer", fontFamily:"inherit", transition:"all 0.3s" }}>
              {copied ? "✓ Kopiert!" : "📋 Für VS Code kopieren"}
            </button>
          </div>
        </div>

        {/* CENTER EDITOR */}
        <div style={{ flex:1, overflow:"auto", padding:"20px 24px", minWidth:0 }}>
          <div style={{ marginBottom:"20px" }}>
            <h2 style={{ fontSize:"17px", fontWeight:800, margin:"0 0 4px", letterSpacing:"-0.5px" }}>{TABS[tab].label} bearbeiten</h2>
            <p style={{ fontSize:"12px", color:"rgba(255,255,255,0.25)", margin:0 }}>Ändern → Kopieren → In VS Code einfügen → git push → live 🚀</p>
          </div>
          {Object.entries(TABS[tab].fields).map(([key, f]) => (
            <div key={key} id={"fg-"+key} onClick={() => setActiveField(key)}
              style={{ marginBottom:"14px", padding:"14px 16px", background: activeField===key ? "rgba(139,92,246,0.05)" : card, border:`1px solid ${activeField===key ? "rgba(139,92,246,0.25)" : border}`, borderRadius:"12px", transition:"all 0.2s", cursor:"default" }}>
              <div style={{ fontSize:"9px", color:"rgba(255,255,255,0.3)", fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"8px", display:"flex", alignItems:"center", gap:"6px" }}>
                {activeField===key && <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:purple, display:"inline-block" }}/>}
                {f.label}
              </div>
              {f.type==="textarea"
                ? <textarea style={ta} value={getVal(tab, key)} rows={4}
                    onChange={e => setVal(tab, key, e.target.value)}
                    onFocus={() => setActiveField(key)} />
                : <input style={inp} value={getVal(tab, key)}
                    onChange={e => setVal(tab, key, e.target.value)}
                    onFocus={() => setActiveField(key)} />
              }
            </div>
          ))}
        </div>

        {/* RIGHT — CLAUDE CHAT */}
        <div style={{ width:"300px", borderLeft:`1px solid ${border}`, display:"flex", flexDirection:"column", flexShrink:0 }}>

          {/* CHAT HEADER */}
          <div style={{ padding:"12px 16px", borderBottom:`1px solid ${border}`, display:"flex", alignItems:"center", gap:"8px" }}>
            <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#10b981", boxShadow:"0 0 8px #10b981", animation:"none" }}/>
            <span style={{ fontSize:"13px", fontWeight:700 }}>Claude Sonnet 4.6</span>
            <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.25)", marginLeft:"auto" }}>KI Assistent</span>
          </div>

          {/* QUICK PROMPTS */}
          <div style={{ padding:"8px 10px", borderBottom:`1px solid ${border}`, display:"flex", gap:"4px", flexWrap:"wrap" }}>
            {["Verbessere die Texte","Schreib was Krasseres","SEO Tipps","Code Hilfe"].map(p => (
              <button key={p} onClick={() => { setAiInp(p); aiInpRef.current?.focus(); }}
                style={{ padding:"4px 9px", background:card, border:`1px solid ${border}`, borderRadius:"100px", color:"rgba(255,255,255,0.45)", fontSize:"11px", cursor:"pointer", fontFamily:"inherit", transition:"all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.08)"; e.currentTarget.style.color="white"; }}
                onMouseLeave={e => { e.currentTarget.style.background=card; e.currentTarget.style.color="rgba(255,255,255,0.45)"; }}>
                {p}
              </button>
            ))}
          </div>

          {/* MESSAGES */}
          <div ref={msgsRef} style={{ flex:1, overflowY:"auto", padding:"12px", display:"flex", flexDirection:"column", gap:"8px" }}>
            {aiMsgs.map((m, i) => (
              <div key={i} style={{ padding:"10px 12px", borderRadius:m.role==="user" ? "12px 12px 4px 12px" : "12px 12px 12px 4px", fontSize:"13px", lineHeight:"1.6", maxWidth:"95%", whiteSpace:"pre-wrap", alignSelf: m.role==="user" ? "flex-end" : "flex-start", background: m.role==="user" ? `linear-gradient(135deg,${purple},#7c3aed)` : "rgba(255,255,255,0.05)", color:"white", border: m.role==="bot" ? `1px solid ${border}` : "none" }}>
                {m.text}
              </div>
            ))}
            {aiLoading && (
              <div style={{ padding:"10px 12px", borderRadius:"12px 12px 12px 4px", fontSize:"13px", background:"rgba(255,255,255,0.05)", border:`1px solid ${border}`, alignSelf:"flex-start", color:"rgba(255,255,255,0.4)", display:"flex", gap:"4px", alignItems:"center" }}>
                <span style={{ animation:"pulse 1s infinite" }}>●</span>
                <span style={{ animation:"pulse 1s 0.2s infinite" }}>●</span>
                <span style={{ animation:"pulse 1s 0.4s infinite" }}>●</span>
                <style>{`@keyframes pulse{0%,100%{opacity:0.3}50%{opacity:1}}`}</style>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div style={{ padding:"10px", borderTop:`1px solid ${border}`, display:"flex", flexDirection:"column", gap:"6px" }}>
            <textarea ref={aiInpRef} value={aiInp} onChange={e => setAiInp(e.target.value)}
              onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); sendAI(); } }}
              placeholder="Frag Claude... (Enter = senden)" disabled={aiLoading} rows={2}
              style={{ ...ta, minHeight:"50px", fontSize:"13px", resize:"none" }}
            />
            <button className="snd" onClick={sendAI} disabled={aiLoading || !aiInp.trim()}
              style={{ width:"100%", padding:"9px", background:`linear-gradient(135deg,${purple},#ef4444)`, color:"white", border:"none", borderRadius:"9px", cursor:"pointer", fontSize:"13px", fontFamily:"inherit", fontWeight:700, transition:"all 0.2s" }}>
              {aiLoading ? "Claude schreibt..." : "Senden →"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}