import React from 'react';
import AddCard from "./AddCard"
import styled from 'styled-components';
import { Button } from "react-bootstrap"

const StyledButton = styled(Button)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const MyInput = styled.input`
    width: 100%;
    height: 60px;
    border: none;
    &:hover{
        border: none;
    }
`;
const MyX = styled.span`
    cursor: pointer;
`;
function Form(props:any) {
    return(
        <div>
            <MyInput/>

            <StyledButton className="btn btn-success">Add Card</StyledButton>
            <MyX>X</MyX>
            {/* <span>X</span> */}
        </div>
    )

}
export default Form;