import React from "react";
import { Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const footerLinks = {
  Soluções: [
    { label: "Loja Online", href: "#solucoes" },
    { label: "Agendamento", href: "#solucoes" },
    { label: "Delivery", href: "#solucoes" },
  ],
  Empresa: [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Modelo de Contratação", href: "#contratacao" },
    { label: "Fale Conosco", href: "https://wa.me/5527988625801?text=Oi%2C%20quero%20entender%20como%20automatizar%20meu%20neg%C3%B3cio%20e%20vender%20mais" },
  ],
  Legal: [
    { label: "Termos de Uso", href: "/termos-de-uso" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Política de Cookies", href: "/politica-de-cookies" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ioysistemas/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@IoySolu%C3%A7%C3%B5esemSoftware",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ioysistemas",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo-black.png"
                alt="IOY Soluções em Software"
                className="h-9 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sistemas completos para negócios locais. Do atendimento ao financeiro, organizamos tudo para você crescer com estrutura.
            </p>
            <a
              href="https://wa.me/5527988625801?text=Oi%2C%20quero%20entender%20como%20automatizar%20meu%20neg%C3%B3cio%20e%20vender%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all shadow"
            >
              Falar no WhatsApp
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Email */}
            <a
              href="mailto:contato@ioy.com.br"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 text-sm mt-4 transition-colors"
            >
              <Mail className="w-4 h-4" />
              contato@ioy.com.br
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href.startsWith('http') || link.href.startsWith('/') ? link.href : (isHome ? link.href : `/${link.href}`)}
                      className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} IOY Soluções em Software. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
