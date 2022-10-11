import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    professions: []
};
const profReducer = createReducer(initialState, (builder) => {});

export default profReducer;
