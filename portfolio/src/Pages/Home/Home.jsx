import { Link } from "react-router-dom";
import { FiGithub, FiArrowRight } from "react-icons/fi";

import "./Home.css";
import TechMarquee from "../../components/TechMarquee/TechMarquee";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";

const services = [
  {
    title: "Interfaces people enjoy using",
    text: "Responsive, accessible front ends built with React and Tailwind that look sharp on a phone and a big monitor alike.",
  },
  {
    title: "Backends that hold up",
    text: "APIs and data layers with Node, Express and MongoDB, with Firebase when it's the simpler, smarter choice.",
  },
  {
    title: "Whole products, start to finish",
    text: "From the first sketch to a deployed app: sign-in, data, live features, and the small details in between.",
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__content">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true"></span>
            Open to jobs and freelance work
          </p>

          <p className="hero__small">Hi, I'm</p>

          <h1 className="hero__title">Kayode Ogunleye</h1>

          <p className="hero__tagline">Turning curiosity into code.</p>

          <h2 className="hero__role">
            Full Stack Developer and Aspiring Software Engineer
          </h2>

          <p className="hero__description">
            I build web apps from the first pixel to the last database query. I
            like learning in the open, shipping things that actually work, and
            getting a little better with every project. Looking for a developer
            for your team, or someone to build your idea? Let's talk.
          </p>

          <div className="hero__buttons">
            <Link to="/projects" className="hero__primary">
              See my work
              <FiArrowRight />
            </Link>

            <Link to="/contact" className="hero__secondary">
              Say hello
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
              role: <span className="code-string">"Full Stack Developer"</span>,
            </p>
            <p className="code-indent">stack: [</p>
            <p className="code-indent-double">
              <span className="code-string">"React"</span>,{" "}
              <span className="code-string">"Node.js"</span>,{" "}
              <span className="code-string">"Express"</span>,
            </p>
            <p className="code-indent-double">
              <span className="code-string">"MongoDB"</span>,{" "}
              <span className="code-string">"Tailwind"</span>,{" "}
              <span className="code-string">"Firebase"</span>
            </p>
            <p className="code-indent">],</p>
            <p className="code-indent">
              building: <span className="code-string">"Noted"</span>,
            </p>
            <p className="code-indent">
              lookingFor: [<span className="code-string">"a team"</span>,{" "}
              <span className="code-string">"clients"</span>],
            </p>
            <p className="code-indent">
              available: <span className="code-boolean">true</span>
            </p>
            <p>{"}"};</p>
          </div>
        </div>
      </section>

      <TechMarquee />

      {/* WHAT I DO */}
      <section className="home-section services">
        <h2 className="home-section__title">What I can build for you</h2>
        <ul className="services__list">
          {services.map((item) => (
            <li key={item.title} className="services__item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="home-section">
        <div className="building">
          <h2 className="building__title">Right now: Noted</h2>
          <p className="building__text">
            A quiz platform with timed tests, a live game-show mode and
            AI-generated questions. It's still a work in progress, and I'm
            learning a lot building it.
          </p>
          <Link to="/projects" className="building__link">
            Follow the progress
          </Link>
        </div>
      </section>

      <FeaturedProjects />

      {/* CLOSING CTA */}
      <section className="home-section">
        <div className="cta">
          <h2 className="cta__title">Have a role or a project in mind?</h2>
          <p className="cta__text">
            I'm friendly, reliable and always learning. Tell me what you're
            working on and I'll get back to you.
          </p>
          <Link to="/contact" className="hero__primary cta__button">
            Get in touch
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
