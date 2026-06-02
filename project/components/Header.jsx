// Header.jsx — fixed top nav with scroll-state transition + mobile menu
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open + re-render icons
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (window.lucide) window.lucide.createIcons();
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const logo = scrolled ? "assets/logo-blue.svg" : "assets/logo-white.svg";

  const navLinks = [
    { href: "#produto", label: "Produto" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#precos", label: "Preços" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header className={`rp-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container inner">
          <a href="#" aria-label="RiskPlus" data-comment-anchor="header-logo">
            <img className="logo" src={logo} alt="RiskPlus" />
          </a>
          <nav>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="actions">
            <a href="#" className="btn btn-ghost login">Entrar</a>
            <a href="#hero-demo" className="btn btn-primary">
              Analisar CNPJ grátis <i data-lucide="arrow-right" className="arrow"></i>
            </a>
            <button
              className="menu-toggle"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <i data-lucide="menu"></i>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="top">
          <img src="assets/logo-white.svg" alt="RiskPlus" />
          <button className="close" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
            <i data-lucide="x"></i>
          </button>
        </div>

        <div className="links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
              <i data-lucide="arrow-up-right"></i>
            </a>
          ))}
        </div>

        <div className="ctas">
          <a href="#hero-demo" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Analisar CNPJ grátis
          </a>
          <a href="#" className="btn btn-secondary on-dark" onClick={() => setMenuOpen(false)}>
            Entrar
          </a>
        </div>
      </div>
    </>
  );
};

window.Header = Header;
