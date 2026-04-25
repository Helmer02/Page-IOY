import React from 'react';
import { TrendingUp, Clock, BarChart2, Shield, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    gradient: 'from-indigo-500 to-purple-500',
    bg: 'bg-indigo-50',
    title: 'Mais vendas, menos esforço',
    description: 'O cliente já chega com o pedido pronto. Você só confirma e entrega. Menos tempo atendendo, mais tempo vendendo.',
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50',
    title: 'Visão clara do faturamento',
    description: 'Relatórios de vendas, faturamento por período e desempenho de produto disponíveis a qualquer hora.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    title: 'Menos tempo no WhatsApp',
    description: 'Pare de enviar catálogos, fotos e preços manualmente. O sistema faz isso por você com o link da loja.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    gradient: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
    title: 'Redução de erros',
    description: 'Pedidos organizados, estoque atualizado e notas emitidas automaticamente. Chega de retrabalho.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    gradient: 'from-indigo-500 to-blue-500',
    bg: 'bg-indigo-50',
    title: 'Controle total da equipe',
    description: 'Gerencie vendedores, defina níveis de acesso e acompanhe comissões sem precisar perguntar nada.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    gradient: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50',
    title: 'Crescimento estruturado',
    description: 'Com tudo organizado, você pode crescer sem o caos. O sistema escala junto com o seu negócio.',
  },
];

const BenefitsSection = () => {
  return (
    <section id="funcionalidades" className="bg-gray-50">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">Benefícios</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que muda no seu negócio{' '}
            <span className="gradient-text">na prática</span>
          </h2>
          <p className="text-lg text-gray-500">
            Resultado real para o seu dia a dia, não apenas funcionalidades técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 border border-gray-100 card-shadow hover-lift group reveal delay-${(i % 3) * 100 + 100}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
