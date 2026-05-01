const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const DATA_DIR = path.join(ROOT, "data");
const CONFIG_PATH = path.join(DATA_DIR, "config.json");
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const SUPABASE_TABLE = "site_config";
const SUPABASE_ROW_ID = "main";
const IS_VERCEL = process.env.VERCEL === "1";

const DEFAULT_ACCOMMODATIONS = [
  {
    id: "ac-1",
    name: "Loja Online",
    capacity: 12,
    price: "Principal",
    images: ["/loja.png", "/produtoloja.png", "/produtos.png", "/financeiro.png"],
    airbnbIcalUrl: "https://lojaonline.ioy.com.br/",
    manualBusyDates: []
  },
  {
    id: "ac-2",
    name: "Agendamento",
    capacity: 6,
    price: "Disponivel",
    images: [],
    airbnbIcalUrl: "https://agenda.ioy.com.br/",
    manualBusyDates: []
  },
  {
    id: "ac-3",
    name: "Delivery",
    capacity: 6,
    price: "Em breve",
    images: [],
    airbnbIcalUrl: "https://wa.me/5527988625801?text=Oi%2C%20quero%20entender%20como%20automatizar%20meu%20neg%C3%B3cio%20e%20vender%20mais",
    manualBusyDates: []
  }
];

const DEFAULT_CONFIG = {
  hero: {
    title: "Organize, venda e cresca seu negocio sem complicacao",
    subtitle:
      "Sistemas completos para negocios locais. Do atendimento ao financeiro, tudo no mesmo lugar com implantacao feita junto com voce.",
    bannerImage: "/painel.png"
  },
  galleryImages: [
    {
      src: "/loja.png",
      alt: "Vitrine Online"
    },
    {
      src: "/produtoloja.png",
      alt: "Pagina de Produto"
    },
    {
      src: "/produtos.png",
      alt: "Gestao de Produtos"
    },
    {
      src: "/financeiro.png",
      alt: "Painel Financeiro"
    }
  ],
  accommodations: DEFAULT_ACCOMMODATIONS,
  sections: {
    problemTitle: "Seu negocio cresce, mas a operacao trava",
    problemSubtitle: "Processos manuais e ferramentas separadas atrasam vendas e atendimento.",
    solutionTitle: "As solucoes da IOY",
    solutionSubtitle: "Cada sistema e pensado para uma etapa da sua operacao.",
    howTitle: "Como funciona",
    howSubtitle: "Implantacao guiada, treinamento e suporte continuo.",
    benefitsTitle: "Beneficios reais",
    benefitsSubtitle: "Mais organizacao, menos retrabalho e mais resultado.",
    testimonialsTitle: "Resultados de clientes",
    testimonialsSubtitle: "Empresas locais que evoluiram com a IOY.",
    pricingTitle: "Modelos de contratacao transparentes",
    pricingSubtitle: "Sem letras miudas e sem comissao sobre vendas.",
    ctaTitle: "Vamos estruturar seu negocio?",
    ctaSubtitle: "Fale com a equipe e descubra a melhor solucao para o seu momento."
  },
  contact: {
    phone: "+55 27 98862-5801",
    whatsapp: "https://wa.me/5527988625801?text=Oi%2C%20quero%20entender%20como%20automatizar%20meu%20neg%C3%B3cio%20e%20vender%20mais",
    instagram: "",
    linkedin: "",
    facebook: "",
    email: ""
  }
};

function ensureLocalConfigFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(CONFIG_PATH)) {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(DEFAULT_CONFIG, null, 2), "utf-8");
  }
}

function normalizeAccommodation(input, index) {
  const x = input && typeof input === "object" ? input : {};
  const safeId = typeof x.id === "string" && x.id.trim() ? x.id.trim() : `ac-${index + 1}`;
  const imageList = Array.isArray(x.images)
    ? x.images.filter((img) => typeof img === "string" && img.trim()).slice(0, 4)
    : (typeof x.image === "string" && x.image.trim() ? [x.image.trim()] : []);
  return {
    id: safeId,
    name: typeof x.name === "string" && x.name.trim() ? x.name.trim() : `Acomodação ${index + 1}`,
    capacity: Number.isFinite(Number(x.capacity)) ? Number(x.capacity) : 4,
    price: typeof x.price === "string" ? x.price.trim() : "",
    images: imageList,
    airbnbIcalUrl: typeof x.airbnbIcalUrl === "string" ? x.airbnbIcalUrl.trim() : "",
    manualBusyDates: Array.isArray(x.manualBusyDates) ? x.manualBusyDates : []
  };
}

function normalizeConfig(input) {
  const parsed = input && typeof input === "object" ? input : {};

  const migratedAccommodations = Array.isArray(parsed.accommodations) && parsed.accommodations.length
    ? parsed.accommodations
    : [
        {
          id: "ac-1",
          name: "Acomodação Principal",
          capacity: 4,
          price: "",
          images: [],
          airbnbIcalUrl: typeof parsed.airbnbIcalUrl === "string" ? parsed.airbnbIcalUrl : "",
          manualBusyDates: Array.isArray(parsed.manualBusyDates) ? parsed.manualBusyDates : []
        }
      ];

  return {
    ...DEFAULT_CONFIG,
    ...parsed,
    hero: { ...DEFAULT_CONFIG.hero, ...(parsed.hero || {}) },
    galleryImages: Array.isArray(parsed.galleryImages) ? parsed.galleryImages : DEFAULT_CONFIG.galleryImages,
    accommodations: migratedAccommodations.map(normalizeAccommodation),
    sections: { ...DEFAULT_CONFIG.sections, ...(parsed.sections || {}) },
    contact: { ...DEFAULT_CONFIG.contact, ...(parsed.contact || {}) }
  };
}

function localLoadConfig() {
  ensureLocalConfigFile();
  try {
    return normalizeConfig(JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8")));
  } catch {
    return normalizeConfig(DEFAULT_CONFIG);
  }
}

function localSaveConfig(config) {
  ensureLocalConfigFile();
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
}

async function loadConfig() {
  if (IS_VERCEL && (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY)) {
    return normalizeConfig(DEFAULT_CONFIG);
  }
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const fromDb = await supabaseGetConfig();
      if (fromDb) return normalizeConfig(fromDb);
      await supabaseUpsertConfig(DEFAULT_CONFIG);
      return normalizeConfig(DEFAULT_CONFIG);
    } catch (error) {
      if (IS_VERCEL) throw error;
      return localLoadConfig();
    }
  }
  return localLoadConfig();
}

async function saveConfig(config) {
  const normalized = normalizeConfig(config);
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    try {
      await supabaseUpsertConfig(normalized);
      return normalized;
    } catch (error) {
      if (IS_VERCEL) throw error;
      localSaveConfig(normalized);
      return normalized;
    }
  }
  if (IS_VERCEL) {
    throw new Error("SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY não configurados na Vercel.");
  }
  localSaveConfig(normalized);
  return normalized;
}

function sanitizePublicConfig(config) {
  return {
    hero: config.hero,
    galleryImages: config.galleryImages,
    accommodations: (config.accommodations || []).map((a) => ({
      id: a.id,
      name: a.name,
      capacity: a.capacity,
      price: a.price || "",
      images: Array.isArray(a.images) ? a.images.slice(0, 4) : []
    })),
    sections: config.sections,
    contact: config.contact
  };
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "admin123";
}

async function supabaseGetConfig() {
  const query = new URLSearchParams({
    select: "data",
    id: `eq.${SUPABASE_ROW_ID}`,
    limit: "1"
  });
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?${query.toString()}`, {
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
    }
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Falha no Supabase SELECT: ${details}`);
  }
  const rows = await response.json();
  if (!Array.isArray(rows) || rows.length === 0) return null;
  return rows[0] && rows[0].data ? rows[0].data : null;
}

async function supabaseUpsertConfig(config) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: "resolution=merge-duplicates"
    },
    body: JSON.stringify([
      {
        id: SUPABASE_ROW_ID,
        data: config
      }
    ])
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Falha no Supabase UPSERT: ${details}`);
  }
}

module.exports = {
  DEFAULT_CONFIG,
  loadConfig,
  saveConfig,
  sanitizePublicConfig,
  getAdminPassword
};
