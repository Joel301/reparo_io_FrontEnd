import { combineReducers } from "redux";
import userReducer from "./users/reducer";
import rootReducer from "./professionals/reducer";
import detailReducer from "./detail/reducer";
import clientReducer from "./clients/reducer";
import cartReducer from "./cart/reducer";
import adminsReducer from "./admins/reducer";

const reducers = combineReducers({
  user: userReducer,
  professionals: rootReducer,
  detail: detailReducer,
  client: clientReducer,
  cart: cartReducer,
  admins: adminsReducer,
});

export default reducers;
