import { Carousel } from "react-bootstrap";
import img from "../Homepage/images/img.jpg";
import img2 from "../Homepage/images/img2.jpg";
import img1 from "../Homepage/images/img1.jpg";
import styled from "styled-components";

const CarouselImg = styled.img`
border-radius: 10px;
height: 160px;
`;


function CarouselContainer () {
  return <Carousel fade={true } controls={true} >
  <Carousel.Item interval={2000}>
    <CarouselImg
      className="d-block w-100"
       src={ img}
      alt="First slide"
    /> 
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <CarouselImg
      className="d-block w-100"
                    src={img2}
                    alt="Second slide"
            />
             
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <CarouselImg
      className="d-block w-100"
     src={ img1}
     alt="Third slide"
            />
          
  </Carousel.Item>
</Carousel>
   
};
export default CarouselContainer;