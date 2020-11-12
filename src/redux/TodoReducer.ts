import {TODO_REQ, TODO_REQ_SUCCESS, TODO_REQ_ERR} from "./actions/types"
const initialState={
    loading: false,
    success: false,
    error: false,
    data: [{id:1, text: "Typescript"}, {id:2, text: "Styled Component"}]
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
        break;
      case TODO_REQ_ERR:
        newState.loading = !state.loading;
        newState.error = true
    }
    return newState;
  };
  
  export default reducer;