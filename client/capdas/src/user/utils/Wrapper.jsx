import styled from "styled-components";


const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 375px) {
       
        
        .addaddress__heading {
            font-weight: 400;
            font-size: 22px;
            line-height: 27.28px;
            letter-spacing: 1px;
            color: #151A17;
        }

        span {
            position: absolute;
            left: ${
                window.location.pathname.split("/")[1] === "newaddress" ?
                    "20.83px" : null
            };
            right: ${
                window.location.pathname.split("/")[1] !== "newaddress" ?
                    "20.83px" : null
            };
            top: 75px;
        }
    }
`;

export default function Wrapper({children}) {

    return <Main>{children}</Main>;
}