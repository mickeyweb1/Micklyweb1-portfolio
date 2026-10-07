import { FiGithub, FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>MicklyWeb</h3>

          <p>
            Building modern web applications with React and growing my full-stack
            development skills.
          </p>
        </div>

        <div className="footer__links">
          <h4>Navigation</h4>

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/projects">Projects</NavLink>

          <NavLink to="/skills">Skills</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer__social">
          <h4>Connect</h4>

          <a
            href="https://github.com/mickeyweb1"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            Github
          </a>

          <a href="mailto:anuoluwajanet90@gmail.com">
            <FiMail />
            Email
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Kayode Ogunleye · MicklyWeb</p>

        <span><i className="footer__status-dot" />Available for new projects</span>
      </div>
    </footer>
  );
}
