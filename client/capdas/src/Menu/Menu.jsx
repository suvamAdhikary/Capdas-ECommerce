import styled from "styled-components"
import rightArrow from "../Homepage/images/rightArrow.png";
import Cross from "../user/utils/Cross"
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


  button:nth-child(1){
position: absolute;
top: 21px;
right: 29px;
background-color: transparent;
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
    /* div:nth-child(2){
     
    } */
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


export const Menu = () => {
    return <>
        <Top></Top>
        <Container>
            <div>
                <Cross/>
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
                    <div><Btn>Sign Up/In</Btn></div>
</Flex>
            </div>
        </Container>
    </>
}