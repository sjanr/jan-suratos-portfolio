import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import { projectGroups } from "../../data/projects";
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">

        {/* 🔹 Clean Section Header */}
        <div className="portfolio-header fade-in">
          <h1 className="portfolio-main-title">Portfolio</h1>
        </div>

        {projectGroups.map((group) => (
          <div key={group.title} className="portfolio-group fade-in">
            <h2 className="portfolio-title">{group.title}</h2>
            <p className="portfolio-subtitle">{group.subtitle}</p>

            <div className="project-grid">
              {group.projects.map((proj) => (
                <ProjectCard key={proj.title} {...proj} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
