import { ADD_CUSTOMER, DELETE_CUSTOMER } from "./actionsType";

export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer,
});
 
export const deleteCustomer = (customer) => ({
  type: DELETE_CUSTOMER,
  payload: customer,
});

