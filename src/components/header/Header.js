import React, {useState } from 'react'
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaFileDownload} from 'react-icons/fa'
import {WiDaySunny} from 'react-icons/wi'
import {WiMoonWaxingCrescent2} from 'react-icons/wi'

const MyNav = () => {

    
    // menuToggler = () => {
    //     let body = document.querySelector('body');
    //     body.classList.toggle('open');
    // }

    // componentDidMount() {
    //     window.addEventListener('scroll', () => {
    //         if(window.pageYOffset >= 30) {
    //             document.querySelector('header').classList.add('header-scroll')
    //         }else{
    //             document.querySelector('header').classList.remove('header-scroll')
    //         }
    //     })
    // }
    const [isSunny, setIsSunny] = useState(true)

    const handleTimeMode = () => {
        setIsSunny(!isSunny)
    }
        

    return(
        
        <header className={`sticky-top`}>
            <div className="container">
                <nav className="nav">
                <Link className="brand" to='/'>Jokotoye Ademola</Link>
                <a className="nav-link" target='_blank' rel='noopener noreferrer'  href="https://jokotoye-blog.s3.us-east-2.amazonaws.com/Jokotoye-Ademola-Akin(CV).pdf">Resume<FaFileDownload className='ml-2' /></a>
                <div className='day-mode' onClick={handleTimeMode}>
                    {isSunny? 
                    <WiDaySunny className='sunny' />: <WiMoonWaxingCrescent2 className='moon' />}
                </div>
                </nav>
            </div>
        </header>
    )
}

export default MyNav
