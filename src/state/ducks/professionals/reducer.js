const initialState = {
  professionalsFiltered: [],
  allProfessionals: [],
  professions: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PROFESSIONALS":
      return {
        ...state,
        professionalsFiltered: action.payload,
        allProfessionals: action.payload,
      };

    case "GET_PROFESSIONALS":
      return {
        ...state,
        professionalsFiltered: action.payload,
      };

    case "FILTER_BY_PROFESSION":
     

 if(action.payload!=='all'){  
     let professionFilter = state.professions.filter((profesion) => {
        return profesion.name.toLowerCase() === action.payload;
      });

      let filtered = state.allProfessionals.filter((profesional) => {
        return profesional.professions
          .map((e) => e.id)
          .includes(professionFilter[0].id);
      });
      
      return {
        ...state,
        professionalsFiltered: filtered,
      };
}
return{...state,
  professionalsFiltered:state.allProfessionals
}
  

    case "GET_ALL_PROFESSIONS":
      return {
        ...state,
        professions: action.payload,
      };

    case "ORDER_BY_NAME":
      let sortOrder =
        action.payload === "asc"
          ? state.professionalsFiltered.sort(function (a, b) {
              if (a.firstName > b.firstName) {
                return 1;
              }
              if (b.firstName > a.firstName) {
                return -1;
              }
              return 0;
            })
          : state.professionalsFiltered.sort(function (a, b) {
              if (a.firstName > b.firstName) {
                return -1;
              }
              if (b.firstName > a.firstName) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        professionals: sortOrder,
      };
     // se saco detail
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };

    case "ORDER_REPUTATION":
      let sortOrder2 =
        action.payload === "asc"
          ? state.professionalsFiltered.sort(function (a, b) {
              if (a.review > b.review) {
                return 1;
              }
              if (b.review > a.review) {
                return -1;
              }
              return 0;
            })
          : state.professionalsFiltered.sort(function (a, b) {
              if (a.review > b.review) {
                return -1;
              }
              if (b.review > a.review) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        professionals: sortOrder2,
      };

    default:
      return state;
  }
}
export default rootReducer;
