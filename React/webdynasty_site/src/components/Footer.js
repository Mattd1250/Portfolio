import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <div className="footer">
      <div className="grid-2">
        {/* GET IN TOUCH */}
        <div className="footerContact">
          <h2>Get in Touch</h2>

          <a href="#contact">
            <h3>
              <FontAwesomeIcon size="1x" icon={faLink} />
              &nbsp;Schedule a Call
            </h3>
          </a>

          <a href="#contact">
            <h3>
              <FontAwesomeIcon size="1x" icon={faEnvelope} />
              &nbsp;Email Me
            </h3>
          </a>

          <a href="tel:5555555555">
            <h3>
              <FontAwesomeIcon size="1x" icon={faPhone} />
              &nbsp;(555)555-5555
            </h3>
          </a>
        </div>
        {/*FOOTER LINKS*/}
        <div className="footerLinks">
          <h2>Links</h2>
          <Navbar hidden="hidden" listType="stacked" />
        </div>
      </div>
      <p className="copyWritten">
        &copy; {new Date().getFullYear()} Web Dynasty. All Rights Reserved.
      </p>
    </div>
  );
}
