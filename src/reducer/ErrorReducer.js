export const ErrorReducer = (state, action) => {
  switch (action.type) {
    case "GET_ERRORS":
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    case "RESET":
      // return state
      return {
        msg: {},
        status: null,
      };
    default:
      return state;
  }
};
