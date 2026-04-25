import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AlertCircle } from 'lucide-react';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 leading-relaxed">
                <strong>Atenção:</strong> Este é um modelo inicial de Política de Cookies para adequação à LGPD. Revise com o seu advogado. Substitua as áreas entre chaves [ ] com as informações da sua empresa.
              </p>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
            <p className="text-gray-500 mb-10">Última atualização: [DATA_ATUALIZAÇÃO]</p>

            <div className="prose prose-indigo max-w-none text-gray-600 space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. O que são Cookies?</h2>
                <p>
                  Cookies são pequenos arquivos de texto que um site, quando visitado, armazena no seu computador ou dispositivo móvel através do navegador (browser). A função dos cookies é permitir que o site lembre-se das suas ações e preferências (como login, idioma, tamanho da fonte) durante um período de tempo.
                </p>
                <p>
                  A <strong>[NOME_EMPRESA]</strong> utiliza cookies e tecnologias semelhantes (como pixels e local storage) para garantir o funcionamento da plataforma, melhorar a sua experiência e gerar estatísticas de uso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Quais tipos de Cookies utilizamos?</h2>
                <p>Classificamos os cookies utilizados em três categorias principais:</p>
                
                <h3 className="font-bold text-gray-800 mt-4">2.1. Cookies Essenciais (Estritamente Necessários)</h3>
                <p>
                  São fundamentais para o funcionamento básico da plataforma (ex: manter a sua sessão de usuário logada no painel administrativo, segurança de requisições, carregar balanceadores de carga). <strong>Eles não podem ser desativados</strong>, caso contrário o sistema não funcionará.
                </p>

                <h3 className="font-bold text-gray-800 mt-4">2.2. Cookies de Desempenho e Analytics</h3>
                <p>
                  Coletam informações de forma anônima sobre como os usuários interagem com nosso site. Usamos ferramentas como o Google Analytics para medir o tráfego, identificar as páginas mais visitadas e corrigir erros. Ajudam a melhorar continuamente o sistema.
                </p>

                <h3 className="font-bold text-gray-800 mt-4">2.3. Cookies de Marketing</h3>
                <p>
                  São utilizados para rastrear a navegação em sites com o objetivo de exibir anúncios relevantes (remarketing) em redes sociais ou plataformas de publicidade (como Meta Pixel e Google Ads). Eles identificam o seu dispositivo e criam um perfil de interesses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Como gerenciar suas preferências de Cookies</h2>
                <p>
                  Quando você acessa o nosso site pela primeira vez, um Banner de Cookies é exibido solicitando o seu consentimento para as categorias de Analytics e Marketing.
                </p>
                <p>
                  A qualquer momento, você pode alterar essas preferências no nosso sistema ou diretamente configurando o seu navegador para bloquear cookies. A maioria dos navegadores permite configurar recusas automáticas:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/pt-BR/kb/desative-cookies-de-terceiros" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prazo de Armazenamento</h2>
                <p>
                  Dependendo da sua função, os cookies podem ser temporários (cookies de sessão, que são apagados quando você fecha o navegador) ou persistentes (permanecem no seu dispositivo até que expirem ou sejam apagados manualmente). O consentimento salvo no nosso banner tem validade típica de 6 meses a 1 ano.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Dúvidas e Contato</h2>
                <p>
                  Para mais detalhes sobre o tratamento de dados pessoais, consulte a nossa <a href="/politica-de-privacidade" className="text-indigo-600 hover:underline">Política de Privacidade</a>.
                </p>
                <p>
                  Se tiver qualquer dúvida sobre nossa Política de Cookies, envie um e-mail para <strong>[E-MAIL_CONTATO]</strong>.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiesPolicy;
