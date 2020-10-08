import React from 'react'
import Zoom from 'react-reveal/Zoom';

import { FaCommentAlt } from "react-icons/fa";

const Head = () => {
    return (
        <Zoom>
            <div className='head'>
                <h3 className='head-title'>Get in Touch</h3>
                <div className='row justify-content-center align-items-center'>
                    <hr className='contact-line' />
                    <FaCommentAlt  className='contact-icon fa-2x' />
                    <hr className='contact-line' />
                </div>
            </div>
        </Zoom>
    )
}

export default Head
