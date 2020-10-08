import React from 'react'
// import {Link} from 'react-router-dom'
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer id="down" className="text-center text-white text-muted">
            <div>
                <a className="top" href="#top"><i className="fas fa-arrow-up"></i></a>
                <a className="down" href="#down"><i className="fas fa-arrow-down"></i></a>
                <a className="mx-3 "  href="https://twitter.com/AkinJokotoye" target="_blank" rel="noopener noreferrer" ><FaTwitter className='mr-1' /></a>
                <a className="mx-3 "  href="https://www.linkedin.com/in/jokotoye-ademola-akin-12b539175/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='mr-1' /></a>
                <a className="mx-3"  href="https://github.com/Jokotoye18?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub className='mr-1' /></a>
                <p>© 2020 | Developed By Jokotoye Ademola</p>
            </div>
        </footer>
    )
}

export default Footer
