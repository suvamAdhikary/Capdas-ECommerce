import styled from "styled-components";
import Heading from "../Heading";
import NavButton from "./NavButton";

const HeaderNavbar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SandwichWrapper = styled.div`

    display: flex;
    flex-direction: row;

`;


const Nav = styled.nav`

`;

const Img = styled.img`

`;

export default function HeaderNav() {

    return <HeaderNavbar>
        <SandwichWrapper>
            <img src="assets/menu.svg" alt="sandwitch" />
            <Heading />
        </SandwichWrapper>
        <Nav>
            <NavButton>
                <Img src="assets/SearchIcon.svg" alt="search icon"/>
            </NavButton>
            <NavButton>
                <Img src="assets/WishListIcon.svg" alt="wishlist icon"/>
            </NavButton>
            <NavButton>
                <Img src="assets/BagIcon.svg" alt="bag icon"/>
            </NavButton>
        </Nav>
    </HeaderNavbar>
};