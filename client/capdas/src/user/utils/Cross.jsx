import { Link } from "react-router-dom";
import styled from "styled-components";

const CrossBtn = styled.span`

    border: none;
`;

export default function Cross(){

    return (<>
        <Link to="/CapdaS" >
            <CrossBtn>
                <img src="./assets/close.svg" alt="closeBtn" />
            </CrossBtn>
        </Link>
    </>)
}