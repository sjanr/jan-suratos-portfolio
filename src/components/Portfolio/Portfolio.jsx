import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import { projectGroups } from "../../data/projects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  // Initialize AOS for scroll animations (same effect style as About section)
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        {projectGroups.map((group) => (
          <div
            key={group.title}
            className="portfolio-group"
            data-aos="fade-up"
          >
            <h2 className="portfolio-title">{group.title}</h2>
            <p className="portfolio-subtitle">{group.subtitle}</p>

            <div className="project-grid">
              {group.projects.map((proj) => (
                <ProjectCard
                  key={proj.title}
                  title={proj.title}
                  description={proj.description}
                  image={proj.image}
                  tags={proj.tags}
                  link={proj.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
