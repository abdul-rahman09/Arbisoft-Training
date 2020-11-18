import React from 'react';
import {MyInput, MyX, StyledButton} from "style"

function Form(props:{setText: any, textData:string, close: any, post: any}) {

    return(
        <div>
            <MyInput onChange={props.setText} value={props.textData}/>

            <StyledButton className="btn btn-success" onClick={()=> props.post(props.textData)}>Add Card</StyledButton>
            <MyX onClick={props.close}>X</MyX>
        </div>
    )

}

export default Form;
