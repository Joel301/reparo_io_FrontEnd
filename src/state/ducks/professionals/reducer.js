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
        professionalsFiltered: action.payload
      }

    case "FILTER_BY_PROFESSION":
     

 if(action.payload.length!==0&&action.payload[0]!== undefined){  //['albanil','herrero']
  let filtered
  let payloadToLower = action.payload.map((e)=>e.toLowerCase())
 
  for (let i = 0; i < payloadToLower.length; i++) {
    if(i===0){ 
      
     filtered = state.allProfessionals.filter((profesional) => {
        return profesional.professions
          .map((e) =>{ 
            return e.name})
          .includes(payloadToLower[i]);
      })
     
     
    }else{
        filtered = filtered.filter((profesional) => {
          return profesional.professions
            .map((e) => e.name)
            .includes(payloadToLower[i]);
      })
  }}
     
/*   console.log(filtered) */
    
      
      return {
        ...state,
        professionalsFiltered:filtered,
      };
}
return{...state,
  professionalsFiltered:state.allProfessionals
}
    case "FILTER_BY_REPUTATION":

      let arrayFiltrados = []

      if(action.payload === "Todas") {
        return{
          ...state,
          professionalsFiltered: state.allProfessionals
        }
      } else { 
        state.allProfessionals.map(profe => {

          if(profe.review > parseInt(action.payload) || profe.review === parseInt(action.payload)) {
            arrayFiltrados.push(profe)
          } 
        })
      }

      return {
        ...state,
        professionalsFiltered: arrayFiltrados,
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
              if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                return 1;
              }
              if (b.firstName.toLowerCase() > a.firstName.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.professionalsFiltered.sort(function (a, b) {
              if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                return -1;
              }
              if (b.firstName.toLowerCase() > a.firstName.toLowerCase()) {
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
