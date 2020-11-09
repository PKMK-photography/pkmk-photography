import React from 'react';
import duneImage from '../../assets/images/pkmk-filler-1.jpg';
import './Home.css';

const Home = props => (
    <main className='home'>
        <div className='home-image'/>
        <section className='about-us-section'>
            <h1>Why We Chose Photography</h1>
            <p className='intro-blurb'>For us, photography is our way of life. We thrive when we have a camera in our hands and we live to help capture the moments that matter most to you. We consider ourselves to be "Lifestyle Photographers" which means we want to capture pictures of you that are genuine and true to your character. Whether it's taking your family photo session or photographing your wedding, we promise to provide you with the pictures through which you can relive your happiest memories.</p>
            <h5 className='book-with-us'>BOOK WITH US!</h5>
            <p>Take a look at the types of sessions we offer and find the date that works for you.</p>
            <button>CHEESE!</button>
        </section>
        <div className='our-work-image'/>
        <section className='our-work-section'>
            <h1>Get a Feel for Our Work</h1>
        </section>
    </main>
)

export default Home;