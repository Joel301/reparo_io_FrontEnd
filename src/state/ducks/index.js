import { combineReducers } from "redux";
import rootReducer from "./professionals/reducer";
import detailReducer from "./detail/reducer";
import clientReducer from "./clients/reducer";


const reducers = combineReducers({
  professionals: rootReducer,
  detail: detailReducer,
  clients: clientReducer
})

export default reducers;