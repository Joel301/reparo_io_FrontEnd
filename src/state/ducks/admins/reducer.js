const initialState = {
  clients: [],
  
}


const adminsReducer = (state = initialState, action) => {
    switch (action.type) {

      case "GET_CLIENT": {
        return {
          ...state,
          clients: [...state, action.payload]
        }
      }
      
      default: return state;
    }

}

export default adminsReducer; 