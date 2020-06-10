import React, { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider(props) {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const addAmount = (amount) => setCount(count + parseInt(amount));

  return (
    <Context.Provider value={{ count, increase, decrease, addAmount }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
