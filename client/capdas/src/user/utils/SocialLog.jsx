import styled from "styled-components";

const ImageWrapper = styled.a`

    &after, &before {
        text-decoration: none;
    }
`;

const Wrapper = styled.div`

    display: flex;
    flex-direction: row;
`;

export function Google(){

    return (
        <ImageWrapper>
            <img src="assets/Google.svg" alt="GoogleLogo" />
        </ImageWrapper>
    )
}

export function Fb(){

    return (
        <ImageWrapper>
            <img src="assets/Facebook.svg" alt="facebookLogo" />
        </ImageWrapper>
    )
}

export function SocialWrapper({children}) {

    return <Wrapper>{children}</Wrapper>
}