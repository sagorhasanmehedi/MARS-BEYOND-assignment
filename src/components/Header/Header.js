import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header ">
      <h1>
        MARS <span id="headerSpan">&</span> BEYOND
      </h1>
      <h4>THE ROAD TO MAKING HUMANITY MULTIPLANETARY</h4>
      <h4>
        MISSIONS: MARS{" "}
        <span style={{ marginLeft: "20px" }}>TOTAL BUGET: $700 BILLION</span>
      </h4>
    </div>
  );
};

export default Header;
