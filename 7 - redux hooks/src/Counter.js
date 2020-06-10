import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const [amount, setAmount] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <button className="btn" onClick={() => dispatch({ type: "INCREASE" })}>
        +
      </button>

      {/* state will contain all our diffrent states defined in rootReducer */}
      <button className="btn">{state.count}</button>

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
