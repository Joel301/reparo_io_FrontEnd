import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    profesions: []
};
const profReducer = createReducer(initialState, (builder) => {});

export default profReducer;
