import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";

import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">MW</span>
          <span className="navbar__logo-name">MicklyWeb</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className="navbar__link">
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar__actions">
          {/* GitHub Icon (Desktop) */}
          <a
            href="https://github.com/mickeyweb1"
            target="_blank"
            rel="noreferrer"
            className="navbar__github"
            aria-label="GitHub Profile"
          >
            <FiGithub />
          </a>

          <NavLink to="/contact" className="navbar__hire">
            Hire Me
          </NavLink>

          <button 
            className="navbar__menu-btn" 
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={open ? "navbar__mobile active" : "navbar__mobile"}>
        {navLinks.map((link) => (
          <NavLink 
            key={link.name} 
            to={link.path} 
            className="navbar__mobile-link" 
            onClick={closeMenu}
          >
            {link.name}
          </NavLink>
        ))}
        
        {/* GitHub Icon + Text (Mobile) */}
        <a
          href="https://github.com/mickeyweb1"
          target="_blank"
          rel="noreferrer"
          className="navbar__mobile-link"
          onClick={closeMenu}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <FiGithub /> GitHub
        </a>

        <NavLink 
          to="/contact" 
          className="navbar__mobile-link navbar__hire--mobile" 
          onClick={closeMenu}
        >
          Hire Me
        </NavLink>
      </div>
    </header>
  );
}