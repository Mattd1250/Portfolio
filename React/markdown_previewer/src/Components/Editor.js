import React from "react";

const Editor = (props) => {
  return (
    <div className="editor">
      <h2 className="sectionTitle">This is the Editor Block</h2>
      <textarea
        name="editor"
        id="editor"
        cols="auto"
        rows="10"
        value={props.text}
        onChange={props.handleChange}
      ></textarea>
    </div>
  );
};

export default Editor;
