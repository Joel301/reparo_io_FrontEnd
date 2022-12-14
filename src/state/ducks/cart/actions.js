import { async } from "@firebase/util";
import axios from "axios";

export function addToCart(worker, client) {
  console.log(client, "soy client")
  return async function (dispatch) {
    try {
      const itemDeCompra = {
        professional: worker,
        days: [],
        get quantity() {
          return this.days.length;
        },
      };

      console.log(itemDeCompra.idDb, "itemdeCompra");
      return dispatch({
        type: "ADD_TO_CART",
        payload: itemDeCompra,
      });
    } catch (error) {
      console.log(error);
    }
  };
}



export function deleteItemCart(item) {
  console.log(item);
  return async function (dispatch) {
    try {
      if (item.idDb) {
        await axios.delete(
          `https://reparoiobackend-main.up.railway.app/api/cart/${item.idDb}`
        );
      }
      return dispatch({
        type: "DELETE_ITEM_CART",
        payload: item.professional.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addDayToProf(id, day) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "ADD_DAY_TO_PROF",
        payload: {
          id,
          day,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeDayFromProf(id, day) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "REMOVE_DAY_FROM_PROF",
        payload: {
          id,
          day,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCart(body) {
  return async function (dispatch) {
    try {
      const postCarrito = await axios.post(
        "https://reparoiobackend-main.up.railway.app/api/orders",
        body
      ); console.log(postCarrito)
      return dispatch({
        type: "POST_CART",
        payload: postCarrito.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getMercadoPagoLink(body) {
  console.log(body, "body");
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://reparoiobackend-main.up.railway.app/api/mercado",
        body
      ).then((res)=>{
        localStorage.clear()
        return res
      });
      console.log(response, "response");
      return dispatch({
        type: "URL_MERCADO_PAGO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postingCart(cartList, clientId) {
  return async function (dispatch) {
    try {
      const addCartList = cartList.map(async (el) => {
        
        const response = await axios.post(
          "https://reparoiobackend-main.up.railway.app/api/cart",
          {
            clientId, //el.client
            professionalId: el.professional.id,
            days: el.days,
          }
        );
        
        el.idDb = response.data.newCartDetail.id;
        return el;
      });
      console.log(addCartList)
      const promesahasbulla = await Promise.all(addCartList)
      return dispatch({
        type: "POSTING_CART",
        
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteOrder = function (orderId) {
  return async function () {
    try {
      await axios.delete(
        `https://reparoiobackend-main.up.railway.app/api/orders/${orderId}`
      );

      return {
        type: "DELETE_ORDER",
      };
    } catch (error) {
      console.log(error);
    }
  };
};

export function clearCart(){
  return async function(dispatch){
    try {
      return dispatch({
        type: "CLEAR_CART"
      })
    } catch (error) {
      console.log(error)
    }
  }
}
