import { createStore } from "redux";
import rootReducer from "./rootReducer";

const initState = {};

export const store = createStore(
  rootReducer,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
