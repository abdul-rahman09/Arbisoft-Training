import React from 'react';
import {useDispatch} from "react-redux";
import {saveEditItem} from "../redux2/actions/index"
import {MyInput, MyX, StyledButton, MyCustomParagraph} from "../style"


function Form(props: any) {
    const dispatch = useDispatch()
    return (
        <div>
            {!props.showEdit && <MyCustomParagraph onClick={props.onTouch}>{props.data}</MyCustomParagraph>}
            {props.showEdit && (
                <>
                    <MyInput onChange={props.setText} value={props.editData} />
                    <StyledButton className="btn btn-success" onClick={(evt:any)=> dispatch(saveEditItem(props.editData))}>Save</StyledButton>
                    <MyX onClick={props.close}>X</MyX>
                </>
            )}

        </div>
    )

}
export default Form;
  
