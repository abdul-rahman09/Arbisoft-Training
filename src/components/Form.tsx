import React from 'react';
import AddCard from "./AddCard"
import {MyInput, MyX, StyledButton} from "../style"

function Form(props:any) {
    return(
        <div>
            <MyInput onChange={props.setText} value={props.textData}/>

            <StyledButton className="btn btn-success" onClick={props.addNewItem}>Add Card</StyledButton>
            <MyX onClick={props.close}>X</MyX>
        </div>
    )

}
export default Form;
