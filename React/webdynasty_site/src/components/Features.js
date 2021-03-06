import React from "react";
import Icons from "./Icons";

export default function Features() {
  return (
    <div id="features" className="features section">
      <div className="container">
        <h2 className="headingTitle">This is the Features Section</h2>
        <div>
          <Icons />
        </div>
        <a href="#contact" className="centered">
          <button className="primaryBtn blueBtn">Schedule a Call</button>
        </a>
      </div>
    </div>
  );
}
