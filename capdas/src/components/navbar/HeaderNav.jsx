import { Link } from "react-router-dom";

import styled from "styled-components";
import Heading from "../Heading";
import NavButton from "./NavButton";

const HeaderNavbar = styled.header`
    width: 375px;
padding: 20px 20px 16px 20px;
box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SandwichWrapper = styled.div`

    display: flex;
    flex-direction: row;


    div {margin-top: 5px;
        margin-left: 10px;
        color: #56675B;
        font-size: 24px;
        font-weight: 700;
        line-height: 29.76px;
        letter-spacing: 1px;
    }

`;


const Nav = styled.nav`
/* background-color: white !important; */
`;

const Img = styled.img`
background-color: white;
padding:  5px 2px;
margin-bottom: 5px;


`;

export default function HeaderNav() {

    return <HeaderNavbar>

        <SandwichWrapper>

            <Link to="/menu">
            <img src="assets/menu.svg" alt="sandwitch" />
            </Link>

            <Link to="/CapdaS">
            <Heading />
            </Link>

        </SandwichWrapper>


        <Nav>

            <Link to="/search">
            <NavButton>
                <Img src="assets/SearchIcon.svg" alt="search icon"/>
            </NavButton>
            </Link>

            <Link to="/wishlist">
            <NavButton>
                <Img src="assets/WishListIcon.svg" alt="wishlist icon"/>
            </NavButton>
            </Link>

            <Link to="/bag">
            <NavButton>
                <Img src="assets/BagIcon.svg" alt="bag icon"/>
            </NavButton>
            </Link>

        </Nav>

    </HeaderNavbar>
};