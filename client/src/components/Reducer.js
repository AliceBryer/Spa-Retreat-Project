const initialState = {
  cart: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        cart: [...state.cart, action.payload],
      };

    case "REMOVE":
      const filteredCart = state.cart.filter(
        (item) => item._id !== action.payload
      );
      return {
        cart: filteredCart,
      };

    default:
      return state;
  }
};

export default reducer;
