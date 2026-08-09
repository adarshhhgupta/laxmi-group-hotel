import React from "react";
import logo from "../assets/laxmilogo.webp";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
       <div className="footer-left">

  <p className="footer-description">
    Where every shoreline tells a story and every
    mountain holds a secret. Experience India’s most
    captivating destinations through the warmth of
    Laxmi hospitality.
  </p>

  <div className="social-links">

    <a
      href="https://www.facebook.com/share/1D5wDpUGs8/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.linkedin.com/in/tanishq-jaiswal-361024387"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://www.instagram.com/laxmigroupof_hotels"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="https://youtube.com/@laxmigroupofhotels-q9e"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
    >
      <FaYoutube />
    </a>

  </div>

</div>

        {/* OUR PROPERTIES */}
        <div className="footer-col">
          <h4>OUR PROPERTIES</h4>
          <ul>
            <li>Sea Resort, New Digha</li>
          <li>Hotel Grand Sea, New Digha</li>
            <li>Hotel Utpala, Gangtok</li>
            <li>Hotel Utpala, Lachung</li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <h4>EXPLORE</h4>
          <ul>
            <li>Rooms & Suites</li>
            <li>Dining</li>
            <li>Spa & Wellness</li>
            <li>Events & Weddings</li>
            <li>Offers & Packages</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div className="footer-col">
          <h4>INFORMATION</h4>
          <ul>
            <li>About Laxmi Group</li>
            <li>Awards & Recognition</li>
            <li>Careers</li>
            <li>Press & Media</li>
            <li>Partner Program</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 Laxmi Hotels & Group. All rights reserved.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;