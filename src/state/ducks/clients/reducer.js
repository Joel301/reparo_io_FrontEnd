import { createReducer } from "@reduxjs/toolkit";
import { getClient } from "./actions";

const initialState = {
  clients: [],
  client: [],
};

const clientReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getClient.type, (state, action) => {
      return state.client.splice(0, state.client.length, action.payload);
    })
    .addDefaultCase(null);
});

export default clientReducer;
