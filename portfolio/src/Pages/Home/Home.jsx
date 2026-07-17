import { Link } from "react-router-dom";

import { FiGithub, FiArrowRight } from "react-icons/fi";

import "./Home.css";


export default function Home(){

  const openBrac =  "{";
  const CloseBrac = "};"

  return (

    <main className="home">


      {/* HERO */}

      <section className="hero">


        <div className="hero__content">


          <p className="hero__small">
            Hello, I'm
          </p>


          <h1 className="hero__title">

            Kayode Ogunleye

          </h1>


          <h2 className="hero__role">

            Frontend Developer
            <span>
              &
            </span>
            Future AI Engineer

          </h2>



          <p className="hero__description">

            I build responsive websites and
            interactive web applications using
            React, JavaScript, and modern
            frontend technologies.

            <br/>

            Currently improving my full-stack
            skills and exploring Artificial
            Intelligence.

          </p>



          <div className="hero__buttons">


            <Link 
              to="/projects"
              className="hero__primary"
            >

              View Projects

              <FiArrowRight/>

            </Link>



            <Link
              to="/contact"
              className="hero__secondary"
            >

              Contact Me

            </Link>


          </div>



          <div className="hero__social">


            <a
              href="https://github.com/mickeyweb1"
              target="_blank"
              rel="noreferrer"
            >

              <FiGithub/>

              Github

            </a>


          </div>



        </div>





        {/* Developer Card */}


        <div className="hero__card">


          <div className="hero__card-top">

            <span>
              MicklyWeb.dev
            </span>

            <span className="online">
              ● Available
            </span>

          </div>



          <div className="hero__code">


            <p>
              const developer = {openBrac}
            </p>


            <p>
              name: "Kayode",
            </p>


            <p>
              stack: "React",
            </p>


            <p>
              goal: "AI Engineer"
            </p>


            <p>
              {CloseBrac}
            </p>


          </div>


        </div>


      </section>



    </main>

  );

}