import {TODO_REQ, TODO_REQ_SUCCESS, TODO_REQ_ERR} from "./actions/types"
import { TODO_ITEMS_DATA} from "./actions/index"
import { TodoItem} from "../components/models"
const initialState={
    loading: false,
    success: false,
    error: false,
    data: Array<TodoItem>()
}


const reducer = (state = initialState, action:any) => {
    const newState = { ...state };
    switch (action.type) {
      case TODO_REQ:
        newState.loading = true;
        break;
      case TODO_REQ_SUCCESS:
        newState.loading = false;
        newState.success = true;
        newState.data = [...TODO_ITEMS_DATA]
        break;
      case TODO_REQ_ERR:
        newState.loading = !state.loading;
        newState.error = true
    }
    return newState;
  };
  
  export default reducer;