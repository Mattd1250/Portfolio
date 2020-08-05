import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Quote() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((json) => {
        const randomNumber = Math.floor(Math.random() * json.quotes.length);
        setQuotes(json.quotes[randomNumber].quote);
        setAuthor(json.quotes[randomNumber].author);
      });
  }, []);

  return (
    <div>
      <div className="inline">
        <FontAwesomeIcon className="quoteMark" size="2x" icon={faQuoteLeft} />
        <div id="text">{quotes}</div>
      </div>
      <p id="author">- {author}</p>
    </div>
  );
}
export default Quote;
