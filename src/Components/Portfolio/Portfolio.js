import React, {useEffect} from 'react';
import Slider from 'react-slick';
import {initGA, pageView} from '../../index';
import {couples, family, newborn, wedding, portrait} from '../../assets/photos';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <img 
            src={arrowLeft} 
            alt='Previous'
            className='prev-arrow' 
            onClick={onClick}
        />
    );
  }
  
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <img 
            src={arrowRight} 
            alt='Next'
            className='next-arrow'
            onClick={onClick}/>
    );
  }

const Portfolio = props => {
    useEffect(() => {
        document.title = 'Portfolio - P K M K // photography';
        window.scrollTo(0,0);
        initGA('UA-186933835-1');
        pageView();
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: <PrevArrow />,
        prevArrow: <NextArrow />,
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
                adaptiveHeight: true,
              }
            }
          ]
    }

    return (
        <main className='portfolio'>
            <h1 className='portfolio-heading'>Portfolio</h1>
            <section className='portfolio-carousel-section'>
                <h1>Weddings</h1>
                <Slider {...settings}>
                    {wedding.map((wedding, i) => (
                        <img key={i} src={wedding} alt={`Wedding ${i + 1}`} loading='lazy'/>
                    ))} 
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Couples</h1>
                <Slider {...settings}>
                    {couples.map((couple, i) => (
                        <img key={i} src={couple} alt={`Couples ${i + 1}`} loading='lazy'/>
                    ))}
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Families</h1>
                <Slider {...settings}>
                    {family.map((family, i) => (
                        <img key={i} src={family} alt={`Family ${i + 1}`} loading='lazy'/>
                    ))}
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Newborns</h1>
                <Slider {...settings}>
                    {newborn.map((newborn, i) => (
                        <img key={i} src={newborn} alt={`Newborn ${i + 1}`} loading='lazy'/>
                    ))}
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Portraits</h1>
                <Slider {...settings}>
                    {portrait.map((portrait, i) => (
                        <img key={i} src={portrait} alt={`Portrait ${i + 1}`} loading='lazy'/>
                    ))}
                </Slider>
            </section>
        </main>
    )
}


export default Portfolio;