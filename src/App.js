// https://github.com/ARS1337/formBuilder

import "./App.css";
import Builder from "./components/Builder";
import Display from "./components/Display";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";

function App() {
  const [storageName, setStorageName] = useState("data");
  const [items, setItems] = useState([]);

  let saveToLocal = () => {
    if (storageName) {
      localStorage.setItem(storageName, JSON.stringify(items));
      let temp = localStorage.getItem(storageName);
      console.log(JSON.parse(temp));
      alert('Form: "' + storageName + '" saved!');
    } else {
      alert("Give the form a name to proceed!");
    }
  };
  let getFromLocal = () => {
    let temp = localStorage.getItem(storageName);
    if (temp !== null) {
      let temp1 = JSON.parse(temp);
      setItems([...temp1]);
      console.log("items", items, "temp ", temp1);
    } else {
      alert("Form with this name does not exist!");
    }
  };
  let removeFromLocal = () => {
    if (storageName) {
      localStorage.removeItem(storageName);
      alert("Form " + storageName + " removed");
    } else {
      alert("Enter form name to proceed");
    }
  };
  let removeAll = () => {
    localStorage.clear();
    alert("All forms removed");
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="topbar">
          <label htmlFor="input1">Name:</label>
          <input
            type="text"
            value={storageName}
            onChange={(e) => setStorageName(e.target.value)}
            id="input1"
          />
          <button
            onClick={() => {
              saveToLocal();
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              getFromLocal();
            }}
          >
            Retrive
          </button>
          <button
            onClick={() => {
              removeFromLocal();
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              removeAll();
            }}
          >
            Clear All
          </button>
        </div>
        <div className="bottom">
          <Display />
          <Builder
            storageName={storageName}
            setStorageName={setStorageName}
            items={items}
            setItems={setItems}
          />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
