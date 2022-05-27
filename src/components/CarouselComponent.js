import React from "react";
import { Carousel } from "react-bootstrap";

const MyCarousel = (props) => {

    return (
      <>
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              height={"600px"}
              src={props.img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Prvi slajd</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              height={"600px"}
              src={props.img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Drugi slajd</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              height={"600px"}
              src={props.img3}
              alt="Treci slajd"
            />

            <Carousel.Caption>
              <h3>Treci slajd</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        ;
      </>
    );
}

export default MyCarousel;
