import styled from "styled-components";

const Start = styled.div`
    position: absolute;
    width: 264px;
    height: 126px;
    left: 61px;
    top: 255px;

    p {
        /* position: absolute; */
        /* width: 241px; */
        /* height: 25px; */
        /* left: 61px; */
        /* top: 400px; */

        font-family: Cabinet Grotesk;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        align-items: center;
        letter-spacing: 1px;
        color: #56675B;
    }
`;

export default function StartScreen () {
    return (
        <Start>
            <img src="assets/landingPages/Start.png" alt="start" />
            <p>Sustainable Strikes Back</p>
        </Start>
    );
}