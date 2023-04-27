import styled from "styled-components"

const InputWrapper = styled.label`
    position: relative;
`;

const Input  = styled.input`
    position: absolute;
    left: -9999px;
    top: -9999px;

    &:checked + span {
        background-color: #1890ff;

        &:before {
            left: 20px;
        }
    }
`;

const Slider = styled.span`
    display: flex;
    cursor: pointer;
    width: 40px;
    height: 20px;
    left: 120px;
    top: 36px;
    border-radius: 10px;
    background-color: #FFFFFF;
    position: relative;
    transition: background-color 0.2s;

    &:before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 18px;
        height: 18px;
        border-radius: 10px;
        transition: 0.2s;
        background: #5B5F5D;
        /* box-shadow: 0px 4px; */
    }
`;

const Toggle = ({onChange}) => (
    <InputWrapper>
        <Input type="checkbox" onChange ={onChange}/>
        <Slider />
    </InputWrapper>   
);
export default Toggle;