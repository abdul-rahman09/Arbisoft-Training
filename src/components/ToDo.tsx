import React from 'react';
import AddCard from "./AddCard"
import {MyDiv} from "../style"

function Todo(props:any) {
    return(
        <MyDiv>
            <h6>Todo</h6>
            <AddCard/>
        </MyDiv>
    )

}
export default Todo;