import { Link } from "react-router-dom";

import styled from "styled-components";
import NavButton from "./NavButton";


const FooterNavbar = styled.footer`

    /* position: absolute;
    bottom: 16px; */
    /* padding: 20px 20px 16px 20px; */
    /* box-sizing: border-box; */
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */

    @media only screen and (max-width: 375px) {
        height: 84px;
        position: -webkit-sticky;
        position: sticky;
        position: fixed;
        top: 728px;
        z-index: 999999;
        background-color: #FFFFF7;
        nav {
            width: 375px;
            padding: 20px 20px 16px 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;

const Nav = styled.nav`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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

            <Link to="/account">
            <NavButton>
                <Img src="assets/ProfileIcon.svg" alt="profile icon"/>
            </NavButton>
            </Link>

        </Nav>

    </FooterNavbar>
};