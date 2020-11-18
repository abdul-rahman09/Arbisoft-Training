import React from 'react';
import {MyInput, MyX, StyledButton} from "style"

interface FormInterface {
    setText: any, 
    textData:string, 
    close: any, 
    post: any
}
function Form(props:FormInterface) {

    return(
        <div>
            <MyInput onChange={props.setText} value={props.textData}/>

            <StyledButton className="btn btn-success" onClick={()=> props.post(props.textData)}>Add Card</StyledButton>
            <MyX onClick={props.close}>X</MyX>
        </div>
    )

}

export default Form;
