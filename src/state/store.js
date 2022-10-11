import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import * as reducers from "./ducks";

const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
