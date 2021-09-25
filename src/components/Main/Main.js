import React, { useEffect, useState } from "react";

import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../../RightSide/RightSide";
import "./Main.css";
const Main = () => {
  const [data, setdata] = useState([]);
  const [clickData, setclickData] = useState([]);
  useEffect(() => {
    fetch("Astronaut.json")
      .then((res) => res.json())
      .then((data) => setdata(data[0]));
  }, []);

  // onclick function
  const buttonClick = (info) => {
    const dstor = [...clickData, info];
    setclickData(dstor);
  };
  return (
    <div className="mainsection">
      <div className="row ">
        {data.map((Edata) => (
          <LeftSide
            alldata={Edata}
            key={Edata.name}
            buttonClick={buttonClick}
          />
        ))}
      </div>

      <div className="mt-2 rightSide">
        <RightSide ButtonData={clickData} />
      </div>
    </div>
  );
};

export default Main;
