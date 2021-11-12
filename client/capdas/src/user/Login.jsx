import { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./utils/Wrapper";
import { Label, EmailInput, PasswordInput, CheckBox, Form } from "./utils/Input";
import { Aggrement, AggrementWrapper } from "./utils/Aggrement";
import Button from "./utils/Button";
import { Fb, Google, SocialWrapper } from "./utils/SocialLog";
import { base } from "../utils/request";
import Heading from "../components/Heading";
import { ToggleBtn, ToggleWrapper } from "./utils/ToggleBtn";
import Cross from "./utils/Cross";


export default function Login() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const { data } = await base.post('/login', userDetails ,{
                mode: 'same-origin'
            });

            localStorage.setItem('CapdaS_user_token', JSON.stringify(data?.token));
            localStorage.setItem('CapdaS_user_id', JSON.stringify(data?.user?._id));

            if(data) {
                return window.location.href = '/CapdaS'
            }

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

    const { email, password } = userDetails;
    return (
        <Wrapper>
            <Cross />
            <Heading />
            <ToggleWrapper>

                <Link to="/signup" >
                    <ToggleBtn>Sign Up</ToggleBtn>
                </Link>

                <Link to="#" >
                    <ToggleBtn>Sign In</ToggleBtn>
                </Link>

            </ToggleWrapper>
            <Form handleSubmit={handleSubmit}>
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
                <Aggrement>I agree to the Terms of Service and Privacy Policy</Aggrement>
            </AggrementWrapper>
            <Button>Sign In</Button>
            </Form>
            <Aggrement>Or</Aggrement>
            <SocialWrapper>
                <Google />
                <Fb />
            </SocialWrapper>
        </Wrapper>
    )
}