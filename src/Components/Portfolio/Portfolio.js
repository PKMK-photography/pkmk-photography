import React, {useEffect} from 'react';
import Slider from 'react-slick';
import filler1 from '../../assets/images/pkmk-filler-1.jpg'
import filler2 from '../../assets/images/pkmk-filler-2.jpg'
import filler3 from '../../assets/images/pkmk-filler-3.jpg'
import filler4 from '../../assets/images/pkmk-filler-4.jpg'
import filler5 from '../../assets/images/pkmk-filler-5.jpg'
import filler6 from '../../assets/images/pkmk-filler-6.jpg'
import filler7 from '../../assets/images/pkmk-filler-7.jpg'
import filler8 from '../../assets/images/pkmk-filler-8.jpg'
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
        dots: false,
        arrows: false,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
    }

    return (
        <main className='portfolio'>
            <h1 className='portfolio-heading'>Portfolio</h1>
            <section className='portfolio-carousel-section'>
                <h1>Weddings</h1>
                <Slider {...settings} className='slider'>
                    <img src={filler1} alt='filler image 1'/>
                    <img src={filler2} alt='filler image 2'/>
                    <img src={filler3} alt='filler image 3'/>
                    <img src={filler4} alt='filler image 4'/>
                    <img src={filler5} alt='filler image 5'/>
                    <img src={filler6} alt='filler image 6'/>
                    <img src={filler7} alt='filler image 7'/>
                    <img src={filler8} alt='filler image 8'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Couples</h1>
                <Slider {...settings}>
                    <img src={filler1} alt='filler image 1'/>
                    <img src={filler2} alt='filler image 2'/>
                    <img src={filler3} alt='filler image 3'/>
                    <img src={filler4} alt='filler image 4'/>
                    <img src={filler5} alt='filler image 5'/>
                    <img src={filler6} alt='filler image 6'/>
                    <img src={filler7} alt='filler image 7'/>
                    <img src={filler8} alt='filler image 8'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Newborns</h1>
                <Slider {...settings}>
                    <img src={filler1} alt='filler image 1'/>
                    <img src={filler2} alt='filler image 2'/>
                    <img src={filler3} alt='filler image 3'/>
                    <img src={filler4} alt='filler image 4'/>
                    <img src={filler5} alt='filler image 5'/>
                    <img src={filler6} alt='filler image 6'/>
                    <img src={filler7} alt='filler image 7'/>
                    <img src={filler8} alt='filler image 8'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Families</h1>
                <Slider {...settings}>
                    <img src={filler1} alt='filler image 1'/>
                    <img src={filler2} alt='filler image 2'/>
                    <img src={filler3} alt='filler image 3'/>
                    <img src={filler4} alt='filler image 4'/>
                    <img src={filler5} alt='filler image 5'/>
                    <img src={filler6} alt='filler image 6'/>
                    <img src={filler7} alt='filler image 7'/>
                    <img src={filler8} alt='filler image 8'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Portraits</h1>
                <Slider {...settings}>
                    <img src={filler1} alt='filler image 1'/>
                    <img src={filler2} alt='filler image 2'/>
                    <img src={filler3} alt='filler image 3'/>
                    <img src={filler4} alt='filler image 4'/>
                    <img src={filler5} alt='filler image 5'/>
                    <img src={filler6} alt='filler image 6'/>
                    <img src={filler7} alt='filler image 7'/>
                    <img src={filler8} alt='filler image 8'/>
                </Slider>
            </section>
        </main>
    )
}


export default Portfolio;