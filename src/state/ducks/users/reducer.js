const initialState = {
  
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":

      return {
        ...action.payload,
      };

    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
}
