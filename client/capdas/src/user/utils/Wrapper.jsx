import styled from "styled-components";

const Main = styled.main`

`;

export default function Wrapper({children}) {

    return <Main>{children}</Main>;
}