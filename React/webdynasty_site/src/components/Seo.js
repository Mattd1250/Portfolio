import React from "react";

export default function Seo() {
  return (
    <div id="seo" className="seo parallax section">
      <div className="container">
        <h2 className="headingTitle">What is SEO?</h2>
        <div className="grid-2">
          <div className="video">
            <iframe
              height="100%"
              src="https://www.youtube.com/embed/R-XxAk8-OXY"
              title="What is SEO?"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="seoBlurb">
            <p>
              Search Engine Optimization (SEO) is the process of increasing the
              amount of free, high-quality traffic to a website. Search engines
              like Google or Bing, list the Organic Results based on the
              website’s SEO.
            </p>
            <p>
              Now it is true that the first 3-5 results are usually Ads. But, if
              you are anything like me and 90% of all searchers, you probably
              skip over the ads and go right to the Organic Results.
            </p>
            <p>
              Don’t get me wrong, Search Engine Marketing (SEM) works and works
              well. But, when it comes to most searches, most people are going
              Organic first.
            </p>
            <p>So how is your SEO looking?</p>
          </div>
        </div>
        <a href="#contact" className="centered">
          <button className="primaryBtn orangeBtn">Schedule a Call</button>
        </a>
      </div>
    </div>
  );
}
