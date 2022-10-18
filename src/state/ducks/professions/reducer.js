const initialState = {
  professions: [],
};

function rootReducer(state = initialState, action) {
  console.log(action.payload, "payload reducer");
  switch (action.type) {
    case "GET_ALL_PROFESSIONS":
      return {
        ...state,
        professions: action.payload,
      };
}
}
export default rootReducer;
