import React from "react";
import logo from "../images/webdynasty.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Web dynasty Logo" />
      <Navbar hidden="" listType="inline" />
      {/* <ul className="navbar">
        <li>Features</li>
        <li>What is SEO</li>
        <li>Price</li>
        <li>Contact</li>*/}
    </div>
  );
}
