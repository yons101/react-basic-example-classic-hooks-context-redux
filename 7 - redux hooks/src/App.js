import React from "react";
import "./App.css";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App container" style={style}>
      <Provider store={store}>
        <Counter />
      </Provider>{" "}
    </div>
  );
}

const style = {
  width: "30%",
  marginTop: "5rem",
};

export default App;
