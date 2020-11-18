import React, {FC} from 'react';
import Form from "components/Form"
import Edit from "components/EditForm"
import {FieldWrapper, CardWrapper} from "style"
import {TodoItem} from "components/models"

interface CardInterface {
    title: string,
    showForm: boolean, 
    data:Array<TodoItem>, 
    closeF: Function, 
    updateEditText: Function, 
    textData: string, 
    setText: Function, 
    editData: string, 
    addItem:Function, 
    saveEditItem: Function,
    editItem: Function, 
    post: any
}
  
function CardDisplay(props: CardInterface) {
    return(
        <>
            <CardWrapper>
                <h6>{props.title}</h6>
                <div>
                    {props.data.map((item:TodoItem)=>{
                        return <Edit saveEditItem={props.saveEditItem} key={item.id} close={props.closeF} setText={props.updateEditText} showEdit={item.showEdit} editData={props.editData} onTouch={()=>props.editItem(item)} data={item.text}/>
                    })}
                    {props.showForm ?  <Form post={props.post} textData={props.textData} close={props.closeF}  setText={props.setText}/>:  <FieldWrapper onClick={()=>props.addItem()}>+ Add a card</FieldWrapper>
                
                    }
                </div>
            </CardWrapper>
        </>
    )
}

export default CardDisplay;
