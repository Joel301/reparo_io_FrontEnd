import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    professionals: [],
    allProfessionals: []
};
const filterReducer = createReducer(initialState, (builder) => {});

export default filterReducer;
