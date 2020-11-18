import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getDOINGs, postDOINGs} from "redux2/actions/index"
import Presentation from "components/AddPresentation";
import { RootState} from "redux2/index"

function AddCard(props:any) {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState)  => state.doing)
    const newItem = useSelector((state: RootState)  => state.postDoing)
    const [editData, setEditData] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [textData, setTextData] = useState("");

    useEffect(()=>{
        dispatch(getDOINGs())
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
    const editItem = (id: number) =>{
        console.log(`EDIT ITEM NUMBER ${id}` )
    }

    const setText = (evt:any) =>{
        setTextData(evt.target.value)

    }

    const close = () => {
        setShowForm(false)
    }
    const updateEditText = (evt:any)=> {
        setEditData(evt.target.value)
    }

    return(
        <div>
            <Presentation post={()=> console.log("post")} editData={editData} updateEditText={updateEditText} closeF={close} textData={textData} data={todos.data} addItem={addItem} editItem={(item)=> console.log(item)} showForm={showForm} setText={setText}/>
        </div>
    )

}

export default AddCard;
