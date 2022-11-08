  const initialState = {
  }




   function detailReducer(state = initialState, action){
      switch(action.type){
      
        case "GET_DETAIL":
      return {
        ...action.payload,
      }

      case "POST_DETAIL": 
        return{
          ...action.payload,
       }
        
      case"GET_DETAIL_REVIEWS":{
        return {
          ...state,
          reviews:action.payload
        }
      }

      default: return state;
      }
   }

   export default detailReducer;
   