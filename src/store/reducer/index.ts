import { combineReducers } from "redux";
import TodoReducer from "store/reducer/TodoReducer";
import Done from "store/reducer/DoneReducer";
import PostTodoReducer from "store/reducer/postTodoReducer";
import postDoneReducer from "store/reducer/postDoneReducer";
import showFormReducer from "store/reducer/showFormReducer";
import textData from "store/reducer/textDataReducer";
import editData from "store/reducer/editDataReducer";
import showFormDoneReducer from "store/reducer/showFormDoneReducer";
import textDataDone from "store/reducer/textDataDoneReducer";
import editDataDone from "store/reducer/editDataDoneReducer";

const rootReducer = combineReducers({
  todos: TodoReducer,
  done: Done,
  postTodo: PostTodoReducer,
  postDoing: postDoneReducer,
  showForm: showFormReducer,
  textData,
  editData,
  showFormDone: showFormDoneReducer,
  textDataDone,
  editDataDone,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

enum TODO_STATUS {
  DONE,
  PENDING,
}

const app = {
  showTodoForm: false,
};

const todo = {
  loading: false,
  error: "",
  current: {
    id: "",
    title: "",
    state: TODO_STATUS.PENDING,
  },
  list: [
    {
      title: "",
      state: TODO_STATUS.PENDING,
    },
  ],
};
