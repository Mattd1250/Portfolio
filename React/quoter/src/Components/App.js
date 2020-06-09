import React, { Component } from "react";
import "../Styles/App.css";
import QuoteBox from "./QuoteBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: "This is the First Quote",
          author: "First Person",
        },
        {
          quote: "This is a Quote",
          author: "Isaid This",
        },
        {
          quote: "This is a Different Quote",
          author: "Yousaid This",
        },
        {
          quote: "This is Quote number 3",
          author: "Hesaid This",
        },
        {
          quote: "This is Quote number 4",
          author: "Shesaid This",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <QuoteBox quotes={this.state.quotes} />
      </div>
    );
  }
}
export default App;
