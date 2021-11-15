import styled from "styled-components"
import Cross from "../user/utils/Cross"
import rightArrow from "../Homepage/images/rightArrow.png";
import leftArrow from "../Homepage/images/leftArrow.jpg"
import { Link } from "react-router-dom";

const Top = styled.div`
margin: 10px 0;
width: 110%;
/* height: 0px; */
z-index: 2;
display: grid;
position: absolute;
grid-template-columns: auto auto;
float: inline-start;

img{
margin-left: 30px;

}
`;
const Container = styled.div`
width: 100%;
height: 767px;
 background-image: url("https://5.imimg.com/data5/SELLER/Default/2020/8/KZ/LW/DW/29002038/casement-fabric-500x500.jpg");
background-repeat: no-repeat;
background-size: cover;


  button:nth-child(1){
position: absolute;
top: 21px;
right: 29px;
background-color: transparent;
z-index: 1;
}
 @supports (backdrop-filter: none) {
     div{
    height: 767px;
     align-items: center;
    display: flex;
    justify-content: center;
    /* margin: 41px 127px 304px 24px ; */
      -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);

        
}
 }
`;


const Flex = styled.div`
z-index: 1;
  width: 224px;
   text-align: left !important;
height: 422px !important;
margin: 27px 127px 304px 24px ;
background-color: #D5E6D5;
display:flex;
flex-direction: column;
box-sizing: border-box;
padding: 10px;
border-radius: 10px;
color: #151A17;

div > div > a {
    color: #151A17;
}

div{
    display:flex;
    justify-content: space-between;
flex-direction: row;
    width: 100%;
    height: 53.2px;
     text-align: left !important;
    div:nth-child(1){
       width: 900px;
    }
    p{
font-size: 24px;
font-weight: 700;
line-height: 29.76px;
letter-spacing: 1px;
    }
   
}
div:nth-child(8){
height:59px;
}
`

const Btn = styled.div`
width: 134px !important;
display:block;
height: 40px !important;
background-color: #56675B;
border-radius: 10px;
border: none;
color: #FFFFF7;
font-size: 24px;
font-weight: 700;
line-height: 30px;
letter-spacing: 1px;
text-align: center;
margin-top: -10px;
`


export const MendMenu = () => {


    return <>
          <Top> <img src={ leftArrow}alt="" /> <Cross/></Top>
        <Container>
           
            <div>
                
                <Flex>
                    
                    <div><div><Link to="/mend"><p>Upperwear</p></Link></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    
                    
                    <div><div><Link to="/mend"><p>Bottomwear</p></Link></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    
                    
                    <div><div><Link to="/mend"><p>Winterwear</p></Link></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    
                    
                    <div><div><Link to="/mend"><p>Formals</p></Link></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    
                    
                    <div><div><Link to="/mend"><p>Footware</p></Link></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    
                    
                    <div><div><Link to="/mend"><p>Accessories</p></Link></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    
                    
                </Flex>
            </div>
        </Container>
    </>
}