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
  return async function (dispatch) {
    try{
      let loggedUser 
      let typeOfUser          
      console.log(user)
      await axios.post("/home/user/login",user).then(res=>{loggedUser = res.data.dataValues
                                                            typeOfUser = res.data.msg.split(' ')[0]          })
      console.log(loggedUser,typeOfUser)
      loggedUser.type=typeOfUser
      return dispatch({
        type: "LOGIN_USER",
        payload:loggedUser
      });
    }
    catch(err){
      console.log(err)
    }
    
  };
};

export const logoutUser = function () {
  return async function (dispatch){
    axios.post('/home/user/logout')
    return dispatch({type:"LOGOUT_USER"}) 
  }
  
};
