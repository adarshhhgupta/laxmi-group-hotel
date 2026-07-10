import React, { useState } from "react";
import logo from "../assets/laxmilogo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#hero"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Laxmi Group Logo" />
        </a>

        {/* HAMBURGER MENU */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#hero" onClick={() => setMenuOpen(false)}>
            HOME
          </a>

          <a href="#experiences" onClick={() => setMenuOpen(false)}>
            EXPERIENCE
          </a>

          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            GALLERY
          </a>

          <a href="#culinary" onClick={() => setMenuOpen(false)}>
            CULINARY
          </a>

          <a href="#feedback" onClick={() => setMenuOpen(false)}>
            FEEDBACKS
          </a>

          <a href="#offers" onClick={() => setMenuOpen(false)}>
            HOTELS
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>

        </nav>

        {/* WHATSAPP BOOK BUTTON */}
        <div className="nav-btn">
          <a
  href="https://wa.me/918910878588"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>BOOK A STAY</button>
</a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;