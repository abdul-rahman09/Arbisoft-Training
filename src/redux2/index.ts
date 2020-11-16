import { combineReducers } from 'redux'
import TodoReducer from "./TodoReducer"
import Doing from "./DoingReducer"
import PostTodoReducer from "./postTodoReducer"
import postDoingReducer from "./postDoingReducer"

export default combineReducers({
    todos: TodoReducer,
    doing: Doing,
    postTodo: PostTodoReducer,
    postDoing:postDoingReducer,
})
