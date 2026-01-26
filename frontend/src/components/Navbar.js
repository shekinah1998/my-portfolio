import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Me</Link>
        </div>
        <button className="contact-btn" onClick={() => setShowModal(true)}>
          Contact Me
        </button>
      </nav>

      {/* CONTACT MODAL (POPUP) */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>Get in Touch</h2>
            <p style={{ marginTop: '20px' }}>
              <strong>Email:</strong> sardonyxyadala@outlook.com
            </p>
            <p style={{ marginTop: '10px', marginBottom: '20px' }}>
              <strong>Phone:</strong> +1 (315)6013263
            </p>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;