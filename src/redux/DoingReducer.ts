import {DOING_REQ, DOING_REQ_SUCCESS, DOING_REQ_ERR} from "./actions/types"
import { DOING_ITEMS_DATA} from "./actions/index"
const initialState={
    loading: false,
    success: false,
    error: false,
    data: []
}


const reducer = (state = initialState, action:any) => {
    const newState = { ...state };
    switch (action.type) {
      case DOING_REQ:
        newState.loading = true;
        break;
      case DOING_REQ_SUCCESS:
        newState.loading = false;
        newState.success = true;
        newState.data = Object.assign(DOING_ITEMS_DATA)
        break;
      case DOING_REQ_ERR:
        newState.loading = !state.loading;
        newState.error = true
    }
    return newState;
  };
  
  export default reducer;