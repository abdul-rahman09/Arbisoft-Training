import React from 'react';
import {InputWrapper, CrossButtonWrapper, StyledButton} from "style"

interface FormInterface {
    setText: any, 
    textData:string, 
    close: any, 
    post: any
}
function Form(props:FormInterface) {

    return(
        <div>
            <InputWrapper onChange={props.setText} value={props.textData}/>

            <StyledButton className="btn btn-success" onClick={()=> props.post(props.textData)}>Add Card</StyledButton>
            <CrossButtonWrapper onClick={props.close}>X</CrossButtonWrapper>
        </div>
    )

}

export default Form;
