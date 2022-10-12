import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    professionals: [],
    allProfessionals: []
};
const filterReducer = createReducer(initialState, action, (builder) => {
        switch(action.type){
            case 'GET_PROFESSIONALS':
                return{
                    ...state,
                    professionals: action.payload
                }
            case 'GET_ALL_PROFESSIONALS':
                return{
                    ...state,
                    professionals: action.payload,
                    allProfessionals: action.payload
                }
        }
});

export default filterReducer;
