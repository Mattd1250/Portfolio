import React from "react";
import PriceBoxes from "./PriceBoxes";

export default function PricingPlans() {
  return (
    <div id="pricingPlans" className="pricingPlans">
      <h2 className="headingTitle">Pricing Plans</h2>
      <div className="container">
        <PriceBoxes />
        <a href="#contact" className="centered">
          <button className="primaryBtn redBtn">Schedule a Call</button>
        </a>
      </div>
    </div>
  );
}
