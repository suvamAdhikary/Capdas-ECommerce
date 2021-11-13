import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base } from "../utils/request"
import styled from "styled-components"
import Button from "../utils/Button";
import { useParams } from "react-router";


const Back = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 24px;
    top: 58px;
`;

const Title = styled.div`
    position: absolute;
    width: 90px;
    height: 27px;
    left: 143px;
    top: 56px;
    font-family: Cabinet Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #151A17;
`;

const TotalAmount = styled.div`
    position: absolute;
    width: 327px;
    height: 38px;
    left: 24px;
    top: 107px;

    p {
        position: absolute;
        width: 158px;
        height: 16px;
        left: 84px;
        top: 11px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 1px;
        color: #5B5F5D;
    }
`;

const Card = styled.div`
    position: absolute;
    width: 223px;
    height: 223px;
    left: 76px;
    top: 150px;
`;

const P = styled.p`
    position: absolute;
    width: 183px;
    height: 19px;
    left: 24px;
    top: 375px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    letter-spacing: 1px;
    color: #151A17;
`;

const Form = styled.form`
    input {
        border: 1px solid #56675B;
        border-radius: 10px;
        width: 327px;
        height: 40px;
        left: 24px;
    }
    .inp_name {
        position: absolute;
        left: 24px;
        top: 408px;
    }
    .inp_number {
        position: absolute;
        top: 463px;
    }
    .inp_expiry {
        position: absolute;
        width: 152px;
        top: 518px;
    }
    .inp_cvv {
        position: absolute;
        width: 151px;
        left: 200px;
        top: 518px;
    }

    .footer {
        position: absolute;
        width: 375px;
        height: 84px;
        left: 0px;
        top: 728px;
        background: #FFFFFF;
    }
`;


export const CardDetail = () => {
    const [data, setData] = useState({});
    const [cardData, setCardData] = ({
        name: "",
        no: "",
        expiry: "",
        cvv: ""
    })

    useEffect (() => {
        getData();
    })

    const obj = useParams();
    const getData = async (id) => {
    
        try {
            const {data : {user}} = await base.get(`/users/${id}`);

            setData(user);

        } catch (err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        getData(obj.userId)
        return;
    }, [obj.userId])

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setCardData({
            ...cardData,
            [name]: value,
        })
    }

    const [name, no, expiry, cvv] = cardData;

    return (
        <>
            <Back>
                <Link to="/payment">
                    <img src="assets/leftarrow.svg" alt="back" />
                </Link>
            </Back>
            <Title>
                <p>Payment</p>
            </Title>
            <TotalAmount>
            <p>{data?.totalItemInBags} Item: Total Rs {data?.totalPrice}</p>
            </TotalAmount>
            <Card>
                <img src="assets/card.png" alt="cardImage" />
            </Card>
            <P>
                <p>Enter your card details</p>
            </P>
            <Form>
                <input onChange={(e) => handleChange(e)} name="name" value={name} className="inp_name" type="text" placeholder="Cardholder name" />
                <input onChange={(e) => handleChange(e)} name="no" value={no} className="inp_number"  type="text" placeholder="Crad Number" />
                <input onChange={(e) => handleChange(e)} name="expiry" value={expiry} className="inp_expiry"  type="text" placeholder="Expiry" />
                <input onChange={(e) => handleChange(e)} name="cvv" value={cvv} className="inp_cvv"  type="password" placeholder="CVV" />

                <Link to="/success">
                    <Button> Confirm Payment </Button>
                </Link>

            </Form>
        </>
    );
}