import styled from "styled-components";


const MainButton = styled.button`
        position: fixed;
        background: #56675B;
        width: 327px;
        height: 43px;
        border-radius: 10px;
        border: none;
        display: flex;
        margin-left: 24px;
        justify-content: center;
        letter-spacing: 1px;
        font-size: 24px;
        text-align: center;
        font-weight: 600;
        color: #FFFFF7;
`;

export default function Button({children}) {

    return <MainButton>{children}</MainButton>;
}