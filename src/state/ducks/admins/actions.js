import axios from "axios";

export function getClient(id) {
  console.log(id, "id action");
  return async function (dispatch) {
    try {
      let client = await axios.get(
        `https://reparoiobackend-main.up.railway.app/api/clients/${id}`
      );
      console.log(client.data, "client action");
      return dispatch({
        type: "GET_CLIENT",
        payload: client.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProfessions() {
  return async function (dispatch) {
    try {
      const profesiones = await axios.get(
        `https://reparoiobackend-main.up.railway.app/home/professions/`
      );
      return dispatch({
        type: "GET_PROFESSIONS",
        payload: profesiones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProfession(id) {
  return async function (dispatch) {
    try {
      await axios.delete(
        `https://reparoiobackend-main.up.railway.app/home/professions/${id}`
      );
      return dispatch({
        type: "DELETE_PROFESION",
        payload: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addProfessions(body) {
  return async function (dispatch) {
    try {
      await axios.post(
        "https://reparoiobackend-main.up.railway.app/home/professions",
        body
      );
      return dispatch({
        type: "ADD_PROFESION",
        payload: body,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllOrders() {
  return async function () {
    const response = await axios.get(
      "https://reparoiobackend-main.up.railway.app/api/orders"
    );
    //response.data = {orders, orderStatus}
    //orderStatus incluye las posibles opciones de status
    //orders = {
    //id, amount, status, clientId, date, orderDetails:[professionalId, reservationAmount,days]
    //}
    return {
      type: "GET_ORDERS",
      payload: response.data,
    };
  };
}
