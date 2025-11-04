import "./Hero.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";


function Hero() {
  return (
    <section className="hero">
      <div className="hero-img-wrap">
        <img
          src="/images/JanSuratos.png"
          alt="Jan Suratos"
          className="hero-img"
        />
      </div>


      <div className="hero-name">Jan Suratos</div>
      <div className="hero-label">Interactive Systems Engineer</div>

      <div className="hero-buttons">
        <a
          href="https://github.com/sjanr"
          target="_blank"
          rel="noreferrer"
          className="hero-btn"
        >
          <FaGithub className="hero-icon" /></a>
        <a
          href="https://linkedin.com/in/jansuratos"
          target="_blank"
          rel="noreferrer"
          className="hero-btn"
        >
          <FaLinkedin className="hero-icon" /></a>
        <a href="/resume.pdf" className="hero-btn">
          <FaFileAlt className="hero-icon" /></a>
      </div>
    </section>
  );
}

export default Hero;
