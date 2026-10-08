import { Link } from "react-router-dom";

import "./About.css";

const facts = [
  ["Role", "Full stack developer"],
  ["Building", "Noted"],
  ["Stack", "React, Node, Express, MongoDB, Tailwind, Firebase, Git"],
  ["Open to", "Jobs, internships and freelance projects"],
  ["Off the clock", "Chess, tennis, anime"],
];

const noted = [
  "AI-made tests and quizzes",
  "AI tutor you can chat with",
  "Notes to summaries, music and short videos",
  "Battle arena",
  "XP and leaderboard",
];

const story = [
  {
    title: "I got curious",
    text: "I use websites every day and I wanted to know how they actually work. So I started learning how to build them myself.",
  },
  {
    title: "I built real things",
    text: "Not just practice projects. Real teachers and students already use Noted, and I learn something new from every one of them.",
  },
  {
    title: "I'm not stopping",
    text: "I want to be a software engineer. I'm still learning, still shipping, and getting better with every project.",
  },
];

export default function About() {
  return (
    <main className="content-page about-page">
      {/* INTRO */}
      <section className="about-hero">
        <div>
          <h1>Hey, I'm Kayode.</h1>
          <p className="about-hero__lead">
            I'm a teenage developer who always wanted to know how websites
            work. Then I stopped wondering and started building.
          </p>
          <p className="about-hero__text">
            Today I make full stack apps that real people use: clean on the
            screen, solid behind it.
          </p>
        </div>

        <dl className="about-facts">
          {facts.map(([label, value]) => (
            <div key={label} className="about-facts__row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* WORK */}
      <section className="about-work">
        <h2 className="about-title">What I've built</h2>

        <div className="about-work__grid">
          <article className="about-noted">
            <p className="about-tag">Live now</p>
            <h3>Noted</h3>
            <p className="about-noted__lead">
              An AI learning platform for schools.
            </p>
            <p>
              Teachers can let AI set the tests and quizzes, or write the
              questions themselves. Students turn their notes into study
              material, chat with an AI tutor, and battle each other in the
              arena for XP.
            </p>
            <ul className="about-chips">
              {noted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="about-noted__proof">
              20+ teachers across 2 schools are already using it.
            </p>
          </article>

          <article className="about-small">
            <h3>Worwave</h3>
            <p>
              Run every branch from one place: sales, expenses, stock, goods in
              and out, and products. Made for business owners.
            </p>
          </article>

          <article className="about-small">
            <h3>Novra</h3>
            <p>
              School fees, staff, money and expenses in one website. Built with
              a team of three, and I handled the frontend.
            </p>
          </article>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <h2 className="about-title">How I got here</h2>
        <ol>
          {story.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CLOSING */}
      <section className="about-end">
        <h2>Want to build something together?</h2>
        <p>
          Got a role, an internship or a small project in mind? Say hi. And if
          something I built ever confuses you, I want to hear about it.
        </p>
        <div className="about-end__links">
          <Link className="about-end__primary" to="/contact">
            Get in touch
          </Link>
          <Link className="content-page__link about-end__secondary" to="/skills">
            See my skills
          </Link>
        </div>
      </section>
    </main>
  );
}
