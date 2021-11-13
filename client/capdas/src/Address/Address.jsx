import styled from "styled-components";
import Cross from "../user/utils/Cross";
import Button from "../utils/Button";

const Main = styled.div`
div:nth-child(1){
width: 100%;
margin:56px 0 0 29px;
display: flex;
flex-direction: row;
width: 59%;
justify-content: space-between;
}

div:nth-child(1)>p{
font-size: 22px;
font-weight: 400;
line-height: 27px;
letter-spacing: 1px;

margin-bottom: 40px;
}

div:nth-child(2){
    display: flex;
    width: 327px;
    flex-direction: column;
    margin: auto !important;
}
div:nth-child(2)>input{
    width: 327px;
    height: 43px;
    border-radius: 10px;
margin-bottom: 40px;
::placeholder{
        padding-left: 20px;
    }
}
div:nth-child(3){
input{
    height: 43px;
    border-radius: 10px;
    width: 40%;
    ::placeholder{
        padding-left: 20px;
    }
}
input:nth-child(2){
    margin-left: 25px;

}
}
`;

export default function Address() {
    return <Main> 
        <div><Cross /><p>Add Address</p></div>
        <div><input placeholder="Name" type="text" />
        <input placeholder="House/Flat no." type="text" />
        <input placeholder="Street/Locality" type="text" />
            <input placeholder="Pincode" type="text" />
        </div>
        <div><input placeholder="City" type="text" /><input placeholder="State" type="text" /></div>
        <Button>Submit</Button>
    </Main>
}