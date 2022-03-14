import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Button } from "./utils/Button";
import StartScreen from "./StartScreen";

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

    .status {
        position: absolute;
        width: 30px;
        height: 10px;
        left: 173px;
        top: 696px;
        display: flex;
        gap: 10px;
    }

    .status > div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid black; 
    }
    .s1 {
        background: #6C8072;
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

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 2500);

        return () => clearTimeout(timeout);
    }, [loading]);

    return ( (!loading) ? <StartScreen /> :
        <>
            <Splash>
                <h1>Welcome to CapdaS</h1>
                <p>We offer Sustainable clothing as we select Utility above price.</p>
                <img src="assets/landingPages/SplashScreen1.svg" alt="splash1" />

                <div className="status">
                    <div className="s1"></div>
                    <div></div>
                </div>
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