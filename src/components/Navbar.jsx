import React from "react";
import logo from "../assets/logos.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="brand">
        <img src={logo} alt="logo" className="brand-logo" />
        <h1>Confección y Creacíones Lenny</h1>
      </div>
    </nav>
  );
}
