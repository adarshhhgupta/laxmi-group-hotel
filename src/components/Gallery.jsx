import React from "react";

import sea1 from "../assets/sea1about.webp";
import sea2 from "../assets/searesortpool1.webp";
import sea3 from "../assets/searesortban1.webp";
import sea4 from "../assets/searesortgal1.webp";

import grand1 from "../assets/gal1grandsea.webp";
import grand2 from "../assets/grandsealobby.jpg";
import grand3 from "../assets/gal8grandsea.webp";
import grand4 from "../assets/grand2about.webp";

import gang1 from "../assets/gang1about.webp";
import gang2 from "../assets/gang2about.webp";
import gang3 from "../assets/lachung.webp";
import gang4 from "../assets/lachungcover.webp";

function Gallery() {
  const galleryImages = [
    {
      image: sea1,
      title: "Sea Resort",
      location: "Digha, West Bengal",
    },
    {
      image: sea2,
      title: "Sea Resort",
      location: "Digha, West Bengal",
    },
    {
      image: sea3,
      title: "Sea Resort",
      location: "Digha, West Bengal",
    },
    {
      image: sea4,
      title: "Sea Resort",
      location: "Digha, West Bengal",
    },

    {
      image: grand1,
      title: "Hotel Grand Sea",
      location: "Digha, West Bengal",
    },
    {
      image: grand2,
      title: "Hotel Grand Sea",
      location: "Digha, West Bengal",
    },
    {
      image: grand3,
      title: "Hotel Grand Sea",
      location: "Digha, West Bengal",
    },
    {
      image: grand4,
      title: "Hotel Grand Sea",
      location: "Digha, West Bengal",
    },

    {
      image: gang1,
      title: "Hotel Utpala",
      location: "Gangtok, Sikkim",
    },
    {
      image: gang2,
      title: "Hotel Utpala",
      location: "Gangtok, Sikkim",
    },
    {
      image: gang3,
      title: "Hotel Utpala",
      location: "Gangtok, Sikkim",
    },
    {
      image: gang4,
      title: "Hotel Utpala",
      location: "Lachung, North Sikkim",
    },
  ];

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-container">

        <p className="gallery-subtitle">
          VISUAL STORIES
        </p>

        <h2 className="gallery-title">
          Discover Our <span>World</span>
        </h2>

        <p className="gallery-description">
          From serene beaches to breathtaking Himalayan landscapes,
          every photograph captures the timeless elegance of
          Laxmi Group of Hotels.
        </p>

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <div
              className="gallery-card"
              key={index}
            >

              <div
                className="gallery-image"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>

              <div className="gallery-content">

                <h3>{item.title}</h3>

                <p>{item.location}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;