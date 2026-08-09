import React, { useState, useEffect } from "react";
import logo from "../assets/laxmilogo.webp";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* EXTREME LEFT: SIMPLE LOGO + ENHANCED BRAND TEXT */}
        <a
          href="#hero"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Laxmi Group Logo" className="logo-img-simple" />
          <div className="logo-text">
            <span className="logo-brand">LAXMI GROUP</span>
            <span className="logo-sub">OF HOTELS</span>
          </div>
        </a>

        {/* HAMBURGER MENU */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

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

        {/* EXTREME RIGHT: WHATSAPP BOOK BUTTON */}
        <div className="nav-btn">
          <a
            href="https://wa.me/918910878588"
            target="_blank"
            rel="noopener noreferrer"
            className="book-stay-btn"
          >
            <FaWhatsapp className="book-btn-icon" />
            <span>BOOK A STAY</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;