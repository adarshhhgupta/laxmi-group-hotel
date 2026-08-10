import React, { useEffect, useState } from "react";
import img1 from "../assets/sea1about.webp";
import img2 from "../assets/searesortpool2.webp";
import img3 from "../assets/gal1grandsea.webp";
import img4 from "../assets/grandseainterior.webp";
import img5 from "../assets/gal9grandsea.webp";
import img6 from "../assets/gal8grandsea.webp";
import { FaArrowRight } from "react-icons/fa";
import BookingBar from "./BookingBar";

function Hero() {
  const [slide, setSlide] = useState(0);

  const slides = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="hero">
      {/* Hidden high-priority image hint for browser LCP preloader */}
      <img
        src={img1}
        alt=""
        fetchPriority="high"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      {/* SLIDES */}
      <div className="hero-slides">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`slide ${slide === i ? "active" : ""}`}
            style={{
              backgroundImage: `url(${s})`,
            }}
          ></div>
        ))}
      </div>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CENTER CONTENT */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <p className="hero-pretitle">LAXMI GROUP OF HOTEL</p>
        </div>

        <h1 className="hero-title">
          Where the Sea <br />
          Meets the <span>Sky</span>
        </h1>

        <p className="hero-subtitle">
          Digha · Gangtok | Two Destinations, One Soul
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <a href="#properties" className="btn-primary">
            <span>Explore Hotels</span>
            <FaArrowRight className="btn-icon" />
          </a>

          <a href="#offers" className="btn-outline">
            <span>Explore Rooms</span>
          </a>
        </div>

        {/* SLIDE INDICATORS */}
        <div className="hero-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`indicator-bar ${slide === i ? "active" : ""}`}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DOCKED / COLLAPSIBLE BOOKING BAR */}
      <BookingBar />
    </section>
  );
}

export default Hero;