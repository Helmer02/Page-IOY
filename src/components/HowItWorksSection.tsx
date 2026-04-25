import React from 'react';
import { Link2, ShoppingCart, Send } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Link2 className="h-6 w-6" />,
    title: 'Cliente acessa o link',
    description:
      'Você compartilha o link da sua loja pelo WhatsApp, Instagram ou onde preferir. O cliente abre no celular, sem precisar baixar nenhum aplicativo.',
    color: 'from-blue-500 to-indigo-500',
    lightColor: 'bg-blue-50 border-blue-100',
  },
  {
    number: '02',
    icon: <ShoppingCart className="h-6 w-6" />,
    title: 'Monta o pedido sozinho',
    description:
      'O cliente navega pelo catálogo, escolhe os produtos, seleciona variações (cor, tamanho), informa a quantidade e finaliza o carrinho.',
    color: 'from-indigo-500 to-purple-500',
    lightColor: 'bg-indigo-50 border-indigo-100',
  },
  {
    number: '03',
    icon: <Send className="h-6 w-6" />,
    title: 'Pedido chega organizado',
    description:
      'O pedido chega completo para o vendedor: produtos, valores, forma de pagamento e endereço. Só falta confirmar e entregar.',
    color: 'from-purple-500 to-pink-500',
    lightColor: 'bg-purple-50 border-purple-100',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-gray-50">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">Como funciona</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simples para o cliente,{' '}
            <span className="gradient-text">poderoso para você</span>
          </h2>
          <p className="text-lg text-gray-500">
            O processo é pensado para reduzir seu esforço e tornar a experiência do cliente muito mais fluida.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[calc(16.66%-2px)] right-[calc(16.66%-2px)] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col items-center text-center reveal delay-${(i % 3) * 100 + 100}`}>
                {/* Step number + icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-6 z-10`}>
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-indigo-200 flex items-center justify-center text-xs font-bold text-indigo-600">
                    {i + 1}
                  </span>
                </div>

                <div className={`p-6 rounded-2xl border ${step.lightColor} w-full card-shadow hover-lift`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
