import styled from "styled-components";

const Btn1 = styled.button`
width: 327px;
height: 43px;
border-radius: 10px;
background: #56675B;
color: white;
font-weight: 600;
text-align: center;
line-height: 29.76px;
letter-spacing: 1px;
font-size: 24px;
margin: auto;
margin-top: 255px;
margin-bottom: 104px;
border: none;
`

export default function Button ({children,handleSubmit}) {
    return <>
        <Btn1 onClick={handleSubmit}>{children}</Btn1>

    </>
}