import "./TechMarquee.css";

const technologies = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Git",
  "GitHub",
  "Python",
  "AI"
];


export default function TechMarquee(){

  return (

    <section className="marquee">

      <div className="marquee__track">

        {[...technologies, ...technologies].map((tech, index)=>(

          <div 
            className="marquee__item"
            key={index}
          >

            <span>
              {tech}
            </span>

            <span className="marquee__dot">
              ✦
            </span>

          </div>

        ))}

      </div>

    </section>

  );

}