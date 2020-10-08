import React,{useState, useContext} from 'react'
import axios from 'axios'
import {ErrorContext} from '../../context/ErrorContext'


const Contact = () => {

    const {dispatch} = useContext(ErrorContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        const config = {
            header: {
                "content-type": "application/json"
            }
        }
        const data = {
            name,
            email,
            message
        }
        axios
            .post("https://jokotoye18-portfolio.herokuapp.com/api/contact/", data, config)
            .then(response => {
                console.log(response)
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch(error => {
                const errors = {
                    msg: error.response.data,
                    status: error.response.status
                }
                dispatch({
                    type: 'GET_ERRORS',
                    payload: errors
                })
            })
    }

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <div className='control'>
                <label className='d-block' htmlFor='name'><strong>Name</strong></label>
                <input type='text' name='name' id='name' value={name} onChange={event => setName(event.target.value)} placeholder='John Doe' />
            </div>
            <div className='control'>
                <label className='d-block' htmlFor='email'><strong>Email</strong></label>
                <input type='email' name='email' id='email' value={email} onChange={event => setEmail(event.target.value)} placeholder='john@gmail.com' />
            </div>
            <div className='control'>
                <label className='d-block' htmlFor='message'><strong>Message</strong></label>
                <textarea name='message' id='message' value={message} onChange={event => setMessage(event.target.value)}></textarea>
            </div>
            <button className='send-message'>send</button>
        </form>
    )
}

export default Contact
