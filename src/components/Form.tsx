import React from 'react';
import {connect} from "react-redux"
import {MyInput, MyX, StyledButton} from "../style"
import {postTodos} from "../redux2/actions/index"

function Form(props:any) {
    return(
        <div>
            <MyInput onChange={props.setText} value={props.textData}/>

            <StyledButton className="btn btn-success" onClick={()=> props.postTodos(props.textData)}>Add Card</StyledButton>
            <MyX onClick={props.close}>X</MyX>
        </div>
    )

}



const stateToProps = (state:any) =>{
    return{
    } 
  }
  const mapDispatchToProps = {
      postTodos
      
  }
  export default connect(stateToProps, mapDispatchToProps)(Form);
