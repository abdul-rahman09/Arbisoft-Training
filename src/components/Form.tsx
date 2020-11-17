import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {MyInput, MyX, StyledButton} from "../style"
import {postTodos} from "../redux2/actions/index"

function Form(props:{setText: any, textData:string, close: any}) {

  const dispatch = useDispatch()
    return(
        <div>
            <MyInput onChange={props.setText} value={props.textData}/>

            <StyledButton className="btn btn-success" onClick={()=> dispatch(postTodos(props.textData))}>Add Card</StyledButton>
            <MyX onClick={props.close}>X</MyX>
        </div>
    )

}

export default Form;
