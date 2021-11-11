import { Link } from "react-router-dom";

import styled from "styled-components";
import { Button } from "./utils/Button";

const Splash = styled.div`
    img{
        position: absolute;
        width: 307.95px;
        height: 306.59px;
        left: 34px;
        top: 253px;

    }

    h1 {
        position: absolute;
        width: 211px;
        height: 30px;
        left: 82px;
        top: 72px;

        font-family: Cabinet Grotesk;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        color: #151A17;
    }

    p {
        position: absolute;
        width: 327px;
        height: 44px;
        left: 25px;
        top: 174px;

        font-family: Cabinet Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 1px;
        color: #151A17;
    }
`;

const ButtonPosition = styled.div`
    position: absolute;
    left: 24px;
    top: 740px;
    display: flex;
    gap: 24px;
`;

export default function SplashScreen1() {
    return (
        <>
            <Splash>
                <h1>Welcome to CapdaS</h1>
                <p>We offer Sustainable clothing as we select Utility above price.</p>
                <img src="assets/landingPages/SplashScreen1.svg" alt="splash1" />
            </Splash>


            <ButtonPosition>

                <Link to="/signup">
                    <Button>Skip</Button>
                </Link>

                <Link to="/ss2">
                    <Button>Next</Button>
                </Link>
                
            </ButtonPosition>

        </>
    );
}