import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getTodos} from "../redux/actions/index"
import Presentation from "./AddPresentation";
import {TodoItem} from "./models"

function AddCard(props:any) {
    const [todos, setTodos] = useState([]);
    const [showForm, setShowForm] = useState(true);

    useEffect(()=>{
        props.getTodos()
    }, [])

    useEffect(()=>{
        if(props.todos.success){
            setTodos(props.todos.data)
        }
    }, [props.todos])

    const addItem = () =>{
        console.log("ADD ITEM CLICKED")
    }
    const editItem = (id: number) =>{
        console.log(`EDIT ITEM NUMBER ${id}` )
    }

    const setText = () =>{
        console.log(`set Text` )
    }


    
    return(
        <div>
            <Presentation data={todos} addItem={addItem} editItem={editItem} showForm={showForm} setText={setText}/>
        </div>
    )

}

const stateToProps = (state:any) =>{
  return{
    todos: state.todos
  } 
}
const mapDispatchToProps = {
    getTodos
}
export default connect(stateToProps, mapDispatchToProps)(AddCard);
