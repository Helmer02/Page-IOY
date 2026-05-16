import React from 'react';
import { MessageSquareX, ClipboardX, BarChart2, Users } from 'lucide-react';

const problems = [
  {
    icon: <MessageSquareX className="h-6 w-6 text-pink-500" />,
    color: 'bg-pink-50 border-pink-100',
    iconBg: 'bg-pink-100',
    title: 'Atendimento Amador',
    description:
      'Enquanto você tenta dar conta de tudo no WhatsApp, o cliente percebe a desorganização e compra do concorrente.',
  },
  {
    icon: <ClipboardX className="h-6 w-6 text-purple-500" />,
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
    title: 'Operação baseada em adivinhação',
    description:
      'Anotações no papel, planilhas quebradas e falta de processos que impedem o negócio de escalar com segurança.',
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-indigo-500" />,
    color: 'bg-indigo-50 border-indigo-100',
    iconBg: 'bg-indigo-100',
    title: 'Falta de Controle Absoluto',
    description:
      'Sem relatórios exatos, você gerencia no escuro. Estoque, caixa e vendas viram uma aposta diária.',
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
    title: 'Equipe sem estrutura',
    description:
      'Sem fluxos automatizados, você vira refém da operação. O dono apaga incêndios em vez de focar no crescimento estratégico.',
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">O Caos Operacional</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A falta de processos custa caro para{' '}
            <span className="gradient-text">sua empresa</span>
          </h2>
          <p className="text-lg text-gray-500">
            A maioria das empresas não trava por falta de vendas, mas por falta de organização. O caos diário destrói a sua lucratividade.
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
