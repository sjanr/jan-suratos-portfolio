import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./ProjectCard.css";

function Modal({ children, onClose }) {
  // Prevent scrolling behind the modal
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  return createPortal(
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body // 👈 attaches to the root of the document, not inside section
  );
}

export default Modal;
