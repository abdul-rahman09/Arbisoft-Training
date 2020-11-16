import React from 'react';
import styled from 'styled-components';
import Form from "./Form"
import Edit from "./EditForm"
import {TodoItem} from "./models"
// const Edit = styled.p.attrs(props => ({
// }))`
//     color: black;
//     cursor: pointer;
//     background-color: white;
//     :hover{
//         background-color: lightgray;
//     };
//   `;
const Input = styled.p.attrs(props => ({
}))`
    color: grey;
    cursor: pointer;
    :hover{
        background-color: lightgray;
    };
  `;
  
function AddCard(props:any) {
    return(
        <div>
            {props.data.map((item:any, i:number)=>{
                return <Edit key={i} close={props.closeF} setText={props.updateEditText} updateItem={props.updateItem} showEdit={item.showEdit} editData={props.editData} onTouch={()=>props.editItem(item)} data={item.text}/>
            })}
            {props.showForm ?  <Form textData={props.textData} close={props.closeF}  setText={props.setText} addNewItem={props.addNewItem}/>:  <Input onClick={()=>props.addItem()}>+ Add a card</Input>
           
            }
        </div>
    )

}
export default AddCard;