import styled from "styled-components";
import leftArrow from "../Homepage/images/leftArrow.jpg";
import Button from "../utils/Button"
const Main = styled.div`
`;

const Headline = styled.div`
display: flex;
flex-direction: row;
margin-top: 56px;
justify-content: space-between;
margin: 56px 32px 26px 27px;

div:nth-child(3)> p,div:nth-child(2)> p{
font-size: 22px;
font-weight: 400;
line-height: 27px;
letter-spacing: 1px;
color: #151A17;
}
div:nth-child(2){
    margin-left: 20px;
}
`;

const Pic = styled.div`
    margin: auto;
    margin-bottom: 70px;
    width: 107px;
    height: 107px;
    background-color: #56675B;
    border-radius: 10px;
`;
const Inputs = styled.div`
   input{ width: 327px;
    height: 43px;
    border-radius: 10px;
    border: 1px solid black;
    margin: auto;
    margin-bottom: 40px;
    
    ::placeholder {
        color: #56675B;
        padding-left: 10px;
    }
   }
   `

export const ProfilePage = () => {
    return <Main><Headline>
    <div><img src={leftArrow} alt="" />
    </div>
    <div><p>Profile</p></div>
    <div><p>Edit</p></div>
    </Headline>
        <Pic></Pic>
        <Inputs><input type="text" placeholder="profile" /></Inputs>
        <Inputs><input type="text" placeholder="contact" /></Inputs>
        <Inputs><input type="text" placeholder="@email" /></Inputs>
        <Button>Save</Button>
   </Main>
}