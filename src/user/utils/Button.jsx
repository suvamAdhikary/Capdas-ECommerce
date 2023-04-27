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

    /* color: #FFFFFF; */
    /* background-color:  rgba(86, 103, 91, 0.5); */
    border-radius: 10px;

    background-color: #56675B;
    color: #FFFFF7;

    @media screen and (max-width: 375px) {
        width: 108px;
        /* width: fit-content; */
        height: 38px;
        margin: 25px 81px 25px;
        font-size: 18px;
        line-height: 22px;
        font-weight: normal;
        letter-spacing: 1px;
        padding: 8px 16px;
    }

`;

export default function Button({children}) {

    return <MainButton>{children}</MainButton>;
}