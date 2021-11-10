import styled from "styled-components";
import { Form } from "./utils/Input";
import Wrapper from "./utils/Wrapper";
import Cross from "./utils/Cross";
import { useState } from "react";
import { base } from "../utils/request";
const Input = styled.input`

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

    const hanldeSubmit = async () => {

        try {
            await base.patch(`/users`)
        } catch (err) {
            console.log(err.message);
        }
    }

    const { name, houseNo, locality, pin, city, state } = formData;
    return (
        <Wrapper>
            <Cross />
            <p>Add Address</p>
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
        </Wrapper>
    )
}