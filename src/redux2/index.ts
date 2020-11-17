import { combineReducers } from 'redux'
import TodoReducer from "./TodoReducer"
import Doing from "./DoingReducer"
import PostTodoReducer from "./postTodoReducer"
import postDoingReducer from "./postDoingReducer"
import showFormReducer from "./showFormReducer"
import textData from "./textDataReducer"
import editData from "./editDataReducer"

const rootReducer =  combineReducers({
    todos: TodoReducer,
    doing: Doing,
    postTodo: PostTodoReducer,
    postDoing:postDoingReducer,
    showForm: showFormReducer,
    textData,
    editData
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;