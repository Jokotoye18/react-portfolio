import React from 'react'
import './Education.css'
import Zoom from 'react-reveal/Zoom';

const Index = () => {
    return (
        <Zoom>

        <section className='education'>
            <div className='container'>
                <div className='py-3'>
                    <h3 className='education-title'>Education</h3>
                    <h3 className='school'><strong>UNIVERSITY OF ILORIN</strong></h3>
                    <p className='course'>BACHELOR IN BIOMEDICAL ENGINEERING: 2015 - 2020</p>
                </div>
                <div className='py-3'>
                    <h3>Related Info</h3>
                    <ul className='activity'>
                        <li>President of National Association of Biomedical Engineering (NABMES)</li>
                        <li>NABMES Sport Director</li>
                        <li>Highest GPA: 4.74</li>
                    </ul>
                </div>
                <div className='py-3'>
                    <h3>Certificate</h3>
                    <ul className='activity'>
                        <li>Students Ambassador Leadership (December 2018) </li>
                        <li>Certificate of Mentorship(July 2019)</li>
                    </ul>
                </div>
            </div>
        </section>
        </Zoom>
    )
}

export default Index
