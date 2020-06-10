import React, { useState, useContext } from "react";
import { Context } from "./context";

function Counter() {
  const [amount, setAmount] = useState("");

  const { count, dispatch } = useContext(Context);

  return (
    <div>
      <button className="btn" onClick={() => dispatch({ type: "INCREASE" })}>
        +
      </button>

      <button className="btn">{count}</button>

      <button className="btn" onClick={() => dispatch({ type: "DECREASE" })}>
        -
      </button>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => dispatch({ type: "INCREASE_BY_AMOUNT", amount })}
      >
        Increase by amount
      </button>
    </div>
  );
}

export default Counter;
