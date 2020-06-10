import React, { Component, createContext } from "react";

export const Context = createContext();

export default class ContextProvider extends Component {
  state = {
    count: 0,
  };

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  addAmount = (amount) => {
    // this.setState({ count: this.state.count + parseInt(amount) });
    this.setState((prevState) => ({
      count: prevState.count + parseInt(amount),
    }));
  };

  render() {
    const { increase, decrease, addAmount } = this;

    return (
      <Context.Provider
        value={{
          count: this.state.count,
          increase,
          decrease,
          addAmount,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
