import React from "react";

export default function Preview(props) {
  return (
    <div id="preview">
      <h2 className="sectionTitle">This is the Preview Block</h2>
      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: props.preview }}
      ></div>
    </div>
  );
}
