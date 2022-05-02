import React from 'react';
import honda from '../../honda.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <h1>About</h1>
            <h2>We are the Manufacturer of the futuristic time travller bike. chekout our upcoming honda with that you can travel to the past as well.</h2>
            <img src={honda} alt="honda bike " />
        </div>
    );
};

export default About;