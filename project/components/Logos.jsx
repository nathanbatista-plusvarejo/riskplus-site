// Logos.jsx — partner / customer wordmarks
const Logos = () => {
  const names = [
    { t: "Mercatto", b: false },
    { t: "BraVal", b: true },
    { t: "PRADO & CO", b: false },
    { t: "Vega Crédito", b: false },
    { t: "Northbay", b: true },
    { t: "Cassiopeia", b: false },
  ];
  return (
    <section className="logos-section" aria-label="Clientes">
      <div className="container">
        <div className="logos-eyebrow">Empresas que decidem com RiskPlus</div>
        <div className="logos-strip">
          {names.map((n, i) => (
            <span key={i} className={`partner ${n.b ? "b" : ""}`}>{n.t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Logos = Logos;
