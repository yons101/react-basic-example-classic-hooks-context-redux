import React, { useState } from "react";

function Counter({ count, setCount, addAmount }) {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>

      <button className="btn">{count}</button>

      <button className="btn" onClick={() => setCount(count - 1)}>
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
