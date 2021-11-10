import styled from "styled-components";

const Check = styled.p`

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export function Aggrement({children}) {

    return <Check>{children}</Check>
};

export function AggrementWrapper({children}) {

    return <Wrapper>{children}</Wrapper>
}