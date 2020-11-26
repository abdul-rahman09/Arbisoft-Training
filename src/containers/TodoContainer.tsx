import { connect } from "react-redux";
import {
  postDone,
  closePressedTodo,
  showEditItemTodo,
  saveEditItemTodo,
} from "store/actions/index";
import { RootState } from "store/reducer/index";
import TodoComponent from "components/TodoComponent";

const stateToProps = (state: RootState, props: any) => {
  return {
    item: { ...props.item },
    setData: props.setData,
  };
};
const mapDispatchToProps = {
  postData: postDone,
  closePressed: closePressedTodo,
  editItem: showEditItemTodo,
  saveEditItem: saveEditItemTodo,
};
export default connect(stateToProps, mapDispatchToProps)(TodoComponent);
