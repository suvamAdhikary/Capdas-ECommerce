import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #6C8072;
    width: fit-content;
    align-items: center !important;
    justify-content: center;
`;

const Btn = styled.button`
    border: none;
`;

export function ToggleBtn({children}) {

    return <Btn>{children}</Btn>
}

export function ToggleWrapper({children}) {

    return <Wrapper>{children}</Wrapper>
}