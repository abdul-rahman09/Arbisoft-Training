import {connect} from "react-redux"
import {getTodos, postTodos, showEditItemTodo, closePressedTodo, setShowFormTodo, setTextDataTodo, setEditDataTodo, editItemTodo, saveEditItemTodo} from "store/actions/index"
import { RootState} from "store/reducer/index"
import Card from "components/Card"


const stateToProps = (state:RootState) =>{
    return{
      title: "Todo",
      data: state.todos.data,
      newItem: state.postTodo,
      showForm: state.showForm,
      textData: state.textData,
      editData: state.editData

    } 
  }
  const mapDispatchToProps = {
      getData: getTodos,
      postData: postTodos,
      showEditItem: showEditItemTodo,
      closePressed: closePressedTodo,
      setShowForm: setShowFormTodo,
      setTextData: setTextDataTodo,
      setEditData:  setEditDataTodo,
      editItem: editItemTodo,
      saveEditItem: saveEditItemTodo
  }
  export default connect(stateToProps, mapDispatchToProps)(Card);
  