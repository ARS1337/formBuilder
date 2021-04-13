import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/itemTypes";
import InputType from "./InputType";
import Label from "./Label";

function Builder(props) {
  const { items, setItems } = props;
  console.log("items", items);
  let arr = [];
  let count = 1;
  const [{ itemName }, drop] = useDrop(() => {
    return {
      accept: ItemTypes.type1,
      drop: (item) => {
        arr.push({ name: item.name, id: count, type: item.type });
        count++;
        setItems(arr);
        return arr;
      },
      collect: (monitor) => {
        return {
          itemName: monitor.getDropResult() ? monitor.getDropResult() : arr,
        };
      },
    };
  });

  return (
    <>
      <ul className="Builder" ref={drop} id="Builder">
        {items.map((x, idx) => {
          if (x.name === "InputType") {
            return (
              <li key={idx}>
                <InputType type={x.type} id={x.type + x.id} key={idx} />
                <br />
              </li>
            );
          }
          if (x.name === "Label") {
            return (
              <li key={idx}>
                <button>
                  <Label id={x.id}>{x.name}</Label>
                  <br />
                </button>
              </li>
            );
          }
          return <>dsf</>;
        })}
      </ul>
    </>
  );
}

export default Builder;
