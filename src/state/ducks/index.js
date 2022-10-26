import { combineReducers } from "redux";
import rootReducer from "./professionals/reducer";
import detailReducer from "./detail/reducer";
import clientReducer from "./clients/reducer";
import cartReducer from "./cart/reducer";

const reducers = combineReducers({
  professionals: rootReducer,
  detail: detailReducer,
  clients: clientReducer,
  cart: cartReducer
})

export default reducers;