import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AlertCircle } from 'lucide-react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800 leading-relaxed">
                <strong>Atenção:</strong> Este é um modelo inicial de Termos de Uso e não substitui a consultoria jurídica. Certifique-se de revisar com o seu advogado para garantir total adequação comercial. Substitua as áreas entre chaves [ ] com as informações da sua empresa.
              </p>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos de Uso</h1>
            <p className="text-gray-500 mb-10">Última atualização: [DATA_ATUALIZAÇÃO]</p>

            <div className="prose prose-indigo max-w-none text-gray-600 space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar ou utilizar a plataforma da <strong>[NOME_EMPRESA]</strong> (doravante "IOY", "Plataforma" ou "Sistema"), você (doravante "Contratante" ou "Usuário") concorda integralmente com estes Termos de Uso. Se não concordar com alguma cláusula, por favor, não utilize os nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objeto da Plataforma</h2>
                <p>
                  A IOY licencia o uso de um software como serviço (SaaS) voltado para gestão de negócios locais. O sistema oferece módulos (conforme o plano contratado) que podem incluir: painel administrativo, vitrine/loja online, sistema de agendamento, gestão de delivery, controle de clientes (CRM), catálogo de produtos e integração com gateways de pagamento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Regras e Condições de Uso</h2>
                <p>O Contratante se compromete a:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fornecer dados cadastrais verdadeiros, exatos e mantê-los atualizados.</li>
                  <li>Manter a confidencialidade de seu login e senha, assumindo inteira responsabilidade por todas as ações realizadas em sua conta.</li>
                  <li>Não utilizar a plataforma para a venda de produtos ilícitos, serviços não regulamentados ou qualquer atividade que infrinja a lei brasileira.</li>
                  <li>Não realizar engenharia reversa, tentar acessar o código fonte ou realizar testes de vulnerabilidade (pentest) sem autorização prévia.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Responsabilidades da IOY</h2>
                <p>Nós nos comprometemos a:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Manter a plataforma disponível e funcional, aplicando os melhores esforços técnicos para garantir um SLA (Service Level Agreement) de 99% de tempo de atividade mensal.</li>
                  <li>Corrigir eventuais falhas (bugs) reportadas no menor tempo possível.</li>
                  <li>Fornecer suporte técnico durante o horário comercial estabelecido via WhatsApp ou e-mail.</li>
                  <li>Garantir a segurança dos dados armazenados conforme a nossa Política de Privacidade.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilidades do Lojista (Contratante)</h2>
                <p>O Lojista reconhece que é o único responsável por:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A qualidade, entrega e procedência dos produtos e serviços vendidos aos seus clientes (consumidores finais).</li>
                  <li>Atendimento ao consumidor final, trocas, devoluções e garantias de acordo com o Código de Defesa do Consumidor (CDC).</li>
                  <li>Recolhimento e pagamento de todos os impostos incidentes sobre suas vendas.</li>
                  <li>Configuração correta de taxas de entrega, estoques e dados financeiros na plataforma.</li>
                </ul>
                <p>
                  <strong>A IOY é apenas uma provedora de tecnologia e não possui qualquer responsabilidade solidária ou subsidiária sobre as transações comerciais realizadas entre o Contratante e seus clientes.</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Planos, Pagamentos e Cancelamento</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Mensalidade:</strong> O uso do sistema é cobrado de forma antecipada (modelo pré-pago) mediante assinatura mensal, semestral ou anual, conforme escolhido no momento da contratação.</li>
                  <li><strong>Taxa de Implantação:</strong> Pode haver cobrança de taxa de setup único, a ser acordada antes do início do uso, referente ao treinamento e configuração da loja.</li>
                  <li><strong>Inadimplência:</strong> O não pagamento da mensalidade por mais de [X] dias resultará na suspensão automática do acesso à plataforma. Após [Y] dias, a conta e os dados poderão ser excluídos definitivamente.</li>
                  <li><strong>Cancelamento:</strong> O cancelamento pode ser feito a qualquer momento pelo Contratante. Não exigimos tempo mínimo de fidelidade (exceto em planos semestrais/anuais, cujas multas rescisórias constarão no contrato específico). Não há reembolso de mensalidades já pagas por desistência no meio do ciclo de faturamento.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Propriedade Intelectual</h2>
                <p>
                  A IOY detém todos os direitos autorais e de propriedade intelectual sobre o software, marca, códigos, design, bancos de dados e estrutura do sistema. O Contratante recebe apenas uma licença limitada, revogável e intransferível para uso da ferramenta.
                </p>
                <p>
                  Os logotipos, imagens de produtos e conteúdos inseridos pelo Contratante em sua loja online permanecem como propriedade intelectual do Contratante.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitação de Responsabilidade</h2>
                <p>
                  A IOY não será responsabilizada por lucros cessantes, perda de receita, perda de dados ou danos indiretos causados por falhas de provedores terceiros (como falhas no servidor da AWS, instabilidade de gateways de pagamento integrados, ou falhas na operadora de internet do usuário).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disposições Gerais e Foro</h2>
                <p>
                  A tolerância ao descumprimento de qualquer regra não configurará novação. Estes Termos de Uso são regidos pela lei da República Federativa do Brasil. Para dirimir qualquer controvérsia, elege-se o foro da comarca de <strong>[CIDADE_ESTADO_DA_EMPRESA]</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contato</h2>
                <p>
                  Dúvidas sobre estes Termos de Uso? Fale com nosso suporte através do e-mail <strong>[E-MAIL_CONTATO]</strong>.
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

export default TermsOfUse;
