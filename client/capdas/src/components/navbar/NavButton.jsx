import styled from "styled-components";

const Button = styled.button`
    border: none;
    background-color: white;
`;

export default function NavButton({children}) {

    return <Button>
        {children}
    </Button>
};