// Hero.jsx — hero with live, animated CNPJ analyzer demo
const SAMPLES = {
  "12.345.678/0001-90": {
    name: "Mercatto Distribuição Ltda",
    setor: "Atacado · Alimentos",
    fundacao: "2014",
    score: "A",
    pct: 88,
    label: "Liberar prazo · 60 dias",
    band: "go",
    prazo: "60 dias",
    limite: "R$ 180.000",
    factors: [
    { kind: "good", text: "Adimplente há 36+ meses" },
    { kind: "good", text: "Faturamento estável e crescente" },
    { kind: "good", text: "Sócios sem restrições" }]

  },
  "33.222.111/0001-44": {
    name: "Vega Indústria & Comércio",
    setor: "Indústria · Têxtil",
    fundacao: "2019",
    score: "B",
    pct: 62,
    label: "Atenção · prazo curto",
    band: "caution",
    prazo: "21 dias",
    limite: "R$ 35.000",
    factors: [
    { kind: "good", text: "Empresa ativa, sem pendências fiscais" },
    { kind: "warn", text: "1 protesto nos últimos 12 meses" },
    { kind: "warn", text: "Sinais alternativos: pagamentos atrasados" }]

  },
  "55.999.444/0001-12": {
    name: "Northbay Trading ME",
    setor: "Importação",
    fundacao: "2023",
    score: "D",
    pct: 22,
    label: "Negar · risco alto",
    band: "stop",
    prazo: "—",
    limite: "—",
    factors: [
    { kind: "bad", text: "Empresa recém-aberta (6 meses)" },
    { kind: "bad", text: "Sócio com restrição em outro CNPJ" },
    { kind: "bad", text: "Endereço inconsistente com Receita Federal" }]

  }
};

const ANALYSIS_STEPS = [
"Consultando Receita Federal",
"Cruzando dados cadastrais e sócios",
"Lendo sinais alternativos",
"Aplicando modelo RiskPlus+"];


const formatCnpj = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 14);
  return d.
  replace(/^(\d{2})(\d)/, "$1.$2").
  replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3").
  replace(/\.(\d{3})(\d)/, ".$1/$2").
  replace(/(\d{4})(\d)/, "$1-$2");
};

const Hero = () => {
  const [cnpj, setCnpj] = React.useState("12.345.678/0001-90");
  const [phase, setPhase] = React.useState("result"); // idle | analyzing | result
  const [stepIdx, setStepIdx] = React.useState(ANALYSIS_STEPS.length);
  const [result, setResult] = React.useState(SAMPLES["12.345.678/0001-90"]);
  const timersRef = React.useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const analisar = (raw) => {
    const key = raw ?? cnpj;
    clearTimers();
    setPhase("analyzing");
    setStepIdx(0);
    const sample = SAMPLES[key] || {
      name: "Empresa Exemplo Ltda",
      setor: "—",
      fundacao: "—",
      score: "A",
      pct: 80,
      label: "Liberar prazo · 45 dias",
      band: "go",
      prazo: "45 dias",
      limite: "R$ 90.000",
      factors: [
      { kind: "good", text: "Dados cadastrais válidos" },
      { kind: "good", text: "Sem pendências relevantes" },
      { kind: "good", text: "Atividade compatível com porte" }]

    };
    ANALYSIS_STEPS.forEach((_, i) => {
      timersRef.current.push(setTimeout(() => setStepIdx(i + 1), (i + 1) * 420));
    });
    timersRef.current.push(setTimeout(() => {
      setResult(sample);
      setPhase("result");
    }, ANALYSIS_STEPS.length * 420 + 250));
  };

  React.useEffect(() => () => clearTimers(), []);

  const pickSample = (k) => {
    setCnpj(k);
    setTimeout(() => analisar(k), 30);
  };

  return (
    <section className="rp-hero" id="hero-demo" data-screen-label="Hero">
      <img className="watermark" src="assets/icon-white.svg" alt="" aria-hidden="true" />
      <div className="container">
        <div className="content">
          <div className="badge-row">
            <span className="pulse-dot"></span>
            <span>Análises rodando agora · &gt; 12.000 hoje</span>
          </div>
          <h1>
            Tome decisões de vendas a prazo<br />
            <span className="accent">em segundos</span>
          </h1>
          <p className="lead">
            Analise o <span className="em">CNPJ</span> do seu cliente B2B e descubra na hora se vale dar o prazo
            mesmo para quem <span className="em">não aparece</span> nos bureaus tradicionais.
          </p>

          <div className="reassure">
            <span className="item"><i data-lucide="check"></i> Sem planilha.</span>
            <span className="item"><i data-lucide="check"></i> Sem achismo.</span>
            <span className="item"><i data-lucide="check"></i> Sem cadastro.</span>
          </div>
        </div>

        {/* Demo card */}
        <div className="demo-card" data-comment-anchor="hero-demo-card">
          <div className="demo-window">
            <div className="demo-titlebar">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="url"><i data-lucide="lock"></i>app.riskplus.com.br/analise</div>
            </div>

            <div className="demo-body">
              <div className="demo-input-row">
                <input
                  value={cnpj}
                  placeholder="00.000.000/0000-00"
                  onChange={(e) => setCnpj(formatCnpj(e.target.value))}
                  onKeyDown={(e) => e.key === "Enter" && analisar()}
                  aria-label="CNPJ" />
                
                <button onClick={() => analisar()} disabled={phase === "analyzing"}>
                  {phase === "analyzing" ? "Analisando…" : <>Analisar <i data-lucide="arrow-right"></i></>}
                </button>
              </div>

              <div className="demo-examples">
                <span className="lbl">Exemplos:</span>
                {Object.keys(SAMPLES).map((k) =>
                <button key={k} className="chip" onClick={() => pickSample(k)}>{k}</button>
                )}
              </div>

              {phase === "analyzing" &&
              <div className="demo-analyzing">
                  {ANALYSIS_STEPS.map((s, i) => {
                  const state = i < stepIdx ? "done" : i === stepIdx ? "active" : "pending";
                  return (
                    <div key={i} className={`step ${state}`}>
                        <span className="check">
                          {state === "done" && <i data-lucide="check"></i>}
                          {state === "active" && <i data-lucide="loader-2"></i>}
                          {state === "pending" && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--rp-slate-400)" }} />}
                        </span>
                        {s}
                      </div>);

                })}
                </div>
              }

              {phase === "result" && result &&
              <div className={`demo-result ${result.band}`}>
                  <div className="demo-result-head">
                    <div>
                      <div className="demo-result-co">{result.name}</div>
                      <div className="demo-result-cnpj">CNPJ {cnpj}</div>
                    </div>
                    <div className="demo-result-score-block">
                      <div className="demo-result-score">{result.score}</div>
                      <div className="demo-result-label">
                        <span className="dot"></span>{result.label}
                      </div>
                    </div>
                  </div>

                  <div className="demo-result-grid">
                    <div className="pair">
                      <span className="k">Prazo recomendado</span>
                      <span className="v">{result.prazo}</span>
                    </div>
                    <div className="pair">
                      <span className="k">Limite sugerido</span>
                      <span className="v">{result.limite}</span>
                    </div>
                    <div className="pair">
                      <span className="k">Setor</span>
                      <span className="v">{result.setor}</span>
                    </div>
                    <div className="pair">
                      <span className="k">Fundação</span>
                      <span className="v">{result.fundacao}</span>
                    </div>
                  </div>

                  <div className="demo-result-factors">
                    {result.factors.map((f, i) =>
                  <div key={i} className={`demo-result-factor ${f.kind}`}>
                        <i data-lucide={f.kind === "good" ? "check-circle-2" : f.kind === "warn" ? "alert-triangle" : "x-circle"} className="ic"></i>
                        {f.text}
                      </div>
                  )}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

};

window.Hero = Hero;