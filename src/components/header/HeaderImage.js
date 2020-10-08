import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const HeaderImage = () => {
    return (
        <section className='header-image'>
            <ReactTypingEffect className='my-title' text={["Leveraging Django and React.js...", "Building full stack application."]} />
        </section>
    )
}

export default HeaderImage