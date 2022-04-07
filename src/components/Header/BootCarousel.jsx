import React from 'react'
import '../Header/Header.css'
import { Carousel } from 'react-bootstrap'
import image1 from '../../images/one.jpg'
import image2 from '../../images/two.jpg'
import image3 from '../../images/three.jpg'

const BootCarousel = () => {
    return (
        <div className='carousel__container'>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BootCarousel;