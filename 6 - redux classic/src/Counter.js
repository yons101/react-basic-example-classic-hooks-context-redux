import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  state = {
    amount: "",
  };
  render() {
    const { increase, decrease, addAmount, count } = this.props;
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
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />

        <button className="btn" onClick={() => addAmount(this.state.amount)}>
          Increase by amount
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //countState is the value we choose in rootReducer
  return {
    count: state.countState.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE" }),
    decrease: () => dispatch({ type: "DECREASE" }),
    addAmount: (amount) => dispatch({ type: "INCREASE_BY_AMOUNT", amount }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
