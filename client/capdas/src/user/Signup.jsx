import { useState } from "react";
import styled from "styled-components";
import Wrapper from "./utils/Wrapper";
import { TextInput, Label, EmailInput, PasswordInput, CheckBox, Form } from "../utils/Input";
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

    const handleNew = async (e) => {
        e.preventDefault();

        try {

            await base.post('/signup', userDetails);

        } catch (err) {
            console.log(err.message);
        }

    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value } = e.target;

        setUserDetails({
            ...userDetails,
            [name]: value,
        })
    }

    const { name, email, password } = userDetails;
    return (
        <Wrapper>
            <Form onSubmit={handleNew}>
            <Label for="name">
                Name
                <br />
                <TextInput
                    name="name"
                    value={name}
                    type="text"
                    onChange={(e)=>handleChange(e)}
                />
            </Label>
            <br />
            <Label for="email">
                E-mail
                <br />
                <EmailInput
                    name="email"
                    value={email}
                    type="email"
                    onChange={handleChange}
                />
            </Label>
            <br />
            <Label for="password">
                Password
                <br />
                <PasswordInput
                    name="password"
                    value={password}
                    type="password"
                    onChange={handleChange}
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