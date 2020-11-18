import React, {FC} from 'react';
import Form from "components/Form"
import Edit from "components/EditForm"
import {MyCustomParagraph} from "style"
import {TodoItem} from "components/models"

interface CardInterface {
    showForm: boolean, 
    data:Array<TodoItem>, 
    closeF: Function, 
    updateEditText: Function, 
    textData: string, 
    setText: Function, 
    editData: string, 
    addItem:Function, 
    editItem: Function, 
    post: any
}
  
function Presentation(props: CardInterface) {
    return(
        <div>
            {props.data.map((item:TodoItem)=>{
                return <Edit key={item.id} close={props.closeF} setText={props.updateEditText} showEdit={item.showEdit} editData={props.editData} onTouch={()=>props.editItem(item)} data={item.text}/>
            })}
            {props.showForm ?  <Form post={props.post} textData={props.textData} close={props.closeF}  setText={props.setText}/>:  <MyCustomParagraph onClick={()=>props.addItem()}>+ Add a card</MyCustomParagraph>
           
            }
        </div>
    )

}

export default Presentation;
  