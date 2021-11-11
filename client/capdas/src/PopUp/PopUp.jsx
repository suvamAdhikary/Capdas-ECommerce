import styled from "styled-components"
import rightArrow from "../Homepage/images/rightArrow.png";
import Cross from "../utils/Cross.jsx"
const Top = styled.div`
width: 100%;
height: 45px;
`;
const Container = styled.div`
width: 100%;
height: 767px;
 background-image: url("https://5.imimg.com/data5/SELLER/Default/2020/8/KZ/LW/DW/29002038/casement-fabric-500x500.jpg");
background-repeat: no-repeat;
background-size: cover;


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
const SVG = styled.svg`
position: absolute;
top: 21px;
right: 29px;
`

const Flex = styled.div`
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
 button{
width:144px;
height: 46px;
background-color: #56675B;
border-radius: 10px;
border: none;
color: #FFFFF7;
font-size: 24px;
font-weight: 700;
line-height: 30px;
letter-spacing: 1px;
text-align: center;

}   `


export const PopUp = () => {
    return <>
        <Top></Top>
       
        <Container>
            <div>
        {/* <SVG xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#151A17"/>
</SVG> */}
                <Flex>
                    <div>
                    <div><p>Mend</p></div>
                        <div><img src={rightArrow} alt="" /></div>
                    </div>
                    <div><div><p>Rent</p></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    <div><div><p>Upcycle</p></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    <div><div><p>Swap</p></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    <div><div><p>Buy</p></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    <div><div><p>DONATE</p></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    <div><div><p>Work with Us</p></div>
                    <div><img src={rightArrow} alt="" /></div></div>
                    <div><button>Sign Up/In</button></div>
</Flex>
            </div>
        </Container>
    </>
}