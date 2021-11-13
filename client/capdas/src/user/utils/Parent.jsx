import styled from "styled-components";
import { Hp } from "../../Homepage/Homepage";

const Div = styled.div`

    main:nth-child(1){
        position:absolute;
        z-index: -1;
        opacity: 0.3;
    }
    
    @media screen and (max-width: 375px) {
        overflow: hidden;
        height: 767px !important;  

        main:nth-child(3) {
            height: 519px;
            width: 260px;
            border-radius: 10px;
            margin: 124px 57px;
        }
    }
`;
const Fade = styled.div`
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(108, 128, 114, 0.2);
    backdrop-filter: blur(45px);
    @media screen and (max-width: 375px) {

        height: 767px !important;  
    }
`;

export default function Parent({children}) {

    return (
        <Div>
            <Hp />
            <Fade></Fade>
            {children}
        </Div>
    )
}