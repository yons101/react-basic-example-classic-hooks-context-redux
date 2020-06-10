import React from "react";
import "./App.css";
import Counter from "./Counter";
import ContextProvider from "./context";

function App() {
  return (
    <div className="App container" style={style}>
      <ContextProvider>
        <Counter />
      </ContextProvider>
    </div>
  );
}
const style = {
  width: "30%",
  marginTop: "5rem",
};

export default App;
