import React, { createContext, useReducer } from "react";
import { counterReducer } from "./counterReducer";
export const Context = createContext();

function ContextProvider(props) {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <Context.Provider value={{ count, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
