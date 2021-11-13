import styled from "styled-components";
import Cross from "../user/utils/Cross";
import Button from "../utils/Button";

const Main = styled.div`
div:nth-child(1){
width: 100%;
margin:56px 0 0 29px;
display: flex;
flex-direction: row;
width: 53.5%;
justify-content: space-between;
}
div:nth-child(1)+p{
    margin-top: 220px;
font-size: 22px;
font-weight: 400;
line-height: 27px;
letter-spacing: 1px;
text-align: center;
}

div:nth-child(1)>p{
font-size: 22px;
font-weight: 400;
line-height: 27px;
letter-spacing: 1px;
margin-bottom: 40px;
}

`;

export default function AddressMsg() {
    return <Main> 
        <div><Cross /><p>Address</p></div>
        <p>No address saved, <br />
        Kindly add.</p>
       <Button>Add new Address</Button>
    </Main>
}