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

  const topImages = [
    img1,
    img3,
    img5
  ];

  const bottomImages = [
    img2,
    img4,
    img6
  ];

  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  /* Scroll Animation */

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
      {
        threshold: 0.2,
      }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  /* Top Slider */

  useEffect(() => {

    const interval = setInterval(() => {

      setTopIndex((prev) => (prev + 1) % topImages.length);

    }, 8000);

    return () => clearInterval(interval);

  }, []);

  /* Bottom Slider */

  useEffect(() => {

    const interval = setInterval(() => {

      setBottomIndex((prev) => (prev + 1) % bottomImages.length);

    }, 9000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="about">

      <div className="about-container">

        {/* IMAGE SECTION */}

        <div
          ref={imageRef}
          className="about-image-stack fade-left"
        >

          {/* TOP CARD */}

          <div className="about__card-blue">

            <img
              key={topIndex}
              src={topImages[topIndex]}
              alt="Luxury Hotel"
              className="about-slide"
            />

          </div>

          {/* BADGE */}

          <div className="about__badge">

            <span className="about__badge-number">
              15+
            </span>

            <span className="about__badge-label">
              YEARS OF
              <br />
              HOSPITALITY
            </span>

          </div>

          {/* BOTTOM CARD */}

          <div className="about__card-gold">

            <img
              key={bottomIndex}
              src={bottomImages[bottomIndex]}
              alt="Luxury Hotel"
              className="about-slide"
            />

          </div>

        </div>

        {/* TEXT */}

        <div
          ref={textRef}
          className="about-content fade-right"
        >

          <p className="about-subtitle">
            OUR STORY
          </p>

          <h2>
            A Legacy of <span>Warmth</span>
            <br />
            & Coastal Splendour
          </h2>

          <p>
            Laxmi Hotels brings you the finest hospitality experience from beaches to mountains. Every stay is designed to give comfort, elegance and unforgettable memories.
          </p>

          <div
            ref={statsRef}
            className="about-stats fade-up"
          >

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