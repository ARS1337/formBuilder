import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/itemTypes";
import InputType from "./InputType";
import Label from "./Label";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "grey",
  },
};
Modal.setAppElement(document.getElementById("Builder"));
function Builder(props) {
  //modal start
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  //modal end
  const [items, setItems] = useState([]);
  const [allProps, setAllProps] = useState([]);

  let arr = [];
  let count = 1;
  let temp;
  const [{ itemName }, drop] = useDrop(() => {
    return {
      accept: ItemTypes.type1,
      drop: (item, monitor) => {
        arr.push({ name: item.name, id: count, type: item.type });
        count++;
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
      <div className="Builder" ref={drop} id="Builder">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>dsfsdfsdfdf</button>
        </Modal>

        {items.map((x, idx) => {
          console.log(x);
          if (x.name == "InputType") {
            return (
              <>
                <InputType type={x.type} id={x.type + x.id} />
                <br />
              </>
            );
          }
          if (x.name == "Label") {
            return (
              <>
                <button onClick={openModal}>
                  <Label id={x.id}>{x.name}</Label>
                  <br />
                </button>
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Builder;
