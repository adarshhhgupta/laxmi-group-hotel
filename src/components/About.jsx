import React, { useEffect, useRef, useState } from "react";

import img1 from "../assets/sea1about.webp";
import img2 from "../assets/sea2about.webp";
import img3 from "../assets/gal1grandsea.webp";
import img4 from "../assets/grand2about.webp";
import img5 from "../assets/gang1about.webp";
import img6 from "../assets/gang2about.webp";

function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  const slides = [
    { top: img1, bottom: img2 },
    { top: img3, bottom: img4 },
    { top: img5, bottom: img6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === imageRef.current) {
            imageRef.current.classList.add("show");
          }
          if (entry.target === textRef.current) {
            textRef.current.classList.add("show");
          }
          if (entry.target === statsRef.current) {
            statsRef.current.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  // Synchronized Crossfade Image Slider Engine
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  return (
    <section className="about">
      <div className="about-container">
        {/* Image section */}
        <div ref={imageRef} className="about-image-stack fade-left">
          {/* Top Card Stack */}
          <div className="about__card-blue">
            {slides.map((slide, idx) => (
              <img
                key={`top-${idx}`}
                src={slide.top}
                alt="Luxury Hotel Exterior"
                className={`about-slide-img ${idx === currentIndex ? "active" : ""}`}
              />
            ))}
            <div className="card-overlay-shine"></div>
          </div>

          {/* Badge */}
          <div className="about__badge">
            <span className="about__badge-number">15+</span>
            <span className="about__badge-label">
              YEARS OF
              <br />
              HOSPITALITY
            </span>
          </div>

          {/* Bottom Card Stack */}
          <div className="about__card-gold">
            {slides.map((slide, idx) => (
              <img
                key={`bottom-${idx}`}
                src={slide.bottom}
                alt="Luxury Hotel Interior"
                className={`about-slide-img ${idx === currentIndex ? "active" : ""}`}
              />
            ))}
            <div className="card-overlay-shine"></div>
          </div>

          {/* Synced Slide Indicator Dots */}
          <div className="about-slide-controls">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`slide-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 8000);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text section */}
        <div ref={textRef} className="about-content fade-right">
          <p className="about-subtitle">ABOUT US</p>

          <h2>
            A Legacy of <span>Warmth</span>
            <br />
            & Coastal Splendour
          </h2>

          <p>
            Laxmi Group of Hotels was established in 2011 with a vision to create memorable hospitality experiences built on trust, comfort, and genuine care. Over the years, we have grown into a trusted hospitality brand, welcoming 100,000+ guests across our destinations.
          </p>

          <p>
            With hotels in Gangtok, North Sikkim, and Digha, we offer thoughtfully designed stays that combine warm hospitality, modern comforts, and the unique charm of each destination. Whether guests are seeking a peaceful mountain retreat or a relaxing seaside vacation, every stay is crafted to exceed expectations.
          </p>

          <p>
            At Laxmi Group of Hotels, we believe that true hospitality begins with earning our guests' trust. Every interaction is guided by our commitment to quality service, attention to detail, and creating experiences that inspire guests to return.
          </p>

          <p>
            As we continue to grow, our mission remains the same: to deliver exceptional hospitality, build lasting relationships, and create unforgettable memories for every guest who chooses Laxmi Group of Hotels.
          </p>

          <div ref={statsRef} className="about-stats fade-up">
            <div className="stat-box">
              <h3>4</h3>
              <p>Properties</p>
            </div>

            <div className="stat-box">
              <h3>200+</h3>
              <p>Rooms</p>
            </div>

            <div className="stat-box">
              <h3>100K+</h3>
              <p>Guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;