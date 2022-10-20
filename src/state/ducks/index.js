
import { combineReducers } from "redux";
import rootReducer from "./professionals/reducer";
import detailReducer from "./detail/reducer";


 const reducers = combineReducers({
    professionals: rootReducer,
    detail: detailReducer
})

export default reducers;