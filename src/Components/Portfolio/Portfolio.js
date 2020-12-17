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
        // lazyLoad: true,
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
                    <img src={couples1} alt='filler 1'/>
                    <img src={couples2} alt='filler 2'/>
                    <img src={couples3} alt='filler 3'/>
                    <img src={couples4} alt='filler 4'/>
                    <img src={couples5} alt='filler 5'/>
                    <img src={couples6} alt='filler 6'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Weddings</h1>
                <Slider {...settings}>
                    <img src={wedding1} alt='filler 1' loading='lazy'/>
                    <img src={wedding2} alt='filler 2' loading='lazy'/>
                    <img src={wedding3} alt='filler 3' loading='lazy'/>
                    <img src={wedding4} alt='filler 4' loading='lazy'/>
                    <img src={wedding5} alt='filler 5' loading='lazy'/>
                    <img src={wedding6} alt='filler 6' loading='lazy'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Newborns</h1>
                <Slider {...settings}>
                    <img src={newborn1} alt='filler 1' loading='lazy'/>
                    <img src={newborn2} alt='filler 2' loading='lazy'/>
                    <img src={newborn3} alt='filler 3' loading='lazy'/>
                    <img src={newborn4} alt='filler 4' loading='lazy'/>
                    <img src={newborn5} alt='filler 5' loading='lazy'/>
                    <img src={newborn6} alt='filler 6' loading='lazy'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Families</h1>
                <Slider {...settings}>
                    <img src={family1} alt='filler 1' loading='lazy'/>
                    <img src={family2} alt='filler 2' loading='lazy'/>
                    <img src={family3} alt='filler 3' loading='lazy'/>
                    <img src={family4} alt='filler 4' loading='lazy'/>
                    <img src={family5} alt='filler 5' loading='lazy'/>
                    <img src={family6} alt='filler 6' loading='lazy'/>
                </Slider>
            </section>
            <section className='portfolio-carousel-section'>
                <h1>Portraits</h1>
                <Slider {...settings}>
                    <img src={portrait1} alt='filler 1' loading='lazy'/>
                    <img src={portrait2} alt='filler 2' loading='lazy'/>
                    <img src={portrait3} alt='filler 3' loading='lazy'/>
                    <img src={portrait4} alt='filler 4' loading='lazy'/>
                    <img src={portrait5} alt='filler 5' loading='lazy'/>
                    <img src={portrait6} alt='filler 6' loading='lazy'/>
                </Slider>
            </section>
        </main>
    )
}


export default Portfolio;