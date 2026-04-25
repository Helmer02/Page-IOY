import React from 'react';
import { MessageSquareX, ClipboardX, BarChart2, Users } from 'lucide-react';

const problems = [
  {
    icon: <MessageSquareX className="h-6 w-6 text-pink-500" />,
    color: 'bg-pink-50 border-pink-100',
    iconBg: 'bg-pink-100',
    title: 'Perda de vendas por demora',
    description:
      'Enquanto você responde uma mensagem, outro cliente desiste e compra de outro lugar. O atendimento manual tem um custo invisível alto.',
  },
  {
    icon: <ClipboardX className="h-6 w-6 text-purple-500" />,
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
    title: 'Pedidos desorganizados',
    description:
      'Anotações no papel, áudios no WhatsApp, planilhas desatualizadas. É impossível crescer com processo assim.',
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-indigo-500" />,
    color: 'bg-indigo-50 border-indigo-100',
    iconBg: 'bg-indigo-100',
    title: 'Falta de visão do negócio',
    description:
      'Sem relatórios, você não sabe quais produtos vendem mais, quanto faturou no mês, ou o desempenho de cada vendedor.',
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
    title: 'Dificuldade para controlar a equipe',
    description:
      'Sem controle de acesso e comissões claras, a gestão da equipe vira um problema diário que toma tempo e gera conflito.',
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">O problema</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Você reconhece alguma{' '}
            <span className="gradient-text">dessas situações?</span>
          </h2>
          <p className="text-lg text-gray-500">
            A maioria dos comércios locais perde dinheiro todo dia por falta de organização, não por falta de clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border ${item.color} card-shadow hover-lift reveal delay-${(i % 4) * 100 + 100}`}
            >
              <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
