// CTA.jsx — closing call-to-action strip
const CTA = () => (
  <section className="rp-section tight">
    <div className="container">
      <div className="cta-strip">
        <h2>Pare de dar prazo no escuro.<br/>Comece pela primeira análise.</h2>
        <div className="actions">
          <a href="#hero-demo" className="btn btn-primary btn-lg">
            Analisar CNPJ grátis
            <i data-lucide="arrow-right" className="arrow"></i>
          </a>
          <a href="#" className="btn btn-secondary on-dark btn-lg">Falar com vendas</a>
        </div>
      </div>
    </div>
  </section>
);
window.CTA = CTA;
