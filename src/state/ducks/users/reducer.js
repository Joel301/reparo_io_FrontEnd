const initialState = {
  user: {
    id: "5b18ccd4-7342-457a-93a7-0814974967a6",
    firstName: "primernombre",
    lastName: "apeido",
    phoneNumber: "kulikitakati",
    address: "kulikitakati",
    email: "kulikittaka@sacatiki.com",
    password: "1234567",
    profileImg:
      "https://img.icons8.com/fluency-systems-regular/96/000000/guest-male.png",
    enabled: true,
    cartId: "14b34440-2abc-4a80-a2dd-3865481ea174",
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
}
