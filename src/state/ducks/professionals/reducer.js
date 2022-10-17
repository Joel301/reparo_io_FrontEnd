const initialState = {
    professionals: [],
    allProfessionals: [],
    professions: []

};

function rootReducer(state=initialState, action){
    console.log(action.payload, "action payload reducer")
    switch(action.type){
        case 'GET_ALL_PROFESSIONALS':
        return {
            ...state,
            // professionals: action.payload,
            allProfessionals: action.payload
        }


        case 'GET_PROFESSIONALS': 
        return {
            ...state,
            allProfessionals: action.payload
            }
        

        case 'GET_PRFESSIONS_OF_PROFESSIONALS':
            let allProfessionalsProfessions = state.allProfessionals;
            allProfessionalsProfessions = action.payload === 'ALL'? 
            allProfessionalsProfessions : 
            allProfessionalsProfessions.filter(el => el.professions.includes(action.payload))
        return {
            ...state,
            professionals: allProfessionalsProfessions
        }

        case 'GET_ALL_PROFESSIONS':
            return {
                ...state,
                professions: action.payload
            }
    }
}

export default rootReducer;

