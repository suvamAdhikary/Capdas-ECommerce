import styled from "styled-components";
import CarouselContainer from "../components/CarouselContainer";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import png1 from "./images/png1.jpg";
import png2 from "./images/png2.jpg";
import Rectangle65 from "./images/img7.jpg";
import Rectangle66 from "./images/img8.jpg";
import Rectangle67 from "./images/img9.jpg";
import Rectangle68 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";

const Body = styled.body`
width: 375px;
`;

const PP = styled.p`
font-weight: 400 !important;
margin: 5px 0 !important;
font-size: 12px !important;
line-height :14.88px !important;
color: #5B5F5D;
letter-spacing: 1px !important;
`;
const Span = styled.span`
font-weight: 700;
font-size: size 14px;
letter-spacing: 1px;
`


const Div = styled.div`
height: 17px;
width: 229px;
margin:auto;
p{
font-weight: 400;
}
`;
const Slider = styled.div`
    width: 375px;
    margin-top: 25px;
   
    div{
         width: 375px;
        height: 160px;
    }
`
const Tab = styled.div`
    margin: 32px auto;
 
    width: 450px;
    height: 72px;
    text-align: center;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
div{
    box-sizing: border-box;
    padding-top: 10px;
    width: 151px !important;
    height: 72px;
    background-color: #D5E6D5;
    border-radius: 10px;
    font-size: 12px;
    line-height: 14.88px;

    p{
        margin-top: 4px;
    }
}
div:nth-child(1){
    top: 50%;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 17px;
letter-spacing: 1px;
padding-top: 0px;
width: 80px !important;
background-color: white;
margin-top: 17px;
}

`
const Offer = styled.div`
height: 136px;
width: 327px;
margin: auto;
border-radius: 10px;
 background: #D5E6D5;
 box-sizing: border-box;
 padding: 30px 25px;

 p{
margin-bottom: 0px;
font-size: 18px;
line-height: 22.32px;
letter-spacing: 1px;
font-weight: 500;
 }
`;
const Cont = styled.div`
width: 327px;
margin: auto;
display: flex;
justify-content: space-between;
flex-direction: row;
/* border: 1px solid black; */

div{
width: 152px;
height: 152px;
margin-top: 32px;
border-radius: 10px;
background: #D5E6D5;
p{
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 19.84px;
    margin: 9px auto;
    font-weight: 400;
}
}
`;

const Circles = styled.div`
width: 324px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 32px auto;
height: 72px;

div{
    width: 72px;
    height: 72px;
    border-radius: 50%;
}
`





export const Hp = () => {
    return <><Body>
        <Div><p>Estimated delivery time 1-2 days</p></Div>
        <Slider>
            <div><CarouselContainer/></div>
        </Slider>
        <Tab><div>Our Promises</div>
            <div><img src={ png2} alt="" /><p>Sustainability</p></div>
            <div><img src={ png1} alt="" /><p>Safe Delivery</p></div></Tab>
        <Offer><p>Donate your worn out clothes
            and get <Span>EXTRA</Span> 10% discount.</p>
            <PP>*Discount applicable only on non discounted prodcuts</PP>
        </Offer>
        <Cont><div><p>Under 499</p><img src={img5} alt="img" /></div>
            <div><p>Under 899</p><img src={img6} alt="img" /></div></Cont>
        <Circles>
            <div><img src={Rectangle65} alt="" /></div>
            <div><img src={Rectangle68} alt="" /></div>
            <div><img src={Rectangle67} alt="" /></div>
            <div><img src={Rectangle66} alt="" /></div>
        </Circles>
        <img src={img11} alt="" />
      
    </Body></>
}