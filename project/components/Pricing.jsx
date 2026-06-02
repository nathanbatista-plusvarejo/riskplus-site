// Pricing.jsx — three-tier pricing
const Pricing = () => {
  const tiers = [
    {
      tier: "Free",
      name: "Para validar a ideia",
      sub: "Pra quem quer testar antes de integrar.",
      currency: "R$",
      amount: "0",
      per: "/ mês",
      features: [
        "3 análises de CNPJ por mês",
        "Decisão Liberar / Atenção / Negar",
        "Prazo e limite sugeridos",
        "Acesso ao painel web",
      ],
      cta: "Começar grátis",
      ctaClass: "btn btn-secondary",
      flag: null,
      featured: false,
      enterprise: false,
    },
    {
      tier: "Pro",
      name: "Pra equipes que decidem todo dia",
      sub: "O mais escolhido por times de crédito e financeiro.",
      currency: "R$",
      amount: "",
      per: "",
      features: [
        "Em definição análises por mês",
        "Monitoramento contínuo da carteira",
        "Alertas em tempo real por mudança de risco",
        "API REST + webhooks",
        "Integração com ERP (Omie, Bling, Conta Azul)",
        "Relatórios e exportação CSV",
      ],
      cta: "Começar 14 dias grátis",
      ctaClass: "btn btn-warn",
      flag: "Mais popular",
      featured: true,
      enterprise: false,
    },
    {
      tier: "Enterprise",
      name: "Pra operações de alto volume",
      sub: "Capacidade dedicada, SLA e integrações sob medida.",
      currency: "",
      amount: "Sob consulta",
      per: "",
      features: [
        "Volume ilimitado de análises",
        "Modelo customizado pro seu setor",
        "SSO, auditoria e SLA contratual",
        "Gerente de conta dedicado",
        "Integração 1-a-1 com seu ERP / data warehouse",
        "Onboarding com nosso time de risco",
      ],
      cta: "Falar com vendas",
      ctaClass: "btn btn-secondary",
      flag: null,
      featured: false,
      enterprise: true,
    },
  ];

  return (
    <section className="rp-section bg-soft" id="precos" data-screen-label="Preços">
      <div className="container">
        <div className="head text-center">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Planos</span>
          <h2>Comece grátis. Escale quando precisar.</h2>
          <p className="sub" style={{ marginInline: "auto" }}>
            Sem taxa de setup. Sem fidelidade. Você decide quando subir de plano —
            ou voltar.
          </p>
        </div>

        <div className="pricing">
          {tiers.map((t) => (
            <div key={t.tier} className={`price ${t.featured ? "featured" : ""} ${t.enterprise ? "enterprise" : ""}`}>
              {t.flag && <div className="price-flag">{t.flag}</div>}
              <div className="tier">{t.tier}</div>
              <div>
                <div className="name">{t.name}</div>
                <div className="sub">{t.sub}</div>
              </div>
              <div className="amount">
                {t.currency && <span className="currency">{t.currency}</span>}
                <span>{t.amount}</span>
                {t.per && <span className="per">{t.per}</span>}
              </div>
              <ul>
                {t.features.map((f, i) => (
                  <li key={i}><i data-lucide="check" className="ic"></i>{f}</li>
                ))}
              </ul>
              <a href="#" className={`${t.ctaClass} cta`}>
                {t.cta}
                <i data-lucide="arrow-right" className="arrow"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Pricing = Pricing;
