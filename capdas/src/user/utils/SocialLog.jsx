// import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import { base } from "../../utils/request";

const ImageWrapper = styled.a`

    &hover {
        cursor: pointer;
    }

    &after, &before {
        text-decoration: none;
    }
`;

const Wrapper = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 375px) {

        position: absolute;
        bottom: 40px;
        width: 80px;
    }
`;

export function Google(){

    const handleClickG = async () => {

        try {

            const data = await base.get('/auth/google')

            console.log(data.request.responseURL);
        } catch (err) {
            console.log(err.message);
        }

    }

    return (
        <ImageWrapper onClick={handleClickG}>
            <img src="assets/Google.svg" alt="GoogleLogo" />
        </ImageWrapper>
    )
}

export function Fb(){

    const handleClickF = async () => {

        try {

            const data = await base.get('/auth/facebook');

            console.log(data.request.responseURL);

        } catch (err) {
            console.log(err.message);
        }

    }

    return (
        <ImageWrapper onClick={handleClickF}>
            <img src="assets/Facebook.svg" alt="facebookLogo" />
        </ImageWrapper>
    )
}

export function SocialWrapper({children}) {

    return <Wrapper>{children}</Wrapper>
}