import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getTodos, postTodos, showEditItem, saveEditItem, closePressed} from "../redux/actions/index"
import Presentation from "./AddPresentation";
// import {TodoItem} from "src/components/models"

function AddCard(props:any) {
    const [todos, setTodos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [textData, setTextData] = useState("");
    const [editData, setEditData] = useState("");

    useEffect(()=>{
        props.getTodos()
        props.postTodos({id:2, text: "Typescript", showEdit: false})
        props.postTodos({id:3, text: "Styled Component", showEdit: false})
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
        // console.log(`EDIT ITEM NUMBER ${id}`)
        props.showEditItem(item.id)
        setEditData(item.text)
    }

    const setText = (evt:any) =>{
        setTextData(evt.target.value)
    }

    const updateEditText = (evt:any)=> {
        console.log("evt", evt.target.value)
        setEditData(evt.target.value)
    }

    const updateItem = () => {
        console.log("update item", editData)
        props.saveEditItem(editData)
    }

    const addNewItem = () =>{
        const id:number = Math.floor(Math.random()*1000)+3
        props.postTodos({id:id, text: textData, showEdit: false})

    }

    const close = () => {
        console.log("CLOSE PRESSED")
        setShowForm(false)
        props.closePressed()
    }
    
    return(
        <div>
            <Presentation  editData={editData} closeF={close} textData={textData} updateItem={updateItem} data={todos} addItem={addItem} editItem={editItem} showForm={showForm} updateEditText={updateEditText} setText={setText} addNewItem={addNewItem}/>
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
