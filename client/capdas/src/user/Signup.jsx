import { useState } from "react";
import styled from "styled-components";
import Wrapper from "./utils/Wrapper";
import { NameInput, Label, EmailInput, PasswordInput, CheckBox, Form } from "../utils/Input";
import { Aggrement, AggrementWrapper } from "./utils/Aggrement";
import Button from "./utils/Button";
import { Fb, Google, SocialWrapper } from "./utils/SocialLog";
import { base } from "../utils/request";


export default function Signup() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await base.post('/register', userDetails ,{
                mode: 'same-origin'
            });

        } catch (err) {
            console.log(err.message);
        }

    }

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setUserDetails({
            ...userDetails,
            [name]: value,
        })
    }

    const { name, email, password } = userDetails;
    return (
        <Wrapper>
            <Form handleSubmit={handleSubmit}>
            <Label>
                Name
                <br />
                <NameInput
                    name={name}
                    handleChange={handleChange}
                />
            </Label>
            <br />
            <Label>
                E-mail
                <br />
                <EmailInput
                    name={email}
                    handleChange={handleChange}
                />
            </Label>
            <br />
            <Label>
                Password
                <br />
                <PasswordInput
                    name={password}
                    handleChange={handleChange}
                />
            </Label>
            <br />
            <AggrementWrapper>
            <CheckBox />
                {" "}
                <Aggrement>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></Aggrement>
            </AggrementWrapper>
            <Button>Sign Up</Button>
            </Form>
            <Aggrement>Or</Aggrement>
            <SocialWrapper>
                <Google />
                <Fb />
            </SocialWrapper>
        </Wrapper>
    )
}