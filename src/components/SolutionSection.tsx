import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Vendas online e presenciais no mesmo sistema',
  'Pedidos chegam organizados, sem retrabalho',
  'Visão clara do faturamento e equipe',
  'Menos tempo respondendo mensagens',
  'Controle de estoque, produto e variações',
  'Relatórios de vendas sempre disponíveis',
];

const SolutionSection = () => {
  return (
    <section className="bg-white">
      <div className="section-container section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl -z-10" />
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
              <img
                src="/sessão.png"
                alt="Painel de controle IOY"
                className="w-full object-cover"
              />
              {/* Floating card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-indigo-100 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Tudo centralizado</p>
                    <p className="text-xs text-gray-500">Vendas, pedidos, equipe e financeiro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <span className="section-label">A solução IOY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Um sistema que{' '}
              <span className="gradient-text">centraliza tudo</span>{' '}
              em um só lugar
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              A IOY reúne vendas, pedidos, atendimento, equipe, relatórios e financeiro em uma única plataforma. Você para de improvisar e começa a operar com estrutura.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5527988625801?text=Oi%2C%20quero%20entender%20como%20automatizar%20meu%20neg%C3%B3cio%20e%20vender%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Quero conhecer a IOY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
