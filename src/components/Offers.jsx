import React from "react";
import img1 from "../assets/royalfamilygrandsea.webp";
import img2 from "../assets/SUITE ROOM.webp";
import img3 from "../assets/room1utpala.webp";


function Offers() {
  return (
    <section id="offers" className="offers">
      <div className="offers-container">

        {/* HEADER */}
        <p className="offers-subtitle">ROOMS CATEGORIES</p>

        <h2 className="offers-title">
          Curated <span>Escapes</span> <br />
          at Exceptional Value
        </h2>

        {/* GRID */}
        <div className="offers-grid">

          {/* CARD 1 */}
          <div className="offer-card">
            <div
              className="offer-img"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="offer-overlay">
                <span className="offer-tag">ROYAL FAMILY SUITE</span>

                <h3>HOTEL GRAND SEA, NEW DIGHA</h3>

                
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="offer-card">
            <div
              className="offer-img"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="offer-overlay">
                <span className="offer-tag">SUITE ROOM</span>

                <h3>SEA RESORT, NEW DIGHA</h3>

                
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="offer-card">
            <div
              className="offer-img"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="offer-overlay">
                <span className="offer-tag">SUPER DELUXE VALLEY VIEW</span>

                <h3>HOTEL UTPALA, GANGTOK</h3>

                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Offers;