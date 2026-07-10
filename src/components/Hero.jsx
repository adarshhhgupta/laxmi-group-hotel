import img1 from "../assets/sea1about.webp";
import img2 from "../assets/searesortpool2.webp";
import img3 from "../assets/gal1grandsea.webp";
import img4 from "../assets/grandseainterior.webp";
import img5 from "../assets/gal9grandsea.webp";
import img6 from "../assets/gal8grandsea.webp";
import { useEffect, useState } from "react";

function Hero() {
  const [slide, setSlide] = useState(0);

  const slides = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="hero">

      {/* SLIDES */}
      <div className="hero-slides">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`slide ${slide === i ? "active" : ""}`}
            style={{
              backgroundImage: `url(${s})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">

        <p className="hero-pretitle">
          LAXMI GROUP OF HOTEL
        </p>

        <h1 className="hero-title">
          Where the Sea <br />
          Meets the <span>Sky</span>
        </h1>

        <p className="hero-subtitle">
          Digha · Gangtok | Two Destinations, One Soul
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">

          {/* EXPLORE HOTELS */}
          <a href="#properties" className="btn-primary">
            Explore Hotels
          </a>

          {/* VIEW OFFERS */}
          <a href="#offers" className="btn-outline">
            Explore Rooms
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;