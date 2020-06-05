import React from "react";

export default function Navbar(props) {
  return (
    <ul className={props.listType}>
      <a href="#features">
        <li>Features</li>
      </a>
      <a href="#seo">
        <li>What is SEO</li>
      </a>
      <a href="#pricingPlans">
        <li>Price</li>
      </a>
      <a href="#focus">
        <li>Our Focus</li>
      </a>
      <a href="#contact" className={props.hidden}>
        <button className="primaryBtn redBtn">Free Consultation</button>
      </a>
    </ul>
  );
}
