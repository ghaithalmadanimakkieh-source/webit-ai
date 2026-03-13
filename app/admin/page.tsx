// @ts-nocheck
"use client";
import { useState, useEffect, useRef } from "react";

const PASSWORD = "Madani.09630";

const TABS = {
  hero: {
    label: "Hero",
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
    label: "Kontakt",
    fields: {
      headline: { label: "Überschrift", type: "input", val: "Starte dein Projekt noch heute." },
      desc: { label: "Beschreibungstext", type: "textarea", val: "Kostenlose Erstberatung — ich analysiere dein Business und zeige dir genau was du brauchst. Kein Risiko, keine versteckten Kosten." },
      wa_sub: { label: "WhatsApp Untertitel", type: "input", val: "+49 176 85974436 · Antwort in 1 Stunde" },
      mail_text: { label: "E-Mail Button Text", type: "input", val: "E-Mail — Gmail öffnen" },
      phone: { label: "Telefonnummer", type: "input", val: "+49 176 85974436" },
    }
  },
  preise: {
    label: "Preise",
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
    label: "Über mich",
    fields: {
      name: { label: "Name", type: "input", val: "Ghaith Almadani" },
      job: { label: "Beruf", type: "input", val: "KFZ-Mechatroniker & Web-Entwickler" },
      story: { label: "Geschichte", type: "textarea", val: "Was als Hobby begann, ist heute WebIT AI — eine Agentur die kleinen Betrieben in Deutschland hilft, endlich online sichtbar zu werden." },
      location: { label: "Standort", type: "input", val: "Rosenberg, Baden-Württemberg" },
      age: { label: "Alter", type: "input", val: "22" },
    }
  },
  bot: {
    label: "Bot",
    fields: {
      greeting: { label: "Begrüßungs-Nachricht", type: "textarea", val: "👋 Hallo! Ich bin der WebIT AI Assistent.\n\nFrag mich alles — Preise, Demos, KI-Features! 😊" },
      preis: { label: "Antwort bei 'preis'", type: "textarea", val: "💰 Unsere Pakete:\n\n🥉 Starter – 299€\n🥈 Business – 799€\n🥇 Premium – 1.499€" },
      kontakt: { label: "Antwort bei 'kontakt'", type: "textarea", val: "📞 +49 176 85974436\n✉️ ghaith.almadani.makkieh@gmail.com\n\nAntwort innerhalb von 24h!" },
      dauer: { label: "Antwort bei 'dauer'", type: "textarea", val: "⏱️ Starter: 3–5 Tage\nBusiness: 7–10 Tage\nPremium: 14–21 Tage" },
    }
  },
  seo: {
    label: "SEO",
    fields: {
      title: { label: "Meta Title", type: "input", val: "WebIT AI – KI Webseiten für lokale Businesses" },
      desc: { label: "Meta Description", type: "textarea", val: "WebIT AI aus Rosenberg erstellt moderne, KI-gestützte Webseiten für lokale Unternehmen in Baden-Württemberg. Ab 299€." },
      keywords: { label: "Keywords", type: "textarea", val: "Webdesign Rosenberg, KI Webdesign, Webseite erstellen Baden-Württemberg" },
    }
  }
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const [tab, setTab] = useState("hero");
  const [vals, setVals] = useState({});
  const [aiMsgs, setAiMsgs] = useState([
    { role: "bot", text: "👋 Hallo Ghaith! Ich bin Claude Sonnet 4.6.\n\nSag mir was du ändern möchtest — z.B. \"Schreib mir eine bessere Überschrift\" oder \"Mach die Beschreibung kürzer und krasser\"." }
  ]);
  const [aiInp, setAiInp] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const msgsRef = useRef(null);

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
    let out = `// WebIT AI Admin — ${cfg.label}\n// Kopiere diese Werte in deine page.tsx\n\n`;
    Object.entries(cfg.fields).forEach(([key, f]) => {
      out += `// ${f.label}\n"${getVal(tab, key)}"\n\n`;
    });
    navigator.clipboard.writeText(out).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
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

    const sys = `Du bist ein Experte für deutsche Unternehmenswebseiten und hilfst Ghaith Almadani seine Webseite webit-ai.de zu verbessern. Er ist 22 Jahre alt, KFZ-Mechatroniker aus Rosenberg (Baden-Württemberg) und hat eine Webdesign-Agentur namens WebIT AI. Die Webseite richtet sich an lokale Unternehmen in BW. Du arbeitest gerade am Bereich "${TABS[tab].label}". Aktuelle Werte: ${JSON.stringify(currentVals)}. Antworte immer auf Deutsch, kurz und konkret. Wenn du Text vorschlägst, markiere ihn klar mit Anführungszeichen.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: sys,
          messages: [{ role: "user", content: text }]
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Fehler beim Laden.";
      setAiMsgs(m => [...m, { role: "bot", text: reply }]);
    } catch {
      setAiMsgs(m => [...m, { role: "bot", text: "❌ Verbindungsfehler. Versuche es nochmal." }]);
    }
    setAiLoading(false);
  }

  const s = {
    page: { minHeight: "100vh", background: "#07070f", color: "white", fontFamily: "'Segoe UI', system-ui, sans-serif", display: "flex", flexDirection: "column" },
    topbar: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.07)", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)" },
    logo: { display: "flex", alignItems: "center", gap: "10px", fontWeight: 700, fontSize: "15px" },
    logoIcon: { width: "30px", height: "30px", background: "linear-gradient(135deg,#8b5cf6,#ef4444)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 900 },
    badge: { background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)", color: "#c4b5fd", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", letterSpacing: "0.5px" },
    tabBar: { display: "flex", gap: "4px", padding: "10px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", overflowX: "auto" },
    body: { display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 100px)" },
    left: { width: "240px", borderRight: "1px solid rgba(255,255,255,0.06)", overflow: "auto", flexShrink: 0 },
    center: { flex: 1, overflow: "auto", padding: "20px" },
    right: { width: "320px", borderLeft: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", flexShrink: 0 },
    inp: { width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "white", fontSize: "13px", fontFamily: "inherit", outline: "none", boxSizing: "border-box" },
    ta: { width: "100%", padding: "10px 12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "white", fontSize: "13px", fontFamily: "inherit", outline: "none", resize: "vertical", boxSizing: "border-box", minHeight: "80px" },
  };

  if (!authed) return (
    <div style={{ ...s.page, alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "340px", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ ...s.logoIcon, width: "52px", height: "52px", fontSize: "22px", margin: "0 auto 16px", boxShadow: "0 8px 28px rgba(139,92,246,0.3)" }}>W</div>
          <h1 style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-1px", margin: "0 0 4px" }}>WebIT AI Admin</h1>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", margin: 0 }}>Privater Bereich · Nur für dich</p>
        </div>
        <input
          type="password" placeholder="Passwort..." value={pw}
          onChange={e => setPw(e.target.value)} onKeyDown={e => e.key === "Enter" && login()}
          style={{ ...s.inp, padding: "13px 16px", fontSize: "14px", marginBottom: "10px", borderColor: pwErr ? "#ef4444" : "rgba(255,255,255,0.1)" }}
        />
        {pwErr && <p style={{ color: "#ef4444", fontSize: "13px", textAlign: "center", marginBottom: "8px" }}>Falsches Passwort</p>}
        <button onClick={login} style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg,#8b5cf6,#ef4444)", color: "white", fontWeight: 800, fontSize: "14px", borderRadius: "12px", border: "none", cursor: "pointer" }}>
          Einloggen →
        </button>
        <p style={{ textAlign: "center", marginTop: "18px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px", textDecoration: "none" }}>← Zurück zur Webseite</a>
        </p>
      </div>
    </div>
  );

  return (
    <div style={s.page}>
      {/* TOPBAR */}
      <div style={s.topbar}>
        <div style={s.logo}>
          <div style={s.logoIcon}>W</div>
          WebIT AI Admin
          <span style={s.badge}>Claude Sonnet 4.6</span>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <a href="https://webit-ai.de" target="_blank" style={{ padding: "6px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "12px" }}>🌐 Live Seite</a>
          <button onClick={() => { setAuthed(false); sessionStorage.removeItem("wa_adm"); }} style={{ padding: "6px 14px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", color: "#f87171", cursor: "pointer", fontSize: "12px", fontFamily: "inherit" }}>Logout</button>
        </div>
      </div>

      {/* TABS */}
      <div style={s.tabBar}>
        {Object.entries(TABS).map(([key, cfg]) => (
          <button key={key} onClick={() => { setTab(key); setActiveField(null); }}
            style={{ padding: "7px 18px", borderRadius: "9px", fontSize: "13px", fontWeight: 600, cursor: "pointer", border: "1px solid", fontFamily: "inherit", whiteSpace: "nowrap", transition: "all 0.2s", background: tab === key ? "linear-gradient(135deg,#8b5cf6,#ef4444)" : "rgba(255,255,255,0.03)", color: tab === key ? "white" : "rgba(255,255,255,0.4)", borderColor: tab === key ? "transparent" : "rgba(255,255,255,0.08)" }}>
            {cfg.label}
          </button>
        ))}
      </div>

      {/* BODY */}
      <div style={s.body}>

        {/* LEFT — FIELD LIST */}
        <div style={s.left}>
          <div style={{ padding: "14px 14px 8px", fontSize: "10px", color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>Felder</div>
          {Object.entries(TABS[tab].fields).map(([key, f]) => (
            <div key={key}
              onClick={() => { setActiveField(key); document.getElementById("fg-" + key)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
              style={{ padding: "9px 14px", margin: "2px 8px", borderRadius: "8px", cursor: "pointer", fontSize: "13px", color: activeField === key ? "white" : "rgba(255,255,255,0.45)", background: activeField === key ? "rgba(139,92,246,0.15)" : "transparent", border: `1px solid ${activeField === key ? "rgba(139,92,246,0.25)" : "transparent"}`, transition: "all 0.15s" }}>
              {f.label}
            </div>
          ))}
          <div style={{ padding: "14px", marginTop: "auto" }}>
            <button onClick={copyAll} style={{ width: "100%", padding: "10px", background: copied ? "rgba(16,185,129,0.2)" : "linear-gradient(135deg,#8b5cf6,#ef4444)", color: copied ? "#34d399" : "white", fontWeight: 700, fontSize: "13px", borderRadius: "10px", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}>
              {copied ? "✓ Kopiert!" : "Kopieren für VS Code"}
            </button>
          </div>
        </div>

        {/* CENTER — EDITOR */}
        <div style={s.center}>
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 4px" }}>{TABS[tab].label} bearbeiten</h2>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", margin: 0 }}>Ändere die Felder → Kopieren → in VS Code einfügen → pushen</p>
          </div>
          {Object.entries(TABS[tab].fields).map(([key, f]) => (
            <div key={key} id={"fg-" + key} style={{ marginBottom: "18px", padding: "14px 16px", background: "rgba(255,255,255,0.02)", border: `1px solid ${activeField === key ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.06)"}`, borderRadius: "12px", transition: "border 0.2s" }}
              onClick={() => setActiveField(key)}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>{f.label}</div>
              {f.type === "textarea" ? (
                <textarea style={s.ta} value={getVal(tab, key)} rows={4}
                  onChange={e => setVal(tab, key, e.target.value)}
                  onFocus={e => { e.target.style.borderColor = "rgba(139,92,246,0.5)"; setActiveField(key); }}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              ) : (
                <input style={s.inp} value={getVal(tab, key)}
                  onChange={e => setVal(tab, key, e.target.value)}
                  onFocus={e => { e.target.style.borderColor = "rgba(139,92,246,0.5)"; setActiveField(key); }}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT — CLAUDE CHAT */}
        <div style={s.right}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
            <span style={{ fontSize: "13px", fontWeight: 700 }}>Claude Sonnet 4.6</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginLeft: "auto" }}>KI Assistent</span>
          </div>

          <div ref={msgsRef} style={{ flex: 1, overflowY: "auto", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {aiMsgs.map((m, i) => (
              <div key={i} style={{ padding: "10px 12px", borderRadius: "12px", fontSize: "13px", lineHeight: "1.6", maxWidth: "92%", whiteSpace: "pre-wrap", alignSelf: m.role === "user" ? "flex-end" : "flex-start", background: m.role === "user" ? "linear-gradient(135deg,#8b5cf6,#7c3aed)" : "rgba(255,255,255,0.06)", color: "white", border: m.role === "bot" ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                {m.text}
              </div>
            ))}
            {aiLoading && (
              <div style={{ padding: "10px 12px", borderRadius: "12px", fontSize: "13px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", alignSelf: "flex-start", color: "rgba(255,255,255,0.5)" }}>
                Claude schreibt...
              </div>
            )}
          </div>

          <div style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "8px" }}>
            <input
              value={aiInp} onChange={e => setAiInp(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendAI()}
              placeholder="Frag Claude..." disabled={aiLoading}
              style={{ ...s.inp, flex: 1 }}
            />
            <button onClick={sendAI} disabled={aiLoading || !aiInp.trim()}
              style={{ padding: "10px 14px", background: aiLoading ? "rgba(139,92,246,0.3)" : "linear-gradient(135deg,#8b5cf6,#ef4444)", color: "white", border: "none", borderRadius: "10px", cursor: aiLoading ? "not-allowed" : "pointer", fontSize: "13px", fontFamily: "inherit", fontWeight: 700, whiteSpace: "nowrap" }}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}