import { useState } from "react";
import { FiMail, FiGithub, FiSend, FiCheckCircle } from "react-icons/fi";

import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:anuoluwajanet90@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <main className="contact">
      <section className="contact__container">
        <div className="contact__header">
          <p className="contact__small">Get In Touch</p>
          <h1 className="contact__title">Let's Work Together</h1>
          <p className="contact__description">
            Have a project in mind or want to talk about software? Send a note and I will get back to you.
          </p>
        </div>

        <div className="contact__content">
          {/* Contact Information */}
          <div className="contact__info">
            <div className="contact__info-card">
              <FiMail className="contact__icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:anuoluwajanet90@gmail.com">anuoluwajanet90@gmail.com</a>
              </div>
            </div>

            <div className="contact__info-card">
              <FiGithub className="contact__icon" />
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/mickeyweb1" target="_blank" rel="noreferrer">
                  github.com/mickeyweb1
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div className="contact__success">
                <FiCheckCircle className="success__icon" />
                <h3>Your message is ready</h3>
                <p>Your email app should open with the message ready to send. If it did not, email me directly.</p>
              </div>
            ) : (
              <>
                <div className="form__group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form__submit">
                  Send Message
                  <FiSend />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

// import { FiMail, FiGithub } from "react-icons/fi";

// import "./Contact.css";

// export default function Contact() {
//   return (
//     <main className="content-page contact-page">
//       <section className="content-page__intro">
//         <p className="content-page__eyebrow">05 - Contact</p>
//         <h1>Let&apos;s build something useful.</h1>
//         <p>
//           Have an idea, a question, or a project to discuss? Send a message and
//           I&apos;ll get back to you as soon as I can.
//         </p>
//       </section>

//       <div className="contact-page__links">
//         <a href="mailto:anuoluwajanet90@gmail.com">
//           <FiMail />
//           anuoluwajanet90@gmail.com
//         </a>
//         <a
//           href="https://github.com/mickeyweb1"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FiGithub />
//           GitHub profile
//         </a>
//       </div>
//     </main>
//   );
// }
