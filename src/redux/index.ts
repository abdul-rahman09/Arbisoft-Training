import { combineReducers } from 'redux'
import TodoReducer from "./TodoReducer"
// import {LOADING} from "./actions/types"
// const initialState={
//     loading: false,
//     age: 20
// }


// const reducer = (state = initialState, action:any) => {
//     const newState = { ...state };
//     switch (action.type) {
//       case "AGE_UP":
//         newState.age += action.value;
//         newState.loading = false;
//         break;
  
//       case "AGE_DOWN":
//         newState.age -= action.value;
//         newState.loading = false;
//         break;
//       case "LOADING":
//         newState.loading = !state.loading;
//     }
//     return newState;
//   };
  
import combinereducer from "redux"
export default combineReducers({
    todos: TodoReducer,
})