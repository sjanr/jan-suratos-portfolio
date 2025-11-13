import { useState } from "react";
import { projectDetails } from "../../data/projectDetails";
import Modal from "./Modal";
import "./ProjectCard.css";
import "./ModalImages.css";

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
          <div className="project-modal-header">
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <h2 className="modal-title">{detail?.title || title}</h2>
          </div>

          {detail?.sections ? (
            <div className="modal-content">
              {detail.sections.map((section, index) => (
                <div className="modal-section" key={index}>
                  {section.heading && <h3>{section.heading}</h3>}
                  {section.body && (
                    <p dangerouslySetInnerHTML={{ __html: section.body }} />
                  )}
                  {section.images &&
                  section.images.map((img, i) => (
                    <img
                      key={i}
                      src={typeof img === "string" ? img : img.src}
                      alt={section.heading || title}
                      className={`modal-image ${section.className || ""}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p>Details coming soon!</p>
          )}
        </Modal>

      )}
    </>
  );
}

export default ProjectCard;
