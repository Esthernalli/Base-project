// src/components/DialogBox.js
import React from 'react';
import './DialogBox.css'; // Ensure you create this CSS file

const DialogBox = ({ title, children, onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <header className="dialog-header">
          <h2>{title}</h2>
          <button className="dialog-close" onClick={onClose}>X</button>
        </header>
        <div className="dialog-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
