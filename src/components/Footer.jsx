import React from "react";
import logo from "../assets/laxmilogo.webp"; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
       <div className="footer-left">
  <img src={logo} alt="Laxmi Logo" className="footer-logo" />

  <p className="footer-desc">
    Where every shoreline tells a story and every mountain holds a secret.
    Experience India’s most captivating destinations through the warmth of Laxmi hospitality.
  </p>

  <div className="social-icons">

  <a
    href="https://www.facebook.com/share/1D5wDpUGs8/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    f
  </a>

  <a
    href="https://www.linkedin.com/in/tanishq-jaiswal-361024387?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    li
  </a>

  <a
    href="https://www.instagram.com/laxmigroupof_hotels?igsh=cG44czduNXN5Nm9w"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    ig
  </a>

  <a
    href="https://youtube.com/@laxmigroupofhotels-q9e?si=r00sELctvaG2tYdt"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    YT
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