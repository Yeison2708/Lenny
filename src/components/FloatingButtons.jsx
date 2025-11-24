import React from "react";
import { FaArrowUp, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./FloatingButtons.css";

export default function FloatingButtons() {
  return (
    <div className="floating-container">
      

      {/* WhatsApp */}
      <a
        href="https://wa.me/573216131969?text=Buenas%2C%20%C2%BFtienes%20alg%C3%BAn%20producto%3F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="floating-button whatsapp">
          <FaWhatsapp size={28} />
        </button>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/creacioneslenny?igsh=bXk2c3h3NThhZ2t0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="floating-button instagram">
          <FaInstagram size={26} />
        </button>
      </a>

      {/* Flecha hacia arriba */}
      <button
        className="floating-button up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp size={26} />
      </button>
    </div>
  );
}
