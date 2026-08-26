import { skills } from "../../data/skills";

import "./Skills.css";

export default function Skills() {
  return (
    <main className="skills-page">
      <section className="skills-page__intro">
        <p className="skills-page__eyebrow">04 - Toolkit</p>
        <h1>Skills</h1>
        <p>
          The tools and technologies I use to turn ideas into useful, responsive
          digital experiences.
        </p>
      </section>

      <section className="skills-grid" aria-label="Technical skills">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
