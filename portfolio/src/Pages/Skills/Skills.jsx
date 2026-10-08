import { Link } from "react-router-dom";

import { skillGroups } from "../../data/skills";

import "./Skills.css";

export default function Skills() {
  return (
    <main className="skills-page">
      <section className="skills-page__intro">
        <h1>Skills</h1>
        <p className="skills-page__lead">
          These are the tools I reach for when I build.
        </p>
        <p className="skills-page__text">
          I use them to make apps that look good, run fast and work for real
          people. Where a tool powers something I've shipped, I've said so.
        </p>
      </section>

      {skillGroups.map((group) => (
        <section className="skill-group" key={group.title}>
          <div className="skill-group__head">
            <h2>{group.title}</h2>
            <p>{group.blurb}</p>
          </div>

          <ul className="skill-group__list">
            {group.skills.map((skill) => (
              <li className="skill-item" key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                {skill.usedIn && (
                  <span className="skill-item__tag">Used in {skill.usedIn}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="skills-page__end">
        <h2>Need something I haven't listed?</h2>
        <p>I learn fast. Tell me what your project needs.</p>
        <Link className="skills-page__button" to="/contact">
          Get in touch
        </Link>
      </section>
    </main>
  );
}
