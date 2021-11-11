import styled from "styled-components";
import leftArrow from "../Homepage/images/leftArrow.jpg"
import Group from "../Homepage/images/Group.png";
const Main = styled.div`
button{
    width: 328px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-bottom: 8px;
background-color: #D5E6D5;
box-sizing: border-box;
padding-top: 7px;
color:#151A17;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 1px;
text-align: left;
}
svg{
    margin: 7px 50px 14px 14px;
    display: flex;
    justify-content: flex-start;
    float: left;
}
`;

const CONTAINER = styled.div`
margin-top: 56px;
display: flex;
flex-direction: row;

div:nth-child(1){
    width: 20%;
}
div:nth-child(1)>img{
    /* margin-left: 224px; */
    
}
div:nth-child(2){
width:60%;
}
div:nth-child(2)>p{
   text-align: center;
   margin-bottom: 24px;
}
img{
    margin-top: 0px;   
}
p{
font-size: 22px;
font-weight: 400;
line-height: 27px;
letter-spacing: 1px;
text-align: center;
}
`;

const Tab = styled.div`

div{
    display: flex;
    flex-direction: row;
    width: 87%;
    margin: auto;
    /* border: 1px solid black; */
    div:nth-child(1){
        width: 10px;
    };
    div:nth-child(1)>img{
margin: 0 0px 60px -9px;
    }
    /* div:nth-child(1)> */
    div:nth-child(2){
        display: flex;
        flex-direction: column;
    }
div:nth-child(2) > p:nth-child(1){
    color:#151A17;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 1px;
margin: 0;
text-align: left;
/* margin-left: 10px; */
};

div:nth-child(2) > p:nth-child(2){
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 1px;
text-align: left;
/* margin-left: 10px; */
};
}
`;


export const Payment = ({children}) => {
    return <Main><CONTAINER><div><img src={leftArrow} alt="" /></div><div><p>{children}</p></div></CONTAINER>
        <Tab><div>
            <div><img src={Group} alt="" /></div>
            <div>
                <p>Bank Offers</p>
                <p>10% instant discount with HDFC Bank Credit cards on a min. spend of Rs. 3000. TCA</p>
            </div>
           </div>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<circle cx="6" cy="6" r="6" fill="#FFFFF7"/>
            </svg>
                Card</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<circle cx="6" cy="6" r="6" fill="#FFFFF7"/>
</svg>Wallet</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<circle cx="6" cy="6" r="6" fill="#FFFFF7"/>
</svg>Cash on Delivery</button>
 </Tab>
    </Main>
}