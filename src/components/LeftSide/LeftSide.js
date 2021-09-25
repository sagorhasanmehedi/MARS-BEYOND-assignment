import React from "react";
import "./LeftSide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";

const LeftSide = (props) => {
  const element = (
    <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faSpaceShuttle} />
  );

  const { name, img, age, Occupation, Nationality, salary } = props.alldata;
  console.log(img);
  return (
    <div class="card  col-md-4 m-2 shadow-sm " style={{ maxWidth: "500px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={img} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body ms-2">
            <h5 class="card-title">{name}</h5>
            <h6>Occupation: {Occupation}</h6>
            <h6>age: {age}</h6>
            <h6>Nationality: {Nationality}</h6>
            <p class="card-text">
              <small class="text-muted">salary: {salary}</small>
            </p>
            <button
              onClick={() => props.buttonClick(props.alldata)}
              className="button"
            >
              {element} Add to curt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
