import React from "react";
import kk from "../../Images/gold1.jfif";
import kk2 from "../../Images/gold2.jfif";
import '.././Style.css'
import Carousel from 'react-bootstrap/Carousel'
import '.././Style.css'

const CarosoulProduk = () => {
    return (
        <div>
            <Carousel className='mb-3'>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={kk}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>New Product</h3>
                        <p>MINIGOLD</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={kk2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Elegant</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={kk}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>MINI CARD GOLD</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarosoulProduk;