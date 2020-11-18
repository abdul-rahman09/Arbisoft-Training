import {connect} from "react-redux"
import {getDone, postDone, showEditItemDone, closePressedDone, setShowFormDone, setTextDataDone, setEditDataDone, editItemDone, saveEditItemDone} from "store/actions/index"
import { RootState} from "store/reducer/index"
import Card from "components/Card"


const stateToProps = (state:RootState) =>{
    return{
      title: "Done",
      data: state.done.data,
      newItem: state.postTodo,
      showForm: state.showFormDone,
      textData: state.textDataDone,
      editData: state.editDataDone

    } 
  }
  const mapDispatchToProps = {
      getData: getDone,
      postData: postDone,
      showEditItem: showEditItemDone,
      closePressed: closePressedDone,
      setShowForm: setShowFormDone,
      setTextData: setTextDataDone,
      setEditData: setEditDataDone,
      editItem: editItemDone,
      saveEditItem: saveEditItemDone
  }
  export default connect(stateToProps, mapDispatchToProps)(Card);
