import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import { Context } from "./context";
import ContextProvider from "./context";

class App extends Component {
  render() {
    return (
      <div className="App container" style={style}>
        <ContextProvider>
          <Context.Consumer>
            {(context) => (
              <Counter
                count={context.count}
                increase={context.increase}
                decrease={context.decrease}
                addAmount={context.addAmount}
              />
            )}
          </Context.Consumer>
        </ContextProvider>
      </div>
    );
  }
}

const style = {
  width: "30%",
  marginTop: "5rem",
};

export default App;
