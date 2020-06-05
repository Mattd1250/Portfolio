import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faUsers,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function Icons() {
  const icons = [
    {
      key: 1,
      icon: faHandshake,
      title: "BUSINESS DEVELOPMENT",
      blurb:
        "Your website will be your company's best business development manager",
    },
    {
      key: 2,
      icon: faUsers,
      title: "LEAD GENERATION",
      blurb:
        "More qualified Leads will visit your website for your company to close",
    },
    {
      key: 3,
      icon: faDollarSign,
      title: "INCREASE CLOSING RATE",
      blurb:
        "Increased sales from Leads that are actively looking for your services",
    },
  ];
  const icon = icons.map((i) => {
    return (
      <div className="iconBox">
        <FontAwesomeIcon className="topIcon" size="10x" icon={i.icon} />

        <h3>{i.title}</h3>
        <p>{i.blurb}</p>
      </div>
    );
  });

  return (
    <div key={icon.key} className="grid-3">
      {icon}
    </div>
  );
}
