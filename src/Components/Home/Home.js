import React, {useEffect} from 'react';
import {Parallax} from 'react-parallax';
import {Link} from 'react-router-dom';
import {initGA, pageView} from '../../index';
import homeImage from '../../assets/images/home-image.jpg';
import image2 from '../../assets/images/image-2.jpg';
import {images24} from '../../assets/photos';
import './Home.css';

const Home = props => {
    useEffect(() => {
        document.title = 'P K M K // photography - Utah Based Photographer';
        initGA('UA-186933835-1');
        pageView();
    }, [])

    return (
        <main className='home'>
            <Parallax 
                bgImage={homeImage}
                strength={250}>
                <div style={{height: '85vh'}}>
                    <div className='home-image'/>
                </div>
            </Parallax>
            <section className='intro-section'>
                <section className='intro-section-flex-one'>
                    <h1>Why We Chose Photography</h1>
                    <p className='intro-blurb'>For us, photography is our way of life. We thrive when we have a camera in our hands and we live to help capture the moments that matter most to you. We consider ourselves to be "Lifestyle Photographers" which means we want to capture pictures of you that are genuine and true to your character. Whether it's taking your family photo session or photographing your wedding, we promise to provide you with the pictures through which you can relive your happiest memories.</p>
                </section>
                <section className='intro-section-flex-two'>
                    <h5 className='book-with-us'>BOOK WITH US!</h5>
                    <p>Take a look at the types of sessions we offer and find the date that works for you.</p>
                    <Link to='/services'>
                        <button className='main-button'>CHEESE!</button>
                    </Link>
                </section>
            </section>
            <Parallax
                bgImage={image2}
                strength={250}>
                <div style={{height: '70vh'}}>
                    <div className='our-work-image'/>
                </div>
            </Parallax>
            <section className='our-work-section'>
                <h1>Get a Feel for Our Work</h1>
                <section className='our-work-desktop-flex'>
                    <section className='our-work-flex'>
                        <img className='our-work-photos' src={images24[0]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[1]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[2]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[3]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[4]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[12]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[5]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[6]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[11]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[7]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[22]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[8]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[9]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[10]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[13]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[14]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[16]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[17]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[18]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[19]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[20]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[15]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[21]} alt='our-work-photos' loading='lazy'/>
                        <img className='our-work-photos' src={images24[23]} alt='our-work-photos' loading='lazy'/>
                    </section>
                    <section className='about-us-desktop-flex'>
                        <section className='portfolio-quote'>
                            <p>"There is one thing the photograph must contain, the humanity of the moment."</p>
                            <p className='author'>-Robert Frank</p>
                            <h6>SEE MORE OF OUR WORK</h6>
                            <Link to='/project-gallery'>
                                <button className='main-button'>PORTFOLIO</button>
                            </Link>
                        </section>
                        <section className='about-us-section'>
                            <h1>About Us</h1>
                            <h5>WE ARE PRESTON AND MCKALIE KAHLE</h5>
                            <p>We've each had a passion for photography since we were young and being able to work together as a married couple has helped us to hone our skills and develop our craft even more.</p>
                            <p>"For me, it's all about getting that one special shot - the money shot. The one that makes you stop and let your mind drift back to that moment no matter how long ago it was."</p>
                            <p>-Preston</p>
                            <p>"I love capturing raw moments. I feel like photography allows me to see people for who they really are and I love seeing all the elements come together to make a great photo. When people look at my photography I want them to <span>feel</span> something."</p>
                            <p>-McKalie</p>
                            <div className='box-underline'/>
                        </section>
                    </section>
                </section>
            </section>
            <div className='ending-image'/>
        </main>
    )
}

export default Home;