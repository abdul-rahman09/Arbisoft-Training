import { combineReducers } from 'redux'
import TodoReducer from "store/reducer/TodoReducer"
import Doing from "store/reducer/DoingReducer"
import PostTodoReducer from "store/reducer/postTodoReducer"
import postDoingReducer from "store/reducer/postDoingReducer"
import showFormReducer from "store/reducer/showFormReducer"
import textData from "store/reducer/textDataReducer"
import editData from "store/reducer/editDataReducer"

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