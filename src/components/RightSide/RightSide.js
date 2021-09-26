import React from "react";
import "./RightSide.css";

const RightSide = (props) => {
  // destructor and reduse
  const { ButtonData } = props;
  const salarySum = ButtonData.reduce(
    (prev, curent) => prev + curent.salary,
    0
  );
  return (
    <div className="rightside">
      <h3>Total addede: {ButtonData.length}</h3>
      <h5>Total cost: ${salarySum}</h5>
      {ButtonData.map((arr) => (
        <li key={arr.name}>{arr.name}</li>
      ))}
    </div>
  );
};

export default RightSide;
