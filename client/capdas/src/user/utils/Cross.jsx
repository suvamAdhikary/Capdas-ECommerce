import styled from "styled-components";

const CrossBtn = styled.button`

    border: none;
`;

export default function Cross(){

    return (
        <CrossBtn>
            <img src="./assets/close.svg" alt="closeBtn" />
        </CrossBtn>
    )
}