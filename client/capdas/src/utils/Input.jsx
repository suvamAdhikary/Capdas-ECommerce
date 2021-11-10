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

export function NameInput({ name, handleChange }) {

    return <Input
            type="text"
            name="name"
            value={name}
            onChange={(e)=>handleChange(e)}
        />
};

export function EmailInput({ email, handleChange }) {

    return <Input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>handleChange(e)}
        />
};

export function PasswordInput({ password, handleChange }) {

    return <Input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>handleChange(e)}
        />
};

export function Label({children}) {

    return <InputWrapper>{children}</InputWrapper>
};

export function CheckBox() {

    return <Input type="checkbox" />
};

export function Form({ children, handleSubmit }) {

    return <MainForm onSubmit={(e)=> handleSubmit(e)}>{children}</MainForm>
}