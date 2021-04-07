import React from "react";
import Button from "./Button";

function Display(props) {
  const data = ["single label", "gggg", "dfsdfdsf"];
  return (
    <div className="Display">
      {data.map((x, idx) => (
        <Button buttonName={x} key={idx} />
      ))}
    </div>
  );
}

export default Display;
