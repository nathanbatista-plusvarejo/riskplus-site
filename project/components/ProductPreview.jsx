// ProductPreview.jsx — mock of the RiskPlus dashboard / report
const ProductPreview = () =>
<section className="rp-section" id="produto" data-screen-label="Produto">
    <div className="container">
      <div className="head">
        <span className="eyebrow">Painel do produto</span>
        <h2>Uma decisão. Os motivos por trás dela.</h2>
        <p className="sub">Cada análise vai além do score, prazo e limite sugeridos, e a lista de fatores que pesaram, sem pontos cegos.


      </p>
      </div>

      <div className="preview-shell" data-comment-anchor="product-preview">
        <div className="preview-window">
          <div className="preview-toolbar">
            <div className="dots"><span></span><span></span><span></span></div>
            <div className="crumb">
              app.riskplus.com.br <span className="arr">›</span> análises <span className="arr">›</span> #A-2841
            </div>
          </div>

          <div className="preview-grid">
            <aside className="preview-side">
              <div className="brand"><img src="assets/logo-blue.svg" alt="RiskPlus" /></div>
              <div className="nav-i active"><i data-lucide="layout-dashboard"></i>Análises</div>
              <div className="nav-i"><i data-lucide="eye"></i>Monitoramento</div>
              <div className="nav-i"><i data-lucide="bell"></i>Alertas <span style={{ marginLeft: 'auto', background: 'var(--rp-orange)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '1px 7px', borderRadius: 999 }}>3</span></div>
              <div className="nav-i"><i data-lucide="file-text"></i>Relatórios</div>
              <div className="sec-label">Conta</div>
              <div className="nav-i"><i data-lucide="plug"></i>Integrações</div>
              <div className="nav-i"><i data-lucide="users"></i>Equipe</div>
              <div className="nav-i"><i data-lucide="settings"></i>Configurações</div>
            </aside>

            <div className="preview-main">
              <div className="preview-h">
                <div>
                  <h4>Mercatto Distribuição Ltda</h4>
                  <div className="sub-meta">CNPJ 12.345.678/0001-90 · análise há 2 min</div>
                </div>
                <div className="badge"><span className="dot"></span>Liberar prazo</div>
              </div>

              <div className="preview-cards">
                <div className="preview-card score">
                  <div className="k">Score RiskPlus</div>
                  <div className="v">A<span className="small">/F</span></div>
                  <div className="meta">88 / 100 — top 12% do setor</div>
                </div>
                <div className="preview-card">
                  <div className="k">Prazo sugerido</div>
                  <div className="v">60 <span className="small">dias</span></div>
                  <div className="meta">Histórico de pagamento estável</div>
                </div>
                <div className="preview-card">
                  <div className="k">Limite sugerido</div>
                  <div className="v">R$ 180<span className="small">k</span></div>
                  <div className="meta">≈ 0,8× faturamento mensal</div>
                </div>
              </div>

              <div className="preview-section">
                <h5>Posição no score</h5>
                <div className="score-meter">
                  <div className="fill" style={{ width: "88%" }}></div>
                  <div className="pointer" style={{ left: "calc(88% - 2px)" }}></div>
                </div>
                <div className="score-axis">
                  <span>F · 0</span>
                  <span>D</span>
                  <span>C</span>
                  <span>B</span>
                  <span>A · 100</span>
                </div>
              </div>

              <div className="preview-section" style={{ marginTop: 12 }}>
                <h5>Fatores que pesaram</h5>
                <div className="factor-list">
                  <div className="f good">
                    <span className="name"><i data-lucide="trending-up" className="ic"></i>Faturamento crescente nos últimos 12 meses</span>
                    <span className="weight">+24 pts</span>
                  </div>
                  <div className="f good">
                    <span className="name"><i data-lucide="shield-check" className="ic"></i>Adimplente em todos os bureaus consultados</span>
                    <span className="weight">+18 pts</span>
                  </div>
                  <div className="f good">
                    <span className="name"><i data-lucide="users" className="ic"></i>Quadro societário estável (3+ anos)</span>
                    <span className="weight">+12 pts</span>
                  </div>
                  <div className="f warn">
                    <span className="name"><i data-lucide="alert-triangle" className="ic"></i>1 protesto há 18 meses (regularizado)</span>
                    <span className="weight">−4 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;


window.ProductPreview = ProductPreview;