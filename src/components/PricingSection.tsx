import React, { useState } from 'react';
import { Check, Calendar, Code, ShoppingBag, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('loja');

  const lojaSteps = [
    {
      number: '1',
      title: 'Taxa de implantação',
      description:
        'Pagamento único para colocar o seu sistema no ar. Cobre toda a configuração inicial, personalização da loja e estruturação do processo.',
      color: 'bg-indigo-600',
    },
    {
      number: '2',
      title: 'Implantação feita junto',
      description:
        'Nossa equipe configura o sistema com você. Não é self-service. Nós acompanhamos cada etapa até a loja estar funcionando do jeito certo.',
      color: 'bg-purple-600',
    },
    {
      number: '3',
      title: 'Treinamento completo',
      description:
        'Você e sua equipe aprendem a usar o sistema com calma. Treinamento prático, sem pressa e sem termos técnicos.',
      color: 'bg-pink-600',
    },
    {
      number: '4',
      title: 'Mensalidade fixa',
      description:
        'Após a implantação, você paga uma mensalidade fixa pelo uso do sistema. Sem surpresas, sem comissão por venda, sem cobranças extras.',
      color: 'bg-blue-600',
    },
    {
      number: '5',
      title: 'Suporte contínuo',
      description:
        'Ficamos ao seu lado depois da implantação. Dúvidas, ajustes e atualizações fazem parte do serviço.',
      color: 'bg-indigo-600',
    },
  ];

  const lojaIncludes = [
    'Configuração inicial completa do sistema',
    'Cadastro de produtos e categorias',
    'Personalização da loja (logo, cores, banners)',
    'Treinamento da equipe',
    'Suporte via WhatsApp',
    'Atualizações do sistema inclusas',
    'Sem comissão sobre as vendas',
    'Mensalidade fixa e previsível',
  ];

  return (
    <section id="contratacao" className="bg-white">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="section-label">Planos e Contratação</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Modelos de contratação{' '}
            <span className="gradient-text">transparentes</span>
          </h2>
          <p className="text-lg text-gray-500">
            Escolha a solução que sua empresa precisa e veja como funciona nosso modelo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal delay-100">
          <button
            onClick={() => setActiveTab('loja')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'loja'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Loja Online
          </button>
          <button
            onClick={() => setActiveTab('agendamento')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'agendamento'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Agendamento
          </button>
          <button
            onClick={() => setActiveTab('personalizado')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'personalizado'
                ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Code className="w-4 h-4" />
            Personalizados
          </button>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto min-h-[400px]">
          
          {/* TAB 1: LOJA ONLINE */}
          {activeTab === 'loja' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-fade-in">
              {/* Steps */}
              <div className="space-y-5">
                {lojaSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-xl ${step.color} text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-md`}>
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Includes card */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-8 card-shadow sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  O que está incluído no serviço
                </h3>
                <div className="space-y-3 mb-8">
                  {lojaIncludes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-4 border border-indigo-100 text-center shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">Sem plano gratuito • Sem comissão sobre vendas</p>
                  <p className="text-lg font-bold text-indigo-700">Taxa de implantação + Mensalidade fixa</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AGENDAMENTO */}
          {activeTab === 'agendamento' && (
            <div className="animate-fade-in">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Sistema de Agendamento</h3>
                <p className="text-gray-500">
                  Experimente sem compromisso. Planos flexíveis que se adaptam ao ritmo do seu negócio, sem taxas escondidas.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                    <Check className="w-4 h-4" /> 10 dias grátis
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                    <Check className="w-4 h-4" /> Cancelamento gratuito
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 max-w-5xl mx-auto">
                {/* Mensal */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 card-shadow text-center flex flex-col h-full hover-lift">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Plano Mensal</h4>
                  <p className="text-gray-500 text-sm mb-8 flex-1">Pagamento flexível mês a mês, sem fidelidade.</p>
                  <a
                    href="https://agenda.ioy.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 rounded-xl font-semibold bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all"
                  >
                    Começar teste grátis
                  </a>
                </div>

                {/* Semestral */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 border border-purple-500 shadow-xl text-center flex flex-col h-full relative transform md:-translate-y-4 hover-lift">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-widest">
                      Mais Popular
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Plano Semestral</h4>
                  <p className="text-purple-100 text-sm mb-8 flex-1">Desconto especial para garantir estabilidade por 6 meses.</p>
                  <a
                    href="https://agenda.ioy.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 rounded-xl font-bold bg-white text-purple-700 hover:bg-purple-50 transition-all shadow-md"
                  >
                    Começar teste grátis
                  </a>
                </div>

                {/* Anual */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 card-shadow text-center flex flex-col h-full hover-lift">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Plano Anual</h4>
                  <p className="text-gray-500 text-sm mb-8 flex-1">A maior economia possível para turbinar o seu ano.</p>
                  <a
                    href="https://agenda.ioy.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 rounded-xl font-semibold bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all"
                  >
                    Começar teste grátis
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PERSONALIZADO */}
          {activeTab === 'personalizado' && (
            <div className="animate-fade-in max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
                {/* background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
                  <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-3xl" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                    <Code className="w-8 h-8 text-indigo-300" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos sob medida</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    Sua empresa tem uma necessidade técnica específica? Desenvolvemos soluções personalizadas que se integram perfeitamente à sua operação, com escopo e valores definidos de acordo com a sua demanda.
                  </p>
                  
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-10 text-left max-w-2xl mx-auto shadow-inner">
                    <h4 className="text-white font-semibold mb-5 flex items-center gap-2 text-lg">
                      <Check className="w-5 h-5 text-emerald-400" /> Como funciona
                    </h4>
                    <ul className="space-y-4 text-gray-300 text-sm md:text-base">
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/30 text-indigo-300 font-bold shrink-0 text-xs mt-0.5">1</span>
                        <span>Reunião inicial de diagnóstico e levantamento detalhado de requisitos.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/30 text-indigo-300 font-bold shrink-0 text-xs mt-0.5">2</span>
                        <span>Definição de escopo, orçamento e cronograma personalizado.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/30 text-indigo-300 font-bold shrink-0 text-xs mt-0.5">3</span>
                        <span>Desenvolvimento exclusivo, testes intensivos e entrega do sistema.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-indigo-50 font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1"
                  >
                    Falar com um consultor
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
