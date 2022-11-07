export const loginUser = function (data) {
  const user = {
    id: data.dataValues.id,
    firstName: data.dataValues.firstName,
    lastName: data.dataValues.lastName,
    phoneNumber: data.dataValues.phoneNumber,
    address: data.dataValues.address,
    email: data.dataValues.email,
    profileImg: data.dataValues.profileImg,
    enabled: data.dataValues.enabled,
    cartId: data.cart.id,
  };

  return {
    type: "LOGIN_USER",
    paylodad: user,
  };
};

export const logoutUser = function () {
  return {
    type: "LOGOUT_USER",
  };
};
