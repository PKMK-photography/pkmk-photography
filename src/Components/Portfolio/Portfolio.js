import React, {useEffect} from 'react';
import Slider from 'react-slick';
import couples1 from '../../assets/images/portfolio/couples/DSCF6479.jpg';
import couples2 from '../../assets/images/portfolio/couples/DSCF8693.jpg';
import couples3 from '../../assets/images/portfolio/couples/DSCF9227.jpg';
import couples4 from '../../assets/images/portfolio/couples/DSCF9407.jpg';
import couples5 from '../../assets/images/portfolio/couples/IMG_4958.jpg';
import couples6 from '../../assets/images/portfolio/couples/IMG_4996.jpg';
import family1 from '../../assets/images/portfolio/family/DSCF2304.jpg';
import family2 from '../../assets/images/portfolio/family/IMG_3241.jpg';
import family3 from '../../assets/images/portfolio/family/IMG_4940.jpg';
import family4 from '../../assets/images/portfolio/family/JH3A0278.jpg';
import family5 from '../../assets/images/portfolio/family/JH3A0298.jpg';
import family6 from '../../assets/images/portfolio/family/JH3A0302.jpg';
import portrait1 from '../../assets/images/portfolio/portraits/JH3A0102.jpg';
import portrait2 from '../../assets/images/portfolio/portraits/JH3A0141.jpg';
import portrait3 from '../../assets/images/portfolio/portraits/JH3A0206.jpg';
import portrait4 from '../../assets/images/portfolio/portraits/JH3A0441.jpg';
import portrait5 from '../../assets/images/portfolio/portraits/JH3A0466.jpg';
import portrait6 from '../../assets/images/portfolio/portraits/JH3A0602.jpg';
import wedding1 from '../../assets/images/portfolio/weddings/DSCF0046.jpg';
import wedding2 from '../../assets/images/portfolio/weddings/DSCF0194.jpg';
import wedding3 from '../../assets/images/portfolio/weddings/IMG_5108.jpg';
import wedding4 from '../../assets/images/portfolio/weddings/IMG_5124.jpg';
import wedding5 from '../../assets/images/portfolio/weddings/IMG_5211.jpg';
import wedding6 from '../../assets/images/portfolio/weddings/IMG_5246.jpg';
import newborn1 from '../../assets/images/portfolio/newborns/IMG_1081-2.jpg';
import newborn2 from '../../assets/images/portfolio/newborns/IMG_1246.jpg';
import newborn3 from '../../assets/images/portfolio/newborns/IMG_1512.jpg';
import newborn4 from '../../assets/images/portfolio/newborns/IMG_1614.jpg';
import newborn5 from '../../assets/images/portfolio/newborns/IMG_3503.jpg';
import newborn6 from '../../assets/images/portfolio/newborns/IMG_9626.jpg';
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
        focusOnSelect: true,
        variableWidth: true
    }

    return (
        <main className='portfolio'>
            <h1 className='portfolio-heading'>Portfolio</h1>
            <section className='portfolio-carousel-section'>
                <h1>Couples</h1>
                <Slider {...settings} className='slider'>
                    <img src={couples1} alt='Couples 1'/>
                    <img src={couples2} alt='Couples 2'/>
                    <img src={couples3} alt='Couples 3'/>
                    <img src={couples4} alt='Couples 4'/>
                    <img src={couples5} alt='Couples 5'/>
                    <img src={couples6} alt='Couples 6'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Weddings</h1>
                <Slider {...settings}>
                    <img src={wedding1} alt='Wedding 1'/>
                    <img src={wedding2} alt='Wedding 2'/>
                    <img src={wedding3} alt='Wedding 3'/>
                    <img src={wedding4} alt='Wedding 4'/>
                    <img src={wedding5} alt='Wedding 5'/>
                    <img src={wedding6} alt='Wedding 6'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Newborns</h1>
                <Slider {...settings}>
                    <img src={newborn1} alt='Newborn 1'/>
                    <img src={newborn2} alt='Newborn 2'/>
                    <img src={newborn3} alt='Newborn 3'/>
                    <img src={newborn4} alt='Newborn 4'/>
                    <img src={newborn5} alt='Newborn 5'/>
                    <img src={newborn6} alt='Newborn 6'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Families</h1>
                <Slider {...settings}>
                    <img src={family1} alt='Family 1'/>
                    <img src={family2} alt='Family 2'/>
                    <img src={family3} alt='Family 3'/>
                    <img src={family4} alt='Family 4'/>
                    <img src={family5} alt='Family 5'/>
                    <img src={family6} alt='Family 6'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Portraits</h1>
                <Slider {...settings}>
                    <img src={portrait1} alt='Portrait 1'/>
                    <img src={portrait2} alt='Portrait 2'/>
                    <img src={portrait3} alt='Portrait 3'/>
                    <img src={portrait4} alt='Portrait 4'/>
                    <img src={portrait5} alt='Portrait 5'/>
                    <img src={portrait6} alt='Portrait 6'/>
                </Slider>
            </section>
        </main>
    )
}


export default Portfolio;