import { Link } from "react-router-dom";
import { FiGithub, FiArrowRight } from "react-icons/fi";

import "./Home.css";
import TechMarquee from "../../components/TechMarquee/TechMarquee";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";

export default function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__content">
          <p className="hero__small">Hello, I'm</p>

          <h1 className="hero__title">Kayode Ogunleye</h1>

          <p className="hero__tagline">Turning curiosity into code.</p>

          <h2 className="hero__role">Aspiring Software Engineer</h2>

          <p className="hero__description">
            I am becoming a software engineer by building responsive web
            applications and growing my full-stack development skills.
          </p>

          <div className="hero__buttons">
            <Link to="/projects" className="hero__primary">
              View Projects
              <FiArrowRight />
            </Link>

            <Link to="/contact" className="hero__secondary">
              Contact Me
            </Link>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/mickeyweb1"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FiGithub />
              <span>github.com/mickeyweb1</span>
            </a>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__card-header">
            <div className="hero__card-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="hero__card-title">developer.config.js</span>
            <span className="online-status">Available</span>
          </div>

          <div className="hero__code">
            <p>
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">developer</span> = {"{"}
            </p>
            <p className="code-indent">
              name: <span className="code-string">"Kayode Ogunleye"</span>,
            </p>
            <p className="code-indent">
              role: <span className="code-string">"Software Developer"</span>,
            </p>
            <p className="code-indent">stack: [</p>
            <p className="code-indent-double">
              <span className="code-string">"React"</span>,{" "}
              <span className="code-string">"Node.js"</span>,
            </p>
            <p className="code-indent-double">
              <span className="code-string">"Express"</span>,{" "}
              <span className="code-string">"MongoDB"</span>,
            </p>
            <p className="code-indent-double">
              <span className="code-string">"CSS"</span>
            </p>
            <p className="code-indent">],</p>
            <p className="code-indent">
              motto: <span className="code-string">"Turning curiosity into code"</span>,
            </p>
            <p className="code-indent">
              available: <span className="code-boolean">true</span>
            </p>
            <p>{"}"};</p>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <TechMarquee />
      <FeaturedProjects />
    </main>
  );
}
