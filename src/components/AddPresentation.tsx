import React from 'react';
import styled from 'styled-components';
import Form from "./Form"
import {TodoItem} from "./models"
const Edit = styled.p.attrs(props => ({
}))`
    color: black;
    cursor: pointer;
    background-color: white;
    :hover{
        background-color: lightgray;
    };
  `;
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
            {props.data.map((item:any)=>{
                return <Edit key={item.id} onClick={()=>props.editItem(item.id)}>{item.text}</Edit>
            })}
            {props.showForm ?  <Form setText={props.setText}/>:  <Input onClick={()=>props.addItem()}>+ Add a card</Input>
           
            }
        </div>
    )

}
export default AddCard;