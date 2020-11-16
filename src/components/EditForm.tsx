import React from 'react';
import AddCard from "./AddCard"
import styled from 'styled-components';
import {MyInput, MyX, StyledButton, MyCustomParagraph} from "../style"


function Form(props: any) {
    return (
        <div>
            {!props.showEdit && <MyCustomParagraph onClick={props.onTouch}>{props.data}</MyCustomParagraph>}
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
