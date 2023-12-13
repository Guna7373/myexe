import { combineReducers } from "redux";
import customerReducer from "./reducer";

const rootReducer = combineReducers({
  customerData: customerReducer,
});

export default rootReducer;