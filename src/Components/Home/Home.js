import React, {useEffect} from 'react';
import {Parallax} from 'react-parallax';
import {Link} from 'react-router-dom';
import homeImage from '../../assets/images/home-image.jpg';
import image2 from '../../assets/images/image-2.jpg';
import image5 from '../../assets/images/image-5.jpg';
import image6 from '../../assets/images/image-6.jpg';
import image7 from '../../assets/images/image-7.jpg';
import image8 from '../../assets/images/image-8.jpg';
import image9 from '../../assets/images/image-9.jpg';
import image10 from '../../assets/images/image-10.jpg';
import image11 from '../../assets/images/image-11.jpg';
import image12 from '../../assets/images/image-12.jpg';
import image13 from '../../assets/images/image-13.jpg';
import image14 from '../../assets/images/image-14.jpg';
import image15 from '../../assets/images/image-15.jpg';
import image16 from '../../assets/images/image-16.jpg';
import image17 from '../../assets/images/image-17.jpg';
import image18 from '../../assets/images/image-18.jpg';
import image19 from '../../assets/images/image-19.jpg';
import image20 from '../../assets/images/image-20.jpg';
import image21 from '../../assets/images/image-21.jpg';
import image22 from '../../assets/images/image-22.jpg';
import image23 from '../../assets/images/image-23.jpg';
import image24 from '../../assets/images/image-24.jpg';
import image25 from '../../assets/images/image-25.jpg';
import image26 from '../../assets/images/image-26.jpg';
import image27 from '../../assets/images/image-27.jpg';
import image28 from '../../assets/images/image-28.jpg';
import './Home.css';

const Home = props => {
    useEffect(() => {
        document.title = 'P K M K // photography'
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
                        <img src={image5} alt='portfolio' loading='lazy'/>
                        <img src={image6} alt='portfolio' loading='lazy'/>
                        <img src={image7} alt='portfolio' loading='lazy'/>
                        <img src={image8} alt='portfolio' loading='lazy'/>
                        <img src={image9} alt='portfolio' loading='lazy'/>
                        <img src={image10} alt='portfolio' loading='lazy'/>
                        <img src={image11} alt='portfolio' loading='lazy'/>
                        <img src={image12} alt='portfolio' loading='lazy'/>
                        <img src={image13} alt='portfolio' loading='lazy'/>
                        <img src={image14} alt='portfolio' loading='lazy'/>
                        <img src={image15} alt='portfolio' loading='lazy'/>
                        <img src={image16} alt='portfolio' loading='lazy'/>
                        <img src={image17} alt='portfolio' loading='lazy'/>
                        <img src={image18} alt='portfolio' loading='lazy'/>
                        <img src={image19} alt='portfolio' loading='lazy'/>
                        <img src={image20} alt='portfolio' loading='lazy'/>
                        <img src={image21} alt='portfolio' loading='lazy'/>
                        <img src={image22} alt='portfolio' loading='lazy'/>
                        <img src={image23} alt='portfolio' loading='lazy'/>
                        <img src={image24} alt='portfolio' loading='lazy'/>
                        <img src={image25} alt='portfolio' loading='lazy'/>
                        <img src={image26} alt='portfolio' loading='lazy'/>
                        <img src={image27} alt='portfolio' loading='lazy'/>
                        <img src={image28} alt='portfolio' loading='lazy'/>
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