import React, { createContext, useReducer } from "react";
import { ErrorReducer } from "../reducer/ErrorReducer";

const initialState = {
  msg: {},
  status: null,
};

export const ErrorContext = createContext(initialState);

export const ErrorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ErrorReducer, initialState);

  return (
    <ErrorContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
