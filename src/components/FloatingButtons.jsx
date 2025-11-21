import React from "react";
import { FaArrowUp, FaWhatsapp, FaCog } from "react-icons/fa";
import "./FloatingButtons.css"; // IMPORTANTE

export default function FloatingButtons() {
  return (
    <div className="floating-container">
      <div style={{ position: "relative" }}>
        {/* <div className="whatsapp-bubble">¿Necesitas ayuda?</div> */}

        <a
          href="https://wa.me/573216131969?text=Buenas%20tardes%2C%20%C2%BFtienes%20alg%C3%BAn%20producto%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="floating-button whatsapp">
            <FaWhatsapp size={28} />
          </button>
        </a>
      </div>

      <button
        className="floating-button up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp size={26} />
      </button>
    </div>
  );
}
