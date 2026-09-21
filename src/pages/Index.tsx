import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/landing.css';

const contact = 'https://wa.me/5527988625801?text=Olá%2C%20gostaria%20de%20conhecer%20as%20soluções%20da%20IOY.';
const products = [
  { name: 'Loja Online', category: 'COMÉRCIO', title: 'Da vitrine ao pedido. Tudo no mesmo lugar.', description: 'Uma loja com a identidade do seu negócio e um painel para acompanhar produtos, pedidos e clientes.', image: '/loja.png', alt: 'Loja online IOY aberta em um notebook', link: 'https://lojaonline.ioy.com.br/', features: ['Pedidos online e presenciais', 'Controle de estoque e variações', 'Integração com Mercado Pago', 'Relatórios de vendas e gestão de equipe'] },
  { name: 'Agendamento', category: 'SERVIÇOS', title: 'Sua agenda organizada. Seu cliente bem atendido.', description: 'Compartilhe seu link de agendamento e acompanhe os horários de cada profissional em uma rotina mais simples.', image: '/Agenda-celular.png', alt: 'Sistema de agendamento IOY no celular', link: 'https://agenda.ioy.com.br/', features: ['Agendamento por link próprio', 'Horários por dia e profissional', 'Histórico de atendimentos', 'Visualização centralizada da agenda'] },
];
export default function Index() {
  const [active, setActive] = useState(0);
  const product = products[active];
  return <div className="ioy-site">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Navbar />
    <main id="conteudo">
      <section className="editorial-hero page-width">
        <div className="hero-copy"><p className="eyebrow"><span /> SOFTWARE PARA NEGÓCIOS REAIS</p><h1>Mais controle.<br />Mais espaço<br />para <em>crescer.</em></h1><p className="hero-description">Organize suas vendas, seus agendamentos e a rotina da sua empresa com os sistemas da IOY.</p><div className="hero-actions"><a className="solid-button" href="#solucoes">Conheça as soluções <ArrowRight size={17} /></a><a className="text-link" href={contact} target="_blank" rel="noopener noreferrer">Fale com a equipe <ArrowUpRight size={17} /></a></div><p className="hero-footnote">Tecnologia prática. Atendimento próximo.</p></div>
        <figure className="hero-photo"><img src="/tablet.png" alt="Painel IOY de gestão de pedidos em um tablet" fetchPriority="high" /><figcaption><span>IOY NA PRÁTICA</span><span>Sua operação, sob controle.</span><ArrowUpRight size={20} /></figcaption></figure>
      </section>
      <div className="business-strip"><div className="page-width"><span>ESTRUTURA PARA O SEU DIA A DIA</span><p>Comércio e varejo</p><span className="strip-divider" /><p>Prestadores de serviço</p><span className="strip-divider" /><p>Pequenas e médias empresas</p></div></div>
      <section id="solucoes" className="page-width section-space">
        <div className="section-heading"><div><p className="eyebrow">01 / NOSSAS SOLUÇÕES</p><h2>O sistema certo para<br />a sua rotina.</h2></div><p>Cada negócio tem suas necessidades.<br />Comece pelo que faz sentido para o seu.</p></div>
        <div className="product-tabs" aria-label="Escolha uma solução">{products.map((item, index) => <button key={item.name} onClick={() => setActive(index)} aria-pressed={active === index} className={active === index ? 'selected' : ''}><span>0{index + 1}</span>{item.name}<ArrowUpRight size={17} /></button>)}</div>
        <div className="product-detail"><figure><img src={product.image} alt={product.alt} loading="lazy" /></figure><div className="product-copy"><p className="eyebrow">{product.category}</p><h3>{product.title}</h3><p>{product.description}</p><ul>{product.features.map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul><a className="text-link" href={product.link} target="_blank" rel="noopener noreferrer">Conhecer {product.name.toLowerCase()} <ArrowUpRight size={18} /></a></div></div>
        <div className="future-product"><div><span className="status-label">EM DESENVOLVIMENTO</span><h3>IOY Delivery</h3><p>Gestão de pedidos e entregas para completar sua operação.</p></div><a href={contact} target="_blank" rel="noopener noreferrer" className="text-link">Consultar disponibilidade <ArrowUpRight size={17} /></a></div>
      </section>
      <section id="funcionalidades" className="operations-section"><div className="page-width section-space operations-grid"><div><p className="eyebrow">02 / ORGANIZAÇÃO QUE FAZ DIFERENÇA</p><h2>Menos tarefas soltas.<br />Mais clareza para<br />decidir.</h2><p className="operations-intro">Quando a informação está organizada, você acompanha o negócio com mais confiança e dedica mais atenção aos seus clientes.</p></div><div className="benefit-list">{[
        ['Informações no lugar certo', 'Pedidos, clientes e horários organizados no sistema escolhido, sem depender de anotações espalhadas.'],
        ['Uma experiência com a sua marca', 'Apresente seus produtos e serviços de forma profissional, com acesso simples para o cliente.'],
        ['Uma equipe ao seu lado', 'Conte com orientação na implantação e suporte para tirar dúvidas durante o uso.'],
      ].map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
      <section id="como-funciona" className="page-width section-space"><div className="section-heading"><div><p className="eyebrow">03 / DO PRIMEIRO CONTATO À OPERAÇÃO</p><h2>A gente acompanha<br />os próximos passos.</h2></div><a className="text-link" href={contact} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={17} /></a></div><div className="process-grid">{[
        ['Entendemos seu negócio', 'Conversamos sobre sua rotina, suas dificuldades e o que você precisa organizar.'],
        ['Preparamos a solução', 'Definimos a contratação e orientamos a configuração do sistema para sua operação.'],
        ['Seguimos com você', 'Sua equipe aprende a usar a ferramenta e conta com suporte no dia a dia.'],
      ].map(([title, description], index) => <article key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section id="contratacao" className="contract-section"><div className="page-width section-space"><div className="section-heading"><div><p className="eyebrow">04 / CONTRATAÇÃO</p><h2>Clareza desde o início.</h2></div><p>Conheça o modelo de cada solução.<br />Fale com a equipe para consultar os valores.</p></div><div className="contract-grid"><article><p className="eyebrow">LOJA ONLINE</p><h3>Implantação +<br />mensalidade fixa</h3><p>Configuração inicial, personalização e treinamento para colocar sua loja em operação.</p><ul><li>Sem comissão sobre as vendas</li><li>Suporte via WhatsApp</li><li>Atualizações incluídas</li></ul><a className="text-link" href={contact} target="_blank" rel="noopener noreferrer">Solicitar proposta <ArrowUpRight size={17} /></a></article><article><p className="eyebrow">AGENDAMENTO</p><h3>Planos para<br />o seu momento</h3><p>Opções mensais, semestrais e anuais. Experimente o sistema por 10 dias grátis.</p><ul><li>Teste antes de contratar</li><li>Cancelamento gratuito</li><li>Organização por profissional</li></ul><a className="text-link" href="https://agenda.ioy.com.br/" target="_blank" rel="noopener noreferrer">Experimentar agendamento <ArrowUpRight size={17} /></a></article><article><p className="eyebrow">SOB MEDIDA</p><h3>Um projeto para<br />sua necessidade</h3><p>Desenvolvimento personalizado para processos que precisam de uma solução específica.</p><ul><li>Levantamento de requisitos</li><li>Escopo e orçamento definidos</li><li>Cronograma personalizado</li></ul><a className="text-link" href={contact} target="_blank" rel="noopener noreferrer">Conversar sobre meu projeto <ArrowUpRight size={17} /></a></article></div></div></section>
      <section className="page-width section-space faq-section"><div><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2>Antes de começar.</h2></div><div>{[
        ['Qual solução é indicada para o meu negócio?', 'Para vender produtos e acompanhar pedidos e estoque, conheça a Loja Online. Para organizar horários e atendimentos, conheça o Agendamento. Nossa equipe pode ajudar nessa escolha.'],
        ['Como funciona a implantação da loja?', 'A implantação inclui configuração inicial, personalização da loja e treinamento da equipe. Os detalhes são alinhados com você na contratação.'],
        ['Posso experimentar o agendamento?', 'Sim. O sistema de agendamento oferece 10 dias grátis. Acesse a plataforma para começar e conhecer as opções de plano.'],
        ['O delivery já está disponível?', 'O IOY Delivery está em desenvolvimento. Entre em contato para consultar a disponibilidade e apresentar sua necessidade.'],
      ].map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} /></summary><p>{answer}</p></details>)}</div></section>
      <section className="contact-section"><div className="page-width"><div><p className="eyebrow">VAMOS ORGANIZAR O PRÓXIMO PASSO?</p><h2>Seu negócio merece<br />uma boa estrutura.</h2><p>Conte para a gente o que você precisa. Começamos por uma conversa.</p></div><a href={contact} target="_blank" rel="noopener noreferrer" className="solid-button light-button">Falar com a IOY <ArrowUpRight size={18} /></a></div></section>
    </main><Footer />
  </div>;
}
