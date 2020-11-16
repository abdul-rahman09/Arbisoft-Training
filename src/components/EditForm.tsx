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

const MyP = styled.p.attrs(props => ({
}))`
    color: black;
    cursor: pointer;
    background-color: white;
    :hover{
        background-color: lightgray;
    };
  `;
const MyInput = styled.input`
    width: 100%;
    border: none;
    margin-top: 0;
    margin-bottom: 1rem;
    &:hover{
        border: none;
    }
`;
const MyX = styled.span`
    cursor: pointer;
`;
function Form(props: any) {
    return (
        <div>
            {/* <MyInput onChange={props.setText} value={props.textData}/> */}
            {!props.showEdit && <MyP onClick={props.onTouch}>{props.data}</MyP>}
            {props.showEdit && (
                <>
                    <MyInput onChange={props.setText} value={props.editData} />
                    <StyledButton className="btn btn-success" onClick={props.updateItem}>Save</StyledButton>
                    <MyX onClick={props.close}>X</MyX>
                </>
            )}

        </div>
    )

}
export default Form;