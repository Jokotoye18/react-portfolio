export default (state, action) => {
  switch (action.type) {
    case "NETWORK_ERROR":
      return {
        messageType: action.payload.messageType,
        message: action.payload.message,
      };
    case "RESET":
      return {
        messageType: null,
        message: null,
      };
    default:
      return state;
  }
};
