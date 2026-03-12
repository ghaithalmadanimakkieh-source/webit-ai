// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const PASSWORD = "webit2026";

const DEFAULT_BOT_ANSWERS = [
  { id: 1, trigger: "preis", answer: "💰 Unsere Pakete:\n\n🥉 Starter – 299€\nLanding Page, Mobile, SEO\n\n🥈 Business – 799€\nBis 6 Seiten, CMS, SEO\n\n🥇 Premium – 1.499€\nUnlimited, Shop, KI-Bot" },
  { id: 2, trigger: "kontakt", answer: "📞 Ruf mich an: +49 176 85974436\n✉️ Oder schreib mir auf WhatsApp!\n\nIch antworte innerhalb von 24h." },
  { id: 3, trigger: "dauer", answer: "⏱️ Starter: 3–5 Tage\nBusiness: 7–10 Tage\nPremium: 14–21 Tage\n\nSchnelle Lieferung garantiert!" },
  { id: 4, trigger: "demo", answer: "🎨 Schau dir unsere Live-Demos an:\n\n• Fitness Studio\n• Restaurant\n• Friseur\n• Arztpraxis\n• Immobilien\n• Kanzlei\n• Online Shop\n• Bildung" },
];

const STATS = [
  { label: "Seitenaufrufe heute", value: "—", icon: "👁️", color: "#8b5cf6" },
  { label: "Besucher gesamt", value: "—", icon: "👥", color: "#10b981" },
  { label: "Anfragen", value: "—", icon: "✉️", color: "#f59e0b" },
  { label: "Google Position", value: "—", icon: "🔍", color: "#ef4444" },
];

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [tab, setTab] = useState("dashboard");
  const [bots, setBots] = useState(DEFAULT_BOT_ANSWERS);
  const [editId, setEditId] = useState(null);
  const [editTrigger, setEditTrigger] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [newTrigger, setNewTrigger] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [saved, setSaved] = useState(false);
  const [seoChecks, setSeoChecks] = useState([
    { label: "Sitemap (webit-ai.de/sitemap.xml)", done: true },
    { label: "robots.txt vorhanden", done: true },
    { label: "Meta Title gesetzt", done: true },
    { label: "Meta Description gesetzt", done: true },
    { label: "Google Search Console verbunden", done: true },
    { label: "Google My Business aktiv", done: true },
    { label: "Layout.tsx mit SEO Tags", done: true },
    { label: "Geo-Tags (Rosenberg/BW)", done: true },
    { label: "OpenGraph Tags", done: true },
    { label: "Mobile optimiert", done: true },
  ]);

  useEffect(() => {
    const stored = localStorage.getItem("webit_authed");
    if (stored === "1") setAuthed(true);
    const storedBots = localStorage.getItem("webit_bots");
    if (storedBots) setBots(JSON.parse(storedBots));
  }, []);

  function login() {
    if (pw === PASSWORD) {
      setAuthed(true);
      localStorage.setItem("webit_authed", "1");
      setPwError(false);
    } else {
      setPwError(true);
    }
  }

  function logout() {
    setAuthed(false);
    localStorage.removeItem("webit_authed");
  }

  function saveBots(updated) {
    setBots(updated);
    localStorage.setItem("webit_bots", JSON.stringify(updated));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function startEdit(bot) {
    setEditId(bot.id);
    setEditTrigger(bot.trigger);
    setEditAnswer(bot.answer);
  }

  function saveEdit() {
    const updated = bots.map(b => b.id === editId ? { ...b, trigger: editTrigger, answer: editAnswer } : b);
    saveBots(updated);
    setEditId(null);
  }

  function deleteBot(id) {
    saveBots(bots.filter(b => b.id !== id));
  }

  function addBot() {
    if (!newTrigger || !newAnswer) return;
    const updated = [...bots, { id: Date.now(), trigger: newTrigger, answer: newAnswer }];
    saveBots(updated);
    setNewTrigger("");
    setNewAnswer("");
  }

  if (!authed) return (
    <div style={{ minHeight: "100vh", background: "#080810", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI',sans-serif" }}>
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "48px 40px", maxWidth: "380px", width: "90%", textAlign: "center" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔐</div>
        <h1 style={{ color: "white", fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}>WebIT AI</h1>
        <p style={{ color: "rgba(255,255,255,0.3)", marginBottom: "28px", fontSize: "14px" }}>Admin Dashboard</p>
        <input
          type="password"
          placeholder="Passwort eingeben..."
          value={pw}
          onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === "Enter" && login()}
          style={{ width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.05)", border: `1px solid ${pwError ? "#ef4444" : "rgba(255,255,255,0.1)"}`, borderRadius: "10px", color: "white", fontSize: "14px", outline: "none", boxSizing: "border-box", marginBottom: "12px" }}
        />
        {pwError && <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "12px" }}>❌ Falsches Passwort</p>}
        <button onClick={login} style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg,#8b5cf6,#ef4444)", color: "white", fontWeight: "700", fontSize: "15px", borderRadius: "10px", border: "none", cursor: "pointer" }}>
          Einloggen →
        </button>
        <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px", marginTop: "16px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>← Zurück zur Webseite</a>
        </p>
      </div>
    </div>
  );

  const TABS = [
    { id: "dashboard", label: "📊 Dashboard", },
    { id: "bots", label: "🤖 KI Bot", },
    { id: "seo", label: "🔍 SEO", },
    { id: "links", label: "🔗 Quick Links", },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#080810", fontFamily: "'Segoe UI',sans-serif", color: "white" }}>
      <style>{`
        .admin-input{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:10px 14px;color:white;font-size:13px;outline:none;width:100%;box-sizing:border-box;font-family:inherit}
        .admin-input:focus{border-color:rgba(139,92,246,0.5)}
        .admin-btn{padding:9px 18px;background:linear-gradient(135deg,#8b5cf6,#ef4444);color:white;font-weight:700;font-size:13px;border:none;border-radius:8px;cursor:pointer;font-family:inherit}
        .admin-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:24px}
        @media(max-width:768px){.admin-grid{grid-template-columns:1fr 1fr!important}.admin-tabs{flex-wrap:wrap;gap:6px!important}}
      `}</style>

      {/* TOP NAV */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "32px", height: "32px", background: "linear-gradient(135deg,#8b5cf6,#ef4444)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>W</div>
          <div>
            <div style={{ fontWeight: "800", fontSize: "15px" }}>WebIT AI Admin</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>webit-ai.de</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <a href="/" target="_blank" style={{ padding: "8px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", color: "white", textDecoration: "none", fontSize: "12px" }}>🌐 Webseite</a>
          <button onClick={logout} style={{ padding: "8px 14px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", color: "#ef4444", fontSize: "12px", cursor: "pointer", fontFamily: "inherit" }}>Logout</button>
        </div>
      </div>

      {/* TABS */}
      <div className="admin-tabs" style={{ display: "flex", gap: "8px", padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "9px 18px", borderRadius: "10px", background: tab === t.id ? "linear-gradient(135deg,#8b5cf6,#ef4444)" : "rgba(255,255,255,0.04)", border: `1px solid ${tab === t.id ? "transparent" : "rgba(255,255,255,0.07)"}`, color: "white", fontWeight: tab === t.id ? "700" : "500", fontSize: "13px", cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}>{t.label}</button>
        ))}
      </div>

      <div style={{ padding: "24px", maxWidth: "1000px", margin: "0 auto" }}>

        {/* DASHBOARD TAB */}
        {tab === "dashboard" && (
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "20px" }}>Übersicht</h2>

            {/* STATS */}
            <div className="admin-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginBottom: "24px" }}>
              {STATS.map((s, i) => (
                <div key={i} className="admin-card" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "28px", marginBottom: "8px" }}>{s.icon}</div>
                  <div style={{ fontSize: "26px", fontWeight: "900", color: s.color, marginBottom: "4px" }}>{s.value}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* VERCEL ANALYTICS INFO */}
            <div className="admin-card" style={{ marginBottom: "16px", border: "1px solid rgba(139,92,246,0.2)" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>📈 Live Besucher — Vercel Analytics</h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: "1.7", marginBottom: "16px" }}>
                Für echte Live-Statistiken → Vercel Dashboard aktivieren:
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a href="https://vercel.com/dashboard" target="_blank" style={{ padding: "9px 18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", textDecoration: "none", fontSize: "13px" }}>→ Vercel Dashboard öffnen</a>
                <a href="https://vercel.com/docs/analytics" target="_blank" style={{ padding: "9px 18px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "8px", color: "#c4b5fd", textDecoration: "none", fontSize: "13px" }}>→ Analytics einrichten</a>
              </div>
            </div>

            {/* STATUS */}
            <div className="admin-card">
              <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "14px" }}>🟢 System Status</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Webseite webit-ai.de", status: "Online", color: "#10b981" },
                  { label: "Vercel Deployment", status: "Aktiv", color: "#10b981" },
                  { label: "Google Search Console", status: "Verbunden", color: "#10b981" },
                  { label: "Google My Business", status: "Aktiv", color: "#10b981" },
                  { label: "Kontaktformular", status: "Aktiv", color: "#10b981" },
                  { label: "WhatsApp Button", status: "Aktiv", color: "#10b981" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderRadius: "8px" }}>
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: item.color, background: item.color + "15", padding: "3px 10px", borderRadius: "100px" }}>● {item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BOT TAB */}
        {tab === "bots" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "800" }}>🤖 KI Bot Antworten</h2>
              {saved && <span style={{ color: "#10b981", fontWeight: "700", fontSize: "13px" }}>✓ Gespeichert!</span>}
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "20px", lineHeight: "1.6" }}>
              Wenn ein Besucher ein <strong style={{ color: "white" }}>Trigger-Wort</strong> eingibt, antwortet der Bot automatisch mit deiner Antwort.
            </p>

            {/* BOT LIST */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {bots.map(bot => (
                <div key={bot.id} className="admin-card">
                  {editId === bot.id ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div>
                        <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px", display: "block" }}>TRIGGER WORT</label>
                        <input className="admin-input" value={editTrigger} onChange={e => setEditTrigger(e.target.value)} />
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px", display: "block" }}>ANTWORT</label>
                        <textarea className="admin-input" rows={4} value={editAnswer} onChange={e => setEditAnswer(e.target.value)} style={{ resize: "vertical" }} />
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button onClick={saveEdit} className="admin-btn">✓ Speichern</button>
                        <button onClick={() => setEditId(null)} style={{ padding: "9px 18px", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontFamily: "inherit", fontSize: "13px" }}>Abbrechen</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "inline-block", padding: "3px 10px", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)", borderRadius: "100px", fontSize: "11px", color: "#c4b5fd", fontWeight: "700", marginBottom: "8px" }}>
                          Trigger: "{bot.trigger}"
                        </div>
                        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5", whiteSpace: "pre-line" }}>{bot.answer.substring(0, 100)}{bot.answer.length > 100 ? "..." : ""}</div>
                      </div>
                      <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                        <button onClick={() => startEdit(bot)} style={{ padding: "7px 12px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "7px", color: "#c4b5fd", cursor: "pointer", fontSize: "12px", fontFamily: "inherit" }}>✏️ Edit</button>
                        <button onClick={() => deleteBot(bot.id)} style={{ padding: "7px 12px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "7px", color: "#ef4444", cursor: "pointer", fontSize: "12px", fontFamily: "inherit" }}>🗑️</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ADD NEW */}
            <div className="admin-card" style={{ border: "1px solid rgba(16,185,129,0.2)" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "700", marginBottom: "14px", color: "#10b981" }}>➕ Neue Bot-Antwort hinzufügen</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div>
                  <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px", display: "block" }}>TRIGGER WORT (z.B. "garantie", "rabatt", "portfolio")</label>
                  <input className="admin-input" placeholder="Trigger-Wort eingeben..." value={newTrigger} onChange={e => setNewTrigger(e.target.value)} />
                </div>
                <div>
                  <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px", display: "block" }}>BOT ANTWORT</label>
                  <textarea className="admin-input" rows={3} placeholder="Bot-Antwort eingeben..." value={newAnswer} onChange={e => setNewAnswer(e.target.value)} style={{ resize: "vertical" }} />
                </div>
                <button onClick={addBot} className="admin-btn" style={{ alignSelf: "flex-start" }}>➕ Hinzufügen</button>
              </div>
            </div>
          </div>
        )}

        {/* SEO TAB */}
        {tab === "seo" && (
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "8px" }}>🔍 SEO Status</h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "20px" }}>Alle SEO-Optimierungen für webit-ai.de</p>

            {/* SEO SCORE */}
            <div className="admin-card" style={{ textAlign: "center", marginBottom: "20px", border: "1px solid rgba(16,185,129,0.2)" }}>
              <div style={{ fontSize: "56px", fontWeight: "900", color: "#10b981", marginBottom: "6px" }}>
                {seoChecks.filter(s => s.done).length}/{seoChecks.length}
              </div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>SEO Checks erfüllt</div>
              <div style={{ marginTop: "12px", height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "100px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(seoChecks.filter(s => s.done).length / seoChecks.length) * 100}%`, background: "linear-gradient(90deg,#10b981,#8b5cf6)", borderRadius: "100px", transition: "width 0.5s" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              {seoChecks.map((check, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", background: "rgba(255,255,255,0.02)", borderRadius: "10px", border: `1px solid ${check.done ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)"}` }}>
                  <span style={{ fontSize: "16px" }}>{check.done ? "✅" : "❌"}</span>
                  <span style={{ fontSize: "13px", color: check.done ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)" }}>{check.label}</span>
                </div>
              ))}
            </div>

            {/* TIPS */}
            <div className="admin-card" style={{ border: "1px solid rgba(139,92,246,0.2)" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "700", marginBottom: "14px" }}>💡 Nächste SEO Schritte</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { tip: "Erstelle erste Blogbeiträge (z.B. 'Webdesign Tipps für Friseure')", priority: "Hoch" },
                  { tip: "Sammle 5 Google Bewertungen von Bekannten", priority: "Hoch" },
                  { tip: "Poste wöchentlich auf Google My Business", priority: "Mittel" },
                  { tip: "Baue Backlinks auf (Einträge in Branchenbücher)", priority: "Mittel" },
                  { tip: "Füge mehr Seiten hinzu (Blog, Portfolio)", priority: "Niedrig" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderRadius: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", padding: "2px 8px", borderRadius: "100px", background: item.priority === "Hoch" ? "rgba(239,68,68,0.15)" : item.priority === "Mittel" ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.08)", color: item.priority === "Hoch" ? "#ef4444" : item.priority === "Mittel" ? "#f59e0b" : "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: "1px" }}>{item.priority}</span>
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5" }}>{item.tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LINKS TAB */}
        {tab === "links" && (
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "20px" }}>🔗 Quick Links</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "12px" }}>
              {[
                { label: "Webseite live", url: "https://webit-ai.de", icon: "🌐", color: "#8b5cf6" },
                { label: "Vercel Dashboard", url: "https://vercel.com/dashboard", icon: "▲", color: "#ffffff" },
                { label: "GitHub Repository", url: "https://github.com/ghaithmadanimakkieh-source/webit-ai", icon: "🐙", color: "#64748b" },
                { label: "Google Search Console", url: "https://search.google.com/search-console", icon: "🔍", color: "#10b981" },
                { label: "Google My Business", url: "https://business.google.com", icon: "📍", color: "#f59e0b" },
                { label: "Sitemap", url: "https://webit-ai.de/sitemap.xml", icon: "🗺️", color: "#06b6d4" },
                { label: "FormSubmit Inbox", url: "https://formsubmit.co/", icon: "✉️", color: "#ec4899" },
                { label: "WhatsApp öffnen", url: "https://wa.me/4917685974436", icon: "💬", color: "#25d366" },
                { label: "Demo Fitness", url: "https://webit-ai.de/demo/fitness", icon: "🏋️", color: "#ef4444" },
                { label: "Demo Restaurant", url: "https://webit-ai.de/demo/restaurant", icon: "🍝", color: "#d4af37" },
                { label: "Demo Friseur", url: "https://webit-ai.de/demo/friseur", icon: "✂️", color: "#8b5cf6" },
                { label: "Demo Arztpraxis", url: "https://webit-ai.de/demo/arztpraxis", icon: "🏥", color: "#0284c7" },
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", textDecoration: "none", color: "white", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)" }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)" }}>
                  <div style={{ width: "36px", height: "36px", background: link.color + "18", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>{link.icon}</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: "600" }}>{link.label}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", marginTop: "2px" }}>{link.url.replace("https://", "").substring(0, 30)}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}