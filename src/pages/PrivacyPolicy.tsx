import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 leading-relaxed">
                <strong>Atenção:</strong> Este é um modelo inicial de Política de Privacidade e não substitui a consultoria jurídica. Certifique-se de revisar com o seu advogado para garantir total adequação à realidade da sua empresa e às normas da LGPD. Substitua as áreas entre chaves [ ] com as informações da sua empresa.
              </p>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
            <p className="text-gray-500 mb-10">Última atualização: [DATA_ATUALIZAÇÃO]</p>

            <div className="prose prose-indigo max-w-none text-gray-600 space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Quem Somos</h2>
                <p>
                  A <strong>[NOME_EMPRESA]</strong> (doravante "IOY", "nós", "nosso"), inscrita no CNPJ sob o nº <strong>[CNPJ]</strong>, com sede em <strong>[ENDEREÇO_EMPRESA]</strong>, está comprometida em resguardar sua privacidade e proteger seus dados pessoais.
                </p>
                <p>
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos os seus dados pessoais e os de seus clientes ao utilizar nossas plataformas de Agendamento, Loja Online, Delivery e demais sistemas de gestão SaaS.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Quais dados coletamos e para qual finalidade</h2>
                <p>Coletamos diferentes categorias de dados pessoais para prestar nossos serviços:</p>
                
                <h3 className="font-bold text-gray-800 mt-4">2.1. Dados dos Lojistas e Contratantes</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Dados Cadastrais:</strong> Nome completo, CPF/CNPJ, endereço, e-mail e número de telefone celular. Finalidade: Criação de conta, faturamento, suporte e cumprimento de contrato.</li>
                  <li><strong>Dados Financeiros:</strong> Informações de cartão de crédito e dados bancários (processados via gateways de pagamento integrados). Finalidade: Cobrança da assinatura do sistema.</li>
                  <li><strong>Dados Fiscais:</strong> Informações necessárias para emissão de nota fiscal de serviço. Finalidade: Cumprimento de obrigações legais.</li>
                </ul>

                <h3 className="font-bold text-gray-800 mt-4">2.2. Dados dos Clientes Finais (Tratados em nome do Lojista)</h3>
                <p>Atuamos como <strong>Operadores de Dados</strong> em relação às informações dos clientes dos nossos contratantes. A loja contratante atua como <strong>Controladora</strong>.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Dados de Agendamento:</strong> Nome, telefone, serviço escolhido e data/horário.</li>
                  <li><strong>Dados de Compras/Delivery:</strong> Nome, telefone, e-mail, endereço de entrega e produtos comprados.</li>
                  <li><strong>Dados de Pagamento:</strong> Processados via intermediadores financeiros, não sendo armazenados em sua integridade pela IOY.</li>
                </ul>

                <h3 className="font-bold text-gray-800 mt-4">2.3. Dados de Navegação (Cookies e Logs)</h3>
                <p>
                  Coletamos automaticamente endereço IP, tipo de navegador, páginas acessadas, datas e horários de acesso e dados do dispositivo. Finalidade: Segurança da informação, melhoria da usabilidade e analytics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bases Legais para o Tratamento (LGPD)</h2>
                <p>Realizamos o tratamento de dados amparados nas seguintes bases da Lei Geral de Proteção de Dados (Lei nº 13.709/2018):</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Execução de contrato:</strong> Para viabilizar a prestação dos serviços SaaS (art. 7º, V).</li>
                  <li><strong>Cumprimento de obrigação legal:</strong> Para emissão de notas fiscais e manutenção de logs de acesso conforme o Marco Civil da Internet (art. 7º, II).</li>
                  <li><strong>Legítimo interesse:</strong> Para envio de comunicações sobre atualizações do sistema e melhorias de plataforma (art. 7º, IX).</li>
                  <li><strong>Consentimento:</strong> Para o uso de cookies de marketing e publicidade (art. 7º, I).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartilhamento com Terceiros</h2>
                <p>Não vendemos seus dados. O compartilhamento ocorre apenas com fornecedores essenciais para a operação técnica da plataforma:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Provedores de Nuvem:</strong> Para hospedagem do sistema e banco de dados (ex: AWS, Google Cloud).</li>
                  <li><strong>Gateways de Pagamento:</strong> Para processar a assinatura do sistema ou os pagamentos na sua loja (ex: Mercado Pago, Pagar.me, Stripe).</li>
                  <li><strong>Ferramentas de Emissão Fiscal:</strong> Sistemas parceiros para emissão de Notas Fiscais Eletrônicas.</li>
                  <li><strong>Autoridades Públicas:</strong> Quando requisitado judicialmente.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Armazenamento e Segurança</h2>
                <p>
                  Armazenamos os dados em servidores em nuvem de alta segurança. Adotamos medidas técnicas, administrativas e organizacionais (criptografia, controle de acesso e backups) para proteger seus dados contra perdas, uso não autorizado ou violação.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prazo de Retenção</h2>
                <p>
                  Manteremos os dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas. Após o cancelamento da assinatura, os dados da loja e seus clientes serão excluídos em até 30 dias, exceto dados de faturamento e logs de acesso que devem ser retidos por 5 anos e 6 meses, respectivamente, para cumprimento de obrigações legais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Direitos do Titular (Art. 18 da LGPD)</h2>
                <p>Você tem o direito de solicitar a qualquer momento:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Acesso aos dados e confirmação do tratamento;</li>
                  <li>Correção de dados incompletos ou inexatos;</li>
                  <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                  <li>Portabilidade de dados;</li>
                  <li>Revogação do consentimento (para cookies e comunicações).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Política de Cookies</h2>
                <p>
                  Utilizamos cookies para o funcionamento adequado da plataforma. Você pode gerenciar suas permissões no aviso de cookies em nosso site. Para saber os detalhes completos, acesse nossa <a href="/politica-de-cookies" className="text-indigo-600 hover:underline">Política de Cookies</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contato do Encarregado (DPO)</h2>
                <p>
                  Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato através do e-mail: <strong>[E-MAIL_CONTATO]</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Alterações desta Política</h2>
                <p>
                  Reservamo-nos o direito de modificar esta política a qualquer momento. Se fizermos alterações materiais, notificaremos os clientes ativos por e-mail ou via painel do sistema.
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

export default PrivacyPolicy;
