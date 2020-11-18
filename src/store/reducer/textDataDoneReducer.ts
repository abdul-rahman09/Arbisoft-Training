import {TEXT_DATA_RESET_DONE, TEXT_DATA_CHANGE_DONE} from "store/types"
const initialState:string = ""


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case TEXT_DATA_CHANGE_DONE:
        return action.payload
      case TEXT_DATA_RESET_DONE:
        return ""
    }
    return state;
  };
  
  export default reducer;
