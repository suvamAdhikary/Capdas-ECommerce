import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import leftArrow from "../Homepage/images/leftArrow.jpg"
import Button from "../utils/Button";
import { base } from "../utils/request";
import BagCard from "./BagCard";

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

    const [bagItems, setBagItems] = useState([]);
    const [userData, setUserData] = useState({});
    const [load, setLoad] = useState(1)

    const userId = JSON.parse(localStorage.getItem('CapdaS_user_id'));

    const getBagItems = async (id) => {

        try {
            
            const { data: {cart, user}} = await base.get(`/carts/final/${id}`);
 

            setBagItems(cart);
            setUserData(user);

            return;

        } catch (err) {

            console.log(err.message);
        }
    }

    const handleAdd = async (id, rs, count) => {

        try {

            let {data : {item}} = await base.get(`/users/${userId}`)
  
            await base.patch(`/carts/${id}`, {
                price: +rs + (+rs / +count),
                quantity: +count + 1,
            })

            await base.patch(`/users/${userId}`, {
                totalPrice: item.totalPrice + (+rs / +count),
                totalItemsInBag: item.totalItemsInBag + 1,
            })

            setLoad(load + 1)

            return;

        } catch (err) {
            console.log(err.message);
        }

    }
    const handleSub = async (id, rs, count) => {

        try {

            let {data: {item}} = await base.get(`/users/${userId}`)

            await base.patch(`/carts/${id}`, {
                price: +rs - (+rs / +count),
                quantity: +count - 1,
            })

            await base.patch(`/users/${userId}`, {
                totalPrice: item.totalPrice - (+rs / +count),
                totalItemsInBag: item.totalItemsInBag - 1,
            })

            setLoad(load - 1)

            return;

        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {

        getBagItems(userId);

        return;
    }, [userId, load])




    
    return <><CONTAINER><div><Link to="/women/sarees"><img src={leftArrow} alt="" /></Link></div><div><p>Bag</p></div></CONTAINER>
        {/* <OrderedItm> */}
            {bagItems.map((data) => (
                <BagCard 
                    key={data._id}
                    bagData={data}
                    handleAdd={handleAdd}
                    handleSub={handleSub}
                />
            ))}
        {/* </OrderedItm> */}
        <Div3>
            <div>
            <p>Subtotal</p>
            <p>Discount</p>
            <p>Total</p>
            </div>
            <div>
            <p>{userData?.totalPrice}</p>
            <p>{+userData?.totalPrice * 0.5}</p>
            <p>{Math.round((+userData?.totalPrice) - (+userData?.totalPrice * 0.05))}</p>
            </div>
        </Div3>
        <Link to="/payment">
            <Button>
                Checkout
            </Button>
        </Link>
    
    </>
}