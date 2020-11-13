import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getTodos, postTodos} from "../redux/actions/index"
import Presentation from "./AddPresentation";
import {TodoItem} from "./models"

function AddCard(props:any) {
    const [todos, setTodos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [textData, setTextData] = useState("");

    useEffect(()=>{
        props.getTodos()
        props.postTodos({id:2, text: "Typescript"})
        props.postTodos({id:3, text: "Styled Component"})
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
    const editItem = (id: number) =>{
        console.log(`EDIT ITEM NUMBER ${id}` )
    }

    const setText = (evt:any) =>{
        setTextData(evt.target.value)

    }

    const addNewItem = () =>{
        const id:number = Math.floor(Math.random()*1000)+3
        props.postTodos({id:id, text: textData})

    }
    
    return(
        <div>
            <Presentation textData={textData} data={todos} addItem={addItem} editItem={editItem} showForm={showForm} setText={setText} addNewItem={addNewItem}/>
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
}
export default connect(stateToProps, mapDispatchToProps)(AddCard);
