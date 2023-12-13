import { ADD_CUSTOMER } from "./actionsType";

const initialState = {
  customers: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload], //payload -> input box value will come
      };
    default:
      return state;
  }
};
export default customerReducer;
