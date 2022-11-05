
const initialState = {
  list: [],
  url: '',
}


export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_TO_CART": {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }

    case "DELETE_ITEM_CART": {
      let updatedList = state.list.filter(
        (item) => item.professional.id !== action.payload
      );

      return {
        ...state,
        list: [...updatedList],
      };
    }

    case "POSTING_CART": {
      console.log(action.payload);
      return {
        ...state,
      };
    }

    case "URL_MERCADO_PAGO": {
      console.log(action.payload.data, "action.payload")
      let urlMercadoPago = action.payload

      return {
        ...state,
        url: urlMercadoPago
      }
    }

    case "ADD_DAY_TO_PROF": {
      let updatedList = state.list.map((item) => {
        if (
          item.professional.id === action.payload.id &&
          !item.days.includes(action.payload.day.toLowerCase())
        ) {
          item.days.push(action.payload.day.toLowerCase());
        }

        return item;
      });

      return {
        ...state,
        list: [...updatedList],
      };
    }

    case "REMOVE_DAY_FROM_PROF": {
      let updatedList = state.list.map((item) => {
        if (item.professional.id === action.payload.id) {
          item.days = item.days.filter((day) => day !== action.payload.day);
        }

        return item;
      });
      return {
        ...state,
        list: [...updatedList],
      };
    }

    case "POST_CART":
      return {
        ...state,
        order: action.payload,
      };

    case "DELETE_ORDER":
      return {
        ...state,
        cart: {
          ...state.cart,
          order: {},
        },
      };

    default:
      return state;
  }
}
