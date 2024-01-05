import React, { useState } from "react";
import "../App.css";
import Detailedorder from "./Detailedorder";
import ServiceList from "./ServiceeList";

const Order = () => {
  const handleClick = () => {
    setDisplay(true);
  };
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <div className="order_container">
        <ServiceList />

        <button className="order_button" onClick={handleClick}>
          + Add Ordering Services
        </button>
        {display && <Detailedorder />}
      </div>
    </div>
  );
};

export default Order;
