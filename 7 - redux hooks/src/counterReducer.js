const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "INCREASE_BY_AMOUNT":
      return state + parseInt(action.amount);

    default:
      return state;
  }
};

export default counterReducer;
