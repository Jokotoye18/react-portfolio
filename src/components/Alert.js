import React, {Fragment, useEffect, useContext} from 'react'
import { useAlert } from 'react-alert'
import {ErrorContext} from '../context/ErrorContext'


const Alert = () => {

    const {state} = useContext(ErrorContext)

    const {msg} = state
    console.log(msg);


    const alert = useAlert()

    useEffect(() => {
        if(msg) {
           if(msg.email) alert.error(`Email: ${msg.email.join()}`);
           if(msg.message) alert.error(`Message: ${msg.message.join()}`);
        }
    })

    return <Fragment />
}

export default Alert
