import { ADD_CUSTOMER, DELETE_CUSTOMER } from "./actionsType";

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
      case DELETE_CUSTOMER:
      return {
        ...state,
        // customers: [...state.customers, action.payload], //payload -> input box value will come
        customers: [...state.customers.filter((customer) => customer.id !== action.payload),] 
      };
    default:
      return state;
  }
};
export default customerReducer;
