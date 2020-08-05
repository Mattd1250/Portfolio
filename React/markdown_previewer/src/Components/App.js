import React, { Component } from "react";
import "../Styles/App.css";
import Editor from "./Editor";
import Preview from "./Preview";

const marked = require("marked");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: "",
    };
  }

  componentDidMount() {
    const startingText = `# **_Hello_ world!**

## Welcome to my **Markdown Previewer**

Feel free to write some \`code\` if you need too.`;

    this.setState({
      preview: startingText,
    });
  }

  handleChange = (e) => {
    const text = e.target.value;
    console.log(e);
    this.setState({
      preview: text,
    });
  };

  render() {
    return (
      <div>
        <h1>React Markdown Preview</h1>
        <div className="app">
          <Editor text={this.state.preview} handleChange={this.handleChange} />
          <Preview preview={marked(this.state.preview)} />
        </div>
      </div>
    );
  }
}
