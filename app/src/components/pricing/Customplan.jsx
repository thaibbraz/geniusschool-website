import React from "react";
import vector from "../../images/vector.png";

const Customplan = () => {
  return (
    <div className="customplan">
      <img src={vector} alt="vector-image" className="customplan-vector" />
      <div className="customplan-box">
        <div className="customplan-box-line"></div>
        <div className="customplan-box-title title">Custom</div>
      </div>
      <div className="customplan-box-text subheading">
        Looking for a custom plan?
      </div>
      <div>
        <a
          href="mailto:thiago@geniuschool.com?subject=Requesting%20a%20Custom%20Plan"
          className="customplan-box-text-request subheading"
        >
          REQUEST A QUOTE
        </a>
      </div>
    </div>
  );
};

export default Customplan;
