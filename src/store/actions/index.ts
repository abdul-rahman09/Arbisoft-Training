import { Dispatch } from "redux";
import {
  TODO_REQ,
  TODO_REQ_SUCCESS,
  POST_TODO_REQ_RESET,
  POST_TODO_REQ,
  POST_TODO_REQ_SUCCESS,
} from "store/types";
import { TodoItem, TODO_STATUS } from "components/models";

let item1: TodoItem = {
  id: 1,
  text: "ABC",
  showEdit: false,
  state: TODO_STATUS.PENDING,
};
let item3: TodoItem = {
  id: 2,
  text: "ABC DONE",
  showEdit: false,
  state: TODO_STATUS.DONE,
};
export const TODO_ITEMS_DATA: Array<TodoItem> = [item1, item3];
export function getTodos() {
  return function (dispatch: Dispatch) {
    dispatch({ type: TODO_REQ });
    setTimeout(() => {
      dispatch({ type: TODO_REQ_SUCCESS });
    }, 2000);
  };
}
export function postTodos(data: string) {
  const item = {
    id: Math.floor(Math.random() * 1000) + 3,
    text: data,
    showEdit: false,
    state: TODO_STATUS.PENDING,
  };

  return function (dispatch: Dispatch) {
    dispatch({ type: POST_TODO_REQ });
    setTimeout(() => {
      TODO_ITEMS_DATA.push(item);
      dispatch({ type: POST_TODO_REQ_SUCCESS, payload: data });
      dispatch(getTodos() as any);
      dispatch({ type: POST_TODO_REQ_RESET });
    }, 100);
  };
}
export function postDone(data: string) {
  const item = {
    id: Math.floor(Math.random() * 1000) + 3,
    text: data,
    showEdit: false,
    state: TODO_STATUS.DONE,
  };

  return function (dispatch: Dispatch) {
    dispatch({ type: POST_TODO_REQ_SUCCESS, payload: data });
    setTimeout(() => {
      TODO_ITEMS_DATA.push(item);
      dispatch({ type: POST_TODO_REQ_SUCCESS, payload: data });
      dispatch(getTodos() as any);
      dispatch({ type: POST_TODO_REQ_RESET });
    }, 100);
  };
}
export function showEditItemTodo(data: TodoItem) {
  return function (dispatch: Dispatch) {
    for (let i = 0; i < TODO_ITEMS_DATA.length; i++) {
      if (TODO_ITEMS_DATA[i].id == data.id) {
        TODO_ITEMS_DATA[i]["showEdit"] = true;
      } else {
        TODO_ITEMS_DATA[i]["showEdit"] = false;
      }
    }
    dispatch(getTodos() as any);
  };
}
export function saveEditItemTodo(data: string) {
  console.log("Save", data);
  return function (dispatch: Dispatch) {
    for (let i = 0; i < TODO_ITEMS_DATA.length; i++) {
      if (TODO_ITEMS_DATA[i].showEdit == true) {
        TODO_ITEMS_DATA[i]["text"] = data;
        TODO_ITEMS_DATA[i].showEdit = false;
      }
    }
    dispatch(getTodos() as any);
  };
}
export function closePressedTodo() {
  return function (dispatch: Dispatch) {
    for (let i = 0; i < TODO_ITEMS_DATA.length; i++) {
      if (TODO_ITEMS_DATA[i].showEdit == true) {
        TODO_ITEMS_DATA[i].showEdit = false;
        console.log("edit item close pressed");
      }
    }
    dispatch(getTodos() as any);
  };
}
