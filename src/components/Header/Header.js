import React from "react";
import "./Header.css";

// header component
const Header = () => {
  return (
    <div className="header ">
      <h1>
        MARS <span id="headerSpan">&</span> BEYOND
      </h1>
      <h4>THE ROAD TO STUDY THE HUMAN BODY IN SPACE</h4>
      <h4>
        MISSIONS: STARLINK 3{" "}
        <span style={{ marginLeft: "20px" }}>
          TOTAL BUGET: $ <span style={{ fontWeight: "bolder" }}>2.9 </span>
          BILLION
        </span>
      </h4>
    </div>
  );
};

export default Header;
