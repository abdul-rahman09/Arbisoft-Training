import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getTodos, postTodos, showEditItem, saveEditItem, closePressed} from "../redux2/actions/index"
// import {getTodos, postTodos, showEditItem, saveEditItem, closePressed} from "redux_path/actions/index"

import Presentation from "./AddPresentation";
// import {TodoItem} from "src/components/models"

function AddCard(props:any) {
    const [todos, setTodos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [textData, setTextData] = useState("");
    const [editData, setEditData] = useState("");

    useEffect(()=>{
        props.getTodos()
        props.postTodos("Typescript")
        props.postTodos("Styled Component")
    }, [])

    useEffect(()=>{
        if(props.todos.success){
            setTodos(props.todos.data)
        }
    }, [props.todos])


    useEffect(()=>{
        if(props.newItem.success){
            setTextData("")
            setShowForm(false)
        }
    }, [props.newItem])

    const addItem = () =>{
        setShowForm(true)

    }
    const editItem = (item: any) =>{
        props.showEditItem(item.id)
        setEditData(item.text)
    }

    const setText = (evt:any) =>{
        setTextData(evt.target.value)
    }

    const updateEditText = (evt:any)=> {
        setEditData(evt.target.value)
    }

    // const updateItem = () => {
    //     console.log("update item", editData)
    //     props.saveEditItem(editData)
    // }

    // const addNewItem = () =>{
    //     const id:number = Math.floor(Math.random()*1000)+3
    //     props.postTodos({id:id, text: textData, showEdit: false})

    // }

    const close = () => {
        setShowForm(false)
        props.closePressed()
    }
    
    return(
        <div>
            <Presentation  editData={editData} closeF={close} textData={textData} data={todos} addItem={addItem} editItem={editItem} showForm={showForm} updateEditText={updateEditText} setText={setText}/>
        </div>
    )

}

const stateToProps = (state:any) =>{
  return{
    todos: state.todos,
    newItem: state.postTodo
  } 
}
const mapDispatchToProps = {
    getTodos,
    postTodos,
    showEditItem,
    saveEditItem,
    closePressed
}
export default connect(stateToProps, mapDispatchToProps)(AddCard);
