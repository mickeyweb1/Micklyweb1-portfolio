import { Link } from "react-router-dom";

import "./About.css";

export default function About() {
  return (
    <main className="content-page about-page">
      <section className="content-page__intro">
        <p className="content-page__eyebrow">01 - About me</p>
        <h1>Curious by nature. Building for the future.</h1>
        <p>
          I am Kayode Ogunleye, a 16-year-old developer learning how ideas
          become useful software. I enjoy creating clean interfaces and
          understanding what happens behind them.
        </p>
      </section>

      <section className="about-page__details">
        <div>
          <h2>My direction</h2>
          <p>
            My goal is to become a software engineer. I am growing from frontend
            development into full-stack applications, while also exploring
            Artificial Intelligence.
          </p>
        </div>
        <div>
          <h2>What I value</h2>
          <p>
            Thoughtful design, consistent practice, and writing code that is
            understandable enough for other people to build on.
          </p>
        </div>
      </section>

      <Link className="content-page__link" to="/skills">
        See my skills
      </Link>
    </main>
  );
}
