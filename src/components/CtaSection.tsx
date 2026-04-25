import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-white">
      <div className="section-container section-padding">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 md:p-16 text-center shadow-2xl">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Equipe disponível agora
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Pronto para organizar seu negócio e vender mais?
            </h2>

            <p className="text-lg text-indigo-100 mb-10 leading-relaxed">
              Fale com a nossa equipe no WhatsApp. Vamos entender o seu negócio e mostrar qual solução faz mais sentido para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5527988625801?text=Oi%2C%20quero%20entender%20como%20automatizar%20meu%20neg%C3%B3cio%20e%20vender%20mais"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />
                Falar no WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm text-indigo-200 mt-6">
              Sem compromisso. Sem plano gratuito. Só clareza sobre o que funciona para o seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
