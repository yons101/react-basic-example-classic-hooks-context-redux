const initState = {
  count: 0,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    case "INCREASE_BY_AMOUNT":
      return { count: state.count + parseInt(action.amount) };

    default:
      return state;
  }
};

export default counterReducer;
