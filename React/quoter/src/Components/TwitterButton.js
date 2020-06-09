import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKiwiBird } from "@fortawesome/free-solid-svg-icons";

export default function TwitterButton(props) {
  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?text=${props.text}--${props.author}`}
        id="tweet-quote"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="twitter">
          <FontAwesomeIcon id="kiwi" size="1x" icon={faKiwiBird} />
        </button>
      </a>
    </div>
  );
}
