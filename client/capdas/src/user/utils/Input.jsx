import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #56675B;
    border-radius: 10px;

    @media screen and (max-width: 375px) {
        width: 208px;
        height: 38px;

        &[type="checkbox"] {
            width: 10px;
            height: 10px;
            margin-top: 6.5px;
            margin-right: 5px;
        }
    }

`;

const InputWrapper = styled.label`

    text-align: left;

`;

const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


    div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        input {
            
            @media screen and (max-width: 375px) {

                width: 151px;
                height: 45px;

            }
        }
    }


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