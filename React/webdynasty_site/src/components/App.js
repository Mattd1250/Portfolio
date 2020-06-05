import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Features from "./Features";
import Focus from "./Focus";
import Seo from "./Seo";
import PricingPlans from "./PricingPlans";
import Contact from "./Contact";
import Hero from "./Hero";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Focus />
      <Seo />
      <PricingPlans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
