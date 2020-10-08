import React from 'react'
import './Contact.css'
// import { GrContact, GrContactInfo } from "react-icons/gr";
import Slide from 'react-reveal/Slide';


import Head from './Head'
import Contact from './Contact'
import Info from './Info'


const Index = () => {
    return (
        <section className='contact-container'>
            <div className='container'>
                <Head />
                <div className='row justify-content-between align-items-center'>
                    <Slide left>
                        <div className='col-md-4'>
                            <Info />
                        </div>
                    </Slide>
                    <Slide right>
                        <div className='col-md-6'>
                            <Contact />
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default Index
