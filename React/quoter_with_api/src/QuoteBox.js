import React, { useState, useEffect } from "react";
import "./App.css";
import TwitterButton from "./TwitterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function QuoteBox() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [length, setLength] = useState(0);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quote.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setAllQuotes(json);
        setLength(json.quotes.length);
      })
      .then(() => handleClick(), []);
  });

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * length);
    setQuote(allQuotes.quote[randomNumber].quote);
    setAuthor(allQuotes.quote[randomNumber].author);
  }

  return (
    <>
      <div id="quote-box">
        <FontAwesomeIcon className="quoteMark" size="2x" icon={faQuoteLeft} />
        <div id="text">{quote}</div>
      </div>
      <p id="author">- {author}</p>
      <div className="buttons">
        <button id="new-quote" onClick={handleClick}>
          New Quote
        </button>
        <TwitterButton />
      </div>
    </>
  );
}

export default QuoteBox;
