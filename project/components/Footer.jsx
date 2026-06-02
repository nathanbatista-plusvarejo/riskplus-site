// Footer.jsx
const Footer = () =>
<footer className="rp-footer">
    <div className="container">
      <div className="grid">
        <div>
          <img className="logo" src="assets/logo-white.svg" alt="RiskPlus" />
          <p className="blurb">
            Decisão de crédito B2B em segundos. Sem planilha. Sem achismo.
          </p>
          <div className="social">
            <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
            <a href="#" aria-label="Twitter / X"><i data-lucide="twitter"></i></a>
            <a href="#" aria-label="GitHub"><i data-lucide="github"></i></a>
          </div>
        </div>
        <div>
          <h4>Produto</h4>
          <a href="#produto">Análise de CNPJ</a>
          <a href="#">Monitoramento</a>
          <a href="#">API &amp; webhooks</a>
          <a href="#">Integrações ERP</a>
          <a href="#precos">Preços</a>
        </div>
        <div>
          <h4>Empresa</h4>
          <a href="#">Sobre</a>
          <a href="#">Carreiras</a>
          <a href="#">Contato</a>
          <a href="#">Imprensa</a>
        </div>
        <div>
          <h4>Recursos</h4>
          <a href="#">Documentação da API</a>
          <a href="#">Blog</a>
          <a href="#">Central de ajuda</a>
          <a href="#">Segurança &amp; LGPD</a>
          <a href="#">Status</a>
        </div>
      </div>
      <div className="bottom">
        <span>© 2026 RiskPlus Tecnologia Ltda. Todos os direitos reservados.</span>
        <span>CNPJ/ · São Paulo, Brasil</span>
      </div>
    </div>
  </footer>;

window.Footer = Footer;