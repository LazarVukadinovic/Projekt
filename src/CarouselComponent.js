import React from "react";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {

    return (
      <>
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              height={"600px"}
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
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
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
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
              src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"
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
