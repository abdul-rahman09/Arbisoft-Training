import {TEXT_DATA_RESET, TEXT_DATA_CHANGE} from "./actions/types"
const initialState:string = ""


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case TEXT_DATA_CHANGE:
        return action.payload
      case TEXT_DATA_RESET:
        return ""
    }
    return state;
  };
  
  export default reducer;
  