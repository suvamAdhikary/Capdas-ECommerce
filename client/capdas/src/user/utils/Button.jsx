import styled from "styled-components";


const MainButton = styled.button`
//         position: fixed;
//         background: #56675B;
//         width: 327px;
//         height: 43px;
//         border-radius: 10px;
//         border: none;
//         display: flex;
//         margin-left: 24px;
//         justify-content: center;
//         letter-spacing: 1px;
//         font-size: 24px;
//         text-align: center;
//         font-weight: 600;
//         color: #FFFFF7;

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