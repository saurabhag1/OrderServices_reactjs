import React, { useEffect, useState } from "react";

const ServiceList = () => {
  const [storedOrders, setStoredOrders] = useState({});
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    // Retrieve detailed order data from local storage
    const storedData = localStorage.getItem("submittedData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setStoredOrders(parsedData);
    }
  }, [updateTrigger]); // Include updateTrigger in the dependency array

  const handleUpdate = () => {
    // Trigger an update by changing the value of updateTrigger
    setUpdateTrigger((prev) => !prev);
  };

  return (
    <div>
      <h2>Ordered Services List</h2>
      {Object.keys(storedOrders).length > 0 ? (
        <ul>
          {Object.keys(storedOrders).map((key, index) => (
            <li key={index}>
              {/* Render each property of the detailed order */}
              <strong>{key}:</strong> {storedOrders[key]}
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No ordered services available.</p>
      )}

      <button onClick={handleUpdate}>Update List</button>
    </div>
  );
};

export default ServiceList;
