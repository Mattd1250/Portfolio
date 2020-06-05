import React from "react";

const PriceDescription = (props) => {
  const priceBreakdown = [
    {
      key: 1,
      desc: "Build and Validate Keyword list of new trending keywords",
      offered: ["offered", "offered", "offered"],
    },
    {
      key: 2,
      desc:
        "Create new Keyword optimized Blog / Optimize current Blogs on site",
      offered: ["offered", "offered", "offered"],
    },
    {
      key: 3,
      desc: "Create New Page / Optimize top performing pages on site",
      offered: ["offered", "offered", "offered"],
    },
    {
      key: 4,
      desc: "Conversion Optimization",
      offered: ["notOffered", "offered", "offered"],
    },
    {
      key: 5,
      desc: "Internal Link Building",
      offered: ["notOffered", "notOffered", "offered"],
    },
    {
      key: 6,
      desc: "A/B Testing",
      offered: ["notOffered", "notOffered", "offered"],
    },
    {
      key: 7,
      desc: "Technical SEO",
      offered: ["notOffered", "offered", "offered"],
    },
    {
      key: 8,
      desc: "GMB and other Citation Optimization",
      offered: ["notOffered", "offered", "offered"],
    },
    {
      key: 9,
      desc: "Search for Backlink Opportunities and contact sites",
      offered: ["notOffered", "notOffered", "offered"],
    },
    {
      key: 10,
      desc: "Review Building",
      offered: ["notOffered", "notOffered", "offered"],
    },
    {
      key: 11,
      desc: "Monthly Strategy Call",
      offered: ["offered", "offered", "offered"],
    },
    {
      key: 12,
      desc: "Monthly Report",
      offered: ["offered", "offered", "offered"],
    },
  ];

  const descriptions = priceBreakdown.map((desc) => {
    return (
      <li key={desc.key} className={desc.offered[props.index]}>
        {desc.desc}
      </li>
    );
  });

  return (
    <div>
      <ul>{descriptions}</ul>
    </div>
  );
};

export default PriceDescription;
