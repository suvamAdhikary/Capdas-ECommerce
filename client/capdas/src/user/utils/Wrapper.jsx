import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";


const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFF7;
    position: absolute;
    z-index: 9999;

    div {

        a:nth-child(1){

            button {

                border-radius: 10px 0 0 10px;

                background-color: ${
                    window.location.pathname.split("/")[1] === "signup" ?
                    "#56675B" : "#FFFFF7"
                };
                color: ${
                    window.location.pathname.split("/")[1] !== "signup" ?
                    "#151A17" : "#FFFFF7"
                };
            }
        }

        a:nth-child(2){

            button {

                border-radius: 0 10px 9px 0;

                background-color: ${
                    window.location.pathname.split("/")[1] === "signin" ?
                    "#56675B" : "#FFFFF7"
                };
                color: ${
                    window.location.pathname.split("/")[1] !== "signin" ?
                    "#151A17" : "#FFFFF7"
                };
            }
        }
    }

    @media screen and (max-width: 375px) {
       
        
        padding: 25px 20px 40px;

        .addaddress__heading {
            font-weight: 400;
            font-size: 22px;
            line-height: 27.28px;
            letter-spacing: 1px;
            color: #151A17;
        }

        span {
            position: absolute;
            right: 13px;
            top: 10px;
        }

        div:nth-child(3) {
            width: 155px;
            height: 38px;
            margin: 15px 52px 32px;
        }

        div > a > button {

            width: 81px;
            height: 38px;
            padding: 8px;
            border: 1px solid #56675B;
        }


        
    }
`;

export default function Wrapper({children}) {

    const location = useLocation();


    useEffect(()=>{

        return;
    }, [location])

    return <Main>{children}</Main>;
}