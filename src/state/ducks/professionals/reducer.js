import { createReducer } from "@reduxjs/toolkit";
import { getAllProfessionals, getProfessionals } from "./actions";

const initialState = {
    professionals: [],
    allProfessionals: []
};

const professionalsReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(getProfessionals.type, (state, action)=>{
        return state.professionals = action.payload
    })
    .addCase(getAllProfessionals.type, (state, action)=>{
        return state.allProfessionals = action.payload
    })
})

export default professionalsReducer;