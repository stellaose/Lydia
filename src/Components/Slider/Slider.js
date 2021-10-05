import { useState } from 'react';
import { SliderData } from './SliderData';
import BtnSlider from './BtnSlider';
import { Link } from 'react-router-dom';
import '../../Stylesheets/Slider.css';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== SliderData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === SliderData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(SliderData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <>
            <div className = 'container'>
                <hr/>
                    
                    <div className = '"container-slider"'>
                            {SliderData.map((obj, index) => {
                            return (
                                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                                    <img 
                                    src={process.env.PUBLIC_URL + `/Photos/Slide${index + 1}.jpg`} alt= "" 
                                    />
                                </div>
                            )
                        })}
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

                        <div className="container-dots">
                            {Array.from({length: 5}).map((item, index) => (
                                <div 
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className = 'title'>
                        <h1>Design service you will get.</h1>
                        <div className = 'service'>
                                <h2>1</h2>
                                <h2>2</h2>
                                <p>Ideas</p>
                                <p>Consultation</p>
                        </div>
                        <Link to = '/service'>
                                <p>See more of our services &gt;&gt; </p>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default Slider;