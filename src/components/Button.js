import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/itemTypes";

function Button(props) {
  const { buttonName } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    item: { name: buttonName },
    type: ItemTypes.type1,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        // alert(`You dropped ${item.name}`);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <button
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
      id={buttonName}
    >
      {buttonName ? buttonName : "untitled"}
    </button>
  );
}

export default Button;
