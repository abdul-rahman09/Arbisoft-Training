import {SHOW_FORM_FALSE_DONE, SHOW_FORM_TRUE_DONE} from "store/types"
const initialState:boolean = false


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case SHOW_FORM_TRUE_DONE:
        return true
      case SHOW_FORM_FALSE_DONE:
        return false
    }
    return state;
  };
  
  export default reducer;
  