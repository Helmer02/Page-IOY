const loginCard = document.getElementById("loginCard");
const panel = document.getElementById("panel");
const loginStatus = document.getElementById("loginStatus");
const saveStatus = document.getElementById("saveStatus");
const galleryFields = document.getElementById("galleryFields");
const solutionSelect = document.getElementById("solutionSelect");
const solutionImagesFields = document.getElementById("solutionImagesFields");

const LOCAL_CONFIG_KEY = "adminLocalConfig";
const LOCAL_DEV_PASSWORD = "admin123";

let adminPassword = sessionStorage.getItem("adminPassword") || "";
let configState = null;
let selectedSolutionId = null;
let useLocalMode = false;

const LOCAL_DEFAULT_CONFIG = {
  hero: {
    title: "Organize, venda e cresca seu negocio sem complicacao",
    subtitle: "Sistemas completos para negocios locais. Do atendimento ao financeiro, tudo no mesmo lugar.",
    bannerImage: "/painel.png"
  },
  galleryImages: [
    { src: "/loja.png", alt: "Vitrine Online" },
    { src: "/produtoloja.png", alt: "Pagina de Produto" },
    { src: "/produtos.png", alt: "Gestao de Produtos" },
    { src: "/financeiro.png", alt: "Painel Financeiro" }
  ],
  accommodations: [
    { id: "sol-1", name: "Loja Online", price: "Principal", airbnbIcalUrl: "https://lojaonline.ioy.com.br/", images: ["/loja.png"], manualBusyDates: ["Sistema principal da IOY"] },
    { id: "sol-2", name: "Agendamento", price: "Disponivel", airbnbIcalUrl: "https://agenda.ioy.com.br/", images: [], manualBusyDates: ["Teste gratis de 10 dias"] }
  ],
  sections: {
    problemTitle: "Seu negocio cresce, mas a operacao trava",
    problemSubtitle: "Processos manuais e ferramentas separadas acabam atrasando vendas e atendimento.",
    solutionTitle: "As solucoes da IOY",
    solutionSubtitle: "Sistemas para cada etapa da sua operacao.",
    howTitle: "Como funciona",
    howSubtitle: "Implantacao guiada, treinamento e suporte continuo.",
    benefitsTitle: "Beneficios reais",
    benefitsSubtitle: "Mais organizacao, menos retrabalho e mais vendas.",
    testimonialsTitle: "Resultados de clientes",
    testimonialsSubtitle: "Empresas locais que evoluiram com a IOY.",
    pricingTitle: "Modelos de contratacao transparentes",
    pricingSubtitle: "Sem letras miudas. Sem comissao sobre venda.",
    ctaTitle: "Vamos estruturar seu negocio?",
    ctaSubtitle: "Fale com a equipe e veja a melhor solucao para o seu momento."
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

async function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function ensureShape(config) {
  const next = { ...LOCAL_DEFAULT_CONFIG, ...(config || {}) };
  next.hero = { ...LOCAL_DEFAULT_CONFIG.hero, ...(next.hero || {}) };
  next.sections = { ...LOCAL_DEFAULT_CONFIG.sections, ...(next.sections || {}) };
  next.contact = { ...LOCAL_DEFAULT_CONFIG.contact, ...(next.contact || {}) };
  next.galleryImages = Array.isArray(next.galleryImages) ? next.galleryImages : [];
  next.accommodations = Array.isArray(next.accommodations) ? next.accommodations : [];
  return next;
}

function getSelectedSolution() {
  return (configState?.accommodations || []).find((x) => x.id === selectedSolutionId) || null;
}

function updateSolutionSelect() {
  const list = configState?.accommodations || [];
  solutionSelect.innerHTML = "";
  list.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item.id;
    opt.textContent = item.name || item.id;
    solutionSelect.appendChild(opt);
  });
  if (!selectedSolutionId && list.length) selectedSolutionId = list[0].id;
  solutionSelect.value = selectedSolutionId || "";
}

function renderSolutionImagesFields(images) {
  solutionImagesFields.innerHTML = "";
  const list = Array.from({ length: 4 }, (_, i) => images[i] || "");
  list.forEach((img, index) => {
    const box = document.createElement("div");
    box.className = "photo-box";
    box.innerHTML = `
      <label>Imagem ${index + 1}</label>
      <input data-kind="sol-src" data-index="${index}" value="${img}" placeholder="Upload ou URL" />
      <input data-kind="sol-file" data-index="${index}" type="file" accept="image/*" />
      <img data-kind="sol-preview" data-index="${index}" class="thumb" src="${img}" alt="Preview ${index + 1}" />
    `;
    solutionImagesFields.appendChild(box);
  });

  solutionImagesFields.querySelectorAll("input[data-kind=sol-file]").forEach((fileInput) => {
    fileInput.addEventListener("change", async (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const base64 = await fileToDataUrl(file);
      const index = Number(event.target.dataset.index);
      const srcInput = solutionImagesFields.querySelector(`input[data-kind=sol-src][data-index='${index}']`);
      const preview = solutionImagesFields.querySelector(`img[data-kind=sol-preview][data-index='${index}']`);
      srcInput.value = base64;
      preview.src = base64;
    });
  });
}

function fillSolutionForm() {
  const sol = getSelectedSolution();
  if (!sol) return;
  document.getElementById("solutionName").value = sol.name || "";
  document.getElementById("solutionTag").value = sol.price || "";
  document.getElementById("solutionLink").value = sol.airbnbIcalUrl || "";
  document.getElementById("solutionDescription").value = (sol.manualBusyDates || []).join("\n");
  renderSolutionImagesFields(sol.images || []);
}

function saveSelectedSolutionFromForm() {
  const sol = getSelectedSolution();
  if (!sol) return;
  sol.name = document.getElementById("solutionName").value.trim() || sol.name;
  sol.price = document.getElementById("solutionTag").value.trim();
  sol.airbnbIcalUrl = document.getElementById("solutionLink").value.trim();
  sol.manualBusyDates = document.getElementById("solutionDescription").value.split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
  sol.images = Array.from(solutionImagesFields.querySelectorAll("input[data-kind=sol-src]")).map((x) => x.value.trim()).filter(Boolean).slice(0, 4);
  updateSolutionSelect();
}

function renderGalleryFields(images) {
  galleryFields.innerHTML = "";
  const list = Array.from({ length: 4 }, (_, i) => images[i] || { src: "", alt: "" });
  list.forEach((image, index) => {
    const box = document.createElement("div");
    box.className = "photo-box";
    box.innerHTML = `
      <label>Foto ${index + 1} URL</label>
      <input data-kind="src" data-index="${index}" value="${image.src || ""}" />
      <label>Texto alternativo</label>
      <input data-kind="alt" data-index="${index}" value="${image.alt || ""}" />
      <label>Upload da foto</label>
      <input data-kind="file" data-index="${index}" type="file" accept="image/*" />
      <img data-kind="preview" data-index="${index}" class="thumb" src="${image.src || ""}" alt="Preview ${index + 1}" />
    `;
    galleryFields.appendChild(box);
  });

  galleryFields.querySelectorAll("input[data-kind=file]").forEach((fileInput) => {
    fileInput.addEventListener("change", async (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const base64 = await fileToDataUrl(file);
      const index = Number(event.target.dataset.index);
      const srcInput = galleryFields.querySelector(`input[data-kind=src][data-index='${index}']`);
      const preview = galleryFields.querySelector(`img[data-kind=preview][data-index='${index}']`);
      srcInput.value = base64;
      preview.src = base64;
    });
  });
}

function fillForm(rawConfig) {
  const config = ensureShape(rawConfig);
  configState = config;

  document.getElementById("heroTitle").value = config.hero.title || "";
  document.getElementById("heroSubtitle").value = config.hero.subtitle || "";
  document.getElementById("heroBanner").value = config.hero.bannerImage || "";
  document.getElementById("heroBannerPreview").src = config.hero.bannerImage || "";
  renderGalleryFields(config.galleryImages || []);

  selectedSolutionId = (config.accommodations[0] && config.accommodations[0].id) || null;
  updateSolutionSelect();
  fillSolutionForm();

  document.getElementById("problemTitle").value = config.sections.problemTitle || "";
  document.getElementById("problemSubtitle").value = config.sections.problemSubtitle || "";
  document.getElementById("solutionSectionTitle").value = config.sections.solutionTitle || "";
  document.getElementById("solutionSectionSubtitle").value = config.sections.solutionSubtitle || "";
  document.getElementById("howTitle").value = config.sections.howTitle || "";
  document.getElementById("howSubtitle").value = config.sections.howSubtitle || "";
  document.getElementById("benefitsTitle").value = config.sections.benefitsTitle || "";
  document.getElementById("benefitsSubtitle").value = config.sections.benefitsSubtitle || "";
  document.getElementById("testimonialsTitle").value = config.sections.testimonialsTitle || "";
  document.getElementById("testimonialsSubtitle").value = config.sections.testimonialsSubtitle || "";
  document.getElementById("pricingTitle").value = config.sections.pricingTitle || "";
  document.getElementById("pricingSubtitle").value = config.sections.pricingSubtitle || "";
  document.getElementById("ctaTitle").value = config.sections.ctaTitle || "";
  document.getElementById("ctaSubtitle").value = config.sections.ctaSubtitle || "";

  document.getElementById("contactPhone").value = config.contact.phone || "";
  document.getElementById("contactWhatsapp").value = config.contact.whatsapp || "";
  document.getElementById("socialInstagram").value = config.contact.instagram || "";
  document.getElementById("socialLinkedin").value = config.contact.linkedin || "";
  document.getElementById("socialFacebook").value = config.contact.facebook || "";
  document.getElementById("contactEmail").value = config.contact.email || "";
}

function collectForm() {
  saveSelectedSolutionFromForm();
  const galleryImages = Array.from(galleryFields.querySelectorAll("input[data-kind=src]")).map((srcInput, index) => {
    const altInput = galleryFields.querySelector(`input[data-kind=alt][data-index='${index}']`);
    return { src: srcInput.value.trim(), alt: (altInput?.value || "").trim() || `Foto ${index + 1}` };
  }).filter((x) => x.src);

  return {
    hero: {
      title: document.getElementById("heroTitle").value.trim(),
      subtitle: document.getElementById("heroSubtitle").value.trim(),
      bannerImage: document.getElementById("heroBanner").value.trim()
    },
    galleryImages,
    accommodations: configState.accommodations,
    sections: {
      problemTitle: document.getElementById("problemTitle").value.trim(),
      problemSubtitle: document.getElementById("problemSubtitle").value.trim(),
      solutionTitle: document.getElementById("solutionSectionTitle").value.trim(),
      solutionSubtitle: document.getElementById("solutionSectionSubtitle").value.trim(),
      howTitle: document.getElementById("howTitle").value.trim(),
      howSubtitle: document.getElementById("howSubtitle").value.trim(),
      benefitsTitle: document.getElementById("benefitsTitle").value.trim(),
      benefitsSubtitle: document.getElementById("benefitsSubtitle").value.trim(),
      testimonialsTitle: document.getElementById("testimonialsTitle").value.trim(),
      testimonialsSubtitle: document.getElementById("testimonialsSubtitle").value.trim(),
      pricingTitle: document.getElementById("pricingTitle").value.trim(),
      pricingSubtitle: document.getElementById("pricingSubtitle").value.trim(),
      ctaTitle: document.getElementById("ctaTitle").value.trim(),
      ctaSubtitle: document.getElementById("ctaSubtitle").value.trim()
    },
    contact: {
      phone: document.getElementById("contactPhone").value.trim(),
      whatsapp: document.getElementById("contactWhatsapp").value.trim(),
      instagram: document.getElementById("socialInstagram").value.trim(),
      linkedin: document.getElementById("socialLinkedin").value.trim(),
      facebook: document.getElementById("socialFacebook").value.trim(),
      email: document.getElementById("contactEmail").value.trim()
    }
  };
}

async function loadAdminConfig() {
  if (useLocalMode) {
    const raw = localStorage.getItem(LOCAL_CONFIG_KEY);
    fillForm(raw ? JSON.parse(raw) : LOCAL_DEFAULT_CONFIG);
    return;
  }

  const response = await fetch("/api/admin/config", { headers: { "x-admin-password": adminPassword } });
  const contentType = response.headers.get("content-type") || "";
  if (response.ok && !contentType.includes("application/json")) {
    useLocalMode = true;
    const raw = localStorage.getItem(LOCAL_CONFIG_KEY);
    fillForm(raw ? JSON.parse(raw) : LOCAL_DEFAULT_CONFIG);
    return;
  }

  if (!response.ok) {
    throw new Error("Falha ao carregar painel.");
  }
  fillForm(await response.json());
}

async function login() {
  adminPassword = document.getElementById("password").value;
  let response = null;
  try {
    response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: adminPassword })
    });
  } catch {}

  const contentType = response ? (response.headers.get("content-type") || "") : "";
  const apiUnavailable = !response || (response.ok && !contentType.includes("application/json")) || response.status === 404;

  if (apiUnavailable) {
    useLocalMode = true;
    if (adminPassword !== LOCAL_DEV_PASSWORD) {
      loginStatus.textContent = "Senha incorreta.";
      return;
    }
  } else if (!response.ok) {
    loginStatus.textContent = "Senha incorreta.";
    return;
  }

  sessionStorage.setItem("adminPassword", adminPassword);
  await loadAdminConfig();
  loginCard.classList.add("hidden");
  panel.classList.remove("hidden");
}

document.getElementById("loginBtn").addEventListener("click", () => login().catch((error) => { loginStatus.textContent = `Nao foi possivel entrar: ${error.message}`; }));
document.getElementById("password").addEventListener("keydown", (e) => { if (e.key === "Enter") document.getElementById("loginBtn").click(); });

document.getElementById("heroBannerFile").addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const base64 = await fileToDataUrl(file);
  document.getElementById("heroBanner").value = base64;
  document.getElementById("heroBannerPreview").src = base64;
});

solutionSelect.addEventListener("change", () => {
  saveSelectedSolutionFromForm();
  selectedSolutionId = solutionSelect.value;
  updateSolutionSelect();
  fillSolutionForm();
});

document.getElementById("addSolutionBtn").addEventListener("click", () => {
  saveSelectedSolutionFromForm();
  const index = (configState.accommodations || []).length + 1;
  const item = { id: `sol-${Date.now()}`, name: `Solucao ${index}`, price: "", airbnbIcalUrl: "", images: [], manualBusyDates: [] };
  configState.accommodations.push(item);
  selectedSolutionId = item.id;
  updateSolutionSelect();
  fillSolutionForm();
});

document.getElementById("removeSolutionBtn").addEventListener("click", () => {
  if (!configState.accommodations || configState.accommodations.length <= 1) return;
  configState.accommodations = configState.accommodations.filter((x) => x.id !== selectedSolutionId);
  selectedSolutionId = configState.accommodations[0].id;
  updateSolutionSelect();
  fillSolutionForm();
});

document.getElementById("saveBtn").addEventListener("click", async () => {
  saveStatus.textContent = "Salvando...";
  const payload = collectForm();

  if (useLocalMode) {
    localStorage.setItem(LOCAL_CONFIG_KEY, JSON.stringify(payload));
    saveStatus.textContent = "Configuracoes salvas (modo local).";
    return;
  }

  const response = await fetch("/api/admin/config", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-password": adminPassword },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    saveStatus.textContent = "Falha ao salvar.";
    return;
  }

  saveStatus.textContent = "Configuracoes salvas com sucesso.";
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  sessionStorage.removeItem("adminPassword");
  location.reload();
});

if (adminPassword) {
  loadAdminConfig().then(() => {
    loginCard.classList.add("hidden");
    panel.classList.remove("hidden");
  }).catch(() => {
    sessionStorage.removeItem("adminPassword");
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/admin-sw.js").catch(() => {});
  });
}
