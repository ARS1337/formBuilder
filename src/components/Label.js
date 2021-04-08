import React from "react";
import { ItemTypes } from "../utils/itemTypes";
import { useDrag } from "react-dnd";

function Label(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.type1,
    item: {
      type: ItemTypes.type1,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <label
        id={props.id}
        for={props.for}
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: "bold",
          cursor: "move",
        }}
        value="dfs"
      >
        {props.children ? props.children : "untitled"}
      </label>
    </>
  );
}

export default Label;
