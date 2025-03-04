import React, { useEffect } from "react";
import "./Modal.css"; // Modal-specific styles

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        {/* <button className="modal-close-btn" onClick={onClose}>&times;</button> */}
        <button className="modal-close-btn" onClick={onClose}>CLOSE</button>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
