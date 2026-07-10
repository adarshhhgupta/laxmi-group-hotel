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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" className="properties">
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

              <div
                className="property-image"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>

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

              <div
                className="property-image"
                style={{ backgroundImage: `url(${mountain})` }}
              ></div>

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

              <div
                className="property-image"
                style={{ backgroundImage: `url(${photo})` }}
              ></div>

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

              <div
                className="property-image"
                style={{ backgroundImage: `url(${lachung})` }}
              ></div>

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