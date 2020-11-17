import React from 'react';
import Form from "./Form"
import Edit from "./EditForm"
import {MyCustomParagraph} from "../style"
import {TodoItem} from "./models"

  
function Presentation(props:{showForm: boolean, data:Array<TodoItem>, closeF: Function, updateEditText: Function, textData: string, setText: Function, editData: string, addItem:Function, editItem: Function}) {
    return(
        <div>
            {props.data.map((item:TodoItem)=>{
                return <Edit key={item.id} close={props.closeF} setText={props.updateEditText} showEdit={item.showEdit} editData={props.editData} onTouch={()=>props.editItem(item)} data={item.text}/>
            })}
            {props.showForm ?  <Form textData={props.textData} close={props.closeF}  setText={props.setText}/>:  <MyCustomParagraph onClick={()=>props.addItem()}>+ Add a card</MyCustomParagraph>
           
            }
        </div>
    )

}

export default Presentation;
  