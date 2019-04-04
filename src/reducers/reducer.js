import { ADD_PRODUCT, UPDATE_PRODUCT } from "../actions/types";
const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { text: "", isDuplicate: false }]
      };

    case UPDATE_PRODUCT:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
