import { Link } from "react-router-dom";

import styled from "styled-components";
import NavButton from "./NavButton";


const FooterNavbar = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Nav = styled.nav`

`;

const Img = styled.img`

`;

export default function FooterNav() {

    return <FooterNavbar>

        <Nav>

            <Link to="/CapdaS">
            <NavButton>
                <Img src="assets/HomeIcon.svg" alt="home icon"/>
            </NavButton>
            </Link>

            &nbsp;

            <Link to="/categories">
            <NavButton>
                <Img src="assets/CategoryIcon.svg" alt="category icon"/>
            </NavButton>
            </Link>

            <Link to="#">
            <NavButton>
                <Img src="assets/CameraIcon.svg" alt="camera icon"/>
            </NavButton>
            </Link>

            <Link to="/profile">
            <NavButton>
                <Img src="assets/ProfileIcon.svg" alt="profile icon"/>
            </NavButton>
            </Link>

        </Nav>

    </FooterNavbar>
};