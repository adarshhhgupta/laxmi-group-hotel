import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/searesortpool1.webp";
import mountain from "../assets/gal9grandsea.webp";
import photo from "../assets/gang1about.webp";
import lachung from "../assets/lachungcover.webp";

function Properties() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const gridEl = el.querySelector(".properties-grid");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          if (gridEl) gridEl.classList.add("show");
          else el.classList.add("show");
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px 0px 0px" }
    );

    observer.observe(el);

    // Instant check if section is already in or near viewport
    if (el.getBoundingClientRect().top < window.innerHeight + 100) {
      if (gridEl) gridEl.classList.add("show");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" className="properties" ref={sectionRef}>
      <div className="properties-container">

        {/* HEADER */}

        <div className="properties-header">

          <div className="properties-left">
            <p className="subtitle">OUR PROPERTIES</p>

            <h2>
              Four Icons,
              <br />
              <span>Endless Memories</span>
            </h2>
          </div>

          <div className="properties-right-text">
            Each property is a world unto itself — distinct, immersive and unforgettable.
          </div>

        </div>

        {/* GRID */}

        <div className="properties-grid" ref={sectionRef}>

          {/* CARD 1 */}

          <Link to="/sea-resort" className="property-card-link">

            <div className="property-card">

              <img
  className="property-image"
  src={img1}
  alt="Sea Resort Digha"
  loading="lazy"
  decoding="async"
/>

              <div className="property-info">

                <p className="property-label">
                  LUXURY DESTINATION
                </p>

                <p className="location">
                  • DIGHA, WEST BENGAL
                </p>

                <h3>
                  Sea Resort
                  <br />
                  Digha
                </h3>

                <div className="property-divider"></div>

                <p className="features">
                  BEACH • POOL • SEA VIEW • SEAFOOD
                </p>

                <span className="explore-link">
                  EXPLORE PROPERTY →
                </span>

              </div>

            </div>

          </Link>

          {/* CARD 2 */}

          <Link to="/hotel-grand-sea" className="property-card-link">

            <div className="property-card">

              <img
  className="property-image"
  src={mountain}
  alt="Hotel Grand Sea Digha"
  loading="lazy"
  decoding="async"
/>

              <div className="property-info">

                <p className="property-label">
                  LUXURY DESTINATION
                </p>

                <p className="location">
                  • DIGHA, WEST BENGAL
                </p>

                <h3>
                  Hotel Grand Sea
                  <br />
                  Digha
                </h3>

                <div className="property-divider"></div>

                <p className="features">
                  SEA VIEW • SPA • DINING • POOL
                </p>

                <span className="explore-link">
                  EXPLORE PROPERTY →
                </span>

              </div>

            </div>

          </Link>

          {/* CARD 3 */}

          <Link to="/hotel-utpala" className="property-card-link">

            <div className="property-card">

              <img
  className="property-image"
  src={photo}
  alt="Hotel Utpala Gangtok"
  loading="lazy"
  decoding="async"
/>

              <div className="property-info">

                <p className="property-label">
                  LUXURY DESTINATION
                </p>

                <p className="location">
                  • GANGTOK, SIKKIM
                </p>

                <h3>
                  Hotel Utpala
                  <br />
                  Gangtok
                </h3>

                <div className="property-divider"></div>

                <p className="features">
                  MOUNTAIN VIEW • SPA • DINING • TREKKING
                </p>

                <span className="explore-link">
                  EXPLORE PROPERTY →
                </span>

              </div>

            </div>

          </Link>

          {/* CARD 4 */}

          <Link to="/hotel-utpala-lachung" className="property-card-link">

            <div className="property-card">

              <img
  className="property-image"
  src={lachung}
  alt="Hotel Utpala Lachung"
  loading="lazy"
  decoding="async"
/>

              <div className="property-info">

                <p className="property-label">
                  LUXURY DESTINATION
                </p>

                <p className="location">
                  • LACHUNG, NORTH SIKKIM
                </p>

                <h3>
                  Hotel Utpala
                  <br />
                  Lachung
                </h3>

                <div className="property-divider"></div>

                <p className="features">
                  SNOW VIEW • BONFIRE • RESTAURANT • NATURE
                </p>

                <span className="explore-link">
                  EXPLORE PROPERTY →
                </span>

              </div>

            </div>

          </Link>

        </div>

      </div>
    </section>
  );
}

export default Properties;