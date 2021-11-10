import styled from "styled-components"
import Button from "../utils/Button";

const Back = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 24px;
    top: 58px;
`;

const Title = styled.div`
    position: absolute;
    width: 90px;
    height: 27px;
    left: 143px;
    top: 56px;
    font-family: Cabinet Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #151A17;
`;

const TotalAmount = styled.div`
    position: absolute;
    width: 327px;
    height: 38px;
    left: 24px;
    top: 107px;

    p {
        position: absolute;
        width: 158px;
        height: 16px;
        left: 84px;
        top: 11px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 1px;
        color: #5B5F5D;
    }
`;

const Card = styled.div`
    position: absolute;
    width: 223px;
    height: 223px;
    left: 76px;
    top: 150px;
`;

const P = styled.p`
    position: absolute;
    width: 183px;
    height: 19px;
    left: 24px;
    top: 375px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    letter-spacing: 1px;
    color: #151A17;
`;

const Form = styled.form`
    input {
        border: 1px solid #56675B;
        border-radius: 10px;
        width: 327px;
        height: 40px;
        left: 24px;
    }
    .inp_name {
        position: absolute;
        left: 24px;
        top: 408px;
    }
    .inp_number {
        position: absolute;
        top: 463px;
    }
    .inp_expiry {
        position: absolute;
        width: 152px;
        top: 518px;
    }
    .inp_cvv {
        position: absolute;
        width: 151px;
        left: 200px;
        top: 518px;
    }

    Button {
        position: absolute;
        width: 327px;
        height: 43px;
        left: 24px;
        top: 665px;
    }

    .footer {
        position: absolute;
        width: 375px;
        height: 84px;
        left: 0px;
        top: 728px;
        background: #FFFFFF;
    }
`;


export const CardDetail = () => {
    return (
        <>
            <Back>
                <img src="assets/leftArrow.png" alt="back" />
            </Back>
            <Title>
                <p>Payment</p>
            </Title>
            <TotalAmount>
                <p>1 Item: Total Rs 2,499</p>
            </TotalAmount>
            <Card>
                <img src="assets/card.png" alt="cardImage" />
            </Card>
            <P>
                <p>Enter your card details</p>
            </P>
            <Form>
                <input className="inp_name" type="text" placeholder="Cardholder name" />
                <input className="inp_number"  type="number" placeholder="Crad Number" />
                <input className="inp_expiry"  type="number" placeholder="Expiry" />
                <input className="inp_cvv"  type="number" placeholder="CVV" />
                <Button> Confirm Payment </Button>
            </Form>
        </>
    );
}