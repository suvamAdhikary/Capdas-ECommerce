import styled from "styled-components";

// const Card = styled.div`
// display: flex;
// flex-direction: row;
// `;

const OrderedItm = styled.div`
display: flex;
flex-direction: row;
/* margin-bottom: 2px; */
`;

const Div1 = styled.div`
height: 151px;
width: 101px;
margin-left: 24px;
border-radius: 10px;

/* background: #56675B; */
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

export default function BagCard ({bagData, handleAdd, handleSub}) {

    return (<>
        <OrderedItm>
            <Div1><img src={bagData?.image} alt="img" /></Div1>
            <Div2>
                <div>
                    <p>{bagData?.name}</p>
                    <p>Proudly Made in India, using 100% organic cotton.</p>
                    <p>Standard Saree Length</p>
                </div>
                <div><button onClick={() => handleSub(bagData._id, bagData.price, bagData.quantity)}><p>-</p></button>
                   <p>{bagData?.quantity}</p>
                    <button onClick={() => handleAdd(bagData._id, bagData.price, bagData.quantity)}><p>+</p></button>
                </div>
            </Div2>
        </OrderedItm>
    </>)
}