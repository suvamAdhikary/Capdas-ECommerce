import { Link } from "react-router-dom";

import styled from "styled-components"
import Button from "../utils/Button";

const Title = styled.div`
    position: absolute;
    width: 210px;
    height: 27px;
    left: 83px;
    top: 56px;

    font-family: Cabinet Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
    align-items: center;
    letter-spacing: 1px;
    color: #151A17;
`;

const Message = styled.div`
    position: absolute;
    width: 317px;
    height: 58px;
    left: 29px;
    top: 328px;
`;

export const Success = () => {
    return(
        <>
        <Title>Payment Successful</Title>
        <Message>
            <p>Placed your order successfully.</p>
            <p>Thank you for choosing CapdaS.</p>
        </Message>

        <Link to="/CapdaS">
            <Button>Continue Shopping</Button>
        </Link>

        </>
    );
}