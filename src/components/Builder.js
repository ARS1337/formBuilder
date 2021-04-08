import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/itemTypes";
import InputType from "./InputType";
import Label from "./Label";

function Builder(props) {
  const [items, setItems] = useState([]);
  let arr = [];
  let count = 1;
  let temp;
  const [{ itemName }, drop] = useDrop(() => {
    return {
      accept: ItemTypes.type1,
      drop: (item, monitor) => {
        count++;
        arr.push({ name: item.name, id: count });
        return item;
      },
      collect: (monitor) => {
        return {
          itemName: monitor.getDropResult()
            ? monitor.getDropResult()
            : setItems(arr),
        };
      },
    };
  });
  return (
    <>
      <div className="Builder" ref={drop}>
        {items.map((x, idx) => {
          if (x.name == "InputType") {
            return (
              <>
                <InputType />
                <br />
              </>
            );
          }
          if (x.name == "Label") {
            return (
              <>
                <Label id={x.id}>{x.name}</Label>
                <br />
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Builder;
