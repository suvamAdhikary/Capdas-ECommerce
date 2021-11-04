import styled from "styled-components";

const TextInput = styled.input`
    border: none;

    &hover {
        border: 1px solid limegreen;
    }
`;

export default function Input({children}) {

    return <TextInput>
        {children}
    </TextInput>
};