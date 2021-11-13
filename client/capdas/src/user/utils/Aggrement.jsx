import styled from "styled-components";

const Check = styled.p`

    color: #7E817F;

    @media screen and (max-width: 375px) {

        font-size: 8px;
        line-height: 9.38px;
        font-weight: 400;
        font-family: Roboto;
        margin-left: 8px;

        a {
            font-size: 8px;
            line-height: 9.38px;
            font-weight: 400;
            font-family: Roboto;
            text-decoration: underline;
            color: #7E817F;
            text-decoration-thickness: 0.05px;
            text-decoration-color: #7E817F;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export function Aggrement({children}) {

    return <Check>{children}</Check>
};

export function AggrementWrapper({children}) {

    return <Wrapper>{children}</Wrapper>
}