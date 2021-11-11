import styled from "styled-components";

const MainButton = styled.button`

    color: #FFFFFF;
    background-color:  rgba(86, 103, 91, 0.5);
    border-radius: 10px;

    @media screen and (max-width: 375px) {
        width: 91px;
        height: 38px;
    }
`;

export default function Button({children}) {

    return <MainButton>{children}</MainButton>;
}