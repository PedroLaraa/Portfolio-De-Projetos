import React from 'react';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Carrossel.css'
import RangeHardSkills from '../RangeHardSkills';

const Carrossel = (props) => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img className='imgHardSkills' src={props.caminhoImagem1} alt={props.alt1} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem2} alt={props.alt2} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem3} alt={props.alt3} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem11} alt={props.alt11} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem4} alt={props.alt4} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem5} alt={props.alt5} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem10} alt={props.alt10} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem6} alt={props.alt6} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem7} alt={props.alt7} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem8} alt={props.alt8} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
        <img className='imgHardSkills' src={props.caminhoImagem9} alt={props.alt9} onDragStart={handleDragStart} role="presentation" width='250px' height='250px' />,
    ];

    return (
        <div className='carouselSliderDiv'>
            <div className='containerCarousel'>
                <h1 className='pb-4'>Hard Skills</h1>
                <AliceCarousel
                    className='carouselSlider'
                    mouseTracking
                    autoWidth={true}
                    autoHeight={true}
                    autoPlay={true}
                    infinite={true}
                    autoPlayInterval='3000'
                    items={items} />
                <RangeHardSkills />
            </div>
        </div>
    );
};

export default Carrossel;
