import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./ducks/professionals/reducer";
import reducers from "../../src/state/ducks/index"

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))