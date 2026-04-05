import "./Contact.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-eyebrow">
          <span className="contact-eyebrow-rule" />
          <span className="contact-eyebrow-text">Get in touch</span>
          <span className="contact-eyebrow-rule" />
        </div>

        <a
          href="mailto:jrs.suratos@gmail.com"
          className="contact-email"
        >
          jrs.suratos@gmail.com
        </a>

        <div className="contact-links">
          <a
            href="https://github.com/sjanr"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-link-icon" />
            <span>GitHub</span>
          </a>
          <span className="contact-sep" aria-hidden="true">·</span>
          <a
            href="https://linkedin.com/in/jansuratos"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-link-icon" />
            <span>LinkedIn</span>
          </a>
          <span className="contact-sep" aria-hidden="true">·</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FaFileAlt className="contact-link-icon" />
            <span>Résumé</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
