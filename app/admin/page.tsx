// @ts-nocheck
"use client";
import { useState, useEffect, useRef } from "react";

const PASSWORD = "Madani.09630";
const API_KEY = "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";

const TABS = {
  hero: { label: "🏠 Hero", fields: {
    badge: { l: "Badge Text", t: "i" },
    h1a:  { l: "Überschrift Zeile 1", t: "i" },
    h1b:  { l: "Überschrift Zeile 2 (lila)", t: "i" },
    h2:   { l: "Unterzeile", t: "i" },
    desc: { l: "Beschreibung", t: "a" },
    cta1: { l: "Button 1 Text", t: "i" },
    cta2: { l: "Button 2 Text", t: "i" },
  }},
  kontakt: { label: "📞 Kontakt", fields: {
    headline: { l: "Überschrift", t: "i" },
    subline:  { l: "Lila Unterzeile", t: "i" },
    desc:     { l: "Beschreibungstext", t: "a" },
    phone:    { l: "Telefon", t: "i" },
    email:    { l: "E-Mail", t: "i" },
    location: { l: "Standort", t: "i" },
    wa_sub:   { l: "WhatsApp Untertitel", t: "i" },
  }},
  preise: { label: "💰 Preise", fields: {
    t1_name: { l: "Paket 1 Name", t: "i" },
    t1_price: { l: "Paket 1 Preis €", t: "i" },
    t1_features: { l: "Paket 1 Features (eine pro Zeile)", t: "a" },
    t2_name: { l: "Paket 2 Name", t: "i" },
    t2_price: { l: "Paket 2 Preis €", t: "i" },
    t2_features: { l: "Paket 2 Features", t: "a" },
    t3_name: { l: "Paket 3 Name", t: "i" },
    t3_price: { l: "Paket 3 Preis €", t: "i" },
    t3_features: { l: "Paket 3 Features", t: "a" },
  }},
  ueber: { label: "👤 Über mich", fields: {
    name:     { l: "Name", t: "i" },
    job:      { l: "Beruf", t: "i" },
    story:    { l: "Geschichte", t: "a" },
    location: { l: "Standort", t: "i" },
    age:      { l: "Alter", t: "i" },
  }},
  bot: { label: "🤖 Bot", fields: {
    greeting: { l: "Begrüßung", t: "a" },
    preis:    { l: "Antwort: preis", t: "a" },
    kontakt:  { l: "Antwort: kontakt", t: "a" },
    dauer:    { l: "Antwort: dauer", t: "a" },
    garantie: { l: "Antwort: garantie", t: "a" },
  }},
  seo: { label: "🔍 SEO", fields: {
    title:    { l: "Meta Title", t: "i" },
    desc:     { l: "Meta Description", t: "a" },
    keywords: { l: "Keywords", t: "a" },
  }},
};

const CLAUDE_SYSTEM = `Du bist Claude Sonnet 4.6 — persönlicher KI-Assistent für Ghaith Almadani.
Er ist 22, aus Rosenberg BW, hat WebIT AI (webit-ai.de) — Webdesign für lokale Businesses ab 299€.
Stack: Next.js, Tailwind, Vercel. Pakete: Starter 299€, Business 799€, Premium 1.499€.
Hilf mit Texten, Code, SEO, Business. Antworte IMMER auf Deutsch, kurz und direkt.
Wenn du Text vorschlägst, zeig ihn klar formatiert.`;

export default function AdminPage() {
  const [authed, setAuthed]     = useState(false);
  const [pw, setPw]             = useState("");
  const [pwErr, setPwErr]       = useState(false);
  const [tab, setTab]           = useState("hero");
  const [data, setData]         = useState({});
  const [active, setActive]     = useState(null);
  const [status, setStatus]     = useState({ msg: "", ok: true });
  const [saving, setSaving]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [aiMsgs, setAiMsgs]     = useState([
    { r: "b", t: "👋 Hallo Ghaith!\n\nIch bin Claude Sonnet 4.6 — live verbunden.\n\nSag mir was du ändern oder verbessern willst. Ich helfe sofort!" }
  ]);
  const [aiInp, setAiInp]       = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [history, setHistory]   = useState([]);
  const msgsRef = useRef(null);
  const aiRef   = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem("wa_adm") === "1") { setAuthed(true); loadData(); }
  }, []);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [aiMsgs]);

  async function loadData() {
    setLoading(true);
    try {
      const res = await fetch("/api/site-data");
      const d = await res.json();
      setData(d);
    } catch { showStatus("Laden fehlgeschlagen", false); }
    setLoading(false);
  }

  function login() {
    if (pw === PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem("wa_adm", "1");
      loadData();
    } else {
      setPwErr(true);
      setTimeout(() => setPwErr(false), 2000);
    }
  }

  function gv(section, key) {
    return data[section]?.[key] ?? "";
  }

  function sv(section, key, val) {
    setData(d => ({ ...d, [section]: { ...d[section], [key]: val } }));
  }

  async function saveSection() {
    setSaving(true);
    try {
      const res = await fetch("/api/site-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [tab]: data[tab] }),
      });
      if (res.ok) showStatus("✓ Gespeichert & live auf webit-ai.de!", true);
      else showStatus("Fehler beim Speichern", false);
    } catch { showStatus("Verbindungsfehler", false); }
    setSaving(false);
  }

  function showStatus(msg, ok) {
    setStatus({ msg, ok });
    setTimeout(() => setStatus({ msg: "", ok: true }), 3500);
  }

  async function sendAI() {
    const text = aiInp.trim();
    if (!text || aiLoading) return;
    setAiInp("");
    const curVals = Object.fromEntries(
      Object.entries(TABS[tab].fields).map(([k, f]) => [f.l, gv(tab, k)])
    );
    const sys = `${CLAUDE_SYSTEM}\n\nAKTUELLER BEREICH: ${TABS[tab].label}\nAKTUELLE WERTE:\n${JSON.stringify(curVals, null, 2)}`;
    const newHistory = [...history, { role: "user", content: text }];
    setHistory(newHistory);
    setAiMsgs(m => [...m, { r: "u", t: text }]);
    setAiLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2048, system: sys, messages: newHistory }),
      });
      const d = await res.json();
      if (d.error) throw new Error(d.error.message);
      const reply = d.content?.[0]?.text || "";
      setAiMsgs(m => [...m, { r: "b", t: reply }]);
      setHistory(h => [...h, { role: "assistant", content: reply }].slice(-20));
    } catch (e) {
      setAiMsgs(m => [...m, { r: "b", t: "❌ " + (e.message || "Fehler") }]);
    }
    setAiLoading(false);
    aiRef.current?.focus();
  }

  // ── FARBEN & STYLES ──
  const P = "#8b5cf6";
  const dark = "#07070f";
  const bdr = "rgba(255,255,255,0.07)";
  const inp = { width:"100%", padding:"9px 12px", background:"rgba(255,255,255,0.05)", border:`1px solid ${bdr}`, borderRadius:"9px", color:"white", fontSize:"13px", fontFamily:"inherit", outline:"none", boxSizing:"border-box" as const };
  const ta  = { ...inp, resize:"vertical" as const, minHeight:"75px" };

  // ── LOGIN ──
  if (!authed) return (
    <div style={{ minHeight:"100vh", background:dark, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Segoe UI',system-ui,sans-serif", color:"white" }}>
      <div style={{ width:"100%", maxWidth:"320px", padding:"0 24px", textAlign:"center" }}>
        <div style={{ width:"54px", height:"54px", background:`linear-gradient(135deg,${P},#ef4444)`, borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px", fontWeight:900, color:"white", margin:"0 auto 18px", boxShadow:`0 10px 30px rgba(139,92,246,0.35)` }}>W</div>
        <h1 style={{ fontSize:"21px", fontWeight:900, letterSpacing:"-1px", margin:"0 0 5px" }}>WebIT AI Admin</h1>
        <p style={{ color:"rgba(255,255,255,0.25)", fontSize:"13px", margin:"0 0 26px" }}>Nur für dich · Privater Bereich</p>
        <input type="password" placeholder="Passwort..." value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key==="Enter" && login()}
          style={{ ...inp, padding:"13px 16px", fontSize:"14px", marginBottom:"10px", borderColor: pwErr ? "#ef4444" : bdr }} />
        {pwErr && <p style={{ color:"#ef4444", fontSize:"13px", marginBottom:"8px" }}>Falsches Passwort ❌</p>}
        <button onClick={login} style={{ width:"100%", padding:"13px", background:`linear-gradient(135deg,${P},#ef4444)`, color:"white", fontWeight:800, fontSize:"15px", borderRadius:"12px", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
          Einloggen →
        </button>
        <p style={{ marginTop:"16px" }}><a href="/" style={{ color:"rgba(255,255,255,0.2)", fontSize:"12px", textDecoration:"none" }}>← Webseite</a></p>
      </div>
    </div>
  );

  return (
    <div style={{ height:"100vh", background:dark, color:"white", fontFamily:"'Segoe UI',system-ui,sans-serif", display:"flex", flexDirection:"column", overflow:"hidden" }}>
      <style>{`
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}
        input:focus,textarea:focus{border-color:${P}!important;box-shadow:0 0 0 3px rgba(139,92,246,0.12)!important;outline:none}
        .fld{padding:7px 12px;margin:1px 6px;border-radius:7px;cursor:pointer;font-size:12px;color:rgba(255,255,255,0.4);transition:all 0.15s;border:1px solid transparent}
        .fld:hover{color:rgba(255,255,255,0.75);background:rgba(255,255,255,0.04)}
        .fld.on{color:white;background:rgba(139,92,246,0.15);border-color:rgba(139,92,246,0.3)}
        .tab{padding:7px 15px;border-radius:9px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid;font-family:inherit;white-space:nowrap;transition:all 0.2s}
        .tab.on{background:linear-gradient(135deg,${P},#ef4444);color:white;border-color:transparent}
        .tab:not(.on){background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.4);border-color:${bdr}}
        .fg{margin-bottom:12px;padding:13px 15px;background:rgba(255,255,255,0.02);border:1px solid ${bdr};border-radius:11px;cursor:pointer;transition:all 0.2s}
        .fg.on{background:rgba(139,92,246,0.05);border-color:rgba(139,92,246,0.25)}
        .msg-b{padding:9px 12px;border-radius:11px 11px 11px 3px;font-size:12px;line-height:1.65;align-self:flex-start;background:rgba(255,255,255,0.06);border:1px solid ${bdr};color:white;white-space:pre-wrap;max-width:95%}
        .msg-u{padding:9px 12px;border-radius:11px 11px 3px 11px;font-size:12px;line-height:1.65;align-self:flex-end;background:linear-gradient(135deg,${P},#7c3aed);color:white;white-space:pre-wrap;max-width:95%}
        .qp button{padding:3px 9px;background:rgba(255,255,255,0.04);border:1px solid ${bdr};border-radius:100px;color:rgba(255,255,255,0.4);font-size:10px;cursor:pointer;font-family:inherit;transition:all 0.15s}
        .qp button:hover{background:rgba(255,255,255,0.09);color:white}
        .dot1{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.35);animation:blink 1.2s infinite}
        .dot2{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.35);animation:blink 1.2s 0.2s infinite}
        .dot3{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.35);animation:blink 1.2s 0.4s infinite}
        @keyframes blink{0%,80%,100%{opacity:0.2}40%{opacity:1}}
      `}</style>

      {/* ── TOPBAR ── */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 20px", background:"rgba(255,255,255,0.02)", borderBottom:`1px solid ${bdr}`, flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:"28px", height:"28px", background:`linear-gradient(135deg,${P},#ef4444)`, borderRadius:"7px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"13px", fontWeight:900 }}>W</div>
          <span style={{ fontWeight:800, fontSize:"14px" }}>WebIT AI Admin</span>
          <span style={{ background:"rgba(139,92,246,0.15)", border:"1px solid rgba(139,92,246,0.3)", color:"#c4b5fd", fontSize:"9px", fontWeight:700, padding:"2px 7px", borderRadius:"100px", letterSpacing:"0.5px" }}>Claude Sonnet 4.6</span>
          {status.msg && <span style={{ fontSize:"12px", color: status.ok ? "#34d399" : "#f87171", fontWeight:700 }}>{status.msg}</span>}
        </div>
        <div style={{ display:"flex", gap:"6px" }}>
          <a href="https://webit-ai.de" target="_blank" style={{ padding:"5px 12px", background:"rgba(255,255,255,0.04)", border:`1px solid ${bdr}`, borderRadius:"7px", color:"rgba(255,255,255,0.45)", textDecoration:"none", fontSize:"11px" }}>🌐 Live</a>
          <button onClick={() => { setAuthed(false); sessionStorage.removeItem("wa_adm"); }} style={{ padding:"5px 12px", background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.18)", borderRadius:"7px", color:"#f87171", cursor:"pointer", fontSize:"11px", fontFamily:"inherit" }}>Logout</button>
        </div>
      </div>

      {/* ── TABS ── */}
      <div style={{ display:"flex", gap:"4px", padding:"8px 20px", borderBottom:`1px solid ${bdr}`, overflowX:"auto", flexShrink:0 }}>
        {Object.entries(TABS).map(([k, cfg]) => (
          <button key={k} className={`tab${tab===k?" on":""}`} onClick={() => { setTab(k); setActive(null); }}>
            {cfg.label}
          </button>
        ))}
      </div>

      {/* ── BODY ── */}
      <div style={{ display:"flex", flex:1, overflow:"hidden", minHeight:0 }}>

        {/* LEFT SIDEBAR */}
        <div style={{ width:"190px", borderRight:`1px solid ${bdr}`, display:"flex", flexDirection:"column", flexShrink:0 }}>
          <div style={{ padding:"10px 12px 4px", fontSize:"9px", color:"rgba(255,255,255,0.2)", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase" }}>Felder</div>
          <div style={{ flex:1, overflowY:"auto", paddingBottom:"6px" }}>
            {Object.entries(TABS[tab].fields).map(([k, f]) => (
              <div key={k} className={`fld${active===k?" on":""}`}
                onClick={() => { setActive(k); document.getElementById("fg-"+k)?.scrollIntoView({ behavior:"smooth", block:"nearest" }); }}>
                {f.l}
              </div>
            ))}
          </div>
          <div style={{ padding:"10px", borderTop:`1px solid ${bdr}` }}>
            <button onClick={saveSection} disabled={saving}
              style={{ width:"100%", padding:"10px", background: saving ? "rgba(139,92,246,0.3)" : `linear-gradient(135deg,${P},#ef4444)`, color:"white", fontWeight:700, fontSize:"12px", borderRadius:"9px", border:"none", cursor: saving ? "not-allowed" : "pointer", fontFamily:"inherit", transition:"all 0.2s" }}>
              {saving ? "Speichert..." : "💾 Speichern & Live"}
            </button>
            <a href="https://webit-ai.de" target="_blank" style={{ display:"block", textAlign:"center", marginTop:"6px", padding:"7px", background:"rgba(255,255,255,0.03)", border:`1px solid ${bdr}`, borderRadius:"8px", color:"rgba(255,255,255,0.3)", textDecoration:"none", fontSize:"11px" }}>
              → Live Seite öffnen
            </a>
          </div>
        </div>

        {/* CENTER EDITOR */}
        <div style={{ flex:1, overflowY:"auto", padding:"18px 22px", minWidth:0 }}>
          {loading ? (
            <div style={{ padding:"60px", textAlign:"center", color:"rgba(255,255,255,0.2)", fontSize:"13px" }}>Lade Daten...</div>
          ) : (
            <>
              <div style={{ marginBottom:"18px" }}>
                <div style={{ fontSize:"16px", fontWeight:800, letterSpacing:"-0.5px", marginBottom:"3px" }}>{TABS[tab].label}</div>
                <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.25)" }}>Felder bearbeiten → Speichern & Live klicken → sofort live auf webit-ai.de 🚀</div>
              </div>
              {Object.entries(TABS[tab].fields).map(([k, f]) => (
                <div key={k} id={"fg-"+k} className={`fg${active===k?" on":""}`} onClick={() => setActive(k)}>
                  <div style={{ fontSize:"9px", color: active===k ? "#c4b5fd" : "rgba(255,255,255,0.28)", fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"7px", display:"flex", alignItems:"center", gap:"5px" }}>
                    {active===k && <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:P, display:"inline-block", flexShrink:0 }} />}
                    {f.l}
                  </div>
                  {f.t==="a"
                    ? <textarea style={ta} value={gv(tab, k)} rows={3} onChange={e => sv(tab, k, e.target.value)} onFocus={() => setActive(k)} />
                    : <input style={inp} value={gv(tab, k)} onChange={e => sv(tab, k, e.target.value)} onFocus={() => setActive(k)} />
                  }
                </div>
              ))}
            </>
          )}
        </div>

        {/* RIGHT — CLAUDE CHAT */}
        <div style={{ width:"290px", borderLeft:`1px solid ${bdr}`, display:"flex", flexDirection:"column", flexShrink:0 }}>
          <div style={{ padding:"10px 14px", borderBottom:`1px solid ${bdr}`, display:"flex", alignItems:"center", gap:"7px", flexShrink:0 }}>
            <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#10b981", boxShadow:"0 0 7px #10b981" }} />
            <span style={{ fontSize:"12px", fontWeight:700 }}>Claude Sonnet 4.6</span>
            <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.2)", marginLeft:"auto" }}>AI Assistent</span>
          </div>

          <div className="qp" style={{ padding:"6px 10px", borderBottom:`1px solid ${bdr}`, display:"flex", gap:"4px", flexWrap:"wrap", flexShrink:0 }}>
            {["Verbessere den Text","Schreib was Krasseres","SEO Tipps","Code Hilfe","Ideen"].map(p => (
              <button key={p} onClick={() => { setAiInp(p); aiRef.current?.focus(); }}>{p}</button>
            ))}
          </div>

          <div ref={msgsRef} style={{ flex:1, overflowY:"auto", padding:"10px", display:"flex", flexDirection:"column", gap:"7px" }}>
            {aiMsgs.map((m, i) => (
              <div key={i} className={m.r==="u" ? "msg-u" : "msg-b"}>{m.t}</div>
            ))}
            {aiLoading && (
              <div className="msg-b" style={{ display:"flex", gap:"4px", alignItems:"center", padding:"10px 14px" }}>
                <div className="dot1" /><div className="dot2" /><div className="dot3" />
              </div>
            )}
          </div>

          <div style={{ padding:"8px", borderTop:`1px solid ${bdr}`, flexShrink:0 }}>
            <textarea ref={aiRef} value={aiInp} onChange={e => setAiInp(e.target.value)}
              onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); sendAI(); } }}
              placeholder="Frag Claude... (Enter = senden)" disabled={aiLoading} rows={2}
              style={{ ...ta, minHeight:"46px", marginBottom:"6px", resize:"none", fontSize:"12px" }} />
            <button onClick={sendAI} disabled={aiLoading || !aiInp.trim()}
              style={{ width:"100%", padding:"9px", background: aiLoading ? "rgba(139,92,246,0.3)" : `linear-gradient(135deg,${P},#ef4444)`, color:"white", border:"none", borderRadius:"8px", cursor: aiLoading || !aiInp.trim() ? "not-allowed" : "pointer", fontSize:"12px", fontFamily:"inherit", fontWeight:700, transition:"all 0.2s" }}>
              {aiLoading ? "Claude schreibt..." : "Senden →"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}