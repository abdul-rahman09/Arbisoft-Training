import{LOADING, TODO_REQ, TODO_REQ_SUCCESS, TODO_REQ_ERR}from"./types";

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