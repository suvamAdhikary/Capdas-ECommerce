import styled from "styled-components";

const Input = styled.input`
    /* border: none; */


`;

const InputWrapper = styled.label`

`;

const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export function TextInput({children}) {

    return <Input type="text" />
};

export function EmailInput({children}) {

    return <Input type="email" />
};

export function PasswordInput({children}) {

    return <Input type="password" />
};

export function Label({children}) {

    return <InputWrapper>{children}</InputWrapper>
};

export function CheckBox() {

    return <Input type="checkbox" />
};

export function Form({children}) {

    return <MainForm>{children}</MainForm>
}