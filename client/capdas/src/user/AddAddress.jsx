import styled from "styled-components";
import { Form } from "./utils/Input";
import Wrapper from "./utils/Wrapper";
import Cross from "./utils/Cross";
import { useState } from "react";
import { base } from "../utils/request";
import Button from "../utils/Button";


const Input = styled.input`
    
    border: 0.5px solid #151A17;
    border-radius: 10px;
    color: #151A17;


    @media screen and (max-width: 375px) {
        width: 327px;
        height: 45px;
        margin: 20px 0;
        font-weight: 700;
        font-size: 16px;
        line-height: 19.84px;
        letter-spacing: 1px;
        padding-left: 10px;
    }
`;

const initState = {
    name: "",
    houseNo: "",
    locality: "",
    pin: "",
    city: "",
    state: "",
};

export default function AddAddress() {
    const [formData, setFormData] = useState(initState);

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async () => {
        const id = JSON.parse(localStorage.getItem('CapdaS_user_id'));
        console.log(JSON.stringify({
            "address": formData
        }));
        try {
            await base.patch(`/users/${id}`, {
                "address": formData
            });

        } catch (err) {
            console.log(err.message);
        }
    }

    const { name, houseNo, locality, pin, city, state } = formData;
    return (
        <Wrapper>
            <Cross />
            <p className="addaddress__heading">Add Address</p>
            <Form>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Name"
                />
                <Input
                    type="text"
                    name="houseNo"
                    value={houseNo}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Flat/HouseNo."
                />
                <Input
                    type="text"
                    name="locality"
                    value={locality}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Street/Locality"
                />
                <Input
                    type="text"
                    name="pin"
                    value={pin}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Pin Code"
                />
                <div>
                <Input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e)=>handleChange(e)}
                    placeholder="City"
                />
                <Input
                    type="text"
                    name="state"
                    value={state}
                    onChange={(e)=>handleChange(e)}
                    placeholder="State"
                />
                </div>
            </Form>
            <Button handleSubmit={handleSubmit}>
                Add new Address
            </Button>
        </Wrapper>
    )
}