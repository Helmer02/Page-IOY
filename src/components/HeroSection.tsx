import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselSlides = [
  {
    src: '/saasland/loja.png',
    alt: 'Vitrine Online',
    label: 'Vitrine Online',
  },
  {
    src: '/saasland/produtoloja.png',
    alt: 'Página de Produto',
    label: 'Página de Produto',
  },
  {
    src: '/saasland/produtos.png',
    alt: 'Gestão de Produtos',
    label: 'Gestão de Produtos',
  },
  {
    src: '/saasland/financeiro.png',
    alt: 'Painel Financeiro',
    label: 'Painel Financeiro',
  },
  {
    src: '/saasland/checkout.png',
    alt: 'Checkout',
    label: 'Checkout Inteligente',
  },
  {
    src: '/saasland/relatorio.png',
    alt: 'Relatórios de Vendas',
    label: 'Relatórios de Vendas',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right' = 'right') => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % carouselSlides.length, 'right');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + carouselSlides.length) % carouselSlides.length, 'left');
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-50 via-purple-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-70" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-50 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-50/40 to-transparent rounded-full" />
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-6">
            <span className="badge">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              IOY Soluções em Software
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6" style={{ animationDelay: '0.1s' }}>
            Organize, venda e{' '}
            <span className="gradient-text">cresça seu negócio</span>{' '}
            sem complicação
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Sistemas completos para negócios locais. Do atendimento ao financeiro, tudo no mesmo lugar — com implantação feita junto com você.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-14" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com a equipe
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200"
            >
              Conhecer as soluções
            </a>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in flex flex-wrap justify-center gap-6 text-sm text-gray-500" style={{ animationDelay: '0.4s' }}>
            {[
              'Implantação feita junto com você',
              'Suporte contínuo',
              'Treinamento incluído',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual — Carousel */}
        <div
          className="mt-20 relative animate-fade-in"
          style={{ animationDelay: '0.5s' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl opacity-10 rounded-3xl" />
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden hover-lift">
              {/* Fake browser bar */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4 bg-white rounded-lg border border-gray-200 px-3 py-1 text-xs text-gray-400">
                  ioy.sistema.com.br/sua-loja
                </div>
                {/* Slide label */}
                <span className="text-xs text-indigo-500 font-medium px-2 py-0.5 bg-indigo-50 rounded-full">
                  {carouselSlides[current].label}
                </span>
              </div>

              {/* Slide image */}
              <div
                className="relative w-full overflow-hidden bg-gray-50"
                style={{ paddingBottom: '56.25%' /* 16:9 ratio */ }}
              >
                <img
                  key={current}
                  src={carouselSlides[current].src}
                  alt={carouselSlides[current].alt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top left',
                    animation: animating
                      ? `carousel-out-${direction} 0.4s ease forwards`
                      : `carousel-in-${direction} 0.4s ease forwards`,
                  }}
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prev}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-indigo-600 rounded-full p-2 shadow-lg border border-gray-100 transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-indigo-600 rounded-full p-2 shadow-lg border border-gray-100 transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? 'right' : 'left')}
                    aria-label={`Ir para slide ${i + 1}`}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      borderRadius: 9999,
                      background: i === current
                        ? 'linear-gradient(90deg, #6366f1, #a855f7)'
                        : '#d1d5db',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel keyframe animations */}
      <style>{`
        @keyframes carousel-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes carousel-out-right {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes carousel-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes carousel-out-left {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(40px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
