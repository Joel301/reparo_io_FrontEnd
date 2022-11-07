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
  // };
  return async function(dispatch){

  await axios.post("https://reparoiobackend-main.up.railway.app/home/user/login",user).catch((err)=>console.log(err));
  let userLogged = await axios.get("https://reparoiobackend-main.up.railway.app/home/user/login").then((res)=> res.data).catch((err)=>console.log(err))
  return dispatch({
    type:'LOGIN_USER',
    payload: userLogged
  })
    

}
};

export const logoutUser = function () {





  return {
    type: "LOGOUT_USER",
  };
};
