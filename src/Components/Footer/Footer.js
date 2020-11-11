import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className='schedule-appointment-section'>
        <h1>Schedule Appointment</h1>
        <Link to='/contact'>
            <button>START NOW</button>
        </Link>
        <a className='social-link' target='_blank' href='https://www.instagram.com/pkmkphotos/'>INSTAGRAM</a>
    </footer>
)

export default Footer;