import React from "react";
import PriceDescription from "./PriceDescription";

export default function PriceBoxes() {
  const priceHeadings = [
    {
      title: "Basic",
      price: "$500/month",
      class: "basic",
      display: "notBestDeal",
    },
    {
      title: "Standard",
      price: "$1050/month",
      class: "standard",
      display: "bestDeal",
    },
    {
      title: "Advanced",
      price: "$2100/month",
      class: "advanced",
      display: "notBestDeal",
    },
  ];

  const priceHeading = priceHeadings.map((heading, i) => {
    return (
      <div className="priceBox">
        <span className={heading.display}></span>
        <h3>{heading.title}</h3>
        <h4>{heading.price}</h4>
        <PriceDescription index={i} />
      </div>
    );
  });

  return <div className="grid-3">{priceHeading}</div>;
}
