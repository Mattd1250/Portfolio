import React, { Component } from "react";
import Quote from "./Quote";
import "../Styles/App.css";
import TwitterButton from "./TwitterButton";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: Math.floor(Math.random() * this.props.quotes.length),
    };
  }

  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * this.props.quotes.length);
    this.setState({
      num: randomNumber,
    });
  };

  render() {
    const quote = {
      text: this.props.quotes[this.state.num].quote,
      author: this.props.quotes[this.state.num].author,
    };
    return (
      <div id="quote-box">
        <Quote {...quote} />
        <div className="buttons">
          <button id="new-quote" onClick={this.handleClick}>
            New Quote
          </button>
          <TwitterButton {...quote} />
        </div>
      </div>
    );
  }
}

export default QuoteBox;
