/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useContext } from "react";
import { useAlert } from "react-alert";
import { ErrorContext } from "../context/ErrorContext";
import { MessageContext } from "../context/MessageContext";

const Alert = () => {
  const { state, dispatch: errorDispatch } = useContext(ErrorContext);
  const { message, messageType, dispatch: msgDispatch } = useContext(MessageContext);
  console.log(message);

  const { msg } = state;
  console.log(msg);

  const alert = useAlert();

  useEffect(() => {
    if (msg) {
      if (msg.email) {
        alert.error(`Email: ${msg.email.join()}`);
      }
      if (msg.message) {
        alert.error(`Message: ${msg.message.join()}`);
      }
      // errorDispatch({
      //   type: 'RESET'
      // })
    }
    // if (message) {
    //   if (messageType.toLowerCase() === "error") {
    //     alert.error(`Error: ${message}`);
    //   }
    //   if (messageType.toLowerCase() === "success") {
    //     alert.success(`Success: ${message}`);
    //   }
    //   msgDispatch({
    //     type: 'RESET'
    //   })
    // }
  });

  return <Fragment />;
};

export default Alert;
