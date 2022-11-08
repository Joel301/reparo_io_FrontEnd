const initialState = {
  
  clients: []
  
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CLIENT':
        return {
          ... action.payload
        }
      case "GET_CLIENTS":
        return {
          ...state,
           clients: action.payload
        }
      default:
       return state;
    }

}

export default clientReducer; 
