const initialState = {
  isReady: false,
  products: null,
 };

 // eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        products: action.payload,
        isReady: true
      };
    case "SET_IS_READY":
      return {
        ...state,
        isReady: action.payload
      };
      
    default:
      return state;
  }
};
