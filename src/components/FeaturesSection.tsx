import React, { useState } from 'react';
import { ShoppingBag, Calendar, Truck, Check, ChevronRight } from 'lucide-react';

const solutions = [
  {
    id: 'loja',
    icon: <ShoppingBag className="h-7 w-7" />,
    label: 'Loja Online',
    gradient: 'from-indigo-500 to-purple-500',
    lightBg: 'bg-indigo-600',
    tag: 'Principal',
    tagColor: 'bg-indigo-100 text-indigo-700',
    title: 'Sistema de Loja Online',
    subtitle: 'Venda online e presencialmente no mesmo sistema, de forma integrada.',
    description:
      'Plataforma completa para digitalizar o seu comércio. O cliente acessa, monta o pedido e você só precisa confirmar. Funciona tanto para a loja física quanto para vendas online.',
    link: 'https://lojaonline.ioy.com.br/',
    features: [
      'Loja com link próprio (acesso pelo celular)',
      'Cliente monta o pedido sozinho',
      'Pedidos online e manuais no mesmo sistema',
      'Integração com Mercado Pago',
      'Emissão de nota fiscal integrada',
      'Controle de produtos, estoque e variações',
      'Cadastro de clientes com endereço',
      'Relatórios de vendas e faturamento',
      'Comissão por vendedor integrada',
      'Painel administrativo completo',
      'Gestão de equipe com níveis de acesso',
      'Personalização da loja (banners, identidade)',
    ],
  },
  {
    id: 'agendamento',
    icon: <Calendar className="h-7 w-7" />,
    label: 'Agendamento',
    gradient: 'from-purple-500 to-pink-500',
    lightBg: 'bg-purple-600',
    tag: 'Disponível',
    tagColor: 'bg-purple-100 text-purple-700',
    title: 'Sistema de Agendamento',
    subtitle: 'Organize sua agenda de clientes e elimine conflitos de horário.',
    description:
      'Para negócios que trabalham com hora marcada. O sistema organiza os horários, evita sobreposição de atendimentos e estrutura o seu processo de agendamento pelo WhatsApp.',
    link: 'https://agenda.ioy.com.br/',
    features: [
      'Organização da agenda de clientes',
      'Controle de horários por dia e profissional',
      'Visualização clara dos atendimentos',
      'Eliminação de conflitos de horário',
      'Estruturação do atendimento via WhatsApp',
      'Histórico de agendamentos por cliente',
    ],
  },
  {
    id: 'delivery',
    icon: <Truck className="h-7 w-7" />,
    label: 'Delivery',
    gradient: 'from-blue-500 to-indigo-500',
    lightBg: 'bg-blue-600',
    tag: 'Em breve',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Sistema de Delivery',
    subtitle: 'Controle de pedidos e entregas em um único painel.',
    description:
      'Em desenvolvimento. Vai integrar pedidos online com a gestão de entregas, permitindo acompanhar cada pedido em rota e organizar todo o fluxo de delivery do seu negócio.',
    link: 'https://wa.me/5500000000000',
    features: [
      'Pedidos online integrados',
      'Controle de entregas por status',
      'Gestão de pedidos em rota',
      'Organização do fluxo de delivery',
      'Acompanhamento em tempo real',
      'Histórico de entregas por cliente',
    ],
  },
];

const FeaturesSection = () => {
  const [active, setActive] = useState('loja');
  const current = solutions.find((s) => s.id === active)!;

  return (
    <section id="solucoes" className="bg-white">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Soluções</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            As soluções da{' '}
            <span className="gradient-text">IOY</span>
          </h2>
          <p className="text-lg text-gray-500">
            Cada sistema é pensado para um tipo de negócio. Escolha o que se encaixa melhor na sua realidade.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          {solutions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                active === s.id
                  ? `bg-gradient-to-r ${s.gradient} text-white border-transparent shadow-md`
                  : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-200 hover:text-indigo-600'
              }`}
            >
              {s.icon}
              {s.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Info */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white shadow-md`}>
                  {current.icon}
                </div>
                <div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${current.tagColor}`}>
                    {current.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{current.title}</h3>
                </div>
              </div>
              <p className="text-base font-medium text-gray-700 mb-3">{current.subtitle}</p>
              <p className="text-gray-500 leading-relaxed mb-6">{current.description}</p>
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                Quero saber mais <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Right: Feature list */}
            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">
                Funcionalidades incluídas
              </h4>
              <div className="space-y-3">
                {current.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/40 transition-all duration-150"
                  >
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${current.gradient} flex items-center justify-center shrink-0`}>
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
