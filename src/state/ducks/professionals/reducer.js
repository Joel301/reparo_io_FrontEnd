const initialState = {
    professionals: [],
    allProfessionals: [],
    professions: [],
    detail: []
    
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
            allProfessionals: action.payload
        }

        case 'GET_PRFESSIONS_OF_PROFESSIONALS':
            const allProfessionalsProfessions = state.allProfessionals;
            const statusFilt = action.payload === "all"? allProfessionalsProfessions: allProfessionalsProfessions.filter(el => el.professions.includes(action.payload))
        return {
            ...state,
            professionals: statusFilt
        }

        case 'GET_ALL_PROFESSIONS':
            return {
                ...state,
                professions: action.payload
            }
        
        case 'ORDER_BY_NAME':
                let sortOrder = action.payload === 'asc'?
            state.allProfessionals.sort(function(a,b){
                if(a.firstName > b.firstName){
                    return 1
                }
                if(b.firstName > a.firstName){
                    return -1
                }
                return 0
            }): state.allProfessionals.sort(function(a,b){
                if(a.firstName > b.firstName){
                    return -1
                }
                if(b.firstName > a.firstName){
                    return 1
                }
                return 0
            })
                return {
                    ...state,
                    professionals: sortOrder
                }

            case 'GET_DETAIL':
                return {
                    ...state,
                    detail: action.payload
                }
            
       
    
            default: return state
    }

  


}
export default rootReducer;
