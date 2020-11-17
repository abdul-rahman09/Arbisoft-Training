import { combineReducers } from 'redux'
import TodoReducer from "./TodoReducer"
import Doing from "./DoingReducer"
import PostTodoReducer from "./postTodoReducer"
import postDoingReducer from "./postDoingReducer"

const rootReducer =  combineReducers({
    todos: TodoReducer,
    doing: Doing,
    postTodo: PostTodoReducer,
    postDoing:postDoingReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;