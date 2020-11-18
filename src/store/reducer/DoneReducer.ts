import {DONE_REQ, DONE_REQ_SUCCESS, DONE_REQ_ERR} from "store/types"
import { DONE_ITEMS_DATA} from "store/actions/index"
import {TodoItem} from "components/models"

const initialState = {
    loading: false,
    success: false,
    error: false,
    data: Array<TodoItem>()
}


const reducer = (state = initialState, action:any) => {
    const newState = { ...state };
    switch (action.type) {
      case DONE_REQ:
        newState.loading = true;
        break;
      case DONE_REQ_SUCCESS:
        newState.loading = false;
        newState.success = true;
        newState.data = [...DONE_ITEMS_DATA]
        break;
      case DONE_REQ_ERR:
        newState.loading = !state.loading;
        newState.error = true
    }
    return newState;
  };
  
  export default reducer;
