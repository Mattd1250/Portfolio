import React from "react";
import headshot from "../images/matt_dipaolo.jpeg";

export default function Focus() {
  return (
    <div id="focus" className="focus section">
      <div className="container">
        <h2 className="headingTitle">WebDynasty's Focus</h2>
        <div className="grid-2">
          <img src={headshot} alt="Matt DiPaolo" />
          <div className="focusBlurb">
            <p>
              Hi, I am Matthew DiPaolo, owner of Web-Dynasty, and I help
              businesses with improving SEO to increase their web visibility and
              lead generation in their local service area.
            </p>
            <p>
              There are three main types of SEO strategies, Local, National, and
              Global, my main focus is Local SEO. The types of companies I work
              with are businesses that provide a service to their local area.
              These businesses can have a single location or multiple locations
              throughout the country.
            </p>
            <p>
              If you want to increase your visibility, generate more quality
              leads, and take your business to the next level, schedule your
              free SEO audit today.
            </p>
          </div>
        </div>
      </div>
      <a href="#contact" class="centered">
        <button className="primaryBtn redBtn">Free Consultation</button>
      </a>
    </div>
  );
}
