import React, { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";


const infoData = [
    {
        title: 'Phone',
        subject: '+2349067158741',
        icon: <FaPhoneAlt />
    },
    {
        title: 'Location',
        subject: 'Hon. Taiwo Alagbe street, Esannuaje Ogbomoso. Oyo state, Nigeria.',
        icon: <MdLocationOn />
    },
    {
        title: 'Email',
        subject: 'jokotoyeademola95@gmail.com',
        icon: <MdEmail />
    },
]

const Info = () => {

    const [info] = useState(infoData)

    const infoList = info.map((info, index) => {
        return <div key={index} className='info'>
            <p>{info.icon}</p>
            <p>{info.title}</p>
            <p>{info.subject}</p>
        </div>
    }) 

    return (
        <div className='info-list'>
            {infoList}
        </div>
    )
}

export default Info
