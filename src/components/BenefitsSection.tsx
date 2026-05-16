import React from 'react';
import { TrendingUp, Clock, BarChart2, Shield, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    gradient: 'from-indigo-500 to-purple-500',
    bg: 'bg-indigo-50',
    title: 'Atendimento Autônomo',
    description: 'Seu cliente escolhe, pede ou agenda sem intervenção manual. Você apenas acompanha a entrada da receita, liberando tempo para o estratégico.',
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50',
    title: 'Inteligência de Dados',
    description: 'Abandone a intuição e gerencie com certeza matemática. Relatórios de alta precisão sobre seu faturamento, estoque e comportamento do cliente.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    title: 'Fim do Caos no WhatsApp',
    description: 'Automatize fluxos repetitivos. O envio manual de catálogos e a negociação exaustiva são substituídos por um processo inteligente e profissional.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    gradient: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
    title: 'Segurança Operacional',
    description: 'Zere perdas por falhas de anotação. Pedidos processados, estoque integrado e comissionamento calculado automaticamente pelo sistema.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    gradient: 'from-indigo-500 to-blue-500',
    bg: 'bg-indigo-50',
    title: 'Gestão de Time Integrada',
    description: 'Elimine os atritos internos com o controle rigoroso de comissões e métricas de desempenho de cada colaborador da sua equipe.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    gradient: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50',
    title: 'Base Sólida para Escalar',
    description: 'A fundação que prepara sua empresa para multiplicar resultados sem multiplicar a complexidade gerencial.',
  },
];

const BenefitsSection = () => {
  return (
    <section id="funcionalidades" className="bg-gray-50">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">A Mudança</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A profissionalização do seu{' '}
            <span className="gradient-text">negócio começa aqui</span>
          </h2>
          <p className="text-lg text-gray-500">
            Entregamos estrutura, não apenas funcionalidades. Veja como a IOY transforma o seu dia a dia.
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
