import { connect } from "react-redux";
import { getTodos, postDone, closePressedTodo } from "store/actions/index";
import { RootState } from "store/reducer/index";
import Card from "components/Card";
import { todosWithDone } from "selectors";

const stateToProps = (state: RootState) => {
  return {
    title: "Done",
    todos: todosWithDone(state),
  };
};
const mapDispatchToProps = {
  getData: getTodos,
  postData: postDone,
  closePressed: closePressedTodo,
};
export default connect(stateToProps, mapDispatchToProps)(Card);
