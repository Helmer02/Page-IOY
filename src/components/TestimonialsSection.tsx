import React from 'react';
import { ShieldCheck, Headphones, Wrench, BookOpen } from 'lucide-react';

const trust = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    gradient: 'from-indigo-500 to-purple-500',
    title: 'Implantação garantida',
    description:
      'Não enviamos um login e deixamos você por conta própria. Ficamos ao seu lado do início ao fim da configuração.',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    gradient: 'from-purple-500 to-pink-500',
    title: 'Treinamento real',
    description:
      'Você aprende a usar o sistema com a nossa equipe, de forma prática e no seu ritmo.',
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    gradient: 'from-pink-500 to-rose-500',
    title: 'Suporte humano',
    description:
      'Quando surgir uma dúvida, tem alguém disponível para responder. Sem filas, sem robôs.',
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    gradient: 'from-blue-500 to-indigo-500',
    title: 'Evolução constante',
    description:
      'O sistema é atualizado continuamente. Novidades e melhorias chegam sem custo adicional.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="section-container section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Confiança</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Você não está contratando{' '}
            <span className="gradient-text">só um sistema</span>
          </h2>
          <p className="text-lg text-gray-500">
            A IOY é parceira do seu negócio. Implantamos, treinamos, suportamos e evoluímos junto com você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {trust.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow card-shadow-hover text-center"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md mx-auto mb-5`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-8 md:p-12 text-center card-shadow">
          <div className="text-5xl text-indigo-200 font-serif mb-4">"</div>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            Negócios que organizam o processo crescem de forma sustentável. A IOY existe para tornar esse caminho mais simples e acessível para o comércio local.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              I
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm">Equipe IOY</p>
              <p className="text-gray-500 text-xs">IOY Soluções em Software</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
