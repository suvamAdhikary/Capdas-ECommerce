import styled from "styled-components";
import leftArrow from "../Homepage/images/leftArrow.jpg"


const CONTAINER = styled.div`
margin-top: 56px;
display: flex;
flex-direction: row;

div:nth-child(1){
    width: 20%;
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

const OrderedItm = styled.div`
display: flex;
flex-direction: row;
`;

const Div1 = styled.div`
height: 151px;
width: 101px;
margin-left: 24px;
border-radius: 10px;
background: #56675B;
/* border: 1px solid black; */
`;

const Div2 = styled.div`
width: 220px;
margin-left: 17px;
height: 151px;
/* border: 1px solid #7E817F; */
text-align: left;
div{

    p:nth-child(1){
       font-weight: 600;
       height: 22px;
       width: 148px;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 1px;
        margin-bottom:5px ;
    };
     p:nth-child(2){
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 1px;
        text-align: left;
        color: #7E817F;
        margin-bottom:5px ;
};
 p:nth-child(3){
color: #7E817F;
font-size: 12px;
font-weight: 400;
line-height: 15px;
letter-spacing: 1px;
};
   }
   div:nth-child(2){
       margin-top: 55px;
background: #D5E6D5;
width: 71px;
height: 24px;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;

button{
border: none;
border-radius: 5px;
background: #D5E6D5;
padding: 0px 10px;
box-sizing: border-box;
margin-bottom: 0px;
p{
    width: 15px;
    font-weight: 700;
    color: #56675B;
    font-size: 22px;}
}
   }`;

const Div3 = styled.div`
   display: flex;
   flex-direction: row;
   margin: 32px 24px;
   /* border: 1px solid black; */
   justify-content: space-between;
   div:nth-child(1)> p:nth-child(1),div:nth-child(1)> p:nth-child(2),
   div:nth-child(2)> p:nth-child(1),div:nth-child(2)> p:nth-child(2){
     color: #5B5F5D;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 1px;
margin-bottom: 5px;
font-weight:400px;
   }
    div:nth-child(1)> p:nth-child(3),
   div:nth-child(2)> p:nth-child(3){
font-weight: 600;
text-align: left;
color:#151A17;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 1px;
   }
`;

export const Bag = ()=> {

    
    return <><CONTAINER><div><img src={leftArrow} alt="" /></div><div><p>Bag</p></div></CONTAINER>
        <OrderedItm>
            <Div1><img src="" alt="" /></Div1>
            <Div2>
                <div>
                    <p>ROOP: CYAN</p>
                    <p>Proudly Made in India, using 100% organic cotton.</p>
                    <p>Standard Saree Length</p>
                </div>
                <div><button><p>-</p></button>
                   <p></p>
                    <button><p>+</p></button>
                </div>
            </Div2>
        </OrderedItm>
        <Div3>
            <div>
            <p>Subtotal</p>
            <p>Discount</p>
            <p>Total</p>
            </div>
            <div>
            <p>123</p>
            <p>654</p>
            <p>564</p>
            </div>
        </Div3>
    
    
    </>
}