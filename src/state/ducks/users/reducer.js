const initialState = {
  id: "e04a10c9-7637-442d-9992-6cd585caac29",
  firstName: "primernombre",
  astName: "apeido",
  phoneNumber: "kulikitakati",
  address: "kulikitakati",
  email: "kulikittaka@sacatiki.com",
  password: "1234567",
  profileImg:
    "https://img.icons8.com/fluency-systems-regular/96/000000/guest-male.png",
  enabled: true,
  cartId: "33e9b53c-2dbe-428b-b0d2-b74308aa2e85",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        ...action.payload,
      };

    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
}
