import React from 'react';
import { Crosshair, Users, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Crosshair className="h-6 w-6" />,
    title: 'Diagnóstico Operacional',
    description:
      'Avaliamos os gargalos que estão travando a sua empresa hoje e definimos a infraestrutura exata que o seu negócio precisa para parar de perder dinheiro.',
    color: 'from-blue-500 to-indigo-500',
    lightColor: 'bg-blue-50 border-blue-100',
  },
  {
    number: '02',
    icon: <Users className="h-6 w-6" />,
    title: 'Implantação Lado a Lado',
    description:
      'Você não recebe um login vazio e fica perdido. Nossa equipe configura a plataforma e treina o seu time para garantir a transição tecnológica perfeita.',
    color: 'from-indigo-500 to-purple-500',
    lightColor: 'bg-indigo-50 border-indigo-100',
  },
  {
    number: '03',
    icon: <Rocket className="h-6 w-6" />,
    title: 'Crescimento Acelerado',
    description:
      'Com o atendimento automatizado e os processos centralizados, você abandona a operação braçal e assume uma posição estratégica, baseada em dados reais.',
    color: 'from-purple-500 to-pink-500',
    lightColor: 'bg-purple-50 border-purple-100',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-gray-50">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="section-label">A Jornada</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como a IOY profissionaliza sua{' '}
            <span className="gradient-text">operação</span>
          </h2>
          <p className="text-lg text-gray-500">
            Um método claro para tirar a sua empresa do caos e prepará-la para um crescimento inteligente e sustentável.
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
