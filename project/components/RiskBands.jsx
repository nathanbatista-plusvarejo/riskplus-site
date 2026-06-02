// RiskBands.jsx — explainer for Liberar / Atenção / Negar
const RiskBands = () => (
  <section className="rp-section bg-soft">
    <div className="container">
      <div className="head">
        <span className="eyebrow">A decisão</span>
        <h2>Três faixas. Uma resposta direta.</h2>
        <p className="sub">Cada análise volta com uma das três faixas, prazo sugerido e os fatores que pesaram na decisão.</p>
      </div>
      <div className="bands">
        <div className="band go">
          <div className="head-row"><i data-lucide="check"></i>Faixa A · B</div>
          <div className="name">Liberar</div>
          <div className="desc">Cliente saudável. Prazo recomendado e limite sugerido prontos para usar.</div>
          <div className="meta">≈ 64% das análises</div>
          <div className="letter">A</div>
        </div>
        <div className="band caution">
          <div className="head-row"><i data-lucide="alert-triangle"></i>Faixa C</div>
          <div className="name">Atenção</div>
          <div className="desc">Há sinais para considerar. Liberar com prazo curto, garantia ou follow-up.</div>
          <div className="meta">≈ 22% das análises</div>
          <div className="letter">B</div>
        </div>
        <div className="band stop">
          <div className="head-row"><i data-lucide="x"></i>Faixa D · F</div>
          <div className="name">Negar</div>
          <div className="desc">Risco alto. A RiskPlus mostra os fatores e a justificativa para a recusa.</div>
          <div className="meta">≈ 14% das análises</div>
          <div className="letter">C</div>
        </div>
      </div>
    </div>
  </section>
);
window.RiskBands = RiskBands;
