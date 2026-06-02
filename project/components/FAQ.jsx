// FAQ.jsx — accordion FAQ
const FAQS = [
  {
    q: "Como a RiskPlus consegue analisar empresas que não aparecem em bureaus tradicionais?",
    a: "A gente combina dados públicos da Receita Federal e cartórios com sinais alternativos — comportamento de pagamento em fornecedores, presença digital, vínculos societários — e roda tudo pelos nossos modelos proprietários. Empresas novas, MEIs e pequenas que o bureau ignora ganham um score consistente.",
  },
  {
    q: "De onde vêm os dados? É legal e LGPD-compliant?",
    a: "Usamos exclusivamente dados públicos (Receita Federal, JUCESP, cartórios, diários oficiais) e sinais alternativos de fontes contratadas e auditadas. A RiskPlus é registrada como bureau, segue a LGPD e mantém base de exclusão para titulares que solicitarem.",
  },
  {
    q: "Quanto tempo demora cada análise?",
    a: "A mediana é de 8 segundos do clique em \"Analisar\" até o veredito na tela. Análises de empresas com pouco histórico ou alvos de aprofundamento podem levar até 30 segundos.",
  },
  {
    q: "A RiskPlus integra com meu ERP?",
    a: "Sim. No plano Pro temos integrações nativas com Omie, Bling e Conta Azul, além de API REST e webhooks pra qualquer sistema. No Enterprise, fazemos a integração junto com seu time.",
  },
  {
    q: "O que acontece se eu passar do limite de análises do plano?",
    a: "A gente avisa em 80% do consumo. Passou do limite, você pode comprar análises avulsas (R$ 1,90 cada no Pro) ou subir de plano sem perder histórico. Nada é bloqueado de surpresa.",
  },
  {
    q: "Posso usar a decisão da RiskPlus como única fonte pra liberar crédito?",
    a: "Sim — e é o caso da maioria dos nossos clientes. Toda decisão vem com a justificativa (fatores e pesos) pra você defender internamente. Em operações de alto valor, recomendamos combinar com sua política interna.",
  },
  {
    q: "Tem fidelidade ou taxa de setup?",
    a: "Não. Plano mensal, cancelável a qualquer momento, sem taxa de setup ou multa. Onboarding incluído.",
  },
  {
    q: "Vocês monitoram a carteira depois ou só no momento da venda?",
    a: "No plano Pro o monitoramento é contínuo: a gente reanalisa sua carteira todo dia e dispara alerta (e-mail, Slack ou webhook) quando o risco de um cliente muda — protesto novo, mudança societária, queda no score.",
  },
];

const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? "open" : ""}`}>
    <button className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
      <span>{q}</span>
      <span className="plus"><i data-lucide="plus"></i></span>
    </button>
    <div className="faq-a">
      <div className="faq-a-inner">{a}</div>
    </div>
  </div>
);

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => window.lucide && window.lucide.createIcons(), 50);
  }, [open]);

  return (
    <section className="rp-section" id="faq" data-screen-label="FAQ">
      <div className="container">
        <div className="faq-wrap">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 style={{ marginTop: 14 }}>Perguntas que a gente ouve toda semana.</h2>
            <p className="sub">
              Não achou o que precisava? <a href="#" style={{ color: "var(--rp-blue)", fontWeight: 600 }}>
                Fala com o time
              </a> — respondemos em até um dia útil.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((f, i) => (
              <FaqItem
                key={i}
                q={f.q}
                a={f.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.FAQ = FAQ;
