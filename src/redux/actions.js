import { ADD_CUSTOMER } from "./actionsType";

export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer,
});
