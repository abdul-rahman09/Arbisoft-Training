import {connect} from "react-redux"
import {getTodos, postTodos, closePressedTodo, editItemTodo, saveEditItemTodo} from "store/actions/index"
import { RootState} from "store/reducer/index"
import { TODO_STATUS} from "components/models"
import Card from "components/Card"


const stateToProps = (state:RootState) =>{
    return{
      title: "Todo",
      todos: state.todos.data.filter(item => item.state == TODO_STATUS.PENDING),

    } 
  }
  const mapDispatchToProps = {
      getData: getTodos,
      postData: postTodos,
      closePressed: closePressedTodo,
      editItem: editItemTodo,
      saveEditItem: saveEditItemTodo
  }
  export default connect(stateToProps, mapDispatchToProps)(Card);
