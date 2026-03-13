import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

declare global {
  var __siteData: Record<string, any> | undefined;
}

const DEFAULT_DATA = {
  hero: {
    badge: "KI-gestützte Web-Entwicklung · 2026",
    h1a: "Gestern analog.",
    h1b: "Heute digital.",
    h2: "Morgen mit KI — weit vor der Konkurrenz.",
    desc: "Wir bauen dir eine professionelle Webseite — automatisiert, modern, mit echter KI.",
    cta1: "Live Demos",
    cta2: "Anfragen ✦",
  },
  kontakt: {
    headline: "Starte dein Projekt noch heute.",
    subline: "professionelle Webseite?",
    desc: "Kostenlose Erstberatung — ich analysiere dein Business und zeige dir genau was du brauchst. Kein Risiko, keine versteckten Kosten.",
    phone: "+49 176 85974436",
    email: "ghaith.almadani.makkieh@gmail.com",
    location: "Rosenberg, Baden-Württemberg",
    wa_sub: "+49 176 85974436 · Antwort in 1 Stunde",
  },
  preise: {
    t1_name: "Starter", t1_price: "299",
    t1_features: "1 Landing Page\nMobile-optimiert\nKontaktformular\nGoogle Maps\n14 Tage Support",
    t2_name: "Business", t2_price: "799",
    t2_features: "Bis 6 Seiten\nCMS System\nSEO Optimierung\nGoogle Analytics\n60 Tage Support",
    t3_name: "Premium", t3_price: "1.499",
    t3_features: "Unlimited Seiten\nOnline Shop\nKI-Chatbot\nSEO Full-Paket\n12 Monate Support",
  },
  ueber: {
    name: "Ghaith Almadani",
    job: "KFZ-Mechatroniker & Web-Entwickler",
    story: "Was als Hobby begann, ist heute WebIT AI — eine Agentur die kleinen Betrieben in Deutschland hilft, endlich online sichtbar zu werden. Mit echten KI-Tools, modernem Design und Technologien die sonst nur große Konzerne kennen.",
    location: "Rosenberg, Baden-Württemberg",
    age: "22",
  },
  bot: {
    greeting: "👋 Hallo! Ich bin der WebIT AI Assistent.\n\nFrag mich alles — Preise, Demos, KI-Features! 😊",
    preis: "💰 Unsere Pakete:\n\n🥉 Starter – 299€\nLanding Page, Mobile, SEO\n\n🥈 Business – 799€\nBis 6 Seiten, CMS, SEO\n\n🥇 Premium – 1.499€\nUnlimited, Shop, KI-Bot",
    kontakt: "📞 +49 176 85974436\n✉️ ghaith.almadani.makkieh@gmail.com\n\nAntwort innerhalb von 24h!",
    dauer: "⏱️ Starter: 3–5 Tage\nBusiness: 7–10 Tage\nPremium: 14–21 Tage",
    garantie: "✅ 14 Tage kostenlose Nachbesserung\nKeine versteckten Kosten\nKein Monatsabo",
  },
  seo: {
    title: "WebIT AI – KI Webseiten für lokale Businesses",
    desc: "WebIT AI aus Rosenberg erstellt moderne, KI-gestützte Webseiten für lokale Unternehmen in Baden-Württemberg. Günstig, schnell, professionell – ab 299€.",
    keywords: "Webdesign Rosenberg, KI Webdesign, Webseite erstellen Baden-Württemberg",
  },
};

function getStore() {
  if (!global.__siteData) global.__siteData = { ...DEFAULT_DATA };
  return global.__siteData;
}

export async function GET() {
  return NextResponse.json(getStore(), {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const store = getStore();
    Object.keys(body).forEach((section) => {
      store[section] = { ...(store[section] || {}), ...body[section] };
    });
    global.__siteData = store;
    return NextResponse.json({ ok: true, data: store });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}