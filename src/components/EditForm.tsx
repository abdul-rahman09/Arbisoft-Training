import React from 'react';
import {InputWrapper, CrossButtonWrapper, StyledButton, FieldWrapper} from "style"

interface FormInterface {
    data: string, 
    setText: Function, 
    editData: string, 
    showEdit: boolean, 
    onTouch: any,
    saveEditItem: Function, 
    close: Function
}

function Form(props: FormInterface) {
    return (
        <div>
            {!props.showEdit && <FieldWrapper onClick={props.onTouch}>{props.data}</FieldWrapper>}
            {props.showEdit && (
                <>
                    <InputWrapper onChange={(evt)=> props.setText(evt)} value={props.editData} />
                    <StyledButton className="btn btn-success" onClick={(evt:any)=> props.saveEditItem(props.editData)}>Save</StyledButton>
                    <CrossButtonWrapper onClick={(evt) => props.close(evt)}>X</CrossButtonWrapper>
                </>
            )}

        </div>
    )

}
export default Form;
