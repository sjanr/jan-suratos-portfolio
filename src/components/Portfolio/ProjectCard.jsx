import "./ProjectCard.css";

function ProjectCard({ title, description, image, tags, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={title}
          className="project-image"
          style={
            title === "Game of Amazons AI"
              ? { objectPosition: "center 35.5%" }
              : title === "TA Allocation & Management System"
              ? { objectPosition: "center -0%" }
              : title === "WebGL: Spherical Hit-Testing"
              ? { objectPosition: "center 65%" }
              : {}
          }
        />
      </div>

      <div className="project-content">
        <div className="project-title">{title}</div>
        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tags &&
            tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
