import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Wrapper({children}) {

    return <Main>{children}</Main>;
}