import {
  POST_TODO_REQ,
  POST_TODO_REQ_SUCCESS,
  POST_TODO_REQ_ERR,
  POST_TODO_REQ_RESET,
} from "store/types";
const initialState = {
  loading: false,
  success: false,
  error: false,
  data: {},
};

const reducer = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case POST_TODO_REQ_RESET:
      return initialState;
    case POST_TODO_REQ:
      newState.loading = true;
      break;
    case POST_TODO_REQ_SUCCESS:
      newState.loading = false;
      newState.success = true;
      newState.data = action.payload;
      break;
    case POST_TODO_REQ_ERR:
      newState.loading = !state.loading;
      newState.error = true;
  }
  return newState;
};

export default reducer;
