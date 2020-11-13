import{LOADING, TODO_REQ, TODO_REQ_SUCCESS, POST_TODO_REQ_RESET, POST_TODO_REQ, POST_TODO_REQ_SUCCESS,
    DOING_REQ, DOING_REQ_SUCCESS, POST_DOING_REQ_RESET, POST_DOING_REQ, POST_DOING_REQ_SUCCESS}from"./types";
export const TODO_ITEMS_DATA = [{id:1,text:"ABC"}]
export const DOING_ITEMS_DATA = [{id:4,text:"Working on App"}]
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
export function postTodos(data:any){
    return function(dispatch:any){
        dispatch(postTODO_REQ())
        setTimeout(()=>{
            TODO_ITEMS_DATA.push(data)
            dispatch(postTODO_REQ_SUCCESS(data))
            dispatch(getTodos())
            dispatch(postTODO_REQ_RESET())
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
        },
        100)
    }
}
