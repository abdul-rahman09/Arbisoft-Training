import {EDIT_DATA_RESET_DONE, EDIT_DATA_CHANGE_DONE} from "store/types"
const initialState:string = ""


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case EDIT_DATA_CHANGE_DONE:
        return action.payload
      case EDIT_DATA_RESET_DONE:
        return ""
    }
    return state;
  };
  
  export default reducer;
  