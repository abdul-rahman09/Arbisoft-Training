import React, {useState, useEffect, FC} from 'react';
import Presentation from "./AddPresentation";
import {TodoItem} from "components/models"

interface CardInterface {
    data: Array<TodoItem>, 
    newItem: any, 
    getTodos: Function, 
    postTodos: any, 
    showEditItem: Function, 
    closePressed: Function, 
    setShowForm: Function, 
    showForm: boolean,
    setTextData: Function, 
    textData:string, 
    editData:string, 
    setEditData:Function, 
    editItem:any
}


const Card:FC<CardInterface> = (props: CardInterface) => {

    useEffect(()=>{
        props.getTodos()
        props.postTodos("Typescript")
        props.postTodos("Styled Component")
    }, [])

    return(
        <div>
            <Presentation post={props.postTodos}  editData={props.editData} closeF={props.closePressed} textData={props.textData} data={props.data} addItem={()=> props.setShowForm(true)} editItem={props.editItem} showForm={props.showForm} updateEditText={(evt:any)=>props.setEditData(evt.target.value)} setText={(evt:any)=> props.setTextData(evt.target.value)}/>
        </div>
    )

}
export default Card;
