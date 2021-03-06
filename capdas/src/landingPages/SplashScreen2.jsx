import { Link } from "react-router-dom";

import styled from "styled-components";
import { Button } from "./utils/Button";

const Splash = styled.div`

    overflow: scroll;

    img{
        position: absolute;
        width: 324px;
        height: 298px;
        left: 26px;
        top: 257px;
    }

    p {
        position: absolute;
        width: 326px;
        height: 66px;
        left: 25px;
        top: 167px;
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
    .s2 {
        background: #6C8072;
    }

    .btns {
        position: absolute;
        left: 24px;
        top: 740px;
        display: flex;
        gap: 24px;
    }

`;

export default function SplashScreen2() {
    return (
        <>
            <Splash>
                <p>We believe in Conscious Consumerism and not in conspicous consumerism.</p>
                <img src="assets/landingPages/SplashScreen2.png" alt="splash2" />

                <div className="status">
                    <div></div>
                    <div className="s2"></div>
                </div>

                <div className="btns">
                    <Link to="/signup">
                        <Button>Skip</Button>
                    </Link>

                    <Link to="/signup">
                    <   Button>Next</Button>
                    </Link>
                </div>
            </Splash>

        </>
    );
}