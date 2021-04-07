import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/itemTypes";

function Builder(props) {
  const [items, setItems] = useState([]);

  const [{ itemName }, drop] = useDrop(() => {
    return {
      accept: ItemTypes.type1,
      drop: (item, monitor) => {
        let temp = [...items, item];
        setItems(temp);
        console.log(item);
        console.log(items);
      },
      collect: (monitor) => {
        return {};
      },
    };
  });
  return (
    <>
      <div className="Builder" ref={drop}></div>
    </>
  );
}

export default Builder;
