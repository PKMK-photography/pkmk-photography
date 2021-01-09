import React, {useEffect} from 'react';
import Slider from 'react-slick';
import {couples, family, newborn, wedding, portrait} from '../../assets/photos';
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = props => {
    useEffect(() => {
        document.title = 'Portfolio - P K M K // photography'
        window.scrollTo(0,0)
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 641,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                adaptiveHeight: true
              }
            }
          ]
    }

    return (
        <main className='portfolio'>
            <h1 className='portfolio-heading'>Portfolio</h1>
            <section className='portfolio-carousel-section'>
                <h1>Couples</h1>
                <Slider {...settings}>
                    {couples.map((couple, i) => (
                        <div key={i}>
                            <img src={couple} alt={`Couples ${i + 1}`} loading='lazy'/>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Weddings</h1>
                <Slider {...settings}>
                    {wedding.map((wedding, i) => (
                        <div key={i}>
                            <img src={wedding} alt={`Wedding ${i + 1}`} loading='lazy'/>
                        </div>
                    ))} 
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Families</h1>
                <Slider {...settings}>
                    {family.map((family, i) => (
                        <div key={i}>
                            <img src={family} alt={`Family ${i + 1}`} loading='lazy'/>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Newborns</h1>
                <Slider {...settings}>
                    {newborn.map((newborn, i) => (
                        <div key={i}>
                            <img src={newborn} alt={`Newborn ${i + 1}`} loading='lazy'/>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Portraits</h1>
                <Slider {...settings}>
                    {portrait.map((portrait, i) => (
                        <div key={i}>
                            <img src={portrait} alt={`Portrait ${i + 1}`} loading='lazy'/>
                        </div>
                    ))}
                </Slider>
            </section>
        </main>
    )
}


export default Portfolio;