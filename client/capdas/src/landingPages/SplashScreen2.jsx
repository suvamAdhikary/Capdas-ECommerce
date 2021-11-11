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

    div {
        position: absolute;
        left: 24px;
        top: 740px;
        display: flex;
        gap: 24px;
    }
`;

// const ButtonPosition = styled.div`
//     position: absolute;
//     left: 24px;
//     top: 740px;
//     display: flex;
//     gap: 24px;
// `;

export default function SplashScreen2() {
    return (
        <>
            <Splash>
                <p>We believe in Conscious Consumerism and not in conspicous consumerism.</p>
                <img src="assets/landingPages/SplashScreen2.png" alt="splash2" />
                <div>
                    <Button>Skip</Button>
                    <Button>Next</Button>
                </div>
            </Splash>

        </>
    );
}