const initialState = {
  
  
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CLIENT':
        return {
          ... action.payload
        }
      default:
       return state;
    }

}

export default clientReducer; 
