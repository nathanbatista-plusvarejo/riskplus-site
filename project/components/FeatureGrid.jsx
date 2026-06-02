// FeatureGrid.jsx — 3-step "como funciona"
const FeatureGrid = () =>
<section className="rp-section bg-soft" id="como-funciona" data-screen-label="Como funciona">
    <div className="container">
      <div className="head">
        <span className="eyebrow">Como funciona</span>
        <h2>Três passos. Zero achismo.</h2>
        <p className="sub">
          Você cola o CNPJ, a RiskPlus cruza dezenas de fontes — públicas, alternativas e proprietárias —
          e devolve uma decisão clara em segundos.
        </p>
      </div>

      <div className="feature-grid">
        <div className="feature">
          <span className="step-num">01</span>
          <div className="glyph"><i data-lucide="search"></i></div>
          <div className="step-label">Passo 01</div>
          <h3>Cole o CNPJ</h3>
          <p>Qualquer empresa brasileira, com ou sem máscara. Sem cadastro, sem upload de planilha, sem fricção.</p>
        </div>
        <div className="feature">
          <span className="step-num">02</span>
          <div className="glyph"><i data-lucide="layers"></i></div>
          <div className="step-label">Passo 02</div>
          <h3>A RiskPlus cruza os dados</h3>
          <p>Receita Federal, sócios, processos, sinais alternativos e nossos modelos proprietários em segundos.</p>
        </div>
        <div className="feature">
          <span className="step-num">03</span>
          <div className="glyph"><i data-lucide="check-circle-2"></i></div>
          <div className="step-label">Passo 03</div>
          <h3>Receba a decisão</h3>
          <p>Liberar, Atenção ou Negar, respeitando a sua política de crédito e a sua decisão.</p>
        </div>
      </div>
    </div>
  </section>;

window.FeatureGrid = FeatureGrid;