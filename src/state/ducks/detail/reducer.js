  const initialState = {
    
  }




   function detailReducer(state = initialState, action){
      switch(action.type){
        case "GET_DETAIL":
      return {
        ...action.payload,
      };

      default: return state;
      }
   }

   export default detailReducer;
   