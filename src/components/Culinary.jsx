import React from "react";
import { FaUtensils } from "react-icons/fa";

function Culinary() {
  return (
    <section id="culinary" className="culinary">
      <div className="culinary-container">

        {/* culinary details */}
        <div className="culinary-content">

          <p className="culinary-subtitle">CULINARY EXCELLENCE</p>

          <h2>
            A Symphony <br />
            of <span>Flavours</span>
          </h2>

          <div className="culinary-line"></div>

          <p className="culinary-text">
            Our kitchens are stages where culinary artistry meets local soul.
            At Sea Resort Digha, savour the ocean’s bounty — fresh prawns,
            pomfret, and hilsa prepared in coastal Bengali traditions.
            At Hotel Grand Sea Gangtok, indulge in Sikkimese delicacies,
            Tibetan warmth, and sophisticated continental cuisine.
          </p>

          {/* cuisine tags */}
          <div className="culinary-tags">

            <div className="culinary-tags-row">
              <span>BENGALI</span>
              <span>SEAFOOD</span>
              <span>CONTINENTAL</span>
            </div>

            <div className="culinary-tags-row bottom">
              <span>PAN-ASIAN</span>
              <span>NORTH INDIAN</span>
              <span>SOUTH INDIAN</span>
            </div>

          </div>

        </div>

        {/* decorative icon wheel */}
        <div className="culinary-visual">

          <div className="circle-wrapper">

            <div className="circle-rotating"></div>

            <div className="center-icon">
              <FaUtensils style={{ color: "#c9a84c", fontSize: "32px" }} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Culinary;