import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import imgx from './images/imgx.jpg'
// import img3 from './images/img3.jpg'
import './CarouselPage.css'

function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item> 
      <img style={{height:'90vh',  backgroundRepeat: 'no-repeat',
    backgroundSize: '50% 100%',
    backgroundPosition: 'right-top'  }}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img2}
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage