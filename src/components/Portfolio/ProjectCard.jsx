import { useState } from "react";
import { projectDetails } from "../../data/projectDetails";
import Modal from "./Modal";
import "./ProjectCard.css";

function ProjectCard({ id, title, description, image, tags }) {
  const [isOpen, setIsOpen] = useState(false);
  const detail = projectDetails[id];

  return (
    <>
      {/* CARD */}
      <div className="project-card" onClick={() => setIsOpen(true)}>
        <div className="project-image-wrapper">
          <img
            src={image}
            alt={title}
            className="project-image"
            style={
              title === "WebGL: Spherical Hit-Testing"
                ? { objectPosition: "center 65%", transform: "scale(1.02)" }
                : {}
            }
          />
        </div>

        <div className="project-content">
          <div className="project-title">{title}</div>
          <p className="project-description">{description}</p>
          <div className="project-tags">
            {tags?.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <button className="modal-close" onClick={() => setIsOpen(false)}>×</button>
          <h2 className="modal-title">{detail?.title || title}</h2>
          <div
            className="modal-content"
            dangerouslySetInnerHTML={{
              __html:
                detail?.content ||
                "<p>Details coming soon!</p>",
            }}
          />
        </Modal>
      )}
    </>
  );
}

export default ProjectCard;
