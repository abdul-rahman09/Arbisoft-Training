import {EDIT_DATA_RESET, EDIT_DATA_CHANGE} from "store/types"
const initialState:string = ""


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case EDIT_DATA_CHANGE:
        return action.payload
      case EDIT_DATA_RESET:
        return ""
    }
    return state;
  };
  
  export default reducer;
