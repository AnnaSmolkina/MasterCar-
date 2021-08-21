const initialState = {
  products: []
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter(o => o.id !== action.payload)
      };
    default:
      return state;
  }
};
