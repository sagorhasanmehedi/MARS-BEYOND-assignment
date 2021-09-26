import React, { useEffect, useState } from "react";
import { setlocal } from "../../utilites/Utilites";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import "./Main.css";
const Main = () => {
  // state for api
  const [data, setdata] = useState([]);
  // state for button onclick
  const [clickData, setclickData] = useState([]);
  // console.log(clickData);
  useEffect(() => {
    fetch("Astronaut.json")
      .then((res) => res.json())
      .then((data) => setdata(data[0]));
  }, []);

  // onclick function -> button
  const buttonClick = (info) => {
    const dstor = [...clickData, info];
    setclickData(dstor);

    // set localStorage
    setlocal(info);
  };
  return (
    <div className="mainsection">
      {/* left side */}
      <div className="row ">
        {data.map((Edata) => (
          <LeftSide
            alldata={Edata}
            key={Edata.name}
            buttonClick={buttonClick}
          />
        ))}
      </div>
      {/* right side */}
      <div className="mt-3 rightSide">
        <RightSide ButtonData={clickData} />
      </div>
    </div>
  );
};

export default Main;
