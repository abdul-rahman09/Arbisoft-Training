import React from 'react';
import {connect} from "react-redux";
import {saveEditItem} from "../redux2/actions/index"
import {MyInput, MyX, StyledButton, MyCustomParagraph} from "../style"


function Form(props: any) {
    return (
        <div>
            {!props.showEdit && <MyCustomParagraph onClick={props.onTouch}>{props.data}</MyCustomParagraph>}
            {props.showEdit && (
                <>
                    <MyInput onChange={props.setText} value={props.editData} />
                    <StyledButton className="btn btn-success" onClick={(evt:any)=> props.saveEditItem(props.editData)}>Save</StyledButton>
                    <MyX onClick={props.close}>X</MyX>
                </>
            )}

        </div>
    )

}
const stateToProps = (state:any) =>{
    return{
    } 
  }
  const mapDispatchToProps = {
      saveEditItem,
  }
  export default connect(stateToProps, mapDispatchToProps)(Form);
  
