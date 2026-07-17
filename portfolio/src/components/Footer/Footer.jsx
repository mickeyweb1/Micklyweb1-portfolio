import { FiGithub, FiMail } from "react-icons/fi";
import "./Footer.css";


export default function Footer(){

  return (

    <footer className="footer">

      <div className="footer__container">


        <div className="footer__brand">

          <h3>
            MicklyWeb
          </h3>

          <p>
            Building modern web applications
            with React and exploring AI Engineering.
          </p>

        </div>



        <div className="footer__links">

          <h4>
            Navigation
          </h4>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/projects">
            Projects
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>




        <div className="footer__social">

          <h4>
            Connect
          </h4>


          <a 
            href="https://github.com/mickeyweb1"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub/>
            Github
          </a>


          <a href="mailto:anuoluwajanet90@gmail.com">

            <FiMail/>

            Email

          </a>


        </div>


      </div>



      <div className="footer__bottom">

        <p>
          © 2026 Kayode Ogunleye · MicklyWeb
        </p>


        <span>

          🟢 Available for new projects

        </span>


      </div>


    </footer>

  );

}