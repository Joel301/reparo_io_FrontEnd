const initialState = {
  clients: [],
  professions: [],
  orders: [],
};

const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CLIENT": {
      return {
        ...state,
        clients: [action.payload],
      };
    }

    case "GET_PROFESSIONALS":
      return {
        ...state,
        professionalsFiltered: action.payload,
      };

    case "GET_PROFESSIONS": {
      return {
        ...state,
        professions: action.payload,
      };
    }

    case "ADD_PROFESION": {
      state.professions.map((profesion) => {
        if (profesion.name !== action.payload.name) {
          return {
            ...state,
            professions: [...state.professions, action.payload],
          };
        }
      });

      return {
        ...state,
      };
    }

    case "DELETE_PROFESION": {
      let updatedProfessions = state.professions.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        professions: updatedProfessions,
      };
    }

    case "UPDATE_ORDER":
      let i = state.orders.findIndex((element) => {
        return element.id === action.payload.orderId;
      });

      //Creo nuevo array para evitar mutabilidad
      const updatedOrders = [...state.orders];
      //Actualizo el status del elemento conseguido por id
      updatedOrders[i].status = action.payload.status;

      return {
        ...state,
        orders: updatedOrders,
      };

    default:
      return state;
  }
};

export default adminsReducer;
