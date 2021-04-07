import "./App.css";
import Builder from "./components/Builder";
import Display from "./components/Display";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Display />
        <Builder />
      </div>
    </DndProvider>
  );
}

export default App;
