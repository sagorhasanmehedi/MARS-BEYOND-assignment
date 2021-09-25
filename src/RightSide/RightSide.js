import React from "react";
import "./RightSide.css";

const RightSide = (props) => {
  const { ButtonData } = props;
  const salarySum = ButtonData.reduce(
    (prev, curent) => prev + curent.salary,
    0
  );
  console.log(salarySum);
  return (
    <div className="rightside">
      <h3>Total addede: {ButtonData.length}</h3>
      <h4>Total cost: ${salarySum}</h4>
      {ButtonData.map((arr) => (
        <li>{arr.name}</li>
      ))}
    </div>
  );
};

export default RightSide;
