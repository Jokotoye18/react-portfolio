import React, { createContext, useReducer } from "react";
import MessageReducer from "../reducer/MessageReducer";

const initialState = {
  messageType: null,
  message: null,
};

export const MessageContext = createContext(initialState);

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MessageReducer, initialState);

  return (
    <MessageContext.Provider
      value={{
        messageType: state.messageType,
        message: state.message,
        dispatch,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
