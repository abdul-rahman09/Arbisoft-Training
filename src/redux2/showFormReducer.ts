import {SHOW_FORM_FALSE, SHOW_FORM_TRUE} from "./actions/types"
const initialState:boolean = false


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case SHOW_FORM_TRUE:
        return true
      case SHOW_FORM_FALSE:
        return false
    }
    return state;
  };
  
  export default reducer;
  