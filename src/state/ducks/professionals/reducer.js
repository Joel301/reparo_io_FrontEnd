


const initialState = {
    professionals: [],
    allProfessionals: []
};

function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_ALL_PROFESSIONALS':
        return {
            ...state,
            professionals: action.payload,
            allProfessionals: action.payload
        }


        case 'GET_PROFESSIONALS': 
        return {
            ...state,
            professionals: action.payload
        }
    }

}
export default rootReducer;

