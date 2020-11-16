import React from 'react';
import styled from 'styled-components';
import Form from "./Form"
import Edit from "./EditForm"
import {MyCustomParagraph} from "../style"

  
function AddCard(props:any) {
    return(
        <div>
            {props.data.map((item:any, i:number)=>{
                return <Edit key={item.id} close={props.closeF} setText={props.updateEditText} updateItem={props.updateItem} showEdit={item.showEdit} editData={props.editData} onTouch={()=>props.editItem(item)} data={item.text}/>
            })}
            {props.showForm ?  <Form textData={props.textData} close={props.closeF}  setText={props.setText} addNewItem={props.addNewItem}/>:  <MyCustomParagraph onClick={()=>props.addItem()}>+ Add a card</MyCustomParagraph>
           
            }
        </div>
    )

}
export default AddCard;
