import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Wrapper from "./utils/Wrapper";
import { NameInput, Label, EmailInput, PasswordInput, CheckBox, Form } from "./utils/Input";
import { Aggrement, AggrementWrapper } from "./utils/Aggrement";
import Button from "./utils/Button";
import { Fb, Google, SocialWrapper } from "./utils/SocialLog";
import { base } from "../utils/request";
import Heading from "../components/Heading";
import { ToggleBtn, ToggleWrapper } from "./utils/ToggleBtn";
import Cross from "./utils/Cross";
import Parent from "./utils/Parent";


export default function Signup() {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const { data } = await base.post('/register', userDetails ,{
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

    // const handleSignin = () => {

    //     window.location.href = "http://localhost:3000/signin";
    //     // return;
    // }

    // const handleToggle = () => {

    //     return ;
    // }


    const location = useLocation();

    useEffect(() => {
        // handleToggle();
    }, [location])

    const { name, email, password } = userDetails;
    return (<><Parent>
        <Wrapper>
            <Cross />
            <Heading />
            <ToggleWrapper>

                <Link to="#" >
                    <ToggleBtn>Sign Up</ToggleBtn>
                </Link>

                <Link to="/signin" >
                    <ToggleBtn>Sign In</ToggleBtn>
                </Link>

            </ToggleWrapper>
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
                <Aggrement>I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></Aggrement>
            </AggrementWrapper>
            <Button>Sign Up</Button>
            </Form>
            <Aggrement>Or</Aggrement>
            <SocialWrapper>
                <Google />
                <Fb />
            </SocialWrapper>
        </Wrapper>
    </Parent></>)
}