import React from "react";
import Button from "./Button";

function Display(props) {
  const data = [
    { name: "InputType", type: "text" },
    { name: "InputType", type: "button" },
    { name: "InputType", type: "color" },
    { name: "InputType", type: "date" },
    { name: "InputType", type: "email" },
    { name: "InputType", type: "hidden" },
    { name: "InputType", type: "image" },
    { name: "InputType", type: "month" },
    { name: "InputType", type: "number" },
    { name: "InputType", type: "password" },
    { name: "InputType", type: "radio" },
    { name: "InputType", type: "reset" },
    { name: "InputType", type: "search" },
    { name: "InputType", type: "submit" },
    { name: "InputType", type: "tel" },
    { name: "InputType", type: "time" },
    { name: "InputType", type: "url" },
    { name: "InputType", type: "week" },
  ];
  return (
    <ul className="Display">
      {data.map((x, idx) => (
        <li key={idx}>
          <Button buttonName={x.name} type={x.type} key={idx} />
          <br />
        </li>
      ))}
    </ul>
  );
}

export default Display;
