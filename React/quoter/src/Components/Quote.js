import React from "react";
import "../Styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Quote(props) {
  return (
    <div>
      <div className="inline">
        <FontAwesomeIcon className="quoteMark" size="2x" icon={faQuoteLeft} />
        <h2 id="text">{props.text}</h2>
      </div>
      <p id="author">- {props.author}</p>
    </div>
  );
}
