const initialState = {
  clients: [],
  professions: [],
  
}


const adminsReducer = (state = initialState, action) => {
    switch (action.type) {

      case "GET_CLIENT": {
        return {
          ...state,
          clients: [...state, action.payload]
        }
      }
      
      case "GET_PROFESSIONALS":
      return {
        ...state,
        professionalsFiltered: action.payload,
      }

      case 'GET_PROFESSIONS': {
        return {
          ...state,
          professions: action.payload
        }
      }

      case "ADD_PROFESION": {
        state.professions.map((profesion) => {
          if(profesion.name !== action.payload.name) {
            
            return {
              ...state,
              professions: [...state.professions, action.payload]
            }
          }
        })

        return {
          ...state,
        }
      }

      case "DELETE_PROFESION": {

        let updatedProfessions = state.professions.filter(
          (item) =>  item.id !== action.payload.id
        )


        return {
          ...state,
          professions: updatedProfessions
        }
      }

      default: return state;
    }

}

export default adminsReducer; 