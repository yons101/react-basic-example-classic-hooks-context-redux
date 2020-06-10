import React, { useState, useContext } from "react";
import { Context } from "./context";

function Counter() {
  const [amount, setAmount] = useState("");

  const { count, increase, decrease, addAmount } = useContext(Context);
  return (
    <div>
      <button className="btn" onClick={increase}>
        +
      </button>

      <button className="btn">{count}</button>

      <button className="btn" onClick={decrease}>
        -
      </button>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn" onClick={() => addAmount(amount)}>
        Increase by amount
      </button>
    </div>
  );
}

export default Counter;
