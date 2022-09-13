const initialState = {
  cart: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      // let tempCart = cart.filter((item) => item.id === action.payload.id);
      // if (tempCart < 1) {
      return {
        cart: [...state.cart, action.payload],
        //   };
        // } else {
        //   return cart;
      };

    default:
      return state;
  }
};

export default reducer;
