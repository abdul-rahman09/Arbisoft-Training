import{LOADING, TODO_REQ, TODO_REQ_SUCCESS, POST_TODO_REQ_RESET, POST_TODO_REQ, POST_TODO_REQ_SUCCESS,
    DONE_REQ, DONE_REQ_SUCCESS, POST_DONE_REQ_RESET, POST_DONE_REQ, POST_DONE_REQ_SUCCESS, SHOW_FORM_FALSE, SHOW_FORM_TRUE,
TEXT_DATA_CHANGE, TEXT_DATA_RESET, EDIT_DATA_CHANGE, SHOW_FORM_FALSE_DONE, SHOW_FORM_TRUE_DONE, TEXT_DATA_CHANGE_DONE,
EDIT_DATA_CHANGE_DONE} from "store/types";
import {TodoItem} from "../../components/models"
let item1:TodoItem = {id:1,text:"ABC", showEdit: false}
let item2:TodoItem = {id:4,text:"Working on App", showEdit: false}
export const TODO_ITEMS_DATA:Array<TodoItem> = [item1]
export const DONE_ITEMS_DATA:Array<TodoItem> = [item2]
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
            dispatch(setShowFormTodo(false))
            dispatch(setEditDataTodo(""))
            dispatch(setTextDataTodo(""))
        },
        100)
    }
}

export function getDONE_REQ(){
    return {
        type:DONE_REQ
    }
}
export function getDONE_REQ_SUCCESS(){
    return {
        type:DONE_REQ_SUCCESS
    }
}

export function getDone(){
    return function(dispatch:any){
        dispatch(getDONE_REQ())
        setTimeout(()=>{
            dispatch(getDONE_REQ_SUCCESS())
        },
        2000)
    }
}
export function postDONE_REQ_SUCCESS(data:any){
    return {
        type:POST_DONE_REQ_SUCCESS,
        payload: data
    }
}

export function postDONE_REQ(){
    return {
        type:POST_DONE_REQ,
    }
}
export function postDONE_REQ_RESET(){
    return {
        type:POST_DONE_REQ_RESET,
    }
}
export function postDone(data:string){
    const item = {
        id:Math.floor(Math.random()*1000)+3, 
        text: data, 
        showEdit: false
    }

    return function(dispatch:any){
        dispatch(postDONE_REQ())
        setTimeout(()=>{
            DONE_ITEMS_DATA.push(item)
            dispatch(postDONE_REQ_SUCCESS(data))
            dispatch(getDone())
            dispatch(postDONE_REQ_RESET())
            dispatch(setShowFormDone(false))
            dispatch(setEditDataDone(""))
            dispatch(setTextDataDone(""))
        },
        100)
    }
}

export function showEditItem_REQ_RESET(){
    return {
        type: "POST_DONE_REQ_RESET",
    }
}
export function showEditItemTodo(data:any){
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
export function showEditItemDone(data:any){
    return function(dispatch:any){
        for(let i=0;i<TODO_ITEMS_DATA.length;i++){
            if(DONE_ITEMS_DATA[i].id == data){
                DONE_ITEMS_DATA[i]['showEdit'] = true
            }
            else{
                DONE_ITEMS_DATA[i]['showEdit'] = false
            }
        }
        dispatch(getDone())
    }
}

export function saveEditItemTodo(data:any){
    return function(dispatch:any){
        for(let i=0;i<TODO_ITEMS_DATA.length;i++){
            if(TODO_ITEMS_DATA[i].showEdit == true){
                TODO_ITEMS_DATA[i]['text'] = data
                TODO_ITEMS_DATA[i].showEdit = false
            }
        }
        dispatch(setEditDataTodo(""))
        dispatch(setTextDataTodo(""))
        dispatch(getTodos())
    }
}
export function saveEditItemDone(data:any){
    return function(dispatch:any){
        for(let i=0;i<DONE_ITEMS_DATA.length;i++){
            if(DONE_ITEMS_DATA[i].showEdit == true){
                DONE_ITEMS_DATA[i]['text'] = data
                DONE_ITEMS_DATA[i].showEdit = false
            }
        }
        dispatch(setEditDataDone(""))
        dispatch(setTextDataDone(""))
        dispatch(getDone())
    }
}
export function closePressedDone(){
    return function(dispatch:any){
        dispatch(setShowFormDone(false))
        for(let i=0;i<DONE_ITEMS_DATA.length;i++){
            if(DONE_ITEMS_DATA[i].showEdit == true){
                DONE_ITEMS_DATA[i].showEdit = false
            }
        }
        dispatch(setEditDataDone(""))
        dispatch(setTextDataDone(""))
        dispatch(getDone())
    }
}
export function closePressedTodo(){
    return function(dispatch:any){
        dispatch(setShowFormTodo(false))
        for(let i=0;i<TODO_ITEMS_DATA.length;i++){
            if(TODO_ITEMS_DATA[i].showEdit == true){
                TODO_ITEMS_DATA[i].showEdit = false
            }
        }
        dispatch(setEditDataTodo(""))
        dispatch(setTextDataTodo(""))
        dispatch(getTodos())
    }
}
export function setShowFormTodo(isShow){
    return function(dispatch:any){
        if(isShow){
            dispatch({type: SHOW_FORM_TRUE})
        }
        else{
            dispatch({type: SHOW_FORM_FALSE})
        }
    }
}
export function setShowFormDone(isShow){
    return function(dispatch:any){
        if(isShow){
            dispatch({type: SHOW_FORM_TRUE_DONE})
        }
        else{
            dispatch({type: SHOW_FORM_FALSE_DONE})
        }
    }
}

export function setTextDataTodo(data:string){
    return function(dispatch:any){
        dispatch({type: TEXT_DATA_CHANGE, payload: data})
    }
}
export function setTextDataDone(data:string){
    return function(dispatch:any){
        dispatch({type: TEXT_DATA_CHANGE_DONE, payload: data})
    }
}
export function setTextDataReset(){
    return function(dispatch:any){
        dispatch({type: TEXT_DATA_RESET})
    }
}
export function setEditDataTodo(data:string){
    return function(dispatch:any){
        dispatch({type: EDIT_DATA_CHANGE, payload: data})
    }
}
export function setEditDataDone(data:string){
    return function(dispatch:any){
        dispatch({type: EDIT_DATA_CHANGE_DONE, payload: data})
    }
}
export function editItemTodo(item:any){
    return function(dispatch:any){
        dispatch(showEditItemTodo(item.id))
        dispatch(setEditDataTodo(item.text))
    }
}
export function editItemDone(item:any){
    return function(dispatch:any){
        dispatch(showEditItemDone(item.id))
        dispatch(setEditDataDone(item.text))
    }
}
