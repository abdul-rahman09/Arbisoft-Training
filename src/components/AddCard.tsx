import React, {useState, useEffect} from 'react';
import Presentation from "./AddPresentation";
import {TodoItem} from "components/models"

function AddCard(props: {data: Array<TodoItem>, newItem: any, getTodos: Function, postTodos: Function, showEditItem: Function, closePressed: Function, setShowForm: Function, showForm: boolean,
                        setTextData: Function, textData:string, editData:string, setEditData:Function, editItem:Function}) {

    useEffect(()=>{
        props.getTodos()
        props.postTodos("Typescript")
        props.postTodos("Styled Component")
    }, [])

    return(
        <div>
            <Presentation  editData={props.editData} closeF={props.closePressed} textData={props.textData} data={props.data} addItem={()=> props.setShowForm(true)} editItem={(item)=>props.editItem(item)} showForm={props.showForm} updateEditText={(evt:any)=>props.setEditData(evt.target.value)} setText={(evt:any)=> props.setTextData(evt.target.value)}/>
        </div>
    )

}
export default AddCard;
