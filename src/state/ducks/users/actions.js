import axios from "axios";

export const loginUser = function (user) {
  // const user = {
  //   id: data.dataValues.id,
  //   firstName: data.dataValues.firstName,
  //   lastName: data.dataValues.lastName,
  //   phoneNumber: data.dataValues.phoneNumber,
  //   address: data.dataValues.address,
  //   email: data.dataValues.email,
  //   profileImg: data.dataValues.profileImg,
  //   enabled: data.dataValues.enabled,
  //   cartId: data.cart.id, 
  return async function (dispatch) {
    try {
      let loggedUser;
      let typeOfUser;
      let cartId
      await axios.post("/home/user/login", user).then((res) => {
        console.log("enaction: ",user, res.data)
        loggedUser = res.data.dataValues;
        typeOfUser = res.data.msg.split(" ")[0];
        if(typeOfUser==='cliente')cartId = res.data.cart.id
      });

      loggedUser.type = typeOfUser;
      if (typeOfUser === 'cliente') loggedUser.cartId = cartId
      switch (loggedUser.type) {
        case "cliente": {
          let shoppingHistory = await axios.get(`/api/clients/${loggedUser.id}`).then((res) => res.data.orders.map((order) => order.orderDetails).flat());

          loggedUser.shoppingHistory = shoppingHistory;
        }
        case "profesional": {
          let reviews = await axios
            .get("/home/reviews")
            .then((res) => res.data).then((res) => res.filter((review) => review.professionalId === loggedUser.id)
              .map((review) => {
                return {
                  comment: review.comment,
                  rating: review.rating,
                  clientName: review.client.firstName,
                  clientImg: review.client.profileImg
                };
              }))


          let orders = await axios.get(`/api/orders/professional/${loggedUser.id}`).then((res) => res.data.orders)
          loggedUser.reviews = reviews.splice(0, 9)
          loggedUser.orders = orders
            ;
        }

      }
      console.log(loggedUser);
      return dispatch({
        type: "LOGIN_USER",
        payload: loggedUser,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutUser = function () {
  return async function (dispatch) {
    axios.post("/home/user/logout");

    return dispatch({ type: "LOGOUT_USER" });
  };
};
