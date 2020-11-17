import{LOADING, TODO_REQ, TODO_REQ_SUCCESS, POST_TODO_REQ_RESET, POST_TODO_REQ, POST_TODO_REQ_SUCCESS,
    DOING_REQ, DOING_REQ_SUCCESS, POST_DOING_REQ_RESET, POST_DOING_REQ, POST_DOING_REQ_SUCCESS, SHOW_FORM_FALSE, SHOW_FORM_TRUE,
TEXT_DATA_CHANGE, TEXT_DATA_RESET, EDIT_DATA_CHANGE, EDIT_DATA_RESET}from"./types";
import {TodoItem} from "../../components/models"
let item1:TodoItem = {id:1,text:"ABC", showEdit: false}
let item2:TodoItem = {id:4,text:"Working on App", showEdit: false}
export const TODO_ITEMS_DATA:Array<TodoItem> = [item1]
export const DOING_ITEMS_DATA:Array<TodoItem> = [item2]
export function loadingPureFunction(){
    return {
        type:LOADING
    }
}

export function AsyncLoading(){
    return function(dispatch:any){
        setTimeout(()=>{
            dispatch(loadingPureFunction())
        },
        2000)
    }
}
export function getTODO_REQ(){
    return {
        type:TODO_REQ
    }
}
export function getTODO_REQ_SUCCESS(){
    return {
        type:TODO_REQ_SUCCESS
    }
}

export function getTodos(){
    return function(dispatch:any){
        dispatch(getTODO_REQ())
        setTimeout(()=>{
            dispatch(getTODO_REQ_SUCCESS())
        },
        2000)
    }
}
export function postTODO_REQ_SUCCESS(data:any){
    return {
        type:POST_TODO_REQ_SUCCESS,
        payload: data
    }
}

export function postTODO_REQ(){
    return {
        type:POST_TODO_REQ,
    }
}
export function postTODO_REQ_RESET(){
    return {
        type:POST_TODO_REQ_RESET,
    }
}
export function postTodos(data:string){
    const item = {
        id:Math.floor(Math.random()*1000)+3, 
        text: data, 
        showEdit: false
    }

    return function(dispatch:any){
        dispatch(postTODO_REQ())
        setTimeout(()=>{
            TODO_ITEMS_DATA.push(item)
            dispatch(postTODO_REQ_SUCCESS(data))
            dispatch(getTodos())
            dispatch(postTODO_REQ_RESET())
            dispatch(setShowForm(false))
            dispatch(setEditData(""))
            dispatch(setTextData(""))
        },
        100)
    }
}

export function getDOING_REQ(){
    return {
        type:DOING_REQ
    }
}
export function getDOING_REQ_SUCCESS(){
    return {
        type:DOING_REQ_SUCCESS
    }
}

export function getDOINGs(){
    return function(dispatch:any){
        dispatch(getDOING_REQ())
        setTimeout(()=>{
            dispatch(getDOING_REQ_SUCCESS())
        },
        2000)
    }
}
export function postDOING_REQ_SUCCESS(data:any){
    return {
        type:POST_DOING_REQ_SUCCESS,
        payload: data
    }
}

export function postDOING_REQ(){
    return {
        type:POST_DOING_REQ,
    }
}
export function postDOING_REQ_RESET(){
    return {
        type:POST_DOING_REQ_RESET,
    }
}
export function postDOINGs(data:any){
    return function(dispatch:any){
        dispatch(postDOING_REQ())
        setTimeout(()=>{
            DOING_ITEMS_DATA.push(data)
            dispatch(postDOING_REQ_SUCCESS(data))
            dispatch(getDOINGs())
            dispatch(postDOING_REQ_RESET())
            dispatch(setEditData(""))
            dispatch(setTextData(""))
        },
        100)
    }
}

export function showEditItem_REQ_RESET(){
    return {
        type: "POST_DOING_REQ_RESET",
    }
}
export function showEditItem(data:any){
    return function(dispatch:any){
        for(let i=0;i<TODO_ITEMS_DATA.length;i++){
            if(TODO_ITEMS_DATA[i].id == data){
                TODO_ITEMS_DATA[i]['showEdit'] = true
            }
            else{
                TODO_ITEMS_DATA[i]['showEdit'] = false
            }
        }
        dispatch(getTodos())
    }
}

export function saveEditItem(data:any){
    console.log("Data", data)
    return function(dispatch:any){
        for(let i=0;i<TODO_ITEMS_DATA.length;i++){
            if(TODO_ITEMS_DATA[i].showEdit == true){
                TODO_ITEMS_DATA[i]['text'] = data
                TODO_ITEMS_DATA[i].showEdit = false
            }
        }
        dispatch(setEditData(""))
        dispatch(setTextData(""))
        dispatch(getTodos())
    }
}
export function closePressed(){
    return function(dispatch:any){
        dispatch(setShowForm(false))
        for(let i=0;i<TODO_ITEMS_DATA.length;i++){
            if(TODO_ITEMS_DATA[i].showEdit == true){
                TODO_ITEMS_DATA[i].showEdit = false
            }
        }
        dispatch(setEditData(""))
        dispatch(setTextData(""))
        dispatch(getTodos())
    }
}
export function setShowForm(isShow){
    return function(dispatch:any){
        if(isShow){
            dispatch({type: SHOW_FORM_TRUE})
        }
        else{
            dispatch({type: SHOW_FORM_FALSE})
        }
    }
}
export function setTextData(data:string){
    return function(dispatch:any){
        dispatch({type: TEXT_DATA_CHANGE, payload: data})
    }
}
export function setTextDataReset(){
    return function(dispatch:any){
        dispatch({type: TEXT_DATA_RESET})
    }
}
export function setEditData(data:string){
    return function(dispatch:any){
        dispatch({type: EDIT_DATA_CHANGE, payload: data})
    }
}
export function editItem(item:any){
    return function(dispatch:any){
        dispatch(showEditItem(item.id))
        dispatch(setEditData(item.text))
    }
}
