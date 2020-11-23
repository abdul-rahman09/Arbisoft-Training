import {connect} from "react-redux"
import {getTodos, postDone, closePressedTodo, editItemTodo, saveEditItemTodo} from "store/actions/index"
import { TODO_STATUS} from "components/models"
import { RootState} from "store/reducer/index"
import Card from "components/Card"


const stateToProps = (state:RootState) =>{
    return{
      title: "Done",
      todos: state.todos.data.filter(item => item.state == TODO_STATUS.DONE),
    } 
  }
  const mapDispatchToProps = {
      getData: getTodos,
      postData: postDone,
      closePressed: closePressedTodo,
      editItem: editItemTodo,
      saveEditItem: saveEditItemTodo
  }
  export default connect(stateToProps, mapDispatchToProps)(Card);
