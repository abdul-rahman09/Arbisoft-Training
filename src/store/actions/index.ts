import { Dispatch } from "redux";
import {
  TODO_REQ,
  TODO_REQ_SUCCESS,
  POST_TODO_REQ_RESET,
  POST_TODO_REQ,
  POST_TODO_REQ_SUCCESS,
} from "store/types";
import { TodoItem, TODO_STATUS, EDIT_STATUS } from "components/models";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

let item1: TodoItem = {
  id: 1,
  text: "ABC",
  showEdit: EDIT_STATUS.No,
  state: TODO_STATUS.PENDING,
};
let item3: TodoItem = {
  id: 2,
  text: "ABC DONE",
  showEdit: EDIT_STATUS.No,
  state: TODO_STATUS.DONE,
};

export const login2 = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: Dispatch): Promise<void> => {
    return new Promise<void>((resolve) => {
      // dispatch(isFetching(true))
      console.log("Login in progress");
      // Fake async process
    });
  };
};
export const login = (
  username: string,
  password: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(login2());
      console.log("Login in progress");
      // Fake async process
      setTimeout(() => {
        // set
        setTimeout(() => {
          console.log("Login done");
          resolve();
        }, 1000);
      }, 3000);
    });
  };
};
export const TODO_ITEMS_DATA: Array<TodoItem> = [item1, item3];
export const getTodos = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: TODO_REQ });
    // dispatch(login2());
    setTimeout(() => {
      dispatch({ type: TODO_REQ_SUCCESS });
    }, 2000);
  };
};
export const postTodos = (
  data: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const item = {
      id: Math.floor(Math.random() * 1000) + 3,
      text: data,
      showEdit: EDIT_STATUS.No,
      state: TODO_STATUS.PENDING,
    };
    dispatch({ type: POST_TODO_REQ });
    setTimeout(() => {
      TODO_ITEMS_DATA.push(item);
      dispatch({ type: POST_TODO_REQ_SUCCESS, payload: data });
      dispatch(getTodos());
      dispatch({ type: POST_TODO_REQ_RESET });
    }, 100);
  };
};
export const postDone = (
  data: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const item = {
      id: Math.floor(Math.random() * 1000) + 3,
      text: data,
      showEdit: EDIT_STATUS.No,
      state: TODO_STATUS.DONE,
    };
    dispatch({ type: POST_TODO_REQ_SUCCESS, payload: data });
    setTimeout(() => {
      TODO_ITEMS_DATA.push(item);
      dispatch({ type: POST_TODO_REQ_SUCCESS, payload: data });
      dispatch(getTodos());
      dispatch({ type: POST_TODO_REQ_RESET });
    }, 100);
  };
};
export const showEditItemTodo = (
  data: TodoItem
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    for (let i = 0; i < TODO_ITEMS_DATA.length; i++) {
      if (TODO_ITEMS_DATA[i].id == data.id) {
        TODO_ITEMS_DATA[i].showEdit = EDIT_STATUS.Yes;
      } else {
        TODO_ITEMS_DATA[i].showEdit = EDIT_STATUS.No;
      }
    }
    dispatch(getTodos());
  };
};
export const saveEditItemTodo = (
  data: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    for (let i = 0; i < TODO_ITEMS_DATA.length; i++) {
      if (TODO_ITEMS_DATA[i].showEdit == EDIT_STATUS.Yes) {
        TODO_ITEMS_DATA[i]["text"] = data;
        TODO_ITEMS_DATA[i].showEdit = EDIT_STATUS.No;
      }
    }
    dispatch(getTodos());
  };
};
export const closePressedTodo = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    for (let i = 0; i < TODO_ITEMS_DATA.length; i++) {
      if (TODO_ITEMS_DATA[i].showEdit == EDIT_STATUS.Yes) {
        TODO_ITEMS_DATA[i].showEdit = EDIT_STATUS.No;
      }
    }
    dispatch(getTodos());
  };
};
