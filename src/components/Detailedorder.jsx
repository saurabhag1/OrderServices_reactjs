import React, { useState } from "react";
import "./Detailedorder.css";

const Detailedorder = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    orderingNodes: "",
    channelName: "",
    domain: "",
    showAdvancedConfigurations: false,
    maxMessageCount: "",
    absoluteMaxBytes: "",
    preferredMaxBytes: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggleAdvancedConfigurations = () => {
    setFormData({
      ...formData,
      showAdvancedConfigurations: !formData.showAdvancedConfigurations,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      localStorage.setItem("submittedData", JSON.stringify(formData));
      console.log("Form submitted:", formData);
    }, 500);
    alert("submitted detailed..");
  };
  const storedOrders = localStorage.getItem("submittedData");
  console.log(storedOrders);
  return (
    <div>
      <h2>Create Order Service</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (unchanged part of the form) */}
        <div>
          <label htmlFor="organizationName">Organization Name:</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="orderingNodes">No. of Ordering Nodes:</label>
          <input
            type="number"
            id="orderingNodes"
            name="orderingNodes"
            value={formData.orderingNodes}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="channelName">Channel Name (optional):</label>
          <input
            type="text"
            id="channelName"
            name="channelName"
            value={formData.channelName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="domain">Domain:</label>
          <input
            type="text"
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="button" onClick={handleToggleAdvancedConfigurations}>
            {formData.showAdvancedConfigurations
              ? "Hide Advanced Configurations"
              : "Show Advanced Configurations"}
          </button>
        </div>
        <br></br>
        <br></br>

        {formData.showAdvancedConfigurations && (
          <div className="advanced">
            <h3>Advanced Configurations</h3>
            <div className="adv">
              <label htmlFor="maxMessageCount">Max Message Count:</label>
              <input
                type="number"
                id="maxMessageCount"
                name="maxMessageCount"
                value={formData.maxMessageCount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="adv">
              <label htmlFor="absoluteMaxBytes">Absolute Max Bytes:</label>
              <input
                type="number"
                id="absoluteMaxBytes"
                name="absoluteMaxBytes"
                value={formData.absoluteMaxBytes}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="preferredMaxBytes">Preferred Max Bytes:</label>
              <input
                type="number"
                id="preferredMaxBytes"
                name="preferredMaxBytes"
                value={formData.preferredMaxBytes}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        <div>
          <button className="btn" type="button">
            Cancel
          </button>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Detailedorder;
