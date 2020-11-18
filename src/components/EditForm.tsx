import React from 'react';
import {useDispatch} from "react-redux";
import {saveEditItem} from "store/actions/index"
import {MyInput, MyX, StyledButton, MyCustomParagraph} from "style"


function Form(props: {data: string, setText: Function, editData: string, showEdit: boolean, onTouch: any, close: Function}) {
    const dispatch = useDispatch()
    return (
        <div>
            {!props.showEdit && <MyCustomParagraph onClick={props.onTouch}>{props.data}</MyCustomParagraph>}
            {props.showEdit && (
                <>
                    <MyInput onChange={(evt)=> props.setText(evt)} value={props.editData} />
                    <StyledButton className="btn btn-success" onClick={(evt:any)=> dispatch(saveEditItem(props.editData))}>Save</StyledButton>
                    <MyX onClick={(evt) => props.close(evt)}>X</MyX>
                </>
            )}

        </div>
    )

}
export default Form;
