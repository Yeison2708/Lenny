import React from "react";
import logo from "../assets/logos.png";

export default function Navbar() {
  return (
    <nav className="nav">

      <div className="brand">
        <img src={logo} alt="logo" className="brand-logo" />
      </div>

      <div className="title-box">
        <h1 className="title-main">Confección y Creaciones</h1>
        <h1 className="title-lenny">Lenny</h1>
      </div>

    </nav>
  );
}
