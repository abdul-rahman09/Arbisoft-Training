import { combineReducers } from "redux";
import TodoReducer from "store/reducer/TodoReducer";

const rootReducer = combineReducers({
  todos: TodoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
