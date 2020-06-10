import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends Component {
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
    return (
      <div className="App container" style={style}>
        <Counter
          count={this.state.count}
          increase={this.increase}
          decrease={this.decrease}
          addAmount={this.addAmount}
        />
      </div>
    );
  }
}
const style = {
  width: "30%",
  marginTop: "5rem",
};

export default App;
