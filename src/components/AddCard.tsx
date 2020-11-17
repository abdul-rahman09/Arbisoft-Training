import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getTodos, postTodos, showEditItem, closePressed} from "../redux2/actions/index"
import { RootState} from "../redux2/index"
// import {getTodos, postTodos, showEditItem, saveEditItem, closePressed} from "redux_path/actions/index"

import Presentation from "./AddPresentation";
// import {TodoItem} from "src/components/models"

function AddCard() {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState)  => state.todos)
    const newItem = useSelector((state: RootState)  => state.postTodo)
    const [showForm, setShowForm] = useState(false);
    const [textData, setTextData] = useState("");
    const [editData, setEditData] = useState("");

    useEffect(()=>{
        dispatch(getTodos())
        dispatch(postTodos("Typescript"))
        dispatch(postTodos("Styled Component"))
    }, [])

    useEffect(()=>{
        if(newItem.success){
            setTextData("")
            setShowForm(false)
        }
    }, [newItem])

    const addItem = () =>{
        setShowForm(true)

    }
    const editItem = (item: any) =>{
        dispatch(showEditItem(item.id))
        setEditData(item.text)
    }

    const setText = (evt:any) =>{
        setTextData(evt.target.value)
    }

    const updateEditText = (evt:any)=> {
        setEditData(evt.target.value)
    }

    const close = () => {
        setShowForm(false)
        dispatch(closePressed())
    }
    
    return(
        <div>
            <Presentation  editData={editData} closeF={close} textData={textData} data={todos.data} addItem={addItem} editItem={editItem} showForm={showForm} updateEditText={updateEditText} setText={setText}/>
        </div>
    )

}
export default AddCard;
