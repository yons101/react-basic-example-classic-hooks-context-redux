import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  const addAmount = (amount) => setCount(count + parseInt(amount));
  return (
    <div className="App container" style={style}>
      <Counter count={count} setCount={setCount} addAmount={addAmount} />
    </div>
  );
}
const style = {
  width: "30%",
  marginTop: "5rem",
};

export default App;
