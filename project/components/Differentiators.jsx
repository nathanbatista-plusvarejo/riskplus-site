// Differentiators.jsx — RiskPlus vs bureaus tradicionais
const Differentiators = () =>
<section className="rp-section" id="diferenciais" data-screen-label="Diferenciais">
    <div className="container">
      <div className="head">
        <span className="eyebrow">Diferenciais</span>
        <h2>O bureau tradicional<br />não foi feito pro seu cliente</h2>
        <p className="sub">Bureaus clássicos olham o passado de quem já tem histórico. RiskPlus combina dado público, alternativo e proprietário pra decidir até sobre empresas novas em segundos


      </p>
      </div>

      <div className="diff-grid">
        <div className="diff-col them">
          <h3>
            <span className="mark">—</span>
            Bureau tradicional
          </h3>
          <ul className="diff-list">
            <li><span className="ico"><i data-lucide="minus"></i></span><span className="t">Score sem explicação</span></li>
            <li><span className="ico"><i data-lucide="minus"></i></span><span className="t">Empresa nova ou pequena? Geralmente "sem informação".</span></li>
            <li><span className="ico"><i data-lucide="minus"></i></span><span className="t">Relatórios longos, sem clareza.</span></li>
            <li><span className="ico"><i data-lucide="minus"></i></span><span className="t">Atualização lenta dos dados</span></li>
            <li><span className="ico"><i data-lucide="minus"></i></span><span className="t">Integração via planilha, XML antigo ou nenhuma.</span></li>
            <li><span className="ico"><i data-lucide="minus"></i></span><span className="t">Cobrança por consulta avulsa, custo imprevisível.</span></li>
          </ul>
        </div>

        <div className="diff-col us">
          <h3>
            <span className="mark">+</span>
            RiskPlus
          </h3>
          <ul className="diff-list">
            <li><span className="ico"><i data-lucide="check"></i></span><span className="t">Decisão direta: <strong>Liberar, Atenção ou Negar</strong> — com motivos.</span></li>
            <li><span className="ico"><i data-lucide="check"></i></span><span className="t">Cobertura sobre empresas <strong>fora dos bureaus</strong> via sinais alternativos.</span></li>
            <li><span className="ico"><i data-lucide="check"></i></span><span className="t">Prazo e limite sugeridos prontos pra aplicar.</span></li>
            <li><span className="ico"><i data-lucide="check"></i></span><span className="t">Monitoramento contínuo: a gente avisa quando o risco muda.</span></li>
            <li><span className="ico"><i data-lucide="check"></i></span><span className="t">API moderna + integrações nativas com ERP.</span></li>
            <li><span className="ico"><i data-lucide="check"></i></span><span className="t">Plano mensal previsível, com franquia de análises.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>;

window.Differentiators = Differentiators;