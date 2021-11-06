import styled from "styled-components";
import NavButton from "./NavButton";


const HeaderNavbar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SandwichWrapper = styled.div`

    display: flex;
    flex-direction: row;

    div {
        color: #56675B;
        font-size: 24px;
        font-weight: 800;
        line-height: 29.76px;
        letter-spacing: 1px;
    }
`;


const Nav = styled.nav`

`;

const Img = styled.img`

`;

export default function HeaderNav() {

    return <HeaderNavbar>
        <SandwichWrapper>
            <img src="assets/menu.svg" alt="sandwitch" />
            <div>CapdaS</div>
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