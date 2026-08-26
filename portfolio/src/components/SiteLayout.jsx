import React from "react";

export function SiteLayout({ children }) {
  // Hardcoded theme tokens to guarantee colors load perfectly
  const layoutStyles = {
    backgroundColor: "oklch(0.16 0.012 250)",
    color: "oklch(0.96 0.005 250)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  };

  const headerStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    backgroundColor: "rgba(26, 29, 36, 0.75)",
    borderBottom: "1px solid rgba(245, 245, 245, 0.1)"
  };

  return (
    <div style={layoutStyles} className="site-layout-wrapper">
      <header style={headerStyles} className="site-header">
        <div className="header-container">
          <a href="#home" className="site-logo" style={{ textDecoration: "none", color: "inherit" }}>
            <span style={{ color: "oklch(0.78 0.16 145)" }} className="logo-accent">/&gt;</span>
            <span style={{ fontWeight: 500, marginLeft: "4px" }} className="logo-text">micklyweb1</span>
          </a>
          <nav className="header-nav">
            <a href="#work" className="nav-item">Work</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>
          <a href="#contact" className="hire-btn" style={{ backgroundColor: "oklch(0.78 0.16 145)", color: "oklch(0.16 0.012 250)" }}>
            Hire me
          </a>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer" style={{ borderTop: "1px solid rgba(245, 245, 245, 0.1)" }}>
        <div className="footer-container">
          <div>© 2026 Ogunleye Kayode · micklyweb1</div>
          <div className="footer-status">
            <span className="status-dot" style={{ backgroundColor: "oklch(0.78 0.16 145)" }} />
            Available for new projects
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionHeader({ index, kicker, title }) {
  return (
    <div className="section-header-block">
      <p style={{ color: "oklch(0.78 0.16 145)", margin: 0 }} className="section-kicker">
        {index} — {kicker}
      </p>
      <h1 className="section-title">{title}</h1>
    </div>
  );
}
