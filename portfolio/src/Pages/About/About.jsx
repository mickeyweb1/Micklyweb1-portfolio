import { Link } from "react-router-dom";

import "./About.css";

const projects = [
  {
    name: "Noted",
    meta: "Live, used by 20+ teachers across 2 schools",
    text: "An AI learning platform for schools. Teachers can generate tests and quizzes with AI, or write their own questions by hand. Students can turn their notes into summaries, music, short videos and quizzes, chat with an AI tutor, and take on classmates in a battle arena with XP and a leaderboard.",
  },
  {
    name: "Worwave",
    meta: "SaaS for business owners",
    text: "One place for owners to run every branch: sales, expenses, stock, goods in and out, and products.",
  },
  {
    name: "Novra",
    meta: "Team of three, I built the frontend",
    text: "A school management website for student fees, staff, money and expenses, so schools spend less time on paperwork.",
  },
];

export default function About() {
  return (
    <main className="content-page about-page">
      <section className="content-page__intro">
        <p className="content-page__eyebrow">About me</p>
        <h1>I wanted to know how websites work, so I started building them.</h1>
        <p>
          I'm Kayode Ogunleye, a teenage full stack developer. It started with
          one question: how are the websites I use every day actually made? I
          went looking for the answer, and I haven't stopped since. Now I build
          the interfaces and the systems behind them.
        </p>
      </section>

      <section className="about-page__projects">
        <h2 className="about-page__heading">Things I've built</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.name} className="about-page__project">
              <div>
                <h3>{project.name}</h3>
                <p className="about-page__meta">{project.meta}</p>
              </div>
              <p>{project.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-page__details">
        <div>
          <h2>My direction</h2>
          <p>
            I want to be a software engineer. I started on the frontend and
            grew into full-stack work with React, Node, Express and MongoDB.
            I don't wait to feel ready, I build real things and learn from the
            people who use them.
          </p>
        </div>
        <div>
          <h2>What I value</h2>
          <p>
            Thoughtful design, steady practice, and code other people can read
            and build on. If a teacher or student gets stuck using something I
            made, that's my bug to fix.
          </p>
        </div>
        <div>
          <h2>Away from the keyboard</h2>
          <p>
            I enjoy chess and a bit of tennis, and I watch a lot of anime.
          </p>
        </div>
      </section>

      <div className="about-page__links">
        <Link className="content-page__link" to="/skills">
          See my skills
        </Link>
        <Link className="content-page__link" to="/contact">
          Get in touch
        </Link>
      </div>
    </main>
  );
}
